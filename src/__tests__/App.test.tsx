import { render } from '@testing-library/react';
import App from '../App';
import React from 'react';
import WrapperMock from './mockWrapper.test';

describe('Renders main page correctly', async () => {
  it('display App', async () => {
    render(
      <WrapperMock>
        <App />
      </WrapperMock>
    );
  });
});
