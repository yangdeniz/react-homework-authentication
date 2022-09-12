import { useContext, useState } from 'react';
import AuthContext from '../../shared/context/auth/auth-context';

function AuthForm(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');

  const {handleLogin} = useContext(AuthContext);

  const onUsernameInput = (e) => {
    setAuthError('');
    setUsername(e.target.value);
  }

  const onPasswordInput = (e) => {
    setAuthError('');
    setPassword(e.target.value);
  }

  const login = async () => {
    const authResponse = await handleLogin(username, password);
    if (!authResponse.isSuccessful) {
      setAuthError(authResponse.message);
    }
  }

  return (
    <form className='auth-form'>
      <input type='email' className='form-control' id='username' placeholder='Username' value={username} onChange={onUsernameInput} />
      <input type='password' className='form-control' id='password' placeholder='Password' value={password} onChange={onPasswordInput} />
      <button type='button' className='btn btn-outline-success' disabled={!username || !password} onClick={login}>
        Login
      </button>
      {authError && (
        <div className='popover auth-error'>
          <div className='arrow'></div>
          <div className='popover-body'>{authError}</div>
        </div>
      )}
    </form>
  );
}

export default AuthForm;