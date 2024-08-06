import {useCallback, useEffect, useState} from 'react'
import './App.css'
import FlickrApi from './api/api';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetch = useCallback(
    async () => {
      try {
        const data = await FlickrApi.getALL();
        console.log(data)
      } catch (e) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
    </>
  )
}

export default App
