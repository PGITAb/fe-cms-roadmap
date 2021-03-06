import React from 'react';
import east from '../../../assets/east.png';
import south from '../../../assets/south.png';
import west from '../../../assets/west.png';
import north from '../../../assets/north.png';
import white from '../../../assets/white.png';
import middle from '../../../assets/middle.png';
import fat from '../../../assets/fat.png';

const isStatisticData = (
  type: string,
  data: any,
  arrayIndex: number
): boolean | string => {
  return data.roadmapdata.inGame[type][arrayIndex]?.v !== undefined;
};

const renderLwRoadmap = (statistic: any): React.ReactNode => {
  let indents1 = [];
  const empty = [];
  for (let i = 0; i < 140; i++) {
    const className = 'columnLw';
    let source = south;

    if (isStatisticData('bead', statistic, i)) {
      switch (statistic.roadmapdata.inGame.bead[i].v) {
        case '01':
          source = east;
          break;
        case '02':
          source = south;
          break;

        case '03':
          source = west;
          break;

        case '04':
          source = north;
          break;

        case '05':
          source = white;
          break;

        case '06':
          source = middle;
          break;

        case '07':
          source = fat;
          break;
        default:
          source = south;
          break;
      }
      indents1.push(
        <div className={className} key={i.toString()}>
          <img
            className={
              statistic.roadmapdata.inGame.bead[i] == null ||
              !isStatisticData('bead', statistic, i)
                ? 'srcInvisibleLw'
                : 'srcVisibleLw'
            }
            src={source}
            alt="icon"
          />
        </div>
      );
    } else {
      empty.push(
        <div className={className} key={i.toString()}>
          <img
            className={
              statistic.roadmapdata.inGame.bead[i] == null ||
              !isStatisticData('bead', statistic, i)
                ? 'srcInvisibleLw'
                : 'srcVisibleLw'
            }
            src={source}
            alt="icon"
          />
        </div>
      );
    }
  }

  indents1.reverse();
  indents1 = indents1.concat(empty);

  return (
    <div>
      <div className="rowLw-abcd">{indents1}</div>
    </div>
  );
};

export default renderLwRoadmap;
