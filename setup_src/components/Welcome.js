import React from "react";
import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";

const Welcome = () => {
  const googleSignIn = () => {
  };

  return (
    <main className="welcome">
      <h2>Welcome to React Chat.</h2>
      <img src="/logo512.png" alt="ReactJs logo" width={60} height={60} />
      <p>Sign in with Google to chat with with your React Developers.</p>
      <button className="sign-in">
        <img
          onClick={googleSignIn}
          src={GoogleSignin}
          alt="sign in with google"
          type="button"
        />
      </button>
    </main>
  );
};
