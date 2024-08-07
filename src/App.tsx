import {useCallback, useContext, useEffect, useState} from 'react'
import FlickrApi from './api/api';
import PostList from './components/PostList';
import Loading from './components/Loading';
import {AppContext} from './contexts/app-context';

function App() {
  const { setImages } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetch = useCallback(
    async () => {

      try {
        const data = await FlickrApi.getData();
        console.log(data)

        setImages(data.photos.photo);

      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    },
    [setImages]
  );

  useEffect(() => {
    fetch();
  }, [fetch]);

  return (
    <div className="main-page">
      <div className="main">
        {!isLoading ? (
          <>
            <PostList/>
          </>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  )
}

export default App
