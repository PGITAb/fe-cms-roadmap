import React, { useState } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

// import { Button, ButtonProps } from "./Button";
import { Button } from 'antd';
import Modal, { ModalComponentProps, VideoProps } from '../components/Modal';

export default {
  title: 'Example/Modal',
  component: Modal,
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
} as Meta;

const Template: Story<ModalComponentProps> = (args) => {
  const { gameRoundID, gameType, url } = args;
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [modalProps, setModalProps] = useState<VideoProps>({
    gameRoundID: null,
    gameType: null,
  });
  return (
    <>
      <Button
        onClick={(): void => {
          setIsVisible(true);
          setModalProps({
            gameType,
            gameRoundID,
          });
        }}
        type="primary"
      >
        Open Modal
      </Button>
      <Modal
        url={url}
        visible={isVisible}
        onCancel={(): void => setIsVisible(false)}
        gameRoundID={modalProps.gameRoundID}
        gameType={modalProps.gameType}
      />
    </>
  );
};

export const BAS = Template.bind({});
BAS.args = {
  gameRoundID: 'BTTV75AHE4OSRB8ETN7G',
  gameType: 'BAS',
  url: 'https://dev-backoffice-api.weapi247.com/gameresult',
  // primary: true,
  // label: "Button",
};

export const LW = Template.bind({});
LW.args = {
  gameRoundID: 'BU1I1G9T726CTSUICDDG',
  gameType: 'LW',
  url: 'https://dev-backoffice-api.weapi247.com/gameresult',
  // primary: true,
  // label: "Button",
};

export const DI = Template.bind({});
DI.args = {
  gameRoundID: 'BU1I1GPT726CTSUICDF0',
  gameType: 'DI',
  url: 'https://dev-backoffice-api.weapi247.com/gameresult',
  // primary: true,
  // label: "Button",
};

export const ROL = Template.bind({});
ROL.args = {
  gameRoundID: 'BU1I1G1T726CTSUICDD0',
  gameType: 'ROL',
  url: 'https://dev-backoffice-api.weapi247.com/gameresult',
  // primary: true,
  // label: "Button",
};

// export const Large = Template.bind({});
// Large.args = {
//   size: "large",
//   label: "Button",
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: "small",
//   label: "Button",
// };
