import React from 'react';
import dice1 from '../../../assets/dice1.png';
import dice2 from '../../../assets/dice2.png';
import dice3 from '../../../assets/dice3.png';
import dice4 from '../../../assets/dice4.png';
import dice5 from '../../../assets/dice5.png';
import dice6 from '../../../assets/dice6.png';

const dices = {
  1: dice1,
  2: dice2,
  3: dice3,
  4: dice4,
  5: dice5,
  6: dice6,
};

const renderDiGameresult = (items): React.ReactNode => {
  return (
    <div>
      <span className="label-abcd success-abcd">遊戲結果</span>
      <br />
      <br />
      <br />
      <br />
      <div className="boxContainer">
        <span className="diPoint">{items.resultInt.Total}點</span>
        <div className="resultRowDi-abcd">
          <div className="resultColumnDi">
            <img
              className="diSrc"
              src={dices[items.resultInt.Dice1]}
              alt="icon"
            />
            <img
              className="diSrc"
              src={dices[items.resultInt.Dice2]}
              alt="icon"
            />
            <img
              className="diSrc"
              src={dices[items.resultInt.Dice3]}
              alt="icon"
            />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <hr />
      <span className="label-abcd success-abcd">路紙</span>
      <br />
      <br />
    </div>
  );
};

export default renderDiGameresult;
