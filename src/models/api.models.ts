export interface IImage {
  id: string;
  owner?: string;
  secret: string;
  server: string;
  title: string;
  url_m?: string;
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

export interface IPhotoInfo {
  photo: {
    owner: string;
    secret: string;
    server: string;
    id: string;
    title: { _content: string }
  }
}
