import React from 'react';
import { withRouter } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Row, Col } from 'antd';

class Footerbar extends React.Component {
  pathTo = route => this.props.history.push(route)

  renderItem = ({ route, icon, title }) => {
    const { location } = this.props;
    return (
      <Col
        key={route} span={8}
        onClick={e => this.pathTo(route)}
        style={location.pathname.indexOf(route) > 0 ? {color: 'skyblue'} : {}}
      >
        <Row><Col span={24}><FontAwesomeIcon icon={icon} /></Col></Row>
        <Row><Col span={24}>{title}</Col></Row>
      </Col>
    )
  }

  render() {
    const routes = [{
      route: 'home',
      icon: 'home',
      title: '首页'
    }, {
      route: 'raiders',
      icon: 'ship',
      title: '攻略'
    }, {
      route: 'about',
      icon: 'book',
      title: '关于'
    }];
    return (
      <div>
        <Row>
          {routes.map(this.renderItem)}
        </Row>
      </div>
    )
  }
}
export default withRouter(Footerbar);
