import { useContext } from 'react';
import AuthContext from '../../shared/context/auth/auth-context';

function Profile() {
  const {handleLogout, profile} = useContext(AuthContext);

  return (
    <div className='profile'>
      <div>Hello, {profile?.name}</div>
      <img src={profile?.avatar} alt='' />
      <button type='button' className='btn btn-outline-danger' onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Profile;