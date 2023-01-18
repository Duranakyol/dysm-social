import React from "react";
import "./Login.css";
import Logo from "../../img/logo.png";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <span>DYSM Social</span>
          <h5>Explore the ideas throughout the world</h5>
        </div>
      </div>
      <LogInForm />
    </div>
  );
};

function LogInForm() {
  const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  let navigate = useNavigate();
  const routeChange = () => {};

  return (
    <div className="login">
      <h2>LOGIN</h2>

      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          toast.success("Erfolgreicher Eingeloggt!", {
            icon: "🚀",
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setTimeout(() => {
            navigate("/home");
          }, 3000);
        }}
      >
        {({ errors, touched }) => (
          <Form className="loginForm">
            <Field name="email" type="email" placeholder="Enter your Email" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <Field
              name="password"
              type="password"
              placeholder="Enter your Password"
            />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}

            <span className="mySpan">
              Don't you have a Account?<a href="/signup"> Sign Up</a>
            </span>

            <button className="loginButton" type="submit" onClick={routeChange}>
              Login
            </button>
            <ToastContainer
              position="top-center"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Login;
