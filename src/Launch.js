import React from "react";
import { Card, Icon } from "antd";
import { distanceInWords } from "date-fns";

import Falcon9 from "./assets/falcon9.jpg";
import FalconHeavy from "./assets/falconheavy.jpg";

const renderRocketImage = rocket => {
  if (!rocket) {
    return <img alt="Falcon 9 Rocket" src={Falcon9} />;
  }

  if (rocket.rocket_id === "falcon9") {
    return <img alt="Falcon 9 Rocket" src={Falcon9} />;
  }

  return <img alt="Falcon Heavy Rocket" src={FalconHeavy} />;
};

const { Meta } = Card;

export default ({ rocket, mission, site, launchDate }) => {
  return (
    <Card
      cover={renderRocketImage(rocket)}
      actions={[<Icon type="pushpin" />, <Icon type="share-alt" />]}
    >
      <Meta
        title={`${rocket.rocket_name} - ${mission}`}
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
