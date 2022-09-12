import { useContext } from 'react';
import AuthContext from '../../shared/context/auth/auth-context';
import AuthForm from './auth-form';
import Logo from './logo';
import Profile from './profile';

function Header() {
  const {token} = useContext(AuthContext);
  return (
    <header className='header'>
      <Logo />
      {!token ? <AuthForm /> : <Profile />}
    </header>
  );
}

export default Header;