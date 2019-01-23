import React from 'react';

const userDefaults = {
  name: "",
  language: "SWEDISH"
};

const UserContext = React.createContext(
  userDefaults
);

export default UserContext
