import React from "react";
import {Field, Form, Formik} from "formik";
import * as yup from 'yup';
import {connect} from "react-redux";
import {login} from "../../redux/auth_reducer";
import {Navigate} from "react-router-dom";

const validationSchema = yup.object().shape({
    email: yup.string().required('required').email('Invalid email address'),
    password: yup.string().required('required')
});
const Login = (props) => {
    if (props.isAuth) {
        return <Navigate to="/profile" />
    }
    return <div>
        <h1> Login </h1>
        <Formik
            validationSchema={validationSchema}
            initialValues={{email: '', password: '', rememberMe: false}}
            onSubmit={(formData) => {
                props.login(formData.email, formData.password, formData.rememberMe)
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

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login}) (Login);