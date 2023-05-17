import { SpecialItem } from './SpecialItem';
import { ISpecialItem } from '../interfaces/interfaces';
import "./../styles/specials.css"
import { useState } from 'react';

export const Specials = (): JSX.Element => {

  const [specials, setSpecials] = useState<ISpecialItem[]> ([
    {
      id: "01299",
      name: "Greek salad",
      description: "Lorem ipsum dolor sit amet consectetur. Erat sit in malesuada hendrerit diam. Tincidunt felis in arcu enim a eu. Facilisi sed in ornare amet non hendrerit. Vitae vitae laoreet amet nulla quis.",
      price: 12.99,
      imgUrl: "https://raw.githubusercontent.com/SergeiOsmolovskii/capstone-images/main/specials/greek%20salad.png"

    },
    {
      id: "01300",
      name: "Bruschetta",
      description: "Lorem ipsum dolor sit amet consectetur. Erat sit in malesuada hendrerit diam. Tincidunt felis in arcu enim a eu. Facilisi sed in ornare amet non hendrerit. Vitae vitae laoreet amet nulla quis.",
      price: 5.99,
      imgUrl: "https://raw.githubusercontent.com/SergeiOsmolovskii/capstone-images/main/specials/bruschet.png"
    },
    {
      id: "01301",
      name: "Lemon Dessert",
      description: "Lorem ipsum dolor sit amet consectetur. Erat sit in malesuada hendrerit diam. Tincidunt felis in arcu enim a eu. Facilisi sed in ornare amet non hendrerit. Vitae vitae laoreet amet nulla quis.",
      price: 4.99,
      imgUrl: "https://raw.githubusercontent.com/SergeiOsmolovskii/capstone-images/main/specials/lemon%20dessert.jpg  "
    },
    // { id: "01302",
    //   name: "Pasta",
    //   description: "Lorem ipsum dolor sit amet consectetur. Erat sit in malesuada hendrerit diam. Tincidunt felis in arcu enim a eu. Facilisi sed in ornare amet non hendrerit. Vitae vitae laoreet amet nulla quis.",
    //   price: 9.99,
    // imgUrl: "https://raw.githubusercontent.com/SergeiOsmolovskii/capstone-images/main/specials/pasta.png"
    // },
  ]);

  const specialsJSX = specials.map(item => {
    return (
      <SpecialItem key={item.name} data={item} />
      )
  });


  return (
    <div className="specials">
      {specialsJSX}
    </div>
  )
}