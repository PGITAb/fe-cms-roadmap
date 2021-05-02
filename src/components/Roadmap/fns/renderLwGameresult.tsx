import React from 'react';
import resultEast from '../../../assets/resultEast.png';
import resultSouth from '../../../assets/resultSouth.png';
import resultWest from '../../../assets/resultWest.png';
import resultNorth from '../../../assets/resultNorth.png';
import resultWhite from '../../../assets/resultWhite.png';
import resultMiddle from '../../../assets/resultMiddle.png';
import resultFat from '../../../assets/resultFat.png';

const renderLwGameresult = (items: any): React.ReactNode => {
  let source = resultSouth;
  switch (items.resultString.Value) {
    case '01':
      source = resultEast;
      break;
    case '02':
      source = resultSouth;
      break;

    case '03':
      source = resultWest;
      break;

    case '04':
      source = resultNorth;
      break;

    case '05':
      source = resultWhite;
      break;

    case '06':
      source = resultMiddle;
      break;

    case '07':
      source = resultFat;
      break;
    default:
      source = resultSouth;
      break;
  }

  return (
    <div>
      <span className="label-abcd success-abcd">遊戲結果</span>
      <br />
      <br />
      <br />
      <br />
      <div className="boxContainer">
        <img src={source} alt="icon" />
      </div>
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

export default renderLwGameresult;
