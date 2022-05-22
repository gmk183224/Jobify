import { useState, useEffect } from "react";
import { Logo,FormRow,Alert} from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
  showAlert:false,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  //global
  const ToggleMember=()=>{
      setValues(...values,isMember=!values.isMember);
  }
  const handleChange = (e) => {
    console.log(e.target);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };
  return (
    <Wrapper className="full-page">
      <form className="form">
        <Logo />
        <h2>{values.isMember?'Login':'Register'}</h2>
        {showAlert&&<Alert/>}
        {/*Name input*/}
        {!values.isMember&&(
            <FormRow
            type='text'
            name='name'
            value={values.name}
            handleChange={handleChange}
            />
        )
        }
        
        {/*email input */}
        <FormRow
        type='text'
        name='email'
        value={values.email}
        handleChange={handleChange}
        />
        {/*password input*/}
        <FormRow
        type='text'
        name='password'
        value={values.password}
        handleChange={handleChange}
        />

        <button type="submit" className="btn btn-block">
          submit
        </button>

        <p>
          {values.isMember?'Not a Member yet':'Already a Member'}
          <button type='button' onClick={ToggleMember} className='member-btn'>
          Register
          </button>
        
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;