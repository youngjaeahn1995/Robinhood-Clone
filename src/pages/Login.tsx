import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { object, string } from "yup";
import { AppDispatch } from "../app/store";
import { login } from "../features/user/userSlice";

export interface LoginValues {
    username: string;
    password: string;
}

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const initialValues: LoginValues = {
        username: "",
        password: ""
    }

    const loginSchema = object({
        username: string().required("Cannot contain empty string"),
        password: string().required("Cannot contain empty string")
    })

    const onSubmit = async (formValues: LoginValues) => {
        await dispatch(login({username: formValues.username, password: formValues.password}));
        navigate("/home");
    }

    return (
        <section className="flex">
            <div>
                <img
                    src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                    className="w-96"
                    alt="Phone image" />
            </div>
            <div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={loginSchema}
                    onSubmit={onSubmit}
                >
                    <Form>
                        <div>
                            <label htmlFor="username">Username</label>
                            <Field type="text" name="username" />
                            <ErrorMessage name="username" className="text-red-600" component="div" />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <Field type="password" name="password" />
                            <ErrorMessage name="password" className="text-red-600" component="div" />
                        </div>
                        <button type="submit">Sign In</button>
                    </Form>
                </Formik>
                <div>
                    <button onClick={() => navigate("/register")}>Register</button>
                </div>
            </div>
        </section>
    )
}

export default Login;