import React from 'react';

const renderRoGameresult = (items: any): React.ReactNode => {
  let color;
  let classname;
  let num;
  let size;
  let boxClass;

  if (items.resultInt.Value === 0) {
    color = '綠';
    classname = 'roResultTextGreen';
    boxClass = 'roBoxGreen';
  } else if ([2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35].indexOf(items.resultInt.Value) >= 0) {
    color = '黑';
    classname = 'roResultTextBlack';
    boxClass = 'roBoxBlack';
  } else {
    color = '紅';
    classname = 'roResultTextRed';
    boxClass = 'roBoxRed';
  }

  if (items.resultInt.Value % 2 === 0) {
    num = '雙';
  } else {
    num = '單';
  }

  if (items.resultInt.Value >= 19) {
    size = '大';
  } else {
    size = '小';
  }

  if (items.resultInt.Value === 0) {
    num = '';
    size = '';
  }

  return (
    <div>
      <span className="label-abcd success-abcd">遊戲結果</span>
      <br />
      <div className="boxContainer">
        <div className={boxClass}>
          <span className="roText">{items.result}</span>
        </div>
      </div>

      <div className="boxContainer">
        <h1 className={classname}>
          {color} {num} {size}
        </h1>
      </div>
      <br />

      <hr />
      <span className="label-abcd success-abcd">路紙</span>
      <br />
      <br />
    </div>
  );
};

export default renderRoGameresult;
