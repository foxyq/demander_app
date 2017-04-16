import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as testActions from '../../actions/testActions';


import {Link} from 'react-router';

import HomeCover from '../home/HomeCover';
import HomeIntro from '../home/HomeIntro';
import DemandList from '../common/DemandList';
import ServiceList from '../common/ServiceList';


class HomePage extends React.Component {
  render() {
    return (
      <div>
        <HomeCover />
        <HomeIntro />
        <DemandList tests={this.props.tests} />
        <ServiceList />

      </div>
    );
  }
}

HomePage.propTypes = {
  tests: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
      tests: state.tests
    };
}

export default connect(mapStateToProps)(HomePage);

// export default HomePage;
