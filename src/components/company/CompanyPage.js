import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as userActions from '../../actions/userActions';

import InfoStripe from '../common/InfoStripe';
import CompanyCover from '../company/CompanyCover';
import CompanyData from '../company/CompanyData';
import CompanyAbout from '../company/CompanyAbout';
import ServiceList from '../common/ServiceList';
import DemandList from '../common/DemandList';
import MapGoogle from '../common/MapGoogle';
import UserForm from '../forms/UserForm';


function mapStateToProps(state, ownProps) {
  let user = { name: '', password: ''};
  const userId = ownProps.params.id;
  if (state.users.length > 0) {
    user = Object.assign({}, state.users.find(user => user._id == userId) );
  }
  return {user: user};
}

class CompanyPage extends React.Component {
  constructor(props, context) {
      super(props, context);
      this.state = {
       isEditing: false,
       user: this.props.user
       };

      this.toggleEdit = this.toggleEdit.bind(this);
      this.saveUser = this.saveUser.bind(this);
      this.updateUserState = this.updateUserState.bind(this);
    }

  componentWillReceiveProps(nextProps) {
    if (this.props.user._id != nextProps.user._id) {
      this.setState({user: nextProps.user});
    }
  }

  saveUser(event) {
   event.preventDefault();
   this.props.actions.updateUser(this.state.user);
   }

  toggleEdit() {
    this.setState({isEditing: !this.state.isEditing});
  }

  updateUserState(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;
    return this.setState({user: user});
  }

  render() {
    if (this.state.isEditing) {
     return (
       <div>
         <h1>edit user</h1>
         <UserForm
         user={this.state.user}
         onSave={this.saveUser}
         onChange={this.updateUserState} />
       </div>
     );
   }
  else {
    return (
      <div>
        <InfoStripe />

          <div className="col-md-8 col-md-offset-2" style={{ background:'#dddddd' }}>
            <h1>{this.props.user.name}</h1>
            <p>pass: {this.props.user.password}</p>
            <p>admin: {this.props.user.admin}</p>
            <button onClick={this.toggleEdit}>edit</button>
          </div>



        <CompanyCover />
        <CompanyData />
        <CompanyAbout />
        <ServiceList />
        {/* <DemandList /> */}
        <MapGoogle />
      </div>
    );
  }
}
}

CompanyPage.propTypes = {
  user: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CompanyPage);
