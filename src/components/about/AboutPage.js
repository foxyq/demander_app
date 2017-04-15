import React from 'react';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import { Steps } from 'antd';
const Step = Steps.Step;

class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <p>coming soon!</p>
        <DatePicker />
        <br/><br/><br/>
        <Steps current={1}>
			<Step title="Finished" description="This is a description." />
			<Step title="In Progress" description="This is a description." />
			<Step title="Waiting" description="This is a description." />
		</Steps>
      </div>
    );
  }
}


export default AboutPage;