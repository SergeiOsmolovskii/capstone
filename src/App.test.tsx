import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { submitAPI } from './api/api';
import { BookingForm } from './components/forms/BookingForm';
import { fetchAPI } from './api/api';

const submitAPIMock = jest.fn();

// test('renders the booking form', () => {
//   render(
//     <BrowserRouter>
//       <BookingForm />
//     </BrowserRouter>
//   );

//   expect(screen.getByLabelText('Choose date')).toBeInTheDocument();
//   expect(screen.getByLabelText('Choose time')).toBeInTheDocument();
//   expect(screen.getByLabelText('Number of guests')).toBeInTheDocument();
//   expect(screen.getByLabelText('Occasion')).toBeInTheDocument();
//   expect(screen.getByRole('button', { name: 'Make Your reservation' })).toBeInTheDocument();
// });

test('submits the form with valid data', async () => {

  render(
    <BrowserRouter>
      <BookingForm />
    </BrowserRouter>
  );

  userEvent.type(screen.getByLabelText(/Choose date/), '2023-05-19');
  
  await waitFor(() => {
    const dateInput = screen.queryByDisplayValue('2023-05-19') as HTMLInputElement;
    expect(dateInput.value).toBe('2023-05-19');
  })  
  
  await waitFor(() => {
    const option = screen.getByRole('option', { name: /17:30/ });
    userEvent.selectOptions(screen.getByLabelText(/Choose time/), option);
    const timeSelect = screen.queryByDisplayValue(/17:30/) as HTMLSelectElement;
    expect(timeSelect.value).toBe('17:30');
  });

  await waitFor(() => {
    userEvent.type(screen.getByLabelText(/Number of guests/), '4');
    const guestsInput = screen.queryByDisplayValue(4) as HTMLInputElement;
    expect(guestsInput.value).toBe('4');
  })

  await waitFor(() => {
    userEvent.selectOptions(screen.getByLabelText(/Occasion/), 'Birthday');
    const occasionSelect = screen.queryByDisplayValue(/Birthday/) as HTMLSelectElement;
    expect(occasionSelect.value).toBe('Birthday');
    screen.debug();
  });


 
  // expect(submitButton).not.toBeDisabled();

  // fireEvent.click(submitButton);

  // await waitFor(() => {
  //   expect(submitAPIMock).toHaveBeenCalledWith({
  //     date: '2023-05-19',
  //     time: '17:30',
  //     guestsCount: '4',
  //     occasion: 'Birthday',
  //   });
  // });

});