import { useState } from 'react'
import'./style.css'
import 'bootstrap/dist/css/bootstrap.min.css' //  Import Bootstrap's CSS in Your Project
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; //  Import Bootstrap's JS in Your Project

function Dashboard() {
  

  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide" style={{height:'550px'}}>
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
    <div className="ratio ratio-16x9">
      <img src="https://bid.auctionsasap.com/asset/image/3210339/large" className="d-block w-100" alt="..." style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
      </div>
      {/* <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div> */}
    </div>


    <div className="carousel-item">
    <div className="ratio ratio-16x9">
      <img src="https://bid.auctionsasap.com/asset/image/3210341/large" className="d-block w-100" alt="..."  style={{ width: '100%', height: '400px', objectFit: 'cover' }}/>
      </div>
      {/* <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div> */}
    </div>



    <div className="carousel-item">
    <div className="ratio ratio-16x9">
      <img src="https://bid.auctionsasap.com/asset/image/3211399/large" className="d-block w-100" alt="..."  style={{ width: '100%', height: '400px', objectFit: 'cover' }}/>
      </div>
      {/* <div className="carousel-caption d-none d-md-block">
        <h5>third slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div> */}
    </div>


    <div className="carousel-item">
    <div className="ratio ratio-16x9">
      <img src="https://bid.auctionsasap.com/asset/image/3211400/large" className="d-block w-100" alt="..." style={{ width: '100%', height: '400px', objectFit: 'cover' }}/>
      </div>
      <div className="carousel-caption d-none d-md-block">
        {/* <h5>Forth slide label</h5> */}
        {/* <p>Some representative placeholder content for the third slide.</p> */}
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </>
    
    
  )
}

export default Dashboard
