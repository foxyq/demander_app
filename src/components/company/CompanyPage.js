import React from 'react';
import {Link} from 'react-router';

import InfoStripe from '../common/InfoStripe';
import CompanyCover from '../company/CompanyCover';
import CompanyData from '../company/CompanyData';
import CompanyAbout from '../company/CompanyAbout';
import ServiceList from '../common/ServiceList';
import DemandList from '../common/DemandList';
import MapGoogle from '../common/MapGoogle';


class HomePage extends React.Component {
  render() {
    return (
      <div>
        <InfoStripe />
        <CompanyCover />
        <CompanyData />
        <CompanyAbout />
        <ServiceList />
        <DemandList />
        <MapGoogle />
      </div>
    );
  }
}

export default HomePage;
