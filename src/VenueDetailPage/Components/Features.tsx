import BadmintonIcon from"./../../Images/badminton-racket-and-feather-svgrepo-com.svg";
import ShowerIcon from "./../../Images/shower-svgrepo-com.svg";
import ShoeIcon from "./../../Images/shoes-7-svgrepo-com.svg";
import SnacksIcon from "./../../Images/salty-snack-svgrepo-com.svg";
import BackgroundImage from './../../Images/unsplash-photo-1.jpg'
export const Features = ()=>{

    return(<div>
        
        <div className="container px-4 py-5" id="icon-grid">
  <h3 className="pb-2 border-bottom">Amenities</h3>

  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">

    <div className="col d-flex align-items-start">
    <img src={BadmintonIcon} className="bi text-body-secondary flex-shrink-0 me-3" width="50px" height="50px"  alt="My Icon" />
      <div>
        <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Rental Badminton</h3>
        <p>Paragraph of text beneath the heading to explain the heading.</p>
      </div>
    </div>
    <div className="col d-flex align-items-start">
    <img src={ShoeIcon} className="bi text-body-secondary flex-shrink-0 me-3" width="50px" height="50px"  alt="My Icon" />
      <div>
        <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Rental shoes</h3>
        <p>Paragraph of text beneath the heading to explain the heading.</p>
      </div>
    </div>
    <div className="col d-flex align-items-start">
    <img src={SnacksIcon} className="bi text-body-secondary flex-shrink-0 me-3" width="50px" height="50px"  alt="My Icon" />
      <div>
        <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Snacks & Drinks</h3>
        <p>Paragraph of text beneath the heading to explain the heading.</p>
      </div>
    </div>
    <div className="col d-flex align-items-start">
    <img src={ShowerIcon} className="bi text-body-secondary flex-shrink-0 me-3" width="50px" height="50px"  alt="My Icon" />
      <div>
        <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Shower area</h3>
        <p>Paragraph of text beneath the heading to explain the heading.</p>
      </div>
    </div>
  </div>
</div>

<div className="container marketing">
<div className="row">
      <div className="col-lg-4">
        <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg>
        <h2 className="fw-normal">Heading</h2>
        <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
        
      </div>
      <div className="col-lg-4">
        <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg>
        <h2 className="fw-normal">Heading</h2>
        <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
       
      </div>
      <div className="col-lg-4">
        <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg>
        <h2 className="fw-normal">Heading</h2>
        <p>And lastly this, the third column of representative placeholder content.</p>
       
      </div>
    </div>
  </div>

  <div className="container px-4 py-5" id="custom-cards">
  <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
  <div className="col">
        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
        style={{
          backgroundImage: `url(${require('./../../Images/unsplash-photo-1.jpg')})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
        
        >
          
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Short title, long jacket</h3>
        
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
               style={{
                backgroundImage: `url(${require('./../../Images/unsplash-photo-2.jpg')})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}>
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Much longer title that wraps to multiple lines</h3>
            
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" 
             style={{
              backgroundImage: `url(${require('./../../Images/unsplash-photo-3.jpg')})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}>
          <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
            <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Another longer title belongs here</h3>
           
          </div>
        </div>
      </div>
    </div>

</div>
  </div>)
}