import React from "react";
import { Layout, Menu, Icon } from "antd";
import "./Layout.css";
import LaunchList from "./LaunchList";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Stats from "./Stats";
import Tweets from "./Tweets";
import About from "./About";
import logo from "./assets/logo.png";

const { Header, Content, Footer, Sider } = Layout;

export default () => {
  return (
    <Router>
      <Layout className="container">
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Link to="/">
                <Icon type="rocket" />
                <span className="nav-text">Upcoming Launches</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/stats">
                <Icon type="line-chart" />
                <span className="nav-text">Launch statistics</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/tweets">
                <Icon type="twitter" />
                <span className="nav-text">Recent tweets</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/about">
                <Icon type="question" />
                <span className="nav-text">About</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }}>
            <div style={{ width: "100%", height: "100%" }}>
              <img
                src={logo}
                alt="SpaceX Now"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>
          </Header>
          <Content style={{ margin: "24px 16px 0" }}>
            <div style={{ 
              padding: 24, 
              background: "#fff", 
              minHeight: 360, 
              display: "grid", 
              gridTemplateColumns: "1fr", 
              alignItems: "center", 
              justifyContent: "center" 
            }}>
              <Route exact path="/" component={LaunchList} />
              <Route exact path="/stats" component={Stats} />
              <Route exact path="/tweets" component={Tweets} />
              <Route exact path="/about" component={About} />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            made with{" "}
            <span role="img" aria-label="Love">
              ❤️
            </span>{" "}
            by humans on earth
          </Footer>
        </Layout>
      </Layout>
    </Router>
  );
};
