import useFetch from '../../shared/hooks/use-fetch';
import ENDPOINTS from '../../shared/constants/endpoints';
import Main from '../main/main';
import NewsItem from './news-item';
import checkAuth from '../../shared/hoc/check-auth';

function NewsListRaw() {
  const [news, setNews] = useFetch(ENDPOINTS.NEWS, []);
  return (
    <Main>
      <div className='news-container'>
        {news.map(item => <NewsItem key={item.id} {...item} />)}
      </div>
    </Main>
  )
}

const NewsList = checkAuth(NewsListRaw);

export default NewsList;