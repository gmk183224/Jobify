import { Link } from "react-router-dom";
import img from '../assets/images/not-found.svg';
import Wrapper from "../assets/wrappers/ErrorPage";
const Error = () => {
  return (
    <Wrapper className="full-page">
    <div>
    <img src={img} alt='error'/>
    <h2>Page not Found!!!</h2>
    <h3>We can't find what you're looking for.....</h3>
    <Link to='/'>Back Home</Link>
    </div>
    </Wrapper>
  )
}

export default Error