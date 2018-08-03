import React from 'react';
import { Card, Icon } from 'antd';
import { distanceInWords } from 'date-fns';

import Falcon9 from './assets/falcon9.jpg';

const { Meta } = Card;

export default ({ rocket, mission, site, launchDate }) => {
  return (
    <Card
      cover={<img alt="Falcon 9 Rocket" src={Falcon9} />}
      actions={[<Icon type="pushpin" />, <Icon type="share-alt" />]}
    >
      <Meta
        title={`${rocket} - ${mission}`}
        description={
          <div>
            <Icon type="environment" />
            <span>{` ${site}`}</span>
          </div>
        }
      />
      <hr />
      <Icon type="clock-circle" />
      <span> in {distanceInWords(launchDate, new Date())}</span>
    </Card>
  );
};
