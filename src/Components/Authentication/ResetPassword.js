import React from "react";
import "./authentication.scss";
import { Form, Formik } from "formik";
import { registerValidationSchema } from "../../validations/register.validations";
import { AUTHENTICATION } from "../../Constants/authentication.constants";

const ResetPassword = () => {
  return (
    <div className="authentication--container" style={{ height: "640px" }}>
      <div>
        <h1>{AUTHENTICATION.RESET_PASSWORD_RO}</h1>
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
                  <div className="form--container">
                    <div className="inputs--container">
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
                        {AUTHENTICATION.FORGOT_PASSWORD_RO}
                        <a href="/"> {AUTHENTICATION.RESET_PASSWORD_RO}</a>
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
                        {AUTHENTICATION.RESET_RO}
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

export default ResetPassword;
