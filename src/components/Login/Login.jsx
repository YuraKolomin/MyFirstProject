import React from "react";
import {Field, Form, Formik} from "formik";
import * as yup from 'yup';

const validationSchema = yup.object().shape({
    email: yup.string().required('required').email('Invalid email address'),
    password: yup.string().required('required')
});
const Login = (props) => {
    return <div>
        <h1> Login </h1>
        <Formik
            validationSchema={validationSchema}
            initialValues={{email: '', password: '', rememberMe: false}}
            onSubmit={(values) => {
                console.log(values)
            }}
        >
            {({errors, touched}) => (
                <Form>
                    <label>
                        Email
                    </label>
                    <Field
                        name="email"
                    />
                    {errors.email && touched.email && (
                        <div>{errors.email}</div>
                    )}
                    <label>
                        Password
                    </label>
                    <Field
                        name="password"
                        type="password"
                    />
                    {errors.password && touched.password && (
                        <div>{errors.password}</div>
                    )}
                    <button>
                        Login
                    </button>
                    <label>
                        Remember me
                    </label>
                    <Field
                        type="checkbox"
                        name="toggle"
                    />
                </Form>
            )}
        </Formik>
    </div>
}
export default Login;