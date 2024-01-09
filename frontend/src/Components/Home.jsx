import React from 'react';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
import './Footer.jsx'
import "./Home.css"
import Footer from './Footer.jsx';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <div>
     <section style={{backgroundColor: "#b8dfe0"}}>
    {/* <style
      dangerouslySetInnerHTML={{
        __html:
          "\n    .background-radial-gradient {\n      background-color: hsl(218, 41%, 15%);\n    hsl(218, 41%, 35%) 15%,\n          hsl(218, 41%, 30%) 35%,\n          hsl(218, 41%, 20%) 75%,\n          hsl(218, 41%, 19%) 80%,\n          transparent 100%),\n        radial-gradient(1250px circle at 100% 100%,\n          hsl(218, 41%, 45%) 15%,\n          hsl(218, 41%, 30%) 35%,\n          hsl(218, 41%, 20%) 75%,\n          hsl(218, 41%, 19%) 80%,\n          transparent 100%);\n    }\n\n    #radius-shape-1 {\n      height: 220px;\n      width: 220px;\n      top: -60px;\n      left: -130px;\n      background: radial-gradient(#44006b, #ad1fff);\n      overflow: hidden;\n    }\n\n    #radius-shape-2 {\n      border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%;\n      bottom: -60px;\n      right: -110px;\n      width: 300px;\n      height: 300px;\n      background: radial-gradient(#44006b, #ad1fff);\n      overflow: hidden;\n    }\n\n    .bg-glass {\n      background-color: hsla(0, 0%, 100%, 0.9) !important;\n      backdrop-filter: saturate(200%) blur(25px);\n    }\n  "
      }}
    /> */}
     {/* <header style={{backgroundImage: `url("https://i.gifer.com/RjtR.gif")`}}> */}
    <div className="container px-2 py-4 px-md-4 text-center text-lg-start">
      <div className="row gx-lg-5 align-items-center mb-5">
        <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
          <h1
            className="my-5 display-5 fw-bold ls-tight"
            style={{ color: "hsl(215, 54.89%, 34.98%)" }}
          >
           "Building a brighter tomorrow, one step at a time."
          
          </h1>
          <p
            className="mb-4 opacity-100"
            style={{ color: "hsl(213, 65.22%, 54.45%)" }}
          >
            Every little bit counts. Donate, volunteer and be a part of the solution with us!<br/>
            Use #ourscheme to show your support and connect with others who care.
          </p>
        </div>
        <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
        
          <div className="card bg-glass">
            <div className="card-body ">
           <img src='https://vishnuias.com/wp-content/uploads/2021/04/Government-Schemes.jpg' className='d-block w-100' alt='...'  />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* </header> */}
  </section>
      <Swiper
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[ Navigation]}
        className="mySwiper mt-1"
      >
        <SwiperSlide>
        <img src='https://gudstory.s3.us-east-2.amazonaws.com/wp-content/uploads/2018/12/06202955/Pradhan-Mantri-Awas-Yojana.jpg' className='d-block w-100  img' alt='...' height='650px' />
        </SwiperSlide>
        <SwiperSlide>
        <img src='https://i.pinimg.com/564x/1a/b8/16/1ab81611f504e3f153c39b2f5c87f3dc.jpg' className='d-block w-100 img' alt='...' height='650px' />
        </SwiperSlide>
        <SwiperSlide>
        <img src='http://www.onepesa.com/content/images/2022/03/banner.jpg' className='d-block w-100 img' alt='...' height='650px' />
        </SwiperSlide>
        
      </Swiper>
      
      
      <div className="container text-center mt-4 mb-5">
        <div className="row align-items-start">
        <div className="col"><div className="card" style={{ width: "18rem" }}>
            {/* <img src="https://i.pinimg.com/564x/94/fc/94/94fc9491bcbe62a899cba1539a35ed96.jpg" className="card-img-top" alt="..." /> */}
            <div className="card-body">
              <h5 className="card-title">List of Applicant</h5>
              <p className="card-text">
               Applications received: 1980
              </p>
    
            </div>
          </div>
          </div>
          <div className="col"><div className="card" style={{ width: "18rem" }}>
            {/* <img src="https://i.pinimg.com/564x/54/49/e9/5449e990efd86c53a75a6b0c707d2fac.jpg" className="card-img-top" alt="..." /> */}
            <div className="card-body">
              <h5 className="card-title">Approved Application</h5>
              <p className="card-text">
               Approved: 1200
              </p>
              
            </div>
          </div>
          </div>
         
          <div className="col"><div className="card" style={{ width: "18rem" }}>
            {/* <img src="https://i.pinimg.com/564x/37/cc/18/37cc18c6a6d478a584cc6b5acee21d48.jpg" className="card-img-top" alt="..." /> */}
            <div className="card-body">
              <h5 className="card-title">Forwarded Application</h5>
              <p className="card-text">
              Forwarded: 645
              </p>
              
            </div>
          </div>
          </div>
          <div className="col"><div className="card" style={{ width: "18rem" }}>
            {/* <img src="https://i.pinimg.com/564x/8d/d7/57/8dd757d009187c00cf8fedaf96913c44.jpg" className="card-img-top" alt="..." /> */}
            <div className="card-body">
              <h5 className="card-title">Rejected Application</h5>
              <p className="card-text">
              Rejected: 135
              </p>
             
            </div>
          </div>
          </div>
        
        </div>
      </div>
      {/* <section style={{backgroundColor: "#FAE7F3"}}> */}
        <header style={{backgroundImage: `url("https://i.pinimg.com/originals/40/b2/09/40b20983bbca1c91c48dfb6baed6ea7c.gif")`}}>
      <div className="container px-2 py-4 px-md-4 text-center text-lg-start">
      <div className="row gx-lg-5 align-items-center mb-5">
      <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
        
        <div className="card bg-glass">
          <div className="card-body ">
         <img src='https://leverageedu.com/blog/wp-content/uploads/2021/06/Government-Schemes-in-India.png' className='d-block w-100' alt='...'  />
          </div>
        </div>
      </div>
        <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
          <h1
            className="my-5 display-5 fw-bold ls-tight"
            style={{ color: "hsl(225, 54.89%, 10.98%)" }}
          >
           "Opportunity is always knocking."
          
          </h1>
          <p
            className="mb-4 opacity-100"
            style={{ color: "hsl(215, 65.22%, 20.45%)" }}
          >
           Joining our scheme is a great way to gain practical work experience. And whether you’ve got a clear career direction in mind, you’re still deciding what to do, or you’re just keen to start working-
            it could be the best way to kick-start your career without being thrown in at the deep end.
          </p>
          <div className="pt-1 mb-4">
                          <button
                            className="btn btn-info"
                            type="submit"
                          >
                            Apply here
                          </button>
                        </div>
        </div>
        
      
      </div>
    </div>
    </header>
    {/* </section> */}

      <Footer />
    </div>
  );
}