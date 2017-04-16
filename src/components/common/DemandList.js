import React, {PropTypes} from 'react';
import { Card, Col, Row } from 'antd';

// class DemandList extends React.Component {
  // render() {
  const DemandList = ({tests}) => {
    return(
      <div style={{ background: '#ECECEC', padding: '30px' }}>
        <h2>nabidky</h2>
       <Row>
         {/* <ul> */}
         {tests.map( test =>
           <Col span="8" xs={{span:22}} md={{span:6}} key={test._id}>
             <Card title="Card title" bordered={false}>{test.name}</Card>
           </Col>
          //  <li className="list-group-item" key={test.id}>
          //    {test.title}
          //  </li>
         )}
         {/* </ul> */}
         {/* <Col span="8" xs={{span:22}} md={{span:6}} key="{test.id}">
           <Card title="Card title" bordered={false}>{test.title}</Card>
         </Col> */}
         {/* <Col span="8" xs={{span:22}} md={{span:6}}>
           <Card title="Card title" bordered={false}>Card content</Card>
         </Col>
         <Col span="8"  xs={{span:22}} md={{span:6}}>
           <Card title="Card title" bordered={false}>new world order</Card>
         </Col>
         <Col span="8"  xs={{span:22}} md={{span:6}}>
           <Card title="Card title" bordered={false}>new world order</Card>
         </Col> */}
       </Row>
      </div>
    );
  };
// }

DemandList.propTypes = {
  tests: PropTypes.array.isRequired
};


export default DemandList;
