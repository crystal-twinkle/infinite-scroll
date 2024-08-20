import {useContext, useEffect, useRef, useState} from 'react';
import '../styles/ImageCard.scss';
import {AppContext} from '../contexts/app-context';
import {IPhoto} from '../models/common';
import {RouterPage} from '../router';
import {Link} from 'react-router-dom';

interface IImageCardProps {
  photo: {
    id: string;
    title: string;
    src: string;
    largeSrc?: string;
  }
}

const ImageCard = ({photo}: IImageCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const {favorites, setFavorites, setPhotoId} = useContext(AppContext);
  const divRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const div = entry.target as HTMLDivElement;
          const dataSrc = div.getAttribute('data-src');

          if (dataSrc) {
            div.style.backgroundImage = dataSrc;
            div.classList.add('fade');
          }

          observer.unobserve(div);
        }
      });
    });

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleFavorite = (photo: IPhoto) => {
    setFavorites((prev: IPhoto[]) => {
      const isFavorite = prev.some((fav) => fav.id === photo.id);
      const newFavorites: IPhoto[] = isFavorite
        ? prev.filter((fav) => fav.id !== photo.id)
        : [...prev, photo];

      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  const handleDetail = (id: string) => {
    setPhotoId(id);
  };

  return (
    <div
      data-testid="image"
      className="image"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <figure className="image__card">
        <div className="image__item">
          <div
            ref={divRef}
            className="image"
            data-src={`url(${photo.src})`}
          >
          </div>

          {/*{isHovered && (*/}
            <figcaption className="image-overlay">
              <div className="image-hover">
                <p className="image__title text-right">{photo.title}</p>
                <div className='button-container'>
                <button
                  className="btn-favorite"
                  onClick={() => handleFavorite(photo)}
                >
                  {favorites.some((fav) => fav.id === photo.id)
                    ? 'Unfavorite'
                    : 'Favorite'}
                </button>
                  <Link className="btn-detail" to={`${RouterPage.PHOTO_DETAIL.replace(':photoId', photo.id)}`} onClick={() => handleDetail(photo.id)}>
                  </Link>
              </div>
              </div>
            </figcaption>
          {/*)}*/}
        </div>
      </figure>

    </div>
  );
};

export default ImageCard;
