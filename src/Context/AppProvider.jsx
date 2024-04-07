import { createContext } from "react";
import PropTypes from "prop-types";
import { useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [page, setPage] = useState(1);
  const value = {
    page,
    setPage,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

AppProvider.propTypes = {
  children: PropTypes.node,
};

export default AppProvider;
