import { object,string,ref } from "yup";

export const signUpSchema = object().shape({
    email: string()
    .email("Not a valid email")
    .required("Email is required"),
    password: string()
    .required("Password is required")
    .min(6,"Password must be at least 6 characters"),
    confirmPassword: string()
    .oneOf([ref("password"),null], "password must match")
    .required(),

})

export default signUpSchema