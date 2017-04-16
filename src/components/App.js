import React, {PropTypes} from 'react';
import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;
import DemanderHeader from './layout/DemanderHeader';
import DemanderFooter from './layout/DemanderFooter';
import 'antd/dist/antd.css';
import '../assets/css/style.css';

class App extends React.Component {
  render() {
    return (
       <Layout>

         <Header>
          <DemanderHeader/>
         </Header>

         <Content >
           {this.props.children}
         </Content>

         <Footer style={{backgroundColor:"#3798b8"}}>
           <DemanderFooter/>
         </Footer>

       </Layout>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
