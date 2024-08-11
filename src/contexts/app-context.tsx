import React, {
  PropsWithChildren,
  createContext,
  useState,
  useMemo,
} from 'react';
import {IImage} from '../models/api.models';
import {IPhoto} from '../models/common';

export interface IAppContext {
  images: IImage[];
  setImages: React.Dispatch<React.SetStateAction<IImage[]>>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  favorites: IPhoto[];
  setFavorites: React.Dispatch<React.SetStateAction<IPhoto[]>>;
}

export const AppContext = createContext<IAppContext>(null!);

const AppProvider = ({ children }: PropsWithChildren) => {
  const [favorites, setFavorites] = useState<IPhoto[]>(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  const [images, setImages] = useState<IImage[]>([]);
  const [page, setPage] = useState(1);

  const value = useMemo(
    () => ({
      images,
      setImages,
      page,
      setPage,
      favorites,
      setFavorites
    }),
    [favorites, images, page]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
