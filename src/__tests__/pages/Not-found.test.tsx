import MockWrapper from '../mockWrapper.test';
import { render } from '@testing-library/react';
import {NotFoundPage} from '../../pages/Not-found-page';


describe('variable header editor component', () => {
  it('updates textarea editor query state on input change', async () => {
    return render(
      <MockWrapper>
        <NotFoundPage />
      </MockWrapper>
    );
  });
});
