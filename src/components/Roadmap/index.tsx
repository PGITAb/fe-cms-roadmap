import React, { useEffect, useState, useCallback } from 'react';
import './index.css';
// @ts-ignore
import { ConvertCMSStatistic } from 'playerclient';
import renderBacAndDTRoadmap from './fns/renderBacAndDTRoadmap';
import renderBacGameresult from './fns/renderBacGameresult';
import renderDtGameresult from './fns/renderDtGameresult';
import renderDiGameresult from './fns/renderDiGameresult';
import renderDiRoadmap from './fns/renderDiRoadmap';
import renderRoGameresult from './fns/renderRoGameresult';
import renderRoRoadmap from './fns/renderRoRoadmap';
import renderLwGameresult from './fns/renderLwGameresult';
import renderLwRoadmap from './fns/renderLwRoadmap';
import renderBacStat from './fns/renderBacStat';
import renderDtStat from './fns/renderDtStat';
import renderDiStat from './fns/renderDiStat';
import renderRoStat from './fns/renderRoStat';
import renderLwStat from './fns/renderLwStat';

export interface RoadmapProps {
  gameType: string;
  roadmapData: any;
}

const gametypemap: { [key: string]: number } = {
  BAC: 0,
  BAS: 1,
  BAI: 2,
  DT: 5,
  DI: 12,
  MJ: 13,
  RO: 14,
  LO: 15,
  LW: 16,
  ROL: 17,
  BAM: 18,
  DIL: 19,
  SLOT: 20,
  MS: 21,
  RC: 22,
  F3: 23,
  E5: 24,
  L28: 25,
};

const RoadMapComponent: React.FC<RoadmapProps> = (props) => {
  const { gameType, roadmapData } = props;
  const [statistic, setStatistic] = useState(undefined);

  const renderContent = useCallback((): any => {
    if (gameType && statistic) {
      switch (gameType) {
        case 'BAC':
        case 'BAS':
        case 'BAI':
        case 'BAM': {
          return <>{renderBacAndDTRoadmap(statistic)}</>;
        }
        case 'DT': {
          return <>{renderBacAndDTRoadmap(statistic)}</>;
        }
        case 'DI':
        case 'DIL': {
          return <>{renderDiRoadmap(statistic, gameType)}</>;
        }
        case 'RO':
        case 'ROL': {
          return <>{renderRoRoadmap(statistic)}</>;
        }
        case 'LW': {
          return <>{renderLwRoadmap(statistic)}</>;
        }
        default:
          break;
      }
    }
  }, [gameType, statistic]);

  useEffect(() => {
    if (props.roadmapData != undefined) {
      setStatistic(ConvertCMSStatistic(gametypemap[gameType], roadmapData));
    }

    return (): void => {
      setStatistic(undefined);
    };
  }, [gameType, roadmapData]);

  return (
    <div className="modal-abcd">
      <div className="content">
        <div id="div1-abcd">{renderContent()}</div>
      </div>
    </div>
  );
};

export default RoadMapComponent;
