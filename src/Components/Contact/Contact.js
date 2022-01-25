import React, { useState } from "react";
import TPLmap from "../../Assets/Images/TPLmap.png";
import SearchLanguages from "../Common/SearchLanguage/SearchLanguages";
import { Form, Formik } from "formik";
import { CONTACT } from "../../Constants/contact.constants";
import { contactValidationSchema } from "../../validations/contact.validations";
import LocalizedMessage from "../Localization/LocalizedMessage";
//scss
import "./scss/contact.scss";
import ApproveModal from "../Common/Modals/ApproveModal/ApproveModal";

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="contact--container">
      <SearchLanguages />
      <div className="image--text--container">
        <div className="map-text">
          <p>
            <LocalizedMessage of="CONTACT_TEXT11" />,
          </p>
          <p>
            <LocalizedMessage of="CONTACT_TEXT12" />,
          </p>
        </div>
        <div>
          <img src={TPLmap} alt="map" />
        </div>
      </div>
      <div>
        <div className="contact-us--title">
          <h1>
            <LocalizedMessage of="CONTACT_TEXT13" />,
          </h1>
        </div>
        <Formik
          initialValues={{
            [CONTACT.NAME_RO]: "",
            [CONTACT.EMAIL_RO]: "",
            [CONTACT.PHONE_RO]: "",
            [CONTACT.DESCRIPTION_RO]: "",
          }}
          validationSchema={contactValidationSchema}
          onSubmit={(event) => {
            setIsModalOpen(true);
          }}
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
              <Form onSubmit={handleSubmit} style={{ height: "325px" }}>
                <div className="form--container">
                  <div className="inputs--container">
                    <label>{CONTACT.NAME_RO}</label>
                    <input
                      className={
                        touched[CONTACT.NAME_RO] === true &&
                        errors[CONTACT.NAME_RO]?.length > 0
                          ? "input-error"
                          : ""
                      }
                      name={CONTACT.NAME_RO}
                      type="text"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      isValid={
                        touched[CONTACT.NAME_RO] && !errors[CONTACT.NAME_RO]
                      }
                    />
                    <span>{errors[CONTACT.NAME_RO]}</span>
                    <label>{CONTACT.EMAIL_RO}</label>
                    <input
                      className={
                        touched[CONTACT.EMAIL_RO] === true &&
                        errors[CONTACT.EMAIL_RO]?.length > 0
                          ? "input-error"
                          : ""
                      }
                      name={CONTACT.EMAIL_RO}
                      type="text"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      isValid={
                        touched[CONTACT.EMAIL_RO] && !errors[CONTACT.EMAIL_RO]
                      }
                    />
                    <span>{errors[CONTACT.EMAIL_RO]}</span>
                    <label>{CONTACT.PHONE_RO}</label>
                    <input
                      className={
                        touched[CONTACT.PHONE_RO] === true &&
                        errors[CONTACT.PHONE_RO]?.length > 0
                          ? "input-error"
                          : ""
                      }
                      name={CONTACT.PHONE_RO}
                      type="text"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      isValid={
                        touched[CONTACT.PHONE_RO] && !errors[CONTACT.PHONE_RO]
                      }
                    />
                    <span>{errors[CONTACT.PHONE_RO]}</span>
                    <label>{CONTACT.DESCRIPTION_RO}</label>
                    <input
                      className={
                        touched[CONTACT.DESCRIPTION_RO] === true &&
                        errors[CONTACT.DESCRIPTION_RO]?.length > 0
                          ? "input-error"
                          : ""
                      }
                      name={CONTACT.DESCRIPTION_RO}
                      type="text"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      isValid={
                        touched[CONTACT.DESCRIPTION_RO] &&
                        !errors[CONTACT.DESCRIPTION_RO]
                      }
                    />
                    <span>{errors[CONTACT.DESCRIPTION_RO]}</span>
                  </div>
                  <div
                    style={{
                      margin: "0 auto",
                      width: "300px",
                      textAlign: "center",
                    }}
                  >
                    <button type="submit">SEND</button>
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
      <ApproveModal isModalOpen={isModalOpen} closeModal={setIsModalOpen} />
    </div>
  );
};

export default Contact;
