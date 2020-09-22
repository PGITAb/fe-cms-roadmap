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
  gameRoundID: 'BTJMB22HE4OJA5B6EGI0',
  gameType: 'BAS',
  url: 'https://dev-backoffice-api.weapi247.com/gameresult',
  // primary: true,
  // label: "Button",
};

export const LW = Template.bind({});
LW.args = {
  gameRoundID: 'BTJMFJAHE4OJA5B6EM10',
  gameType: 'LW',
  url: 'https://dev-backoffice-api.weapi247.com/gameresult',
  // primary: true,
  // label: "Button",
};

export const DI = Template.bind({});
DI.args = {
  gameRoundID: 'BTKPIU2HE4OJNQI0CE6G',
  gameType: 'DI',
  url: 'https://dev-backoffice-api.weapi247.com/gameresult',
  // primary: true,
  // label: "Button",
};

export const ROL = Template.bind({});
ROL.args = {
  gameRoundID: 'BTKPITQHE4OJNQI0CE5G',
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
