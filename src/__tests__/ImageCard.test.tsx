import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ImageCard from '../components/ImageCard';  // обновите путь к компоненту при необходимости
import { IPhoto } from '../models/common';
import MockWrapper from './mockWrapper.test';
import {IntersectionObserver} from '../../setupTests';

beforeAll(() => {
  global.IntersectionObserver = vi.fn().mockImplementation(() => new IntersectionObserver());
});

const mockPhoto: IPhoto = {
  id: '1',
  title: 'Sample Photo',
  src: 'sample.jpg',
  largeSrc: 'sample-large.jpg',
};

const ImageCardWrap = () => {
  return render(
    <MockWrapper>
      <ImageCard photo={mockPhoto} />
    </MockWrapper>
  );
};

describe('ImageCard', () => {
  beforeEach(() => {
    ImageCardWrap();
  });

  it('renders the image', () => {
    const imageCard = screen.getByTestId('image');
    fireEvent.mouseEnter(imageCard);

    expect(screen.getByText('Sample Photo')).toBeInTheDocument();

    expect(screen.getByText('Favorite')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Favorite'));
    expect(screen.getByText('Unfavorite')).toBeInTheDocument();

    fireEvent.mouseLeave(imageCard);

    expect(screen.queryByText(mockPhoto.title)).not.toBeInTheDocument();
  });
});
