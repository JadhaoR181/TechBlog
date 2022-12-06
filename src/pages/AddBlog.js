import React, { useEffect, useState } from 'react'
import {MDBValidation, MDBInput, MDBBtn, MDBTextArea, MDBValidationItem } from 'mdb-react-ui-kit';
import {Form, useNavigate, useParams} from 'react-router-dom'
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const initialstate = {
  title:"",
  description:"",
  imageURL:""
}

const AddBlog = () => {
  const[formValue, setFormValue] = useState(initialstate);
  const {title, description, imageURL} = formValue;
  const [editMode, setEditMode] = useState(false);

  const navigate = useNavigate();

  const {id} = useParams();

  useEffect(() =>{
    if(id){
      setEditMode(true);
      getSingleBlog(id)
    }else{
      setEditMode(false);
      setFormValue({...initialstate});
    }
  }, [id])

  const getSingleBlog = async (id) =>{
    const singleBlog = await axios.get(`http://localhost:3010/Blogs/${id}`);
    if(singleBlog.status === 200) {
    setFormValue({...singleBlog.data});
  }else{
    toast.error("Something went wrong");
  }
  }

  const getDate = ()=>{
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0");
    let yyyy = today.getFullYear();

    today = dd + "/" + mm + "/" + yyyy;
    return today;
  }

  const handlesubmit = async (e) => {
    e.preventDefault();

    const imageValidation = !editMode ? imageURL : true;
    if(title && description && imageURL){
      const currentDate = getDate();
      if(!editMode){
        const updatedBlogData  = {...formValue, date: currentDate};
        const response = await axios.post("http://localhost:3010/Blogs", updatedBlogData);
        if(response.status === 201){
          toast.success('Blog Created Succesfully')
        }
        else{
          toast.error('Something went wrong');
        }
      }
      else{
        const response = await axios.put(
          `http://localhost:3010/Blogs/${id}`, 
        formValue);
        if(response.status === 200){
          toast.success('Blog Updated Succesfully')
        }
        else{
          toast.error('Something went wrong');
        }
      }
    
      setFormValue({title:"", description:"", imageURL:""})
      navigate('/');
    }
  };

  const onInputChange = (e) => {
    let {name, value} = e.target;
    setFormValue({...formValue,[name]: value });
  };

  const onUploadImage = (file) => {
    console.log("file", file);
    const formData = new FormData();
    formData.append("file", file);
    formData.append('upload_preset','ijm1ykwi')
    axios.post('http://api.cloudinary.com/v1_1/dal8uhh80/image/upload', formData)
    .then((resp) =>{
      toast.success('File Uploaded Succesfully !', {
        position: toast.POSITION.TOP_RIGHT
    });
      setFormValue({...formValue,imageURL: resp.data.url})
    }).catch((err) =>{
      toast.error("Somethin went wrong")
    });

  };

  return (
    <>
    <div
    style={{
      backgroundColor: 'black',
      minHeight:'100vh'
    }}>
   <MDBValidation className='center' 
   style={{marginTop:"4px", maxWidth:'100%'}} 
   noValidate onSubmit={handlesubmit}
   > <p className='fs-1 fw-bolder text-danger'>{editMode ? "Update Blog" : "Add Blog"}</p>
    <div 
    style={{
      margin:'auto',
      maxWidth:'100vh',
      alignContent:'center',
    }}>

      <MDBValidationItem  feedback='Please Provide Title' invalid>
      <MDBInput
      style={{color:'#90A4AE', outline:'red'}}
      size='lg'
      wrapperClass='mb-4'
      value={title|| ""}
      labelClass='text-danger'
      name="title"
      type='text' 
      onChange={onInputChange}
      required
      label="Title"
    
      />
      </MDBValidationItem>
      <br/>
      <MDBValidationItem feedback='Please Provide Description' invalid>
      <MDBTextArea
        style={{color:'#90A4AE', border:'red'}}
      value={description || ""}
      labelClass='text-danger'
      name="description"
      type='text'
      onChange={onInputChange}
      required
      label='Description'
      rows={5}
      />
      </MDBValidationItem>
      <br/>
      
      {!editMode && (
        <>
         <MDBValidationItem feedback='Please Choose A File' invalid>
      <MDBInput
      type='file'
      style={{color:'#B71C1C', border:'2px solid red', display:'inline-block', padding:'6px 12px', cursor:'pointer' }}
      size='lg'
      color='text-danger' 
      onChange={(e) => onUploadImage(e.target.files[0])}
      required
      />
      </MDBValidationItem>
      <br/>
        </>
      )}
     
      <br/>
      <br/>

      <MDBBtn type='submit' size='lg' style={{marginRight: "30px", backgroundColor:'#B71C1C', fontFamily:'cursive'}}>{editMode ? "Update" : "Add"}</MDBBtn>
      
      <MDBBtn color='danger' size='lg' style={{marginLeft: "20px", fontFamily:'cursive'}} onClick={()=> navigate('/')}>Go Back</MDBBtn>


    </div>
   </MDBValidation>

  
   </div>
   </>
 );
};

export default AddBlog
