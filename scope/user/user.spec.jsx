import React from 'react';
import { render } from '@testing-library/react';
import { BasicUser } from './user.composition';


it('should render with the correct text', () => {
  const { getByText } = render(<BasicUser />);
  const rendered = getByText('hello from User');
  expect(rendered).toBeTruthy();
});

