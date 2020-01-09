import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

const NO_AUTH_FALLBACK = JSON.stringify({ authorised: false });
const USER = "user";

export const User = createContext({
  user: NO_AUTH_FALLBACK,
  setUser: () => {}
});

const UserProvider = ({ children }) => {
  const initalUser = JSON.parse(
    window.localStorage.getItem(USER) ?? NO_AUTH_FALLBACK
  );
  const [user, setUserState] = useState(initalUser);

  const setUser = userValue => {
    window.localStorage.setItem(USER, JSON.stringify(userValue));
    setUserState(userValue);
  };

  return <User.Provider value={{ user, setUser }}>{children}</User.Provider>;
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default UserProvider;
