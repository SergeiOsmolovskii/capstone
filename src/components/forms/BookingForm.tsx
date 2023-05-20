import { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import "./../../styles/bookingForm.css"
import { IBookingForm, OCCASIONS } from '../../interfaces/interfaces';
import { submitAPI, fetchAPI } from '../../api/api';
import { useNavigate } from 'react-router-dom';

export const BookingForm = (): JSX.Element => {

  const initialValues: IBookingForm = {
    date: '',
    time: null,
    guestsCount: null,
    occasion: null,
  };

  const [bookingFormData, setBookingFormData] = useState<IBookingForm>({
    ...initialValues
  });

  const [times, setTimes] = useState([""]);
  const [freeTimes, setFreeTimes] = useState<JSX.Element[]>([]);

  const occasion = Object.values(OCCASIONS).map(value => {
    return (<option key={value} value={value}>{value}</option>)
  });

  useEffect(() => {
    if (times !== undefined) {
      const freeTimes = times.map(value => {
        return (
          <option key={value} value={value}>{value}</option>
        );
      });
      setFreeTimes(freeTimes);
    }
  }, [times]);

  const navigate = useNavigate();

  const getCurrentDate = () => {
    const today = new Date();
    let month = (today.getMonth() + 1).toString();
    let day = today.getDate().toString();

    if (month.length === 1) {
      month = '0' + month;
    }

    if (day.length === 1) {
      day = '0' + day;
    }
    return `${today.getFullYear()}-${month}-${day}`;
  }

  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {

      const formData: IBookingForm = {
        date: values.date,
        time: values.time,
        guestsCount: values.guestsCount,
        occasion: values.occasion,
      };

      setBookingFormData(formData);

      const isConfirmedBooking = submitAPI(formData);

      if (isConfirmedBooking) {
        navigate('/confirmation', { state: formData });
      }
    },
    validationSchema: Yup.object().shape({
      date: Yup.date().min(getCurrentDate()).required("Select Date"),
      time: Yup.string().required("Select time"),
      guestsCount: Yup.number().required().required("Select guests count").min(1).max(10),
      occasion: Yup.string().required("Select occasion")
    })
  });

  const handleDateChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    formik.handleChange(e);
    const date = new Date(e.target.value);
    const freeTimes = await fetchAPI(date);
    setTimes(freeTimes);
  };

  return (
    <form onSubmit={formik.handleSubmit} className="booking-form">
      <div className="container form-container">
        <div className="form-container__date">
          <div className="form-container__date-input">
            <label className="form-container__label" htmlFor="date">Choose date</label>
            <input
              className="form-container__input"
              type="date"
              id="date"
              onChange={handleDateChange}
              value={formik.values.date!}
              min={getCurrentDate()}
              required
            />
          </div>
          <p className="form-container__error-message">{formik.errors.date}</p>
        </div>

        <div className="form-container__time">
          <div className="form-container__time-input">
            <label className="form-container__label" htmlFor="time">Choose time</label>
            <select
              className="form-container__select"
              id="time"
              onChange={formik.handleChange}
              value={formik.values.time ?? ''}
              required
            >
              <option value="" disabled>Time</option>
              {freeTimes}
            </select>
          </div>
          <p className="form-container__error-message">{formik.errors.time}</p>
        </div>

        <div className="form-container__guests">
          <div className="form-container__guests-input">
            <label className="form-container__label" htmlFor="guestsCount">Number of guests</label>
            <input
              className="form-container__input"
              type="number"
              placeholder="Guests"
              min="1"
              max="10"
              id="guestsCount"
              onChange={formik.handleChange}
              value={formik.values.guestsCount ?? ''}
              required
            />
          </div>
          <p className="form-container__error-message">{formik.errors.guestsCount}</p>
        </div>

        <div className="form-container__occasion">
          <div className="form-container__occasion-input">
            <label className="form-container__label" htmlFor="occasion">Occasion</label>
            <select
              className="form-container__select"
              id="occasion"
              onChange={formik.handleChange}
              value={formik.values.occasion ?? ''}
              required
            >
              <option value="" disabled>Occasion</option>
              {occasion}
            </select>
          </div>
          <p className="form-container__error-message">{formik.errors.occasion}</p>
        </div>
        <input disabled={!formik.isValid} className="booking-submit" type="submit" value="Make Your reservation" />
      </div>
    </form>
  );
}