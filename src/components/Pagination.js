import React from 'react'
import {
    MDBPagination, MDBPaginationItem, MDBPaginationLink, MDBBtn
} from 'mdb-react-ui-kit'

const Pagination = ({currentPage, pageLimit, loadBlogsData, data, totalBlog}) => {

    const renderPagination = () =>{
        if((currentPage === 0 && data.length < 6) || (totalBlog === pageLimit && currentPage === 0)) return null;
        if(currentPage === 0 ){
            return(
                <MDBPagination center className='mb-4' b>
                    <MDBPaginationItem>
                        <MDBPaginationLink style={{color:'white'}}>1</MDBPaginationLink>
                    </MDBPaginationItem>
                    <MDBPaginationItem>
                            <MDBBtn
                            style={{color:'white', backgroundColor:'red'}}
                              onClick={() => loadBlogsData(6, 12, 1)} >
                                Next
                            </MDBBtn>  
                                                 
                    </MDBPaginationItem>
                </MDBPagination>
            )
        }
        else if(currentPage < pageLimit -1 && data.length === pageLimit && (totalBlog -data.length) !==pageLimit){
            return (
            <MDBPagination center className='mb-0'>
                    <MDBPaginationItem>
                            <MDBBtn 
                            style={{color:'white', backgroundColor:'red'}}
                            onClick={() => loadBlogsData((currentPage -1)*6, currentPage * 6, -1)}>
                                Prev
                            </MDBBtn>
                            </MDBPaginationItem>
                        <MDBPaginationItem>     
                        <MDBPaginationLink style={{color:'white'}}>{currentPage + 1}</MDBPaginationLink>
                    </MDBPaginationItem>
                    <MDBPaginationItem>
                            <MDBBtn style={{color:'white', backgroundColor:'red'}}  onClick={() => loadBlogsData((currentPage + 1)*6, (currentPage + 2) * 6, 1)} >
                                Next
                            </MDBBtn>
                        </MDBPaginationItem>
                </MDBPagination>
            );
        }else{
            return(
                <MDBPagination center className='mb-0'>
                <MDBPaginationItem>
                        <MDBBtn style={{color:'white', backgroundColor:'red'}} onClick={() => loadBlogsData((currentPage -1) * 6, currentPage * 6, -1)} >
                            Prev
                        </MDBBtn>
                        </MDBPaginationItem>
                    <MDBPaginationItem>           
                    <MDBPaginationLink style={{color:'white'}}>{currentPage + 1}</MDBPaginationLink>
                </MDBPaginationItem>
                </MDBPagination>
            );
        }
    }
  return (
    <div>
      {renderPagination()}
    </div>
  )
}

export default Pagination
