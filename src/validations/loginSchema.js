import { object,string,ref } from "yup";

export const loginSchema = object().shape({
    email: string()
    .email("Not a valid email")
    .required("Email is required"),
    password: string()
    .required("Password is required")
    .min(6,"Password must be at least 6 characters"),

})

export default loginSchema