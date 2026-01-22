/**
 * Auth Model
 * Normalizes auth responses
 * File: auth.model.js
 */

const normalizeAuthUser = (value) => {
  if (!value || typeof value !== 'object') return null;
  const { id = null, ...rest } = value;
  return { id, ...rest };
};

const normalizeAuthTokens = (value) => {
  if (!value || typeof value !== 'object') return null;
  const accessToken = value.accessToken || value.access_token || null;
  const refreshToken = value.refreshToken || value.refresh_token || null;
  if (!accessToken && !refreshToken) return null;
  return { accessToken, refreshToken };
};

const normalizeAuthResponse = (value) => {
  console.log('[NORMALIZE_AUTH] Input value:', JSON.stringify(value, null, 2));
  if (!value || typeof value !== 'object') {
    console.log('[NORMALIZE_AUTH] Invalid input, returning null');
    return { user: null, tokens: null };
  }
  const userSource = value.user || value.profile || value;
  console.log('[NORMALIZE_AUTH] User source:', JSON.stringify(userSource, null, 2));
  const user = normalizeAuthUser(userSource);
  console.log('[NORMALIZE_AUTH] Normalized user:', JSON.stringify(user, null, 2));
  
  const tokensSource = value.tokens || value;
  console.log('[NORMALIZE_AUTH] Tokens source:', tokensSource ? { hasAccessToken: Boolean(tokensSource.accessToken || tokensSource.access_token), hasRefreshToken: Boolean(tokensSource.refreshToken || tokensSource.refresh_token) } : null);
  const tokens = normalizeAuthTokens(tokensSource);
  console.log('[NORMALIZE_AUTH] Normalized tokens:', tokens ? { hasAccessToken: Boolean(tokens.accessToken), hasRefreshToken: Boolean(tokens.refreshToken) } : null);
  
  const result = { user, tokens };
  console.log('[NORMALIZE_AUTH] Final result:', { hasUser: Boolean(user), hasTokens: Boolean(tokens) });
  return result;
};

export { normalizeAuthUser, normalizeAuthTokens, normalizeAuthResponse };
