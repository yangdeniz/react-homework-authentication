import { useParams } from 'react-router-dom';
import checkAuth from '../../shared/hoc/check-auth';
import checkNotFound from '../../shared/hoc/check-not-found';
import ENDPOINTS from '../../shared/constants/endpoints';
import useFetch from '../../shared/hooks/use-fetch';
import Main from '../main/main';
import NewsItem from './news-item';

function NewsCardRaw() {
  const {id} = useParams();
  const [data, setData] = useFetch(ENDPOINTS.NEWS + id, {});

  return (
    <Main>
      <NewsItem {...data} />
    </Main>
  )
}

const NewsCard = checkNotFound(checkAuth(NewsCardRaw));

export default NewsCard;