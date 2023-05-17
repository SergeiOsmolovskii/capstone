import { useState } from "react";
import "./cutTextLength.css";

export const CutTextLength = (text: string, limit: number, className: string) => {
  const [showTestimonial, setShowTestimonial] = useState(false);

  const showMore = () => setShowTestimonial(true);
  const showLess = () => setShowTestimonial(false);

  if (text.length <= limit) {
    return (
      <p className={className}>
        {text}
      </p>
    )
  }

  if (showTestimonial) {
    return (
      <>
        <p className={className}>
          {text}
        </p>
        <button className="show" onClick={showLess}>Hide</button>
      </>
    )
  }

  return (
    <>
      <p className={className}>{
        text.slice(0, limit)}
      </p>
      <button className="hide" onClick={showMore}>Show</button>
    </>
  )
}