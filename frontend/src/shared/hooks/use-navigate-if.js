import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function useNavigateIf(navigateTo, condition) {
  const navigate = useNavigate();

  useEffect(() => {
    if (condition()) {
      navigate(navigateTo);
    }
  }, []);
}

export default useNavigateIf;