import { useState, useEffect } from "react";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { IUserSession, TypeSession } from "interfaces/TypesSessions";
import { googleAuth } from "services/auth";
import { auth } from "services/firebase";
import { useHeaderContext } from "hooks/useHeaderContext";

export function useLoginGoogle() {
  const { setIsLoading } = useHeaderContext();

  const [googleUrlPhoto, setGoogleUrlPhoto] = useState<string>();

  async function loginGoogle() {
    setIsLoading(true);
    const provider = new GoogleAuthProvider();

    const { user } = await signInWithPopup(auth, provider);

    if (!user) return;
    if (!user.email) return;
    if (!user.displayName) return;
    if (!user.photoURL) return;

    const userAuth = await googleAuth(user.email, user.uid);

    if (!userAuth) {
      alert("Conta não autorizada!");
      window.location.assign("/");
      setIsLoading(false);
      return;
    }

    const userSession: IUserSession = {
      user: user.displayName,
      token: userAuth.token,
      profile: userAuth.profile,
      urlPhoto: user.photoURL,
    };

    await setGoogleUrlPhoto(userSession.urlPhoto);

    window.sessionStorage.setItem(TypeSession.keyUser, JSON.stringify(userSession));

    window.location.assign("/home");
    setIsLoading(false);
  }

  async function logout() {
    setGoogleUrlPhoto("");
    window.sessionStorage.removeItem(TypeSession.keyUser);
  }

  useEffect(() => {
    const getUserSession = window.sessionStorage.getItem(TypeSession.keyUser);
    const userSession: IUserSession = JSON.parse(getUserSession || "{}");

    if (Object.keys(userSession).length === 0) return;

    setGoogleUrlPhoto(userSession.urlPhoto as string);
  }, []);

  return {
    loginGoogle,
    googleUrlPhoto,
    logout,
  };
}
