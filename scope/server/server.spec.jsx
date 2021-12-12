import React from 'react';
import { render } from '@testing-library/react';
import { BasicServer } from './server.composition';


it('should render with the correct text', () => {
  const { getByText } = render(<BasicServer />);
  const rendered = getByText('hello from Server');
  expect(rendered).toBeTruthy();
});

