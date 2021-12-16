import React from "react";
import "./authentication.scss";
import { Form, Formik } from "formik";
import { registerValidationSchema } from "../../validations/register.validations";
import { AUTHENTICATION } from "../../Constants/authentication.constants";

const Register = () => {
  return (
    <div className="authentication--container">
      <div>
        <h1>{AUTHENTICATION.REGISTER_RO}</h1>
        <div>
          <Formik
            initialValues={{
              [AUTHENTICATION.FIRST_NAME_RO]: "",
              [AUTHENTICATION.LAST_NAME_RO]: "",
              [AUTHENTICATION.EMAIL_RO]: "",
              [AUTHENTICATION.PASSWORD_RO]: "",
              [AUTHENTICATION.CONFIRM_PASSWORD_RO]: "",
            }}
            validationSchema={registerValidationSchema}
            onSubmit={(event) => event.preventDefault()}
          >
            {({
              touched,
              handleBlur,
              handleChange,
              handleSubmit,
              values,
              errors,
            }) => {
              return (
                <Form onSubmit={handleSubmit}>
                  {console.log(errors)}
                  <div className="form--container">
                    <div className="inputs--container">
                      <label>{AUTHENTICATION.FIRST_NAME_RO}</label>
                      <input
                        className={
                          touched[AUTHENTICATION.FIRST_NAME_RO] === true &&
                          errors[AUTHENTICATION.FIRST_NAME_RO]?.length > 0
                            ? "input-error"
                            : ""
                        }
                        name={AUTHENTICATION.FIRST_NAME_RO}
                        type="text"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        isValid={
                          touched[AUTHENTICATION.FIRST_NAME_RO] &&
                          !errors[AUTHENTICATION.FIRST_NAME_RO]
                        }
                      />
                      <span>{errors[AUTHENTICATION.FIRST_NAME_RO]}</span>
                      <label>{AUTHENTICATION.LAST_NAME_RO}</label>
                      <input
                        className={
                          touched[AUTHENTICATION.LAST_NAME_RO] === true &&
                          errors[AUTHENTICATION.LAST_NAME_RO]?.length > 0
                            ? "input-error"
                            : ""
                        }
                        name={AUTHENTICATION.LAST_NAME_RO}
                        type="text"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        isValid={
                          touched[AUTHENTICATION.LAST_NAME_RO] &&
                          !errors[AUTHENTICATION.LAST_NAME_RO]
                        }
                      />
                      <span>{errors[AUTHENTICATION.LAST_NAME_RO]}</span>
                      <label>{AUTHENTICATION.EMAIL_RO}</label>
                      <input
                        className={
                          touched[AUTHENTICATION.EMAIL_RO] === true &&
                          errors[AUTHENTICATION.EMAIL_RO]?.length > 0
                            ? "input-error"
                            : ""
                        }
                        name={AUTHENTICATION.EMAIL_RO}
                        type="text"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        isValid={
                          touched[AUTHENTICATION.EMAIL_RO] &&
                          !errors[AUTHENTICATION.EMAIL_RO]
                        }
                      />
                      <span>{errors[AUTHENTICATION.EMAIL_RO]}</span>
                      <label>{AUTHENTICATION.PASSWORD_RO}</label>
                      <input
                        className={
                          touched[AUTHENTICATION.PASSWORD_RO] === true &&
                          errors[AUTHENTICATION.PASSWORD_RO]?.length > 0
                            ? "input-error"
                            : ""
                        }
                        name={AUTHENTICATION.PASSWORD_RO}
                        type="password"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        isValid={
                          touched[AUTHENTICATION.PASSWORD_RO] &&
                          !errors[AUTHENTICATION.PASSWORD_RO]
                        }
                      />
                      <span>{errors[AUTHENTICATION.PASSWORD_RO]}</span>
                      <label>{AUTHENTICATION.CONFIRM_PASSWORD_RO}</label>
                      {console.log(touched[AUTHENTICATION.CONFIRM_PASSWORD_RO])}
                      {console.log(errors[AUTHENTICATION.CONFIRM_PASSWORD_RO])}
                      <input
                        className={
                          touched[AUTHENTICATION.CONFIRM_PASSWORD_RO] ===
                            true &&
                          errors[AUTHENTICATION.CONFIRM_PASSWORD_RO]?.length > 0
                            ? "input-error"
                            : ""
                        }
                        name={AUTHENTICATION.CONFIRM_PASSWORD_RO}
                        type="password"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        isValid={
                          touched[AUTHENTICATION.CONFIRM_PASSWORD_RO] &&
                          !errors[AUTHENTICATION.CONFIRM_PASSWORD_RO]
                        }
                      />
                      <span>{errors[AUTHENTICATION.CONFIRM_PASSWORD_RO]}</span>
                      <p>
                        {AUTHENTICATION.ALREADY_REGISTED_RO}
                        <a href="/"> {AUTHENTICATION.LOGIN_RO}</a>
                      </p>
                    </div>
                    <div
                      style={{
                        margin: "0 auto",
                        width: "300px",
                        textAlign: "center",
                      }}
                    >
                      <button onSubmit={(event) => event.preventDefault()}>
                        {AUTHENTICATION.REGISTER_RO}
                      </button>
                      <p>
                        {AUTHENTICATION.ALREADY_REGISTED_RO}
                        <a href="/"> {AUTHENTICATION.LOGIN_RO}</a>
                      </p>
                    </div>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Register;