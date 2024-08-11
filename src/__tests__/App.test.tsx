import { render } from '@testing-library/react';
import MainPage from '../pages/Main-page';
import React from 'react';
import WrapperMock from './mockWrapper.test';

describe('Renders main page correctly', async () => {
  it('display App', async () => {
    render(
      <WrapperMock>
        <MainPage />
      </WrapperMock>
    );
  });
});
