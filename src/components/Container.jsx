import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css' //  Import Bootstrap's CSS in Your Project
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; //  Import Bootstrap's JS in Your Project


function Container() {
  

  return (
    <>
   


      <div className="container my-5">
      <div className="row g-4"> {/* g-4 class to add gutter between columns */}
        {/* Card 1 */}
        <div className="col-md-3">
          <div className="card h-100"> {/* h-100 to ensure that all the card take same height */}
            <img
              src="https://spn-sta.spinny.com/blog/20231006232235/Tata-Sfari-header.webp?compress=true&quality=80&w=360&dpr=2.6"
              className="card-img-top"
              alt="Card Image 1"
              style={{ width: '100%', height: '200px', objectFit: 'cover' }} // Custom height, keeps aspect ratio
            />
            <div className="card-body  d-flex flex-column"> {/* use flexbox fonconsistent layout */}
              <h5 className="card-title">"Tata Safari"</h5>
              <p className="card-text">
              “This well-loved Tata Safari has been cared for and serviced regularly, with everything in top-notch condition for worry-free driving.”
              </p>
              <br />
              <p>The starting bid is set for $10000</p>
              

              <a href="#" className="btn btn-primary">
                BID NOW!!!
              </a>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-3">
          <div className="card h-100">{/* h-100 ensures all cards take same height */}
            <img
              src="https://images-cdn.ubuy.co.in/634d199b80cf5f5c377ea529-the-noble-collection-harry-potter.jpg"
              className="card-img-top"
              alt="Card Image 2"
              style={{ width: '100%', height: '200px', objectFit: 'cover' }} // Custom height, keeps aspect ratio
            />
            <div className="card-body  d-flex flex-column">{/* use flexbox for consistent layout */}
              <h5 className="card-title">"Ravenclaw's Diadem"</h5>
              <p className="card-text">
              "Bid now for the rarest of treasures—Rowena Ravenclaw's Diadem, a crown of wisdom and a key to untold secrets. Only those worthy may claim it."
              </p>
              <br />
              <p>The starting bid is set of $100000</p>
              <a href="#" className="btn btn-primary">
                BID NOW!!!
              </a>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-3">
          <div className="card h-100">{/* h-100 ensures all cards take same height */}
            <img
              src="https://m.media-amazon.com/images/I/61bLIgIReqL._AC_UF894,1000_QL80_.jpg"
              className="card-img-top"
              alt="Card Image 3"
              style={{ width: '100%', height: '200px', objectFit: 'cover' }} // Custom height, keeps aspect ratio
            />
            <div className="card-body  d-flex flex-column"> {/* use of flexbox for consistent layout */}
              <h5 className="card-title">"The Art of Majnu Bhai"</h5>
              <p className="card-text">
              "Own a piece of cinematic history! Majnu Bhai's iconic 'masterpiece' from Welcome, a truly unique blend of comedy and art. Signed by Majnu himself!"
              </p>
              <p> The starting bid is set as $50000000</p>
              <a href="#" className="btn btn-primary">
                BID NOW!!!
              </a>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col-md-3">
          <div className="card h-100">{/* h-100 ensures all cards take same height */}
            <img
              src="https://leadlifewell.com/wp-content/uploads/2019/02/ef206515423371e9ca6fcf7d04b7254f.png"
              className="card-img-top"
              alt="Card Image 4"
              style={{ width: '100%', height: '200px', objectFit: 'cover' }} // Custom height, keeps aspect ratio
            />
            <div className="card-body  d-flex flex-column"> {/* use of flexbox for consisent layout */}
              <h5 className="card-title">The Grazing Horse</h5>
              <p className="card-text">
              "For the horse enthusiast or nature lover, this painting perfectly encapsulates the grace and peace that come from being one with the land."
              </p>
              <br />
              <p>The starting bid is set as $10000 </p>
              <a href="#" className="btn btn-primary">
                BID NOW!!!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>








    </>
    
    
  )
}

export default Container