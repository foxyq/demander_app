import React from 'react';

import CompanyLogo from './CompanyLogo';
import Title from '../common/Title';
import Slogan from '../common/Slogan';
import Categories from '../common/Categories';


class CompanyCover extends React.Component {

  render() {
    return (
      <div>
        <div className="medailon">
          <CompanyLogo />
          <Title />
          <Slogan />
        </div>

        <Categories />
      </div>
    );
  }

}

export default CompanyCover;
