import axios from 'axios';
import { Mock } from 'vitest';
import FlickrApi from '../api/api';
const apiKey = import.meta.env.VITE_API_KEY;

vi.mock('axios');

describe('FlickrApi', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should fetch all posts', async () => {
    const mockResponse1 = {
      photos: {
        page: 1,
        pages: 8264,
        perpage: 20,
        total: 165264,
        photo: [
          {
            id: "53916764819",
            owner: "151563059@N08",
            secret: "66aab20c0a",
            title: "Blackfooted Cat 8-11-24",
            url_m: "https://live.staticflickr.com/31337/53916764819_66aab20c0a.jpg"
          },
          {
            id: "53916841205",
            owner: "34631801@N00",
            secret: "7a792fea99",
            title: "Expired Arista Edu 400 @100 - Canon EOS 10s",
            url_m: "https://live.staticflickr.com/65535/53916841205_7a792fea99.jpg"
          }
        ]
      }
    };

    const mockResponse = {
      data: mockResponse1
    };

    (axios.get as Mock).mockResolvedValue(mockResponse);

    const result = await FlickrApi.getData(1);

    expect(axios.get).toHaveBeenCalledWith(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text='cat'&safe_search=1&format=json&nojsoncallback=1&per_page=20&page=1&extras=url_m`
    );
    expect(result).toEqual(mockResponse1);
  });
});
