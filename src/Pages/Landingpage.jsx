import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Landingpage() {
  return (
    <>
      <Container className='mt-5'>
        <Row className='d-flex justify-content-center align-items-center mt-5'>
          <Col md={6}>
            <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
            <p style={{ textAlign: 'justify' }} className='mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat magni mollitia est porro voluptate dolorem voluptas dolorum reprehenderit impedit quia amet ea nisi nostrum laudantium, quam provident maxime dolores unde. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit nobis libero, aliquam pariatur provident sed eligendi expedita fuga rerum debitis. Iste illum totam consequatur ratione odio natus itaque? Maiores, eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia odio aut, cupiditate a illo sed nihil maiores deleniti fuga repellendus illum optio, ab sequi consequuntur iure iste aliquam. Dicta, labore.</p>
            <Link to ='/home'><button className='btn btn-warning mt-4'>Get Started</button></Link>
          </Col>
          <Col md={6} className='d-flex justify-content-center'>
            <img src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif" alt="" className='w-50 ms-5' />
          </Col>
        </Row>
      </Container>

      <Container className='my-5'>
        <h1 className='text-center'>Features</h1>
        <Row>
          <Col md={4}>
            <Card style={{ width: '100%' }} className='p-3 mt-5'>
              <Card.Img variant="top" src="https://media.tenor.com/r7LADqyXxkcAAAAM/music.gif" className= 'w-100' height={'400px'} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
          <Card style={{ width: '100%'}} className='p-3 mt-5' >
              <Card.Img variant="top" src="https://i.pinimg.com/originals/6f/5f/f3/6f5ff36fd8ffefa40bf466df6c693ef1.gif" className= 'w-100' height={'400px'} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
          <Card style={{ width: '100%'}} className='p-3 mt-5'>
              <Card.Img variant="top" src="https://media.tenor.com/yO2w1FK1IQIAAAAM/music.gif" className= 'w-100' height={'400px'} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className='rounded' style={{border:'1px solid white' , padding:'30px'}}>
        <Row>
          <Col md={6}>
          <h1 className='text-warning'>Simple fast and powerful</h1>
          <p><span style={{fontSize:'40px' ,textAlign: 'justify'}}>Lorem ipsum</span> : dolor sit amet consectetur adipisicing elit. Esse, eum quis rerum laboriosam laborum nihil, asperiores velit quod dignissimos nulla numquam provident error repellat corporis cum eveniet! Culpa, labore beatae.</p>
          <p><span style={{fontSize:'40px', textAlign: 'justify'}}>Lorem ipsum</span> : dolor sit amet consectetur adipisicing elit. Esse, eum quis rerum laboriosam laborum nihil, asperiores velit quod dignissimos nulla numquam provident error repellat corporis cum eveniet! Culpa, labore beatae.</p>
          <p><span style={{fontSize:'40px', textAlign: 'justify'}}>Lorem ipsum</span> : dolor sit amet consectetur adipisicing elit. Esse, eum quis rerum laboriosam laborum nihil, asperiores velit quod dignissimos nulla numquam provident error repellat corporis cum eveniet! Culpa, labore beatae.</p>
          </Col>
          <Col md={6} className='d-flex justify-content-center align-items-center'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/roz9sXFkTuE?si=yjvgH1WEV08Bs1VP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </Col>
        </Row>
      </Container>

    </>
  )
}

export default Landingpage