export interface IImage {
  id: string;
  farm: number;
  owner: string;
  secret: string;
  server: string;
  title: string;
}

export interface IData {
  photos: {
    page: number;
    pages: number;
    perpage: number;
    photo: IImage[];
    total: number;
  };
  stat: string;
}
