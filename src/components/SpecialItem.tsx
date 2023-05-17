import { ISpecialItemProp } from '../interfaces/interfaces';
import { CutTextLength } from '../HOC/CutTextLength';
import "./../styles/specials.css";

export const SpecialItem = (props: ISpecialItemProp): JSX.Element => {

  const CURRENCY = "$";

  const specialText = CutTextLength(props.data.description, 250, "special_text");

  return (
    <article className="special">
      <img className="special-img" src={props.data.imgUrl} alt={props.data.name} />
      <div className="special-article-container">
        <div className="special-header">
          <h3 className="special_title">{props.data.name}</h3>
          <span className="special-currency">{CURRENCY}{props.data.price}</span>
        </div>
        {specialText}
        <button className="special-order">Order a delivery</button>
      </div>
    </article>
  )
}