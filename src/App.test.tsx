import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { BookingForm } from './components/forms/BookingForm';

test('renders the booking form', () => {
  render(
    <BrowserRouter>
      <BookingForm />
    </BrowserRouter>
  );

  expect(screen.getByLabelText('Choose date')).toBeInTheDocument();
  expect(screen.getByLabelText('Choose time')).toBeInTheDocument();
  expect(screen.getByLabelText('Number of guests')).toBeInTheDocument();
  expect(screen.getByLabelText('Occasion')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Make Your reservation' })).toBeInTheDocument();
});

test('submits the form with valid data', async () => {

  render(
    <BrowserRouter>
      <BookingForm />
    </BrowserRouter>
  );

  await userEvent.type(screen.getByLabelText(/Choose date/), '2023-05-25');
  await userEvent.selectOptions(screen.getByLabelText(/Choose time/), '17:30');
  await userEvent.type(screen.getByLabelText(/Number of guests/), '4');
  await userEvent.selectOptions(screen.getByLabelText(/Occasion/), 'Birthday');

  const dateInput = screen.getByDisplayValue<HTMLInputElement>('2023-05-25');
  const timeSelect = screen.getByDisplayValue<HTMLSelectElement>(/17:30/);
  const guestsInput = screen.getByDisplayValue<HTMLInputElement>('4');
  const occasionSelect = screen.getByDisplayValue<HTMLSelectElement>(/Birthday/);
  const submitButton = screen.getByRole<HTMLInputElement>('button', { name: 'Make Your reservation' });

  expect(dateInput.value).toBe('2023-05-25');
  expect(timeSelect.value).toBe('17:30');
  expect(guestsInput.value).toBe('4');
  expect(occasionSelect.value).toBe('Birthday');
  expect(submitButton).not.toBeDisabled();
  await userEvent.click(submitButton);
});

test('submits the form with not valid date', async () => {

  render(
    <BrowserRouter>
      <BookingForm />
    </BrowserRouter>
  );

  await userEvent.type(screen.getByLabelText(/Choose date/), '2022-05-19');
  expect(screen.getByText(/date field must be later than/)).toBeInTheDocument();
});

test('submits the form with not valid time', async () => {

  render(
    <BrowserRouter>
      <BookingForm />
    </BrowserRouter>
  );

  await userEvent.type(screen.getByLabelText(/Choose date/), '2023-05-25');
  expect(screen.getByText(/Select time/)).toBeInTheDocument();
});

test('submits the form with not valid guests', async () => {

  render(
    <BrowserRouter>
      <BookingForm />
    </BrowserRouter>
  );

  await userEvent.type(screen.getByLabelText(/Number of guests/), '15');
  expect(screen.getByText(/guestsCount must be less than or equal to 10/)).toBeInTheDocument();
});

test('submits the form with not all valid data', async () => {

  render(
    <BrowserRouter>
      <BookingForm />
    </BrowserRouter>
  );

  await userEvent.type(screen.getByLabelText(/Choose date/), '2023-05-25');
  await userEvent.selectOptions(screen.getByLabelText(/Choose time/), '17:30');
  await userEvent.type(screen.getByLabelText(/Number of guests/), '4');
  const submitButton = screen.getByRole<HTMLInputElement>('button', { name: 'Make Your reservation' });
  expect(submitButton).toBeDisabled();
});