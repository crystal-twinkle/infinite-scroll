import {useContext} from 'react';
import '../styles/PostList.scss';
import {IImage} from '../models/api.models';
import {AppContext} from '../contexts/app-context';
import {IPhoto} from '../models/common';
import ImageCard from './ImageCard';


const PostList = () => {
  const {images} = useContext(AppContext);

  const photos: IPhoto[] = images.map((image: IImage) => ({
    id: image.id,
    title: image.title,
    src: `https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}_w.jpg`,
    largeSrc: `https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}_b.jpg`,
  }));

  return (
      <div className="list">
        {photos.map((photo: IPhoto) => (
          <div className="list__element" key={photo.id}>
            <ImageCard
              id={photo.id}
              title={photo.title}
              src={photo.src}
            />
          </div>
        ))}
      </div>
  );
};

export default PostList;
