import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as testActions from '../../actions/testActions';
import {Link} from 'react-router';

import InfoStripe from '../common/InfoStripe';
import CompanyCover from '../company/CompanyCover';
import CompanyData from '../company/CompanyData';
import CompanyAbout from '../company/CompanyAbout';
import ServiceList from '../common/ServiceList';
import DemandList from '../common/DemandList';
import MapGoogle from '../common/MapGoogle';

// const tests = this.props.tests;

class CompaniesPage extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.tests.map( test =>
            <li key={test._id}>
              <Link to={'/companies/' + test._id}>{test.name}</Link>
            </li>
          )}
        </ul>
        <MapGoogle />
        <div className="col-md-8">
          {this.props.children}
        </div>
      </div>
    );
  }
}

CompaniesPage.propTypes = {
  tests: PropTypes.array.isRequired,
  children: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return {
      tests: state.tests
    };
}

export default connect(mapStateToProps)(CompaniesPage);
