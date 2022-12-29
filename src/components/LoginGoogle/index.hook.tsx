import { useState, useEffect } from "react";

import { FirebaseError } from "firebase/app";
import { GoogleAuthProvider, signInWithPopup, User } from "firebase/auth";

import { auth } from "services/firebase";

export function useLoginGoogle() {
  const [googleUrlPhoto, setGoogleUrlPhoto] = useState<string>();

  async function clicar() {
    const provider = new GoogleAuthProvider();

    const googleResponse = await signInWithPopup(auth, provider).catch((err: FirebaseError) => alert(err.code));

    if (!googleResponse) return;

    setGoogleUrlPhoto(googleResponse.user.photoURL as string);

    window.sessionStorage.setItem("@user", JSON.stringify(googleResponse.user));
  }

  function logout() {
    setGoogleUrlPhoto("");
    window.sessionStorage.removeItem("@user");
  }

  useEffect(() => {
    const getUserLocation = window.sessionStorage.getItem("@user");
    const userLocation: User = JSON.parse(getUserLocation || "{}");

    if (Object.keys(userLocation).length === 0) return;

    setGoogleUrlPhoto(userLocation.photoURL as string);
  }, []);

  return {
    clicar,
    googleUrlPhoto,
    logout,
  };
}
