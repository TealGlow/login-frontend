import { render, screen } from '@testing-library/react';
import SignUpForm from '../partials/SignUpForm';

test('renders learn react link', () => {
  render(<SignUpForm />);
  expect(scree.getByRole("error-message").toHaveTextContent('Username is required'));
});
