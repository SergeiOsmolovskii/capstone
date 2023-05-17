import { IRatingProp } from '../../interfaces/interfaces';
import rating from '../../assets/rating.svg';
import "./../../styles/rating.css"


export const Rating = (props: IRatingProp): JSX.Element => {

  return (
  <div className="rating">
    <span className="rating-total"> {props.rating} </span> 
    <img src={rating} alt="rating-star" />
  </div>
  )
}