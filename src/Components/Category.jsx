import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form'
import { toast } from 'react-toastify';
import { addCategoryApi } from '../service/allAPI';
import CategorySet from './CategorySet';


function Category() {
  const [show, setShow] = useState(false);
  const [cat,setcat]=useState("")
  
  const handleCategory=async()=>{
    if(!cat){
      toast.warning("enter a valid Input!!")
    }
    else{
      const result=await addCategoryApi({category:cat,videos:[]})
      if(result.status==201){
        toast.success("category Added!!")
        setcat("")
        handleClose()
      
      }
      else{
        toast.error("Adding failed!!")
        console.log(result)
      }
    }
  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <div className='d-grid'>
    <Button className='btn btn-info' onClick={handleShow}> Add Category</Button>
    </div>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>
        <FloatingLabel controlId="floatingP" label="add category" onChange={(e)=>{setcat(e.target.value)}} className='mb-3'>
        <Form.Control type="text" placeholder="name@example.com" />
      </FloatingLabel>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCategory}>Add</Button>
        </Modal.Footer>
      </Modal>
     <CategorySet/>
    </>
  )
}

export default Category