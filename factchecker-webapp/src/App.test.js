import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

test('renders fact checker heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Fact Checker/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders search input', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/Enter a claim to fact-check/i);
  expect(inputElement).toBeInTheDocument();
});

test('button is disabled when input is empty', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', { name: /Check Fact/i });
  expect(buttonElement).toBeDisabled();
});

test('button is enabled when input has text', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/Enter a claim to fact-check/i);
  const buttonElement = screen.getByRole('button', { name: /Check Fact/i });
  
  fireEvent.change(inputElement, { target: { value: 'The Earth is round' } });
  expect(buttonElement).not.toBeDisabled();
});

test('displays result after fact check', async () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/Enter a claim to fact-check/i);
  const buttonElement = screen.getByRole('button', { name: /Check Fact/i });
  
  fireEvent.change(inputElement, { target: { value: 'The Earth is round' } });
  fireEvent.click(buttonElement);
  
  await waitFor(() => {
    expect(screen.getByText(/TRUE/i)).toBeInTheDocument();
  }, { timeout: 2000 });
});

test('renders sample claims', () => {
  render(<App />);
  const sampleClaimElement = screen.getByText(/The Earth is round/i);
  expect(sampleClaimElement).toBeInTheDocument();
});
