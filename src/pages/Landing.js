import Logo from '../components/Logo.js';
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage.js';

const landing = () => {
  return <Wrapper>
    <nav>
        <Logo />
    </nav>
    <div className="container">
       <div className="info">

            <h1>Job <span>Tracking</span> App</h1>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum quibusdam delectus eius voluptas consectetur alias iure blanditiis sint. Nostrum nisi ea cum quis tenetur minima dignissimos accusantium hic voluptates, officia blanditiis quisquam ex.
            </p>

            <button className='btn btn-hero'>Login/Register</button>
       </div>
        <img src={main} alt="job hunt" className='img main-img'/>
    </div>
  
  </Wrapper>
}

export default landing