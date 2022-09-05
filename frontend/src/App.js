import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './shared/context/auth/auth-provider';
import Header from './components/header/header';
import Main from './components/main/main';

function App() {
  return (
    <>
    <AuthProvider>
      <Header />
      <Main />
    </AuthProvider>
    </>
  );
}

export default App;