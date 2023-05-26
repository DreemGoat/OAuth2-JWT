import { useCallback, useState, useRef } from 'react';

const OAUTH_STATE_KEY = 'react-use-oauth2-state-key';
const POPUP_HEIGHT = 700;
const POPUP_WIDTH = 600;
const OAUTH_RESPONSE = 'react-use-oauth2-response';

const generateState = () => {
  const validChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let array = new Uint8Array(40);
  window.crypto.getRandomValues(array);
  array = array.map((x) => validChars.codePointAt(x % validChars.length));
  const randomState = String.fromCharCode.apply(null, array);
  return randomState;
};

const saveState = (state) => {
  sessionStorage.setItem(OAUTH_STATE_KEY, state);
};

const removeState = () => {
  sessionStorage.removeItem(OAUTH_STATE_KEY);
};

const openPopup = (url) => {
  const top = window.outerHeight / 2 + window.screenY - POPUP_HEIGHT / 2;
  const left = window.outerWidth / 2 + window.screenX - POPUP_WIDTH / 2;
  return window.open(
    url,
    'OAuth2 Popup',
    `height=${POPUP_HEIGHT},width=${POPUP_WIDTH},top=${top},left=${left}`
  );
};

const closePopup = (popupRef) => {
  popupRef.current?.close();
};

const cleanup = (intervalRef, popupRef, handleMessageListener) => {
  clearInterval(intervalRef.current);
  closePopup(popupRef);
  removeState();
  window.removeEventListener('message', handleMessageListener);
};

const enhanceAuthorizeUrl = (authorizeUrl, clientId, redirectUri, scope, state) => {
  return `${authorizeUrl}?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&state=${state}`;
};

const objectToQuery = (object) => {
  return new URLSearchParams(object).toString();
};

const formatExchangeCodeForTokenServerURL = (serverUrl, clientId, code, redirectUri) => {
  return `${serverUrl}?${objectToQuery({
    client_id: clientId,
    code,
    redirect_uri: redirectUri,
  })}`;
};

const useOAuth2 = (props) => {
  const { authorizeUrl, clientId, redirectUri, scope = '' } = props;

  const popupRef = useRef();
  const intervalRef = useRef();
  const [{ loading, error }, setUI] = useState({ loading: false, error: null });

  const getAuth = useCallback(() => {
    setUI({
      loading: true,
      error: null,
    });

    const state = generateState();
    saveState(state);

    popupRef.current = openPopup(enhanceAuthorizeUrl(authorizeUrl, clientId, redirectUri, scope, state));

    async function handleMessageListener(message) {
      try {
        const type = message?.data?.type;
        if (type === OAUTH_RESPONSE) {
          const errorMaybe = message?.data?.error;
          if (errorMaybe) {
            setUI({
              loading: false,
              error: errorMaybe || 'Unknown Error',
            });
          } else {
            const code = message?.data?.payload?.code;
            const response = await fetch(
              formatExchangeCodeForTokenServerURL('https://your-server.com/token', clientId, code, redirectUri)
            );
            if (!response.ok) {
              setUI({
                loading: false,
                error: 'Failed to exchange code for token',
              });
            } else {
              const payload = await response.json();
              setUI({
                loading: false,
                error: null,
              });
              // Set your data here
            }
          }
        }
      } catch (genericError) {
        console.error(genericError);
        setUI({
          loading: false,
          error: genericError.toString(),
        });
      } finally {
        cleanup(intervalRef, popupRef, handleMessageListener);
      }
    }

    window.addEventListener('message', handleMessageListener);

    intervalRef.current = setInterval(() => {
      const popupClosed = !popupRef.current || !popupRef.current.window || popupRef.current.window.closed;
      if (popupClosed) {
        setUI((ui) => ({
          ...ui,
          loading: false,
        }));
        console.warn('Warning: Popup was closed before completing authentication.');
        clearInterval(intervalRef.current);
        removeState();
        window.removeEventListener('message', handleMessageListener);
      }
    }, 250);

    return () => {
      window.removeEventListener('message', handleMessageListener);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [authorizeUrl, clientId, redirectUri, scope]);

  return { loading, error, getAuth };
};

export default useOAuth2;
