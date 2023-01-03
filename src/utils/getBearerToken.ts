import { IUserSession, TypeSession } from "interfaces/TypesSessions";

export function getBearerToken() {
  const token: IUserSession = JSON.parse(window.sessionStorage.getItem(TypeSession.keyUser) || "{}");

  const { access_token } = token.token as any;

  const bearer = `Bearer ${access_token}`;

  return bearer;
}
