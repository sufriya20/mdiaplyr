import React from 'react'
import {Row,Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <>
    <div className='p-5 container-fluid p-5 bg-info mt-5'>
    <Row>
      <Col>
      <h3>Media-Player 2024</h3>
      <p style={{textAlign:'justify'}}>A media player is a device or software application that plays audio and video files,
         and can also be used to organize, rip, burn, and purchase media.
         Media players can play media from a variety of sources</p>
      </Col>
      <Col>
      <h3>Links</h3>
      <div className='d-flex flex-column'>
        <Link to={'/'} style={{color:'black'}}>Landing</Link>
        <Link to={'/dash'} style={{color:'black'}}>Dashboard</Link>
        <Link to={'/his'} style={{color:'black'}}>Watch History</Link>
      </div>
      </Col>
      <Col>
      <h3>Contact Us</h3>
      <p className='my-4'>mediaplayer2024@gmail.com</p>
      <textarea name="" className='form-control' id=""></textarea>
      <button className='btn btn-secondary mt-2'>send</button>
      </Col>
    </Row>
    </div>
    </>
  )
}

export default Footer