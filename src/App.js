import React from 'react';
import imgA from './images/1.jpg';
import imgB from './images/2.jpg';
import imgC from './images/3.jpg';
import imgD from './images/4.jpg';
import imgE from './images/5.jpg';

function Food({name, image, altText}) {
  return (
    <div>
      <h2>I love  { name }</h2>
      <img src={image} alt={altText} />
    </div>
  );
}

const foodILink = [
  {
    id: 1,
    name: '닭가슴살',
    image: imgA,
    altText: '닭가슴살 찍은 모습'
  },
  {
    id: 2,
    name: '회',
    image: imgB,
    altText: '회를 찍은 모습'
  },
  {
    id: 3,
    name: '알리오올리오',
    image: imgC,
    altText: '알리오올리오 찍은 모습'
  },
  {
    id: 4,
    name: '햄버거',
    image: imgD,
    altText: '햄버거 찍은 모습'
  },
  {
    id: 5,
    name: '감자튀김',
    image: imgE,
    altText: '감자튀김 찍은 모습'
  }
];

function renderFood(dish) {
  return 
}

function App() {
  return (
    <div>
      {foodILink.map(dish => (<Food key={dish.id} name={dish.name} image={dish.image} altText={dish.altText} /> ))}
    </div>
    );
}

export default App;
