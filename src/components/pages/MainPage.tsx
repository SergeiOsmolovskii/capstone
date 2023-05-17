import restaurant from '../../assets/mainPage/restaurant.jpg';
import { Testimonials } from '../../components/Testimonials'
import { Specials } from "../Specials";
import "./../../styles/mainPage.css"

export const MainPage = (): JSX.Element => {
  return (
    <>
      <section className="main-section">
        <div className="container main-section__container">
          <aside className="main-section__left-container">
            <h1 className="main-section__title">Little Lemon</h1>
            <h2 className="main-section__subtitle">Chicago</h2>
            <p className="main-section__about">
              Lorem ipsum dolor sit amet consectetur. Magna sed convallis a tellus erat viverra. Volutpat vitae adipiscing scelerisque scelerisque egestas vulputate pharetra enim. Accumsan habitant blandit arcu dignissim pharetra quam nulla ridiculus tellus. Eget dictumst rutrum nisi at mauris sed posuere id elementum. Id aliquam sed vitae mattis nisl sed nibh arcu.
            </p>
          </aside>
          <aside className="main-section__right-container">
            <div className="aside-img"></div>
            <div className="aside-img"></div>
          </aside>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="container testimonials-section__container">
          <h2 className="testimonials-section__title">Testimonials</h2>
          <Testimonials/>
        </div>
      </section>

      <section className="specials-section">
        <div className="container specials-section__container">
          <div className="specials-section__header">
            <h2 className="specials-section__title">Specials</h2>
            <button className="specials-section__online-menu">Online Menu</button>
          </div>
          <Specials/>
        </div>
      </section>

      <section className="about-section">
        <div className="container about-section__container">
          <aside className="about-section__text__aside">
            <h2 className="about-section__title">Little Lemon</h2>
            <h3 className="about-section__subtitle">Chicago</h3>
            <p className="about-section__description">Lorem ipsum dolor sit amet consectetur. Magna sed convallis a tellus erat viverra. Volutpat vitae adipiscing scelerisque scelerisque egestas vulputate pharetra enim. </p>
          </aside>
          <aside className="about-image__aside">
            <img className="restaurant-img" src={restaurant} alt="restaurant" />
          </aside>
        </div>
      </section>
    </>
  );
}