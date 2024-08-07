import axios from 'axios';
import {IData} from '../models/api';

const apiKey = import.meta.env.VITE_API_KEY;

export default class FlickrApi {
  static async getData(): Promise<IData> {
    const response = await axios.get(
    `https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${apiKey}&format=json&nojsoncallback=1`
    );
    return response.data;
  }
}
