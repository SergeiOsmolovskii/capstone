import { ITestimonialItemProp } from '../interfaces/interfaces';
import { Rating } from './ui/Rating';
import { CutTextLength } from '../HOC/CutTextLength';
import "./../styles/testimonial.css"


export const TestimonialItem = (props: ITestimonialItemProp): JSX.Element => {


  const testimonialText = CutTextLength(props.data.testimonial, 50, "testimonial__text");

  return (
    <article className="testimonial">
      <div className="testimonial-user">
        <div>
          <Rating rating={props.data.rating} />
          <img className="testimonial-user__img" src={props.data.imgUrl} alt="img" />
        </div>
      </div>
        <h3 className="testimonial-user__name">{props.data.name}</h3>
      {testimonialText}
    </article>
  )
}