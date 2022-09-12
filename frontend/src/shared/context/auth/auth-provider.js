import { useNavigate } from 'react-router-dom';
import ENDPOINTS from '../../constants/endpoints';
import useStorage from '../../hooks/use-storage';
import AuthContext from './auth-context';

export default function AuthProvider(props) {
  const [token, setToken] = useStorage(localStorage, 'token');
  const [profile, setProfile] = useStorage(localStorage, 'profile', true);
  const navigate = useNavigate();

  const handleLogin = async (login, password) => {
    try {
      const authResponse = await fetch(process.env.REACT_APP_HOST + ENDPOINTS.AUTH, {
        method: 'POST',
        body: JSON.stringify({login, password})
      });
      if (authResponse.status >= 400) {
        const content = await authResponse.json();
        throw new Error(content?.message || 'Authentication failed');
      }
      const content = await authResponse.json();
      setToken(content.token);

      await fetch(process.env.REACT_APP_HOST + ENDPOINTS.PROFILE, { headers: { 'Authorization': `Bearer ${content.token} `} })
        .then(response => response.json())
        .then(content => setProfile(content))
        .then(() => navigate('/news'));

      return { isSuccessful: true };
    }
    catch (e) {
      return { isSuccessful: false, message: e.message };
    }
  }

  const handleLogout = () => {
    setToken(null);
    setProfile(null);
    navigate('/');
  }

  return (
    <AuthContext.Provider value={{handleLogin, handleLogout, token, profile}}>
      {props.children}
    </AuthContext.Provider>
  )
}