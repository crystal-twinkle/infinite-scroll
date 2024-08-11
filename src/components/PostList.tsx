import {useContext} from 'react';
import '../styles/PostList.scss';
import {IPhoto} from '../models/api';
import {AppContext} from '../contexts/app-context';
import {IImage} from '../models/common';


const PostList = () => {
  const { images } = useContext(AppContext);

  const photos: IImage[] = images.map((photo: IPhoto) => ({
    id: photo.id,
    title: photo.title,
    src: `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_w.jpg`,
    largeSrc: `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`,
  }));

  return (
    <div>
      <div className="list">
        {photos.map((image: IImage) => (
          <div className="list__element"  key={image.id}>
              <img src={image.src} alt="front" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
