import React from 'react';
import {Layout} from '../components/Layout';
import MockWrapper from './mockWrapper.test';
import { render } from '@testing-library/react';


describe('variable header editor component', () => {
  it('updates textarea editor query state on input change', async () => {
    return render(
      <MockWrapper>
        <Layout />
      </MockWrapper>
    );
  });
});
