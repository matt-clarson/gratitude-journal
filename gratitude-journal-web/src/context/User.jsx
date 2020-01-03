import React, { useState, createContext } from "react";
import PropTypes from "prop-types";

const NO_AUTH_FALLBACK = { authorised: false };

export const User = createContext({
  user: NO_AUTH_FALLBACK,
  setUser: () => {}
});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(NO_AUTH_FALLBACK);
  console.log(user);
  return <User.Provider value={{ user, setUser }}>{children}</User.Provider>;
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default UserProvider;
