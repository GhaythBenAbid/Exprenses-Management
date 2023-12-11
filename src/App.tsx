import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
  const { loginWithRedirect , logout } = useAuth0();

  return (
    <div className="text-4xl">

      <button onClick={() => loginWithRedirect()}>Log In</button>


      <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
        Log Out
      </button>
    </div>
  );
};

export default App;