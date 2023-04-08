import { useParams } from 'react-router-dom';
import { Carousel, theme } from 'antd';
import { Helmet } from "react-helmet-async";
import Login from "../components/Login";


function Login(props) {
    const { redirect } = QueryString.parse(props.location.search);
    const [isNavBarVisible, setIsNavBarVisible] = useState(true);
    return (
      <Layout className="container main-layout">
          <div className="login-main-area">
              <div className="Login">
                  <LoginCard redirect={redirect}/>
              </div>
          </div>
        
      </Layout>
    );
  }
  
  export default Login;
  
