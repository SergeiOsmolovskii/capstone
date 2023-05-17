import { BookingForm } from "../forms/BookingForm";
import "./../../styles/bookingPage.css"

export const BookingPage = (): JSX.Element => {
  return (
    <section className="booking-section">
      <h2 className="booking-title">Book Now</h2>
      <BookingForm/>
    </section>
  );
}