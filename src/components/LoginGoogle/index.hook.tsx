import { useState, useEffect } from "react";

import { FirebaseError } from "firebase/app";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { IUserSession, TypeSession } from "interfaces/TypesSessions";
import { googleAuth } from "services/auth";
import { auth } from "services/firebase";

export function useLoginGoogle() {
  const [googleUrlPhoto, setGoogleUrlPhoto] = useState<string>();

  async function login() {
    const provider = new GoogleAuthProvider();

    const { user } = await signInWithPopup(auth, provider)
      .then((res) => res)
      .catch((err: FirebaseError) => {
        alert(err.code);
        throw new Error(err.code);
      });

    if (!user) return;
    if (!user.email) return;
    if (!user.displayName) return;
    if (!user.photoURL) return;

    const userAuth = await googleAuth(user.email, user.uid);

    const userSession: IUserSession = {
      user: user.displayName,
      token: userAuth.token,
      urlPhoto: user.photoURL,
    };

    setGoogleUrlPhoto(userSession.urlPhoto);

    window.sessionStorage.setItem(TypeSession.keyUser, JSON.stringify(userSession));

    window.location.assign("/home");
  }

  function logout() {
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
    clicar: login,
    googleUrlPhoto,
    logout,
  };
}
