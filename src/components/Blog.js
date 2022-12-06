import React from 'react'
import {
    MDBCol,
    MDBCard,
    MDBCardTitle,
    MDBCardBody,
    MDBCardImage,
    MDBCardText,
    MDBBtn,
    MDBIcon,
} from 'mdb-react-ui-kit'
import { Link } from 'react-router-dom'


const Blog = ({imageURL, title, description, id, excerpt, handleDelete}) => {
  return (
  
  <MDBCol size={4}>
    <MDBCard className=' mh-100 mt-4 bg-image hover-zoom hover-shadow border-danger border-dark' style={{ marginLeft:'0px', width:'400px',backgroundColor:'#263238' }}>
        <MDBCardImage src={imageURL}
        alt = {title}
        position='top'
        style={{maxWidth:'100%', height:'350px'}}
        />
        <MDBCardBody>
            <MDBCardTitle className='mb-3' tag='h4' style={{color:'#CFD8DC', fontFamily:'cursive'}}>{excerpt(title)}</MDBCardTitle>
            <MDBCardText className='mb-4' style={{color:'#FAFAFA', fontFamily:'cursive'}}>{excerpt(description)}
            <Link to={`/BlogDesc/${id}`}>Read More</Link>
            </MDBCardText>
            <span>
                <MDBBtn
                className='mt-1'
                tag='a'
                color='none'
                onClick={()=> handleDelete(id)}>
                  <MDBIcon
                  fas
                  icon='trash-alt'
                  style={{ color:'#dd4b39' }}
                  size='lg'
                  />
                  </MDBBtn>

                  
                    <Link to={`/editBlog/${id}`}>
                  <MDBIcon 
                  fas
                  icon='edit'
                  style={{color:'blue', marginLeft:'15px'}}
                  size='lg'
                  />
                  </Link>
            
            </span>
        </MDBCardBody>

    </MDBCard>
  </MDBCol>

  );
};

export default Blog
