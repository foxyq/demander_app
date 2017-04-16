import React, {PropTypes} from 'react';
import { Card, Col, Row } from 'antd';

  const DemandList = ({tests}) => {
    return(
      <div style={{ background: '#ECECEC', padding: '30px' }}>
        <h2>nabidky</h2>
       <Row>
         {tests.map( test =>

           <Col span="8" xs={{span:22}} md={{span:6}} key={test.id}>
             <Card title={test.name} bordered={false}>{test.email}</Card>
           </Col>

         )}
       </Row>
      </div>
    );
  };

DemandList.propTypes = {
  tests: PropTypes.array.isRequired
};


export default DemandList;
