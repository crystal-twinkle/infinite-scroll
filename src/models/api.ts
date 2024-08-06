export interface IPhoto {
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
    photo: IPhoto[];
    total: number;
  };
  stat: string;
}
