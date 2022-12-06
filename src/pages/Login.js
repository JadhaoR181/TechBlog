import React from 'react';
import {
  MDBContainer,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

const Login = () => {

  return (
    <div
    style={{
      backgroundColor: 'black',
    }}
>
    <MDBContainer className="p-3 d-flex flex-column w-50">
        <div className="text-center">
              <img src="/Images/TBLogo.png"
                style={{width: '400px', height:'100px', margin:'40px'}} alt="logo" />
              <h2 className="mt-1 mb-5 pb-1 text-danger">Login</h2>
            </div>

      <MDBInput wrapperClass='mb-4' labelClass='text-danger' label='Email address' id='form1' type='email'/>
      <MDBInput wrapperClass='mb-4' labelClass='text-danger' label='Password' id='form2' type='password'/>

      <div className="d-flex justify-content-between mx-3 mb-4 text-danger">
        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
        <a style={{color:'red'}} href="!#" >Forgot password?</a>
      </div>

      <MDBBtn className="mb-4 w-100 bg-danger">Sign in</MDBBtn>

      <div className="text-danger">
        <p>Not a member? <a style={{color:'red'}} href="/">Register</a></p>

      </div>

    </MDBContainer>
    </div>
  );
}
export default Login
