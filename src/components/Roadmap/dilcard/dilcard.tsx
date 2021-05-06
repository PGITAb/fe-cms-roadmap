import React from 'react';

import './styles.css';

import green from '../../../assets/dil/multiple_green.svg';
import tagImg from '../../../assets/rol/tag.svg';

interface PropsType {
  value: number;
  color?: string;
  tag: number;
}

const ROLBall: React.FC<PropsType> = (props) => {

  return props.value >= 0 && props.value <= 36 ?
    props.tag === 0 ?
      (
        // no multiplier
        <div className="dilcard">
          &nbsp;
          <div className="dil-value">{props.value}</div>
        </div>
      ) : (
        // has multiplier
        <div className="dilcard-multi"
          style={{
            backgroundImage: `url("${green}")`,
          }}>
          <div className="diltag"
            style={{
              opacity: `${props.tag > 0 ? '1' : '0'}`,
            }}>
            {props.tag}x
          </div>
          <div className="dil-value-multi">
            {props.value}
          </div>
           &nbsp;
        </div>
      ) : (
      // empty
      <div></div>
    );
};

export default ROLBall;
