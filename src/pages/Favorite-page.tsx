import React, {useContext} from 'react';
import ImageCard from '../components/ImageCard';
import {AppContext} from '../contexts/app-context';
import {IPhoto} from '../models/common';

const Favorites = () => {
  const {favorites} = useContext(AppContext);

  return (
    <div className="list">
      {favorites.map((image: IPhoto) => (
        <div className="list__element" key={image.id}>
          <ImageCard photo={image}/>
        </div>
      ))}
    </div>
  );
};

export default Favorites;
