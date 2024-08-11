import React, {useContext} from 'react';
import ImageCard from '../components/ImageCard';
import {AppContext} from '../contexts/app-context';
import {IPhoto} from '../models/common';

const Favorites = () => {
  const {favorites} = useContext(AppContext);
  console.log(favorites)
  return (
    <div className="list">
      <h2>Favorites</h2>
      {favorites.map((image: IPhoto) => (
        <div className="list__element" key={image.id}>
          <ImageCard photo={image}/>
        </div>
      ))}
    </div>
  );
};

export default Favorites;
