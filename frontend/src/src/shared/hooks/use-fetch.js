import { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AuthContext from '../context/auth/auth-context';

export default function useFetch(api, defaultValue = null) {
  const {token, handleLogout} = useContext(AuthContext);
  const [data, setData] = useState(defaultValue);
  const location = useLocation();
  const navigate = useNavigate();

  const fetchData = () => {
    fetch(process.env.REACT_APP_HOST + api, { headers: { Authorization: `Bearer ${token}` } })
      .then(response => {
        if (response.status === 401) {
          handleLogout();
          navigate('/');
        }
        if (response.status === 404) {
          navigate(location.pathname, { state: { notFound: true } });
        }
        return response.json();
      })
      .then(content => setData(content))
      .catch(() => {});
  }

  useEffect(fetchData, []);

  return [data, setData];
}