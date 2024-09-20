import React from 'react'
import {Row,Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Landing() {
  return (
    <>
    <div className='container-fluid p-5'>
      <Row>
        <Col className='d-flex flex-column justify-content-center'>
        <h1>Media-Player</h1>
        <p style={{textAlign:'justify'}}>A media player is a device or software application that plays audio and video files,
         and can also be used to organize, rip, burn, and purchase media.
         Media players can play media from a variety of sources</p>
         <div className='d-grid'>
          <Link to={'/dash'} className='btn btn-secondary'>Lets Go</Link>
         </div>
        </Col>
        <Col>
        <img src="https://www.nicepng.com/png/detail/356-3562343_youtube-studio-illustration-illustration.png"
        className='img-fluid' alt="landing" />
        </Col>
      </Row>
    </div>
    <div className='container-fluid p-5 mt-3'>
      <h4 className='text-center mb-3'>Features</h4>
      <div className='row justify-content-around'>

      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height={'200px'} src="https://i.pinimg.com/originals/21/80/1f/21801f4aaed85514b1d0f0c1f8fea275.gif" />
      <Card.Body>
        <Card.Title>Simple Upload</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height={'200px'} src="https://cdn.dribbble.com/users/188886/screenshots/2025682/rewarded_video_gif_dribbble.gif" />
      <Card.Body>
        <Card.Title>Watch Vedios</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height={'200px'} src="https://cdn.dribbble.com/users/107759/screenshots/4063053/ui8-dribb2.gif" />
      <Card.Body>
        <Card.Title>Catogorize</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
    </div>
    <div className='p-5 container-fluid '></div>
    <Row>
      <Col md={8}>
      <h3>Simple and Faster</h3>
      <p style={{textAlign:'justify'}}>A media player is a device or software application that plays audio and video files,
         and can also be used to organize, rip, burn, and purchase media.
         Media players can play media from a variety of sources</p>
      </Col>
      <Col md={4}>
      <iframe width="100%" height="315" src="https://www.youtube.com/embed/V_2mmgzp274?si=luYgviDJkrA8lebg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </Col>
    </Row>
    </>
  )
}
import { Form } from 'react-router-dom'
import { formToJSON } from 'axios'

export default Landing