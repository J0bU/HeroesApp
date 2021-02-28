import React, { useReducer } from 'react'
import { AuthContext } from './auth/AuthContext';
import { AppRouter } from './routers/AppRouter';
import { authReducer } from './auth/authReducer';

export const HeroesApp = () => {

  const init = () => {
    return JSON.parse(localStorage.getItem('user')) || { logged: false }
  }

  const [user, dispatch] = useReducer(authReducer, {}, init)
  
    return (
      <AuthContext.Provider value={{ user, dispatch }}>
        <AppRouter />
      </AuthContext.Provider>
    );
};
