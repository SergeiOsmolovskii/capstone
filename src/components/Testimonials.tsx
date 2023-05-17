import { TestimonialItem } from './TestimonialItem';
import { ITestimonial } from '../interfaces/interfaces';
import "./../styles/testimonial.css"
import { useState } from 'react';

export const Testimonials = (): JSX.Element => {

  const [testimonials, setTestimonials] = useState<ITestimonial[]> ([
    {
      name: "Charles",
      id: '10123',
      rating: "5",
      testimonial: "Lorem ipsum dolor sit amet consectetur. Erat sit in malesuada hendrerit diam. Tincidunt felis in arcu enim a eu.",
      imgUrl: "https://raw.githubusercontent.com/SergeiOsmolovskii/capstone-images/main/testimonials/charles.jpg"
    },
    {
      name: "Amanda",
      id: '10124',
      rating: "5",
      testimonial: "Perfect work",
      imgUrl: "https://raw.githubusercontent.com/SergeiOsmolovskii/capstone-images/main/testimonials/amanda.jpg"
    },
    {
      name: "Rachel",
      id: '10125',
      rating: "4",
      testimonial: "Good work",
      imgUrl: "https://raw.githubusercontent.com/SergeiOsmolovskii/capstone-images/main/testimonials/rachel%20.jpg"
    },
    {
      name: "Zhang",
      id: '10126',
      rating: "5",
      testimonial: "Lorem ipsum dolor sit amet consectetur. Erat sit in malesuada hendrerit diam. Tincidunt felis in arcu enim a eu. Facilisi sed in ornare amet non hendrerit. Vitae vitae laoreet amet nulla quis.",
      imgUrl: "https://raw.githubusercontent.com/SergeiOsmolovskii/capstone-images/main/testimonials/zhang.jpg"
    }
  ]);

  const testimonialsJSX = testimonials.map(item => {
    return (
      <TestimonialItem key={item.id} data={item} />
      )
  });


  return (
    <div className="testimonials">
      {testimonialsJSX}
    </div>
  )
}