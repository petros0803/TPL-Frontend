import * as Yup from "yup";
import {
  AUTHENTICATION,
  VALIDATIONS,
} from "../Constants/authentication.constants";

const emailRegex =
  //eslint-disable-next-line
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const nameRegex = /^[a-zA-Z- ]*$/gm; //add only letters and spaces

export const registerValidationSchema = Yup.object().shape({
  [AUTHENTICATION.FIRST_NAME_RO]: Yup.string()
    .required(VALIDATIONS.FIRST_NAME_REQUIRED_RO)
    .matches(nameRegex, VALIDATIONS.FIRST_NAME_INVALID_RO),
  [AUTHENTICATION.LAST_NAME_RO]: Yup.string()
    .required(VALIDATIONS.LAST_NAME_REQUIRED_RO)
    .matches(nameRegex, VALIDATIONS.LAST_NAME_INVALID_RO),
  [AUTHENTICATION.EMAIL_RO]: Yup.string()
    .required(VALIDATIONS.EMAIL_REQUIRED_RO)
    .matches(emailRegex, VALIDATIONS.EMAIL_INVALID_RO),
  [AUTHENTICATION.PASSWORD_RO]: Yup.string()
    .required(VALIDATIONS.PASSWORD_REQUIRED_RO)
    .min(6, VALIDATIONS.PASSWORD_LENGTH_RO),
  [AUTHENTICATION.CONFIRM_PASSWORD_RO]: Yup.string()
    .required(VALIDATIONS.CONFIRM_PASSWORD_REQUIRED_RO)
    .min(6, VALIDATIONS.CONFIRM_PASSWORD_LENGTH_RO)
    .oneOf(
      [Yup.ref(AUTHENTICATION.PASSWORD_RO)],
      VALIDATIONS.PASSWORD_MATCH_RO
    ),
});
