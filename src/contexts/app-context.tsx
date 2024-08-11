import React, {
  PropsWithChildren,
  createContext,
  useState,
  useMemo,
} from 'react';
import {IImage} from '../models/api.models';

export interface IAppContext {
  images: IImage[];
  setImages: React.Dispatch<React.SetStateAction<IImage[]>>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>
}

export const AppContext = createContext<IAppContext>(null!);

const AppProvider = ({ children }: PropsWithChildren) => {

  const [images, setImages] = useState<IImage[]>([]);
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
