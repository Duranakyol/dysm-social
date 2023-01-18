import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "./Signup.css";
import Logo from "../../../img/logo.png";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <span>DYSM Social</span>
          <h5>Explore the ideas throughout the world</h5>
        </div>
      </div>
      <SignupForm />
    </div>
  );
};

function SignupForm() {
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  let navigate = useNavigate();
  const routeChange = () => {};

  return (
    <div className="signup">
      <h2>SIGNUP</h2>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          toast.success("Erfolgreicher Registriert!", {
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
            navigate("/");
          }, 3000);
        }}
      >
        {({ errors, touched }) => (
          <Form className="signupForm">
            <Field name="firstName" placeholder="Firstname" />
            {errors.firstName && touched.firstName ? (
              <div>{errors.firstName}</div>
            ) : null}
            <Field className="myInput" name="lastName" placeholder="Lastname" />
            {errors.lastName && touched.lastName ? (
              <div>{errors.lastName}</div>
            ) : null}

            <Field name="email" type="email" placeholder="Email" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <Field name="password" type="password" placeholder="Password" />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}

            <span className="mySpan">
              Already have a Account <a href="/">Login</a>{" "}
            </span>

            <button
              className="signupButton"
              type="submit"
              id="myButton"
              onClick={routeChange}
            >
              {" "}
              Signup
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

export default SignUp;
