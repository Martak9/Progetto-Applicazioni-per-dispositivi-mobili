export const USE_PROXY = true;

export const URL_BASE = USE_PROXY ? 'api' : 'http://localhost:8080/piggybank/api';

export const URL = {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  LOGIN: URL_BASE + '/login',
  // eslint-disable-next-line @typescript-eslint/naming-convention
  LOGOUT: URL_BASE + '/logout',
  // eslint-disable-next-line @typescript-eslint/naming-convention
  UPDATE_PROFILO: URL_BASE + '/utente/updateprofilo',
};

export const X_AUTH = 'X-Auth';

export const AUTH_TOKEN = 'auth-token';

export const UTENTE_STORAGE = 'utente';

export const LINGUA = 'lingua';

