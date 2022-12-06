import React, {useState, useEffect} from 'react';
import {
  MDBIcon,
  MDBContainer,
 
  MDBTypography,
} from 'mdb-react-ui-kit'
import {useParams, Link} from 'react-router-dom';
import axios from 'axios'
import { toast } from 'react-toastify'



const BlogDesc = () => {
  const [blog, setBlog] = useState();
  const {id} = useParams();

  useEffect(() =>{
    if(id){
     getSingleBlog();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[id])

  const getSingleBlog = async () => {
    const response = await axios.get(`http://localhost:3010/Blogs/${id}`);
    if(response.status === 200){
      setBlog(response.data);
    }else{
      toast.error("SOmething went wrong");
    }
  };
  
  
  return (
    <>
    <div style={{
        backgroundColor: 'black',
        minHeight:'100vh'
      }}>
    <MDBContainer style={{border:"1px solid #d1ebe8"}}>
      <Link to='/'>
        <strong style={{float: 'left', color:'#FFCDD2'}} className='mt-3'>
          Go Back
        </strong>
      </Link>
      <MDBTypography tag='h1' className='md-6 mb-4 ' style={{color:'#ffff',marginTop:'20px'}}>
        {blog && blog.title}
      </MDBTypography>

      <img 
      src={blog && blog.imageURL}
      className='img-fluid rounded'
      alt={blog && blog.title}
      style={{width:'100%', maxHeight:'500px'}}
      />
      <div style={{marginTop:'20px'}}>
        <div style={{height:'43px', background:'#212121'}}>
          <MDBIcon
          style={{float:'left', marginLeft:'8px', color:'red'}}
          className='mt-3'
          far
          icon='calendar-alt'
          size='lg'
          />
          <strong style={{float:'left', marginTop:'6px', marginLeft:'5px', color:'red'}}>
            {blog && blog.date}
          </strong>
        </div>
        <MDBTypography tag='h5' className='md-6 mb-4 ' style={{color:'#fff', fontFamily:'cursive',marginTop:'20px'}}>
          {blog && blog.description}
        </MDBTypography>
      </div>
    </MDBContainer>
    </div>
    </>
  );
 };

export default BlogDesc
