import { render, screen, fireEvent, waitFor, act, findAllByLabelText, findByLabelText } from '@testing-library/react';
import { BookingPage } from './components/pages/BookingPage';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { fetchAPI } from './api/api';
import { BookingForm } from './components/forms/BookingForm';

jest.mock('./api/api');

describe("Form", () => {
  test("Correct Booking form", async () => {

    render(
      <BrowserRouter>
        <BookingForm />
      </BrowserRouter>
    );

    const dateInput = screen.getByLabelText(/Choose date/) as HTMLInputElement;
    const timeSelect = screen.getByLabelText(/Choose time/) as HTMLSelectElement;
    const guestsInput = screen.getByLabelText(/Number of guests/) as HTMLInputElement;
    const occasionSelect = screen.getByLabelText(/Occasion/) as HTMLSelectElement;
    const submitButton = screen.getByRole("button", { name: "Make Your reservation" });

    await act(async () => {
      userEvent.type(dateInput, '2023-05-18');
      expect(dateInput.value).toBe("2023-05-18");

      await waitFor(() => {
        const options = screen.findByLabelText(/Choose time/)
        const timeOptions = Array.from(timeSelect.options).map((option) => option.value);
      });

      // screen.debug()

      // userEvent.selectOptions(timeSelect, '17:30');
      // expect(timeSelect.value).toBe("17:30");

      userEvent.type(guestsInput, "5");
      expect(guestsInput.value).toBe("5");

      userEvent.selectOptions(occasionSelect, "Birthday");
      expect(occasionSelect.value).toBe("Birthday");
    });
  });
});