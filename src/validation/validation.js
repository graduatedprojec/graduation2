import * as yup from "yup";
export const loginSchema = yup
  .object({
    email: yup
      .string()
      .required("email is required field")
      .matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i , 'not valid email address'),
    password: yup
      .string()
      .required("password is required field")
      .min(8, "password must be at least 8 characters"),
  })
  .required();
