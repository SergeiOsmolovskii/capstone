import { useLocation, useNavigate } from 'react-router-dom';
import { IBookingForm } from './../interfaces/interfaces';

import "./../styles/confirmedPage.css";

export const ConfirmedBooking = (): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();
  const formData: IBookingForm = location.state;

  return (
    <div className="confirmation-notification" role="alert" aria-live="assertive">
      <div className="container">
        <h2 className="confirmation-title">Congratulations!</h2>
        <p className="confirmation-description">You have successfully booked a table.</p>
        <p className="confirmation-description">Guests: <strong>{formData?.guestsCount}</strong></p>
        <p className="confirmation-description">Date: <strong>{formData?.date}</strong></p>
        <p className="confirmation-description">Time: <strong>{formData?.time}</strong></p>
        <p className="confirmation-description">Occasion: <strong>{formData?.occasion}</strong></p>
        <button className="confirmation-back" onClick={() => navigate('/')}>Go back</button>
      </div>
    </div>
  )
}