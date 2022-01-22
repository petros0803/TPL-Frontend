import * as Yup from "yup";
import { CONTACT, VALIDATIONS } from "../Constants/contact.constants";

const emailRegex =
  //eslint-disable-next-line
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const nameRegex = /^[a-zA-Z- ]*$/gm; //add only letters and spaces

const phoneRegex = /^[a-zA-Z- ]*$/gm; //add only letters and spaces

export const contactValidationSchema = Yup.object().shape({
  [CONTACT.NAME_RO]: Yup.string()
    .required(VALIDATIONS.NAME_REQUIRED_RO)
    .matches(nameRegex, VALIDATIONS.NAME_INVALID_RO),
  [CONTACT.EMAIL_RO]: Yup.string()
    .required(VALIDATIONS.EMAIL_REQUIRED_RO)
    .matches(emailRegex, VALIDATIONS.EMAIL_INVALID_RO),
  [CONTACT.PHONE_RO]: Yup.string()
    .required(VALIDATIONS.PHONE_REQUIRED_RO)
    .matches(phoneRegex, VALIDATIONS.PHONE_INVALID_RO),
  [CONTACT.DESCRIPTION_RO]: Yup.string()
    .required(VALIDATIONS.DESCRIPTION_REQUIRED_RO)
    .min(10, VALIDATIONS.DESCRIPTION_MIN_LENGTH_RO)
    .max(200, VALIDATIONS.DESCRIPTION_MAX_LENGTH_RO)
    .matches(nameRegex, VALIDATIONS.DESCRIPTION_INVALID_RO),
});
