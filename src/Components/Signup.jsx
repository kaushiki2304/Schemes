import React from 'react'
import './Signup.css'

const Signup = () => {
  return (
    <div>
      <section className="h-100" style={{ backgroundColor: "#EEF5FF" }}>
  <div className="container py-4 h-90">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col">
        <div className="card card-registration my-4">
          <div className="row g-0">
            <div className="col-xl-6 d-none d-xl-block">
              <img
                src="https://i.pinimg.com/originals/8d/fc/e5/8dfce5fa5c15157d341cec622d34b671.png"
                alt="Sample photo " height='1000px'
                className="img-fluid"
                style={{
                  borderTopLeftRadius: ".25rem",
                  borderBottomLeftRadius: ".25rem"
                }}
              />
            </div>
            <div className="col-xl-6">
              <div className="card-body p-md-5 text-black">
                <h3 className="mb-5 text-uppercase">
                  Student registration form
                </h3>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="form3Example1m"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="form3Example1m">
                        First name
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="form3Example1n"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="form3Example1n">
                        Last name
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="form3Example1m1"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="form3Example1m1">
                        Mother's name
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="form3Example1n1"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="form3Example1n1">
                        Father's name
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="form3Example97"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" htmlFor="form3Example97">
                    Email ID
                  </label>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="form3Example9"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" htmlFor="form3Example9">
                    DOB
                  </label>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="form3Example8"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" htmlFor="form3Example8">
                    Address
                  </label>
                </div>
                <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
                  <h6 className="mb-0 me-4">Gender: </h6>
                  <div className="form-check form-check-inline mb-0 me-4">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="femaleGender"
                      defaultValue="option1"
                    />
                    <label className="form-check-label" htmlFor="femaleGender">
                      Female
                    </label>
                  </div>
                  <div className="form-check form-check-inline mb-0 me-4">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="maleGender"
                      defaultValue="option2"
                    />
                    <label className="form-check-label" htmlFor="maleGender">
                      Male
                    </label>
                  </div>
                  <div className="form-check form-check-inline mb-0">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="otherGender"
                      defaultValue="option3"
                    />
                    <label className="form-check-label" htmlFor="otherGender">
                      Other
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <select className="select">
                      <option value={1}>City</option>
                      <option value={2}>Lucknow</option>
                      <option value={3}>Kanpur</option>
                      <option value={4}>Banaras</option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-4">
                    <select className="select">
                      <option value={1}>State</option>
                      <option value={2}>Uttar Pradesh</option>
                      <option value={3}>Madhya Pradesh</option>
                      <option value={4}>Uttarkhand</option>
                    </select>
                  </div>
                </div>
                
               
               
                <div className="d-flex justify-content-end pt-3">
                  <button type="submit" className="btn btn-light btn-lg">
                    Reset all
                  </button>
                  <button type="submit" className="btn btn-warning btn-lg ms-2">
                    Submit form
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Signup