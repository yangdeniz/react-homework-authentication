import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './shared/context/auth/auth-provider';
import Header from './components/header/header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/home';
import NewsList from './components/news/news-list';
import NewsCard from './components/news/news-card';
import NotFound from './components/not-found';

function App() {
  return (
    <>
    <AuthProvider>
      <Header />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/news' element={<NewsList />} />
        <Route path='/news/:id' element={<NewsCard />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </AuthProvider>
    </>
  );
}

export default App;