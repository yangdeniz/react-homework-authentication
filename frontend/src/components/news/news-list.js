import { useState } from 'react';
import useFetch from '../../shared/hooks/use-fetch';
import ENDPOINTS from '../../shared/constants/endpoints';
import NewsItem from './news-item';

function NewsList() {
  const [news, setNews] = useState([]);
  useFetch(ENDPOINTS.NEWS, setNews);

  return (
    <div className='news-container'>
      {news.map(item => <NewsItem key={item.id} {...item} />)}
    </div>
  )
}

export default NewsList;