import React from "react";

import { Spin } from "antd";

export default (Component, dataLoader) => {
  return class extends React.Component {
    constructor() {
      super();
      this.state = {
        loading: true,
        data: null
      };
    }

    async componentDidMount() {
      let response = await dataLoader();
      this.setState(() => (this.state = { loading: false, data: response }));
    }

    render() {
      return this.state.loading ? (
        <Spin size="large" />
      ) : (
        <Component data={this.state.data} />
      );
    }
  };
};
