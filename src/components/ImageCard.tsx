import React, {useEffect, useRef, useState} from 'react';
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
          <div
            ref={divRef}
            className="image"
            data-src={`url(${src})`}
          >
          </div>

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
