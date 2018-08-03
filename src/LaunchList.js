import React from 'react';
import { Col, Row } from 'antd';
import Launch from './Launch';
import withLoadingIndicator from './util/withLoadingIndicator';

const fetchLaunchData = async () => {
  let response = await fetch('https://api.spacexdata.com/v2/launches/upcoming');
  return await response.json();
};

class LaunchList extends React.Component {
  render() {
    return (
      <Row gutter={16} type="flex" justify="space-around">
        {this.props.data.map(flight => (
          <Col xs={24} md={10}>
            <Launch
              mission={flight.mission_name}
              rocket={flight.rocket.rocket_name}
              site={flight.launch_site.site_name_long}
              launchDate={flight.launch_date_local}
            />
          </Col>
        ))}
      </Row>
    );
  }
}

export default withLoadingIndicator(LaunchList, fetchLaunchData);
