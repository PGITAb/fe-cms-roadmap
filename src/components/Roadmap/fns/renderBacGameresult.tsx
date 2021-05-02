import React from 'react';
import getPokerIcon from './getPokerIcon';

const renderBacGameresult = (items: any): React.ReactNode => {
  return (
    <div id="div1top-abcd">
      <span className="label-abcd success-abcd">遊戲結果</span>
      <br />
      <span className="label-abcd info-abcd">閒牌</span>
      <span className="label-abcd danger-abcd">庄牌</span>
      <br />
      <br />
      <div>
        <span className="pointNumber-abcd">
          {items.resultInt.Pv}
          <span className="point-abcd">pt</span>
        </span>
        <img className="photo-abcd" src={getPokerIcon(items.resultString.B1)} />
        <img className="photo-abcd" src={getPokerIcon(items.resultString.B2)} />

        <span className="pointNumberRight-abcd">
          {items.resultInt.Bv}
          <span className="pointRight-abcd">pt</span>
        </span>
        <img
          className="photoRight-abcd"
          src={getPokerIcon(items.resultString.A1)}
        />
        <img
          className="photoRight-abcd"
          src={getPokerIcon(items.resultString.A2)}
        />
      </div>
      <br />
      <img
        className="rotatePhoto-abcd"
        src={getPokerIcon(items.resultString.B3)}
      />
      <img
        className="rotatePhotoRight-abcd"
        src={getPokerIcon(items.resultString.A3)}
      />

      <hr className="hr-abcd" />
      <span className="label-abcd success-abcd">路紙</span>
      <br />
      <br />
    </div>
  );
};

export default renderBacGameresult;
