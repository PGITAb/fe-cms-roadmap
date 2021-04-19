import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import './index.css';
import { Row, Spin, Alert } from 'antd';
import { ConvertCMSStatistic } from 'playerclient';
import renderHeader from '../Modal/functions/renderHeader';
import renderBacAndDTRoadmap from '../Modal/functions/renderBacAndDTRoadmap';
import renderBacGameresult from '../Modal/functions/renderBacGameresult';
import renderDtGameresult from '../Modal/functions/renderDtGameresult';
import renderDiGameresult from '../Modal/functions/renderDiGameresult';
import renderDiRoadmap from '../Modal/functions/renderDiRoadmap';
import renderRoGameresult from '../Modal/functions/renderRoGameresult';
import renderRoRoadmap from '../Modal/functions/renderRoRoadmap';
import renderLwGameresult from '../Modal/functions/renderLwGameresult';
import renderLwRoadmap from '../Modal/functions/renderLwRoadmap';
import renderBacStat from '../Modal/functions/renderBacStat';
import renderDtStat from '../Modal/functions/renderDtStat';
import renderDiStat from '../Modal/functions/renderDiStat';
import renderRoStat from '../Modal/functions/renderRoStat';
import renderLwStat from '../Modal/functions/renderLwStat';
import "../../../node_modules/video-react/dist/video-react.css";
// import { Player } from 'video-react';

export interface VideoProps {
  gameRoundID: string | null;
  gameType: string | null;
}

export interface Props extends VideoProps {
  url: string;
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

const RoadMapComponent: React.FC<Props> = (props) => {
  const { gameRoundID, gameType, url } = props;
  const [toShow, setToShow] = useState<boolean>(false);
  const [items, setItems] = useState(undefined);
  const [statistic, setStatistic] = useState(undefined);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const renderHeaderContent = useCallback((): any => {
    if (!isError && isLoaded && gameType && items) {
      return renderHeader(items, gameType);
    }
  }, [gameType, isError, isLoaded, items]);

  const renderContent = useCallback((): any => {
    if (!isError && isLoaded && gameType && statistic && items) {
      switch (gameType) {
        case 'BAC':
        case 'BAS':
        case 'BAI':
        case 'BAM': {
          return (
            <>
              {renderBacAndDTRoadmap(statistic)}
            </>
          );
        }
        case 'DT': {
          return (
            <>
              {renderBacAndDTRoadmap(statistic)}
            </>
          );
        }
        case 'DI':
        case 'DIL': {
          return (
            <>
              {renderDiRoadmap(statistic, gameType)}
            </>
          );
        }
        case 'RO':
        case 'ROL': {
          return (
            <>
              {renderRoRoadmap(statistic)}
            </>
          );
        }
        case 'LW': {
          return (
            <>
              {renderLwRoadmap(statistic)}
            </>
          );
        }
        default:
          break;
      }
    }
  }, [gameType, isError, isLoaded, items, statistic]);

  const renderStat = useCallback((): any => {
    if (!isError && isLoaded && gameType && statistic) {
      switch (gameType) {
        case 'BAC':
        case 'BAS':
        case 'BAI':
        case 'BAM': {
          return <>{renderBacStat(items)}</>;
        }
        case 'DT': {
          return <>{renderDtStat(items)}</>;
        }
        case 'DI':
        case 'DIL': {
          return <>{renderDiStat(statistic, items, gameType)}</>;
        }
        case 'RO':
        case 'ROL': {
          return <>{renderRoStat()}</>;
        }
        case 'LW': {
          return <>{renderLwStat()}</>;
        }
        default:
          break;
      }
    }
  }, [isError, isLoaded, gameType, statistic, items]);

  useEffect(() => {
    if (gameRoundID && gameType) {
      (async (): Promise<void> => {
        try {
          const { data } = await axios.get(url, {
            params: {
              gameroundID: gameRoundID,
            },
          });
          const { data: result } = data;
          setItems(result);
          setStatistic(
            ConvertCMSStatistic(
              gametypemap[gameType],
              result.roadmap.roadmapData
            )
          );
          setToShow(true);
          setIsLoaded(true);
        } catch (error) {
          setIsError(true);
        }
      })();
    }
    return (): void => {
      setToShow(false);
      setIsLoaded(false);
      setIsError(false);
      setStatistic(undefined);
      setItems(undefined);
    };
  }, [gameRoundID, gameType, url]);

  if (isError) {
    return <Alert message="Something has gone wrong! :(" type="error" />;
  }

  return !toShow ? (
    <Row justify="center">
      <Spin />
    </Row>
  ) : (
      <div className="modal-abcd">
        {renderHeaderContent()}
        <div className="content">
          <div id="div1-abcd">{renderContent()}</div>
        </div>
      </div>
    );
};

export default RoadMapComponent;
