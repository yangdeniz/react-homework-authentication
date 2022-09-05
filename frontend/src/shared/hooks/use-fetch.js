import { useContext, useEffect } from 'react';
import AuthContext from '../context/auth/auth-context';

export default function useFetch(api, onDataFetched) {
  const {token, handleLogout} = useContext(AuthContext);

  const fetchData = () => {
    fetch(process.env.REACT_APP_HOST + api, { headers: { Authorization: `Bearer ${token}` } })
      .then(response => {
        if (response.status === 401) {
          handleLogout();
          throw new Error('Auth failed');
        }
        return response.json();
      })
      .then(content => onDataFetched(content))
      .catch(e => Promise.reject());
  }

  useEffect(fetchData, []);
}