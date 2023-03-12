import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { object, string } from "yup";
import { AppDispatch, State } from "../app/store";
import { login } from "../features/user/userSlice";

export interface LoginValues {
    username: string;
    password: string;
}

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const user = useSelector((state: State) => state.user);

    const initialValues: LoginValues = {
        username: "",
        password: ""
    }

    const loginSchema = object({
        username: string().required("Cannot contain empty string"),
        password: string().required("Cannot contain empty string")
    })

    const onSubmit = async (formValues: LoginValues) => {
        dispatch(login({username: formValues.username, password: formValues.password}))
        .unwrap() // createAsyncThunk method
        .then(() => navigate("/account"));
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
                        {user.loading === "failed" && <div className="text-red-800">
                            Invalid username or password
                        </div>}
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