import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';

class UserForm extends React.Component {

  render() {
    return (
      <div>
       <form>
         <TextInput
           name="name"
           label="name"
           value={this.props.user.name}
           onChange={this.props.onChange}/>

         <TextInput
           name="password"
           label="password"
           value={this.props.user.password}
           onChange={this.props.onChange}/>

         {/* <TextInput
           name="admin"
           label="admin"
           value={this.props.user.admin}
           onChange={this.props.onChange}/> */}

         <input
           type="submit"
          //  disabled={this.props.saving}
           className="btn btn-primary"
           onClick={this.props.onSave}/>
       </form>
     </div>
    );
  }

}

UserForm.propTypes = {
  user: React.PropTypes.object.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired
};

export default UserForm;
