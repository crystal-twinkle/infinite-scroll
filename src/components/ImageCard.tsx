import React, {useState} from 'react';
import '../styles/ImageCard.scss';

interface IImageCardProps {
  id: string;
  title: string;
  src: string;
  largeSrc?: string;
}

const ImageCard = ({id, title, src}: IImageCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });


  const handleFavorite = (id: string) => {
    setFavorites(prev => {
      const newFavorites = prev.includes(id)
        ? prev.filter(favId => favId !== id)
        : [...prev, id];
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  return (
    <div
      className="image"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <figure className="image__card">
        <div className="image__item">
          <img
            src={src}
            alt={title}
            loading="lazy"
            className="image"
          />
          {isHovered && (
            <figcaption className="image-overlay">
              <div className="image-hover">
                <p className="image__title text-right">{title}</p>
                <button
                  className="btn-favorite"
                  onClick={() => handleFavorite(id)}
                >
                  {favorites.includes(id) ? 'Unfavorite' : 'Favorite'}
                </button>
              </div>
            </figcaption>
          )}
        </div>
      </figure>

    </div>
  );
};

export default ImageCard;
