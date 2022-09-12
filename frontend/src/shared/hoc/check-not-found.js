import { useLocation } from 'react-router-dom';
import NotFound from '../../components/not-found';

export default function checkNotFound(Component) {
  return function(props) {
    const location = useLocation();

    if (location?.state?.notFound) {
      return <NotFound />;
    }

    return (
      <Component {...props} />
    );
  }
}