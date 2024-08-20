import axios from 'axios';
import {IData, IPhotoInfo} from '../models/api.models';

const apiKey = import.meta.env.VITE_API_KEY;

export default class FlickrApi {
  static async getData(page: number): Promise<IData> {
    const response = await axios.get(
    `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text='cat'&safe_search=1&format=json&nojsoncallback=1&per_page=20&page=${page}&extras=url_m`
    );
    return response.data;
  }

  static async getPhoto(photoId:string): Promise<IPhotoInfo> {
    const response = await axios.get(
      `https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=${apiKey}&photo_id=${photoId}&format=json&nojsoncallback=1&extras=url_m`
    );
    return response.data;
  }
}
