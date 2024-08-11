import React, {
  PropsWithChildren,
  createContext,
  useState,
  useMemo,
} from 'react';
import {IPhoto} from '../models/api';

export interface IAppContext {
  images: IPhoto[];
  setImages: React.Dispatch<React.SetStateAction<IPhoto[]>>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>
}

export const AppContext = createContext<IAppContext>(null!);

const AppProvider = ({ children }: PropsWithChildren) => {

  const [images, setImages] = useState<IPhoto[]>([]);
  const [page, setPage] = useState(1);

  const value = useMemo(
    () => ({
      images,
      setImages,
      page,
      setPage
    }),
    [images, page]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
