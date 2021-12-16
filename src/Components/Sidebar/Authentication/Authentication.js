import React from "react";
import "./authentication.scss";
import { Form, Formik } from "formik";
import { registerValidationSchema } from "../../../validations/register.validations";
import { AUTHENTICATION } from "../../../Constants/authentication.constants";

const Authentication = () => {
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
            validationSchema={registerValidationSchema()}
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
                        name={AUTHENTICATION.FIRST_NAME_RO}
                        type="text"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        isValid={
                          touched[AUTHENTICATION.FIRST_NAME_RO] &&
                          !errors[AUTHENTICATION.FIRST_NAME_RO]
                        }
                      />
                      <label>{AUTHENTICATION.LAST_NAME_RO}</label>
                      <input
                        name={AUTHENTICATION.LAST_NAME_RO}
                        type="text"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        isValid={
                          touched[AUTHENTICATION.LAST_NAME_RO] &&
                          !errors[AUTHENTICATION.LAST_NAME_RO]
                        }
                      />
                      <label>{AUTHENTICATION.EMAIL_RO}</label>
                      <input
                        name={AUTHENTICATION.EMAIL_RO}
                        type="text"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        isValid={
                          touched[AUTHENTICATION.EMAIL_RO] &&
                          !errors[AUTHENTICATION.EMAIL_RO]
                        }
                      />
                      <label>{AUTHENTICATION.PASSWORD_RO}</label>
                      <input
                        name={AUTHENTICATION.PASSWORD_RO}
                        type="text"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        isValid={
                          touched[AUTHENTICATION.PASSWORD_RO] &&
                          !errors[AUTHENTICATION.PASSWORD_RO]
                        }
                      />
                      <label>{AUTHENTICATION.CONFIRM_PASSWORD_RO}</label>
                      <input
                        name={AUTHENTICATION.CONFIRM_PASSWORD_RO}
                        type="text"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        isValid={
                          touched[AUTHENTICATION.CONFIRM_PASSWORD_RO] &&
                          !errors[AUTHENTICATION.CONFIRM_PASSWORD_RO]
                        }
                      />
                    </div>
                    <div style={{margin:" 0 auto"}}>
                      <button onSubmit={(event) => event.preventDefault()}> {AUTHENTICATION.REGISTER_RO} </button>
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

export default Authentication;
