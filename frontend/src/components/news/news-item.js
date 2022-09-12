import { useNavigate } from 'react-router-dom';

function NewsItem(props) {
  const navigate = useNavigate();
  return (
    <div className='card' onClick={() => navigate(`/news/${props.id}`)}>
      <img src={props.image} className='card-img-top' alt='' />
      <div className='card-body'>
        <h5 className='card-title'>{props.title}</h5>
        <p className='card-text'>{props.content}</p>
      </div>
    </div>
  );
}

export default NewsItem;