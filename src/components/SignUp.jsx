import {Formik, Form} from "formik"
import {TextField} from "./index"
import * as Yup from "yup"

/**
 * 👋🏻 SignUp Component
 * @returns {JSX.Element}
 * @constructor
 */
const SignUp = () => {
    /** ✨ Yup config */
    const validate = Yup.object({
        firstName: Yup.string()
            .min(3, "Must be at least 3 characters")
            .max(15, "Must be 15 characters or less")
            .matches(/^[A-z\s]+$/, "Only alphabets are allowed for this field")
            .required("Required"),
        lastName: Yup.string()
            .min(3, "Must be at least 3 characters")
            .max(20, "Must be 20 characters or less")
            .matches(/^[A-z\s]+$/, "Only alphabets are allowed for this field ")
            .required("Required"),
        email: Yup.string()
            .email("Email is invalid")
            .required("Email is required"),
        password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Password must match")
            .required("Confirm password is required"),
    })

    /** ✨ Render */
    return <Formik
        initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }}
        validationSchema={validate}
        onSubmit={(values, {resetForm}) => {
            alert("Thanks for register")
            console.log(values)
            resetForm()
        }}
    >
        {formik => (
            <>
                <Form className="max-w-md mx-auto w-full p-3 mb-4 bg-white shadow-md rounded md:p-5">
                    <h2 className="text-center font-semibold text-xl mb-3">Sign Up</h2>
                    <div className="flex flex-col sm:items-center">
                        <TextField label="First Name" name="firstName" type="text"/>
                        <TextField label="Last Name" name="lastName" type="text"/>
                        <TextField label="Email" name="email" type="email"/>
                        <TextField label="Password" name="password" type="password"/>
                        <TextField label="Confirm Password" name="confirmPassword" type="password"/>
                        <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit">
                                Sign In
                            </button>
                            <button
                                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                                type="reset">
                                Reset
                            </button>
                        </div>
                    </div>
                </Form>
                <p className="text-center text-gray-500 text-xs">&copy;{new Date().getFullYear()}. All rights
                    reserved.</p>
            </>
        )}
    </Formik>
}

export default SignUp
