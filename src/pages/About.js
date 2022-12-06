import React from 'react'
import {MDBContainer, MDBTypography} from 'mdb-react-ui-kit'

const About = () => {
  return (
  <>
    <div
    style={{
      backgroundColor: 'black',
      minHeight:'100vh'
    }}>
      <MDBContainer fluid style={{marginTop:'300px'}}>
        <MDBTypography tag='h4' note noteColor='info'>
          <strong>
          This is a Simple Blog using ReactJS and BootStrap 5. In This Blog user can create Blog, 
          read Blog and also Delete their blog. 
          </strong>
        </MDBTypography>
      </MDBContainer>


      </div>
  </>
  )
}

export default About
