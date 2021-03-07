import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const {getFragment} = render(<App />);
  expect(getFragment('firebaseui-auth-container')).toBeInTheDocument();
});
