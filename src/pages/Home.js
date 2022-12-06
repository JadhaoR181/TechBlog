import axios from 'axios';
import React,{useState, useEffect} from 'react'
import { toast } from 'react-toastify';
import {MDBRow, MDBCol, MDBContainer, MDBTypography} from 'mdb-react-ui-kit';
import Blog from '../components/Blog';
import Pagination from '../components/Pagination';

const Home = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalBlog, setTotalBlog] = useState(null);
  const [pageLimit] = useState(5);

  useEffect(() => {
    loadBlogsData(0, 6, 0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const loadBlogsData = async(start,end, increase, operation) => {
    const totalBlog = await axios.get('http://localhost:3010/Blogs');
    setTotalBlog(totalBlog.data.length);
    const response = await axios.get(`http://localhost:3010/Blogs?_start=${start}&_end=${end}`);
    if(response.status === 200){
      setData(response.data);
      if(operation){
        setCurrentPage(0)
      }else{
        setCurrentPage(currentPage + increase);
      }
    }else{
      toast.error('Somerthing Went Wrong Boy')
    }
  };
  console.log('data', data);

  const handleDelete = async(id) =>{
    if(window.confirm('Are you sure to delete this Blog?')){
      const response = await axios.delete(`http://localhost:3010/Blogs/${id}`);
      if(response.status === 200){
      toast.success('Blog Deleted Successfullly!!');
      loadBlogsData(0, 6, 0, 'delete');
      }else{
        toast.error('Somerthing Went Wrong Boy')
      }
    }

  };

  const excerpt = (str) => {
    if(str.length > 50) {
      str = str.substring(0, 70) + ' ... ';
    }
    return str;
  };
  return (
    <>
    <div
    style={{
      backgroundColor: 'black',
      minHeight:'100vh'
    }}>
    <h1 className='md-4 mb-4 w-100 text-danger' >Home Page</h1>
    <MDBRow>
      {data.length === 0 && (
        <MDBTypography className='text-center mb-0' tag='h2'>
          Blog Not Found
        </MDBTypography>
      )}
      <MDBCol>
        <MDBContainer>
          <MDBRow>
            {data && data.map((item, index) =>(
              <Blog 
              key={index}
              {...item}
              excerpt={excerpt}
              handleDelete={handleDelete}
              />
            ))}
          </MDBRow>
        </MDBContainer>
      </MDBCol>
      <div className='mt-3'>
        <Pagination currentPage={currentPage} loadBlogsData={loadBlogsData} pageLimit={pageLimit} data={data} totalBlog={totalBlog}/>
      </div>
    </MDBRow>
    </div>
    </>
    
  )
}

export default Home
