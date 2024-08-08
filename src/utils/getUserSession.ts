import { IUserSession, TypeSession } from "interfaces/TypesSessions";

export default function getUserSession(): IUserSession {
  return JSON.parse(window.sessionStorage.getItem(TypeSession.keyUser) || "{}");
}
