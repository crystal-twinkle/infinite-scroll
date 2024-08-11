import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PostList from '../components/PostList';
import AppProvider, { AppContext, IAppContext } from '../contexts/app-context';
import { IImage } from '../models/api.models';
import { MemoryRouter } from 'react-router-dom';
import {IPhoto} from '../models/common';

const images: IImage[] = [
  {
    id: '1',
    title: 'Mountain View',
    server: '65535',
    secret: 'abcd1234',
  },
  {
    id: '2',
    title: 'Ocean View',
    server: '65536',
    secret: 'efgh5678',
  },
];

const favorites: IPhoto[] = [
  {
    id: '1',
    title: 'Mountain View',
    src: 'sample.jpg',
  }
];

const appProv = {
  images,
  setImages: vi.fn(),
  page: 1,
  setPage: vi.fn(),
  favorites,
  setFavorites: vi.fn(),
};

const PostListWrap = () => {
  return (
    <MemoryRouter>
      <AppProvider>
        <AppContext.Provider value={appProv}>
          <PostList />
        </AppContext.Provider>
      </AppProvider>
    </MemoryRouter>
  );
};

describe('PostList', () => {
  beforeEach(() => {
    render(<PostListWrap />);
  });

  it('renders the correct number of images', () => {
    const imageElements = screen.getAllByTestId('image-element');
    expect(imageElements).toHaveLength(images.length);
  });


});
