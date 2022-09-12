import { useContext } from 'react';
import AuthContext from '../context/auth/auth-context';
import useNavigateIf from '../hooks/use-navigate-if';

export default function checkAuth(Component) {
  return function(props) {
    const {profile} = useContext(AuthContext);
    
    useNavigateIf('/', () => !profile);

    return (
      <Component {...props} />
    )
  }
}