import {useCallback, useContext, useEffect, useRef, useState} from 'react';
import FlickrApi from './api/api';
import PostList from './components/PostList';
import Loading from './components/Loading';
import {AppContext} from './contexts/app-context';

function App() {
  const {setImages, page, setPage} = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const isFetching = useRef(false);
  const fetch = useCallback(async () => {
      if (isFetching.current) return;

      isFetching.current = true;
      setIsLoading(true);
      setError(false);

      try {
        const data = await FlickrApi.getData(page);
        setImages(prev => [...prev, ...data.photos.photo]);
        setPage(prevPage => prevPage + 1);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
        isFetching.current = false;
      }
    },
    [page]
  );

  useEffect(() => {
    fetch();
  }, []);

  const handleScroll = useCallback(() => {
    if (isLoading) return;

    const isBottom = Math.ceil(window.innerHeight + document.documentElement.scrollTop) >= document.documentElement.offsetHeight;
    if (isBottom) {
      fetch();
    }
  }, [isLoading, fetch]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div className="main-page">
      <div className="wrapper">
        <div className="main">
          <PostList/>
          {isLoading && <Loading/>}
          {error && <p>Error fetching data.</p>}
        </div>
      </div>
    </div>
  );
}

export default App;
