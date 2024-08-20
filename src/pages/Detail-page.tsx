import React, {useCallback, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import FlickrApi from '../api/api';
import {IPhotoInfo} from '../models/api.models';
import Loading from '../components/Loading';

const DetailPage = () => {
  const {photoId} = useParams<{ photoId: string }>();
  const [isLoading, setIsLoading] = useState(false);
  const [photoDetails, setPhotoDetails] = useState<IPhotoInfo['photo']>(null);

  const fetch = useCallback(async () => {
    try {
      const response = await FlickrApi.getPhoto(photoId);
      setPhotoDetails(response.photo)
      setIsLoading(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    console.log(photoId)
    if (photoId) {
      fetch()
    }
  }, [photoId]);


  return (
    <>
      {isLoading ?
        <Loading/> :
        <div>
          <img
            src={`https://live.staticflickr.com/${photoDetails?.server}/${photoDetails?.id}_${photoDetails?.secret}_b.jpg`}
            alt={photoDetails?.title?._content}/>
        </div>
      }
    </>
  );
};

export default DetailPage;
