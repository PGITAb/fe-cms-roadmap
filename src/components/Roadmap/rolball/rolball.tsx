import React from 'react';

import './styles.css';

import red from '../../../assets/ro/red.svg';
import black from '../../../assets/ro/black.svg';
import green from '../../../assets/ro/green.svg';
import blue from '../../../assets/rol/ball_blue.svg';
import tagImg from '../../../assets/rol/tag.svg';

interface PropsType {
  value: number;
  tag: number;
}

const ROLBall: React.FC<PropsType> = (props) => {
  let color;
  switch (props.value) {
    case 0:
      color = green;
      break;
    case 1:
    case 3:
    case 5:
    case 7:
    case 9:
    case 12:
    case 14:
    case 16:
    case 18:
    case 19:
    case 21:
    case 23:
    case 25:
    case 27:
    case 30:
    case 32:
    case 34:
    case 36:
      color = red;
      break;
    case 2:
    case 4:
    case 6:
    case 8:
    case 10:
    case 11:
    case 13:
    case 15:
    case 17:
    case 20:
    case 22:
    case 24:
    case 26:
    case 28:
    case 29:
    case 31:
    case 33:
    case 35:
      color = black;
      break;
    default:
      break;
  }
  if (props.tag !== undefined && props.tag > 0) {
    color = blue;
  }
  return props.value >= 0 && props.value <= 36 ? (
    <div
      className="rolball"
      style={{
        backgroundImage: `url("${color}")`,
      }}
    >
      <div
        className="roltag"
        style={{
          backgroundImage: `url("${tagImg}")`,
          opacity: `${props.tag > 0 ? '1' : '0'}`,
        }}
      >
        {props.tag}x
      </div>
      {props.value}
    </div>
  ) : (
    <div></div>
  );
};

export default ROLBall;
