import React from 'react';
import { useSelector } from 'react-redux';
import { selectUserState } from '../redux';
import NonAuthenticated from './NonAuthenticated';
import Authenticated from './Authenticated';

function RootNavigation() {
  const { isLoggedIn } = useSelector(selectUserState);

  return (
    isLoggedIn ? <Authenticated /> : <NonAuthenticated />
  )
}

export default RootNavigation;
