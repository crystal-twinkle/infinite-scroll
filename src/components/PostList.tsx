import {useContext, useEffect} from 'react';
import '../styles/PostList.scss';
import {IPhoto} from '../models/api';
import {AppContext} from '../contexts/app-context';
import {IImage} from '../models/common';
import ImageCard from './ImageCard';


const PostList = () => {
  const {images} = useContext(AppContext);

  const photos: IImage[] = images.map((photo: IPhoto) => ({
    id: photo.id,
    title: photo.title,
    src: `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_w.jpg`,
    largeSrc: `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`,
  }));

  const preloadImage = (src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = resolve;
      img.onerror = reject;
    });
  };


  useEffect(() => {
    const preload = async () => {
      const promises = photos.map((photo) => preloadImage(photo.src));
      await Promise.all(promises);
    };

    preload();
  }, [photos]);


  return (
    <div>
      <div className="list">
        {photos.map((image: IImage) => (
          <div className="list__element" key={image.id}>
            <ImageCard
              id={image.id}
              title={image.title}
              src={image.src}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
