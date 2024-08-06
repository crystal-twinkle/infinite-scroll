import {useCallback, useEffect, useState} from 'react'
import FlickrApi from './api/api';
import {IPhoto} from './models/api';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetch = useCallback(
    async () => {

      try {
        const data  = await FlickrApi.getData();

          const images = data.photos.photo.map((photo: IPhoto) => ({
            id: photo.id,
            title: photo.title,
            src: `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_w.jpg`,
            largeSrc: `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`,
          }));

          console.log(images);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    fetch();
  }, [fetch]);

  return (
    <>
    </>
  )
}

export default App
