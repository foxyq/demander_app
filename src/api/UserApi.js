import axios from 'axios';

class UserApi {

  static getAllUsers() {
    return fetch('http://192.168.0.136:3001/users').then(response => {
      return response.json()
    }).catch(error => {
      return error
    });
  }


static updateUser(user) {
    // const request = new Request('http://192.168.0.136:3001/users/${user._id}', {
    //   method: 'PUT',
    //   headers: new Headers({
    //     'Content-Type': 'application/json'
    //   }),
    //   body: JSON.stringify({user: user})
    // });
    axios.put('http://192.168.0.136:3001/users/${user._id}', user)
.then(function(response){
  console.log('saved successfully')
});
}

}
export default UserApi;
