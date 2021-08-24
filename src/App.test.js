import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App />);

  // find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' })

  // click button
  fireEvent.click(colorButton);

  // expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });

  // expect the button text to be 'Change to red'
  expect(colorButton.textContent).toBe('Change to red');
});

test('renders initial condition', () => {
  render(<App />);

  // check that the button start out enable
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  expect(colorButton).toBeEnabled();

  // check that the checkbox start out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('renders disabled button if checkbox is checked', () => {
  render(<App />);

  // check the button change to disable after checkbox is checked
  const mainButton = screen.getByRole("button");
  const checkbox = screen.getByRole("checkbox");

  fireEvent.click(checkbox);
  expect(mainButton).toBeDisabled();
  
  fireEvent.click(checkbox);
  expect(mainButton).toBeEnabled();
})