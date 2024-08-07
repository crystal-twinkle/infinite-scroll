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
}

export const AppContext = createContext<IAppContext>(null!);

const AppProvider = ({ children }: PropsWithChildren) => {

  const [images, setImages] = useState<IPhoto[]>([]);

  const value = useMemo(
    () => ({
      images,
      setImages,
    }),
    [images]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
