import React from 'react';
import { render } from '@testing-library/react';
import { BasicApi } from './api.composition';


it('should render with the correct text', () => {
  const { getByText } = render(<BasicApi />);
  const rendered = getByText('hello from Api');
  expect(rendered).toBeTruthy();
});

