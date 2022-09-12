import { useContext } from 'react';
import AuthContext from '../../shared/context/auth/auth-context';
import useNavigateIf from '../../shared/hooks/use-navigate-if';
import Main from '../main/main';

function Home() {
  const {profile} = useContext(AuthContext);
  useNavigateIf('/news', () => !!profile);

  return (
    <Main>
      <div className='home'>
        <h1>Neto Social</h1>
        <h2>Facebook and VK killer</h2>
      </div>
    </Main>
  )
}

export default Home;