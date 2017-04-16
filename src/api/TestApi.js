class testApi {
  static getAllTest() {
    // return fetch('https://jsonplaceholder.typicode.com/posts').then(response => {
    return fetch('http://192.168.0.136:3001/users').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default testApi;
