import { useFormik } from 'formik';
import React from 'react'
import { enqueueSnackbar } from 'notistack';
import * as Yup from 'yup';


const LoginSchema = Yup.object().shape({

  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required')
});

const Login = () => {



  const loginForm = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit:  () => {
     

      console.log(response.status);
      console.log(response.statusText);

      if (response.status === 200) {
        enqueueSnackbar('Loggedin Successfully', { variant: 'success' });

        const data = response.json();
        console.log(data);
        //to uave user data  in session ,inbuilt api- sessionstorage
        sessionStorage.setItem( JSON.stringify(data));

      } else if (response.status === 401) {
        enqueueSnackbar('Email or Password is incorrect', { variant: 'error' });
      } else {
        enqueueSnackbar('Something went wrong', { variant: 'error' });
      }


    },
    validationSchema: LoginSchema
  });


  return (
    <div>
      <>
  {/* Section: Design Block */}
  <section style={{backgroundColor: "#DCF2F1"}}>
    {/* <style
      dangerouslySetInnerHTML={{
        __html:
          "\n    .background-radial-gradient {\n      background-color: hsl(218, 41%, 15%);\n    hsl(218, 41%, 35%) 15%,\n          hsl(218, 41%, 30%) 35%,\n          hsl(218, 41%, 20%) 75%,\n          hsl(218, 41%, 19%) 80%,\n          transparent 100%),\n        radial-gradient(1250px circle at 100% 100%,\n          hsl(218, 41%, 45%) 15%,\n          hsl(218, 41%, 30%) 35%,\n          hsl(218, 41%, 20%) 75%,\n          hsl(218, 41%, 19%) 80%,\n          transparent 100%);\n    }\n\n    #radius-shape-1 {\n      height: 220px;\n      width: 220px;\n      top: -60px;\n      left: -130px;\n      background: radial-gradient(#44006b, #ad1fff);\n      overflow: hidden;\n    }\n\n    #radius-shape-2 {\n      border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%;\n      bottom: -60px;\n      right: -110px;\n      width: 300px;\n      height: 300px;\n      background: radial-gradient(#44006b, #ad1fff);\n      overflow: hidden;\n    }\n\n    .bg-glass {\n      background-color: hsla(0, 0%, 100%, 0.9) !important;\n      backdrop-filter: saturate(200%) blur(25px);\n    }\n  "
      }}
    /> */}
    <div className="container px-4 py-5 px-md-5 text-center text-lg-start">
      <div className="row gx-lg-5 align-items-center mb-5">
        <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
          <h1
            className="my-5 display-5 fw-bold ls-tight"
            style={{ color: "hsl(215, 60.89%, 40.98%)" }}
          >
            We offer best <br />
            <span  style={{ color: "hsl(215, 60.89%, 40.98%)" }}>
             schemes to you
            </span>
          </h1>
          <p
            className="mb-4 opacity-100"
            style={{ color: "hsl(213, 64.22%, 67.45%)" }}
          >
            Every little bit counts. Donate, volunteer and be a part of the solution with us!<br/>
            Use #ourscheme to show your support and connect with others who care.
          </p>
        </div>
        <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
          <div
            id="radius-shape-1"
            className="position-absolute rounded-circle shadow-5-strong"
          />
          <div
            id="radius-shape-2"
            className="position-absolute shadow-5-strong"
          />
          <div className="card bg-glass">
            <div className="card-body px-4 py-5 px-md-5">
            <form onSubmit={loginForm.handleSubmit}>
                       
                        <h4
                          className="fw-normal mb-3 pb-3"
                          style={{ letterSpacing: 1, color: "#628E90" }}
                        >
                          Login with your account
                        </h4>
                        <div className="form mb-4">
                          <label className="form-label" htmlFor="email">
                            Email address
                          </label>
                          <span className='text-danger ms-3'>{loginForm.touched.email && loginForm.errors.email}</span>
                          <input type="text" id='email' onChange={loginForm.handleChange} value={loginForm.values.email} className='form-control mb-4' />


                        </div>
                        <div className="form mb-4">
                          <label className="form-label" htmlFor="password">
                            Password
                          </label>
                          <span className='text-danger ms-3'>{loginForm.touched.password && loginForm.errors.password}</span>
                          <input type="password" id='password' onChange={loginForm.handleChange} value={loginForm.values.password} className='form-control mb-4' />


                        </div>
                        <div className="pt-1 mb-4">
                          <button
                            className="btn btn-primary btn-lg btn-block"
                            type="submit"
                          >
                            Login
                          </button>
                        </div>
                        <a className="small text-muted" href="#!">
                          Forgot password?
                        </a>
                        <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                          Don't have an account?{" "}
                          <a href="#!" style={{ color: "#393f81" }}>
                            Register here
                          </a>
                        </p>
                        <a href="#!" className="small text-muted">
                          Terms of use.
                        </a>
                        <a href="#!" className="small text-muted">
                          Privacy policy
                        </a>
                      </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Section: Design Block */}
</>


    </div>
  )
}

export default Login;
