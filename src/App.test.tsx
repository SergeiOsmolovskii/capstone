import { render, screen, fireEvent } from '@testing-library/react';
import { BookingPage } from './components/pages/BookingPage';
import { act } from 'react-dom/test-utils';

// test('Renders the BookingForm heading', () => {
//     render(<BookingPage />);
//     const headingElement = screen.getByText("Book Now");
//     expect(headingElement).toBeInTheDocument();
// });

test('Test form', () => {
  render(<BookingPage />);
  const dateInput = screen.getByLabelText("Choose date") as HTMLInputElement;
  const timeInput = screen.getByLabelText("Choose time") as HTMLInputElement;
  const guestsInput = screen.getByLabelText("Number of guests") as HTMLInputElement;
  const occasionInput = screen.getByLabelText("Occasion") as HTMLInputElement;

  act(() => {
    // fireEvent.change(dateInput, {target: {value: new Date()}})
    fireEvent.change(timeInput, {target: {value: "18:00"}})
    fireEvent.change(guestsInput, {target: {value: 5}})
    fireEvent.change(occasionInput, {target: {value: "Birthday"}})
    // expect(dateInput.value).toBe("22-05-2023");
    expect(timeInput.value).toBe("18:00");
    expect(guestsInput.value).toBe("5");
    expect(occasionInput.value).toBe("Birthday");
  })
})