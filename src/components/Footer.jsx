import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp,faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import React from 'react'

function Footer() {
  return (
    <div className='py-5 px-3'>
      <div className='container-fluid'>
        <div className="row">
          <div className="col-md-4">
            <h3 className='text-warning'><FontAwesomeIcon icon={faVideo} className='me-3' style={{color: "#FFD43B",}} /> Media Player</h3>
            <p  className='mt-3' style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium neque in nulla accusamus! Architecto dolore nobis a doloribus? Sunt voluptatem placeat repellat deleniti quod quo dolores quibusdam doloribus fugit recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, deserunt veniam dolor, quas deleniti praesentium vel voluptatum, nam sit ad adipisci. Esse qui iure consequuntur similique incidunt quas cum ex.</p>
          </div>
          <div className="col-md-2 d-flex justify-content-center mt-4 mt-md-0">
            <div>
              <h3>Links</h3>
              <Link to={'/'}><p>Landing Page</p></Link>
              <Link to = {'/home'}><p>Home Page</p></Link>
              <Link to ={'/watchhistory'}><p>Watch History</p></Link>
            </div>
          </div>
          <div className="col-md-2 d-flex justify-content-center mt-4 mt-md-0">
            <div>
              <h3>Guides</h3>
              <p>React</p>
              <p>React Bootstrap</p>
              <p>Bootwatch</p>
            </div>
          </div>
          <div className="col-md-4 px-5">
            <h3>Contact Us</h3>
            <div className='mt-3 d-flex justify-content-center'>
              <input type="text" placeholder='Email Id' className='form-control' />
              <button className='btn btn-warning ms-3'>Subscribe</button>
            </div>
            <div className="d-flex justify-content-between mt-4">
            <FontAwesomeIcon icon={faInstagram} className='fa-2x' />
            <FontAwesomeIcon icon={faXTwitter} className='fa-2x' />
            <FontAwesomeIcon icon={faFacebook} className='fa-2x' />
            <FontAwesomeIcon icon={faWhatsapp} className='fa-2x' />
            <FontAwesomeIcon icon={faLinkedin} className='fa-2x' />

            </div>
            <div>
  
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer