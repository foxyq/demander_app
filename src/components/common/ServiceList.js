import React from 'react';
import { Card, Col, Row } from 'antd';

class ServiceList extends React.Component {
  render() {
    return(
      <div style={{ background: '#dfdfdf', padding: '30px' }}>
        <h2>poptavky</h2>
        <Row>
         <Col xs={{span:22}} md={{span:6}}>
           <Card title="Card title" bordered={false}>Card content</Card>
         </Col>
         <Col xs={{span:22}} md={{span:6}}>
           <Card title="Card title" bordered={false}>Card content</Card>
         </Col>
         <Col xs={{span:22}} md={{span:6}}>
           <Card title="Card title" bordered={false}>Card content</Card>
         </Col>
         <Col xs={{span:22}} md={{span:6}}>
           <Card title="Card title" bordered={false}>Card content</Card>
         </Col>
        </Row>
      </div>
    );
  }
}

export default ServiceList;
