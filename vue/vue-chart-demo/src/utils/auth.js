const TokenKey = "DS-Token"
export function getToken() {
  return Cookie.get(TokenKey);
}