import React from 'react';

import { Steps, Icon } from 'antd';
const Step = Steps.Step;

class HomeIntro extends React.Component {
  render() {
    return(
    <div>
      <Steps>
        <Step status="finish" title="Login" icon={<Icon type="user" />} />
        <Step status="finish" title="Verification" icon={<Icon type="solution" />} />
        <Step status="finish" title="Pay" icon={<Icon type="credit-card" />} />
        <Step status="finish" title="Done" icon={<Icon type="smile-o" />} />
    </Steps>
    </div>

    );
  }
}

export default HomeIntro;
