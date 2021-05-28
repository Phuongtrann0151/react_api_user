import * as React from "react";
import styles from "./register.module.css";
import { useForm } from 'react-hook-form'
import { Link } from "react-router-dom";
import { ErrorMessage } from "@hookform/error-message";

const Register = () => {
  const { register, formState: { errors }, handleSubmit} = useForm();
  const onSubmit = (data) => console.log(JSON.stringify(data))

  React.useEffect(() => {
    // validate onMount
    handleSubmit(onSubmit)();
  }, []);

  return(
    <div className={`${styles.container} container-fluid d-flex align-items-center justify-content-center`}>
      <div className={styles.registrationFormContainer}>
        <fieldset className="border p-3 rounded">
          <legend className={`${styles.registrationFormLegend} border rounded p-1 text-center`}>
            Registration Form
          </legend>
          <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
            <div className="form-group">
              <label htmlFor="inputForEmail">Email address</label>
              <span className="mandatory">*</span>
              <input
                id="inputForEmail"
                type="email"
                className="form-control"
                aria-describedby="Enter email address"
                placeholder="Enter email address"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Please enter your email address",
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Enter a valid email address",
                  },
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters are allowed",
                  },
                  maxLength: {
                    value: 255,
                    message: "Maximum 255 characters are allowed",
                  },
                })}
              />
              <ErrorMessage errors={errors} name="email" as="p"/>
              <ErrorMessage
                errors={errors}
                name="email"
                render={({ message }) => <span>{message}</span>}
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputForName">Your Name</label>
              <span className="mandatory">*</span>
              <input
                id="inputForName"
                type="text"
                className="form-control"
                aria-describedby="Enter your name"
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputForPassword">Password</label>
              <span className="mandatory">*</span>
              <input
                type="password"
                className="form-control"
                id="inputForPassword"
                placeholder="Enter password"
              />
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <button type="submit" className="btn btn-outline-primary">
                Submit
              </button>
              <button className="btn btn-link" >
                <Link to="/login">Cancel</Link>
              </button>
            </div>
          </form>
        </fieldset>
      </div>
    </div>
  )
}

export default Register;