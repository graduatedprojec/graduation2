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
      .min(6, "password must be at least 6 characters"),
  })
  .required();
//============================= USER SCHEMA ===============

  export const userSchema = yup
  .object({
    name: yup
      .string()
      .required("name is required field")
      .min(3, "name must be at least 3 characters"),
      phone: yup
      .string()
      .required("phone is required field")
      .matches(/^01[0-9]-[0-9]{4}-[0-9]{4}$/ , 'not valid phone number'),
    email: yup
      .string()
      .required("email is required field")
      .matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i , 'not valid email address'),
    address: yup
      .string()
      .required("address is required field")
      .min(3, "address must be at least 3 characters"),
  })
  .required();


//============================= LABS SCHEMA ===============
export const labsSchema = yup
.object({
  name: yup
    .string()
    .required("name is required field")
    .min(3, "name must be at least 3 characters"),
   
})
.required();

//============================= PATIENTS SCHEMA ===============
export const patients_schema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters"),
  gender: yup
    .string()
    .required("Gender is required")
    .oneOf(["male", "female"], "Gender must be either 'male' or 'female'"),
  address: yup
    .string()
    .required("Address is required")
    .min(3, "Address must be at least 3 characters"),
  disease: yup
    .string()
    .required("Disease is required")
    .min(3, "Disease must be at least 3 characters"),
});