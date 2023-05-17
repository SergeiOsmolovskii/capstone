export interface ITestimonial {
  id: string,
  name: string,
  rating: string,
  testimonial: string,
  imgUrl: string
}

export interface ITestimonialItemProp {
  data: ITestimonial
}

export interface IRatingProp {
  rating: string
}

export interface ISpecialItem {
  id: string
  name: string,
  price: number,
  description: string
  imgUrl: string
}

export interface ISpecialItemProp {
  data: ISpecialItem
}

export interface IBookingForm {
  date?: string | '',
  time?: TIMES | null,
  guestsCount?: number | null,
  occasion?: OCCASIONS | null,
}

export enum TIMES {
  seventeen = "17:00",
  eighteen = "18:00",
  nineteen = "19:00",
  twenty = "20:00",
  twentyOne = "21:00",
  twentyTwo = "22:00",
}

export enum OCCASIONS {
  Birthday = "Birthday",
  Anniversary = "Anniversary"
}