import { useContext } from 'react';
import AuthContext from '../../shared/context/auth/auth-context';
import Home from '../home/home';
import NewsList from '../news/news-list';

function Main() {
  const {token} = useContext(AuthContext);

  return (
    <main className='main'>
      <div className='container'>
        {!token ? <Home /> : <NewsList />}
      </div>
    </main>
  );
}

export default Main;