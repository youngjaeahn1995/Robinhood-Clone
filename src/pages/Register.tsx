import { ErrorMessage, Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { object, string } from "yup";
import { login } from "../services/user";

interface RegisterValues {
    username: string;
    email: string;
    password: string;
}

const Register = () => {
    const navigate = useNavigate();

    const initialValues: RegisterValues = {
        username: "",
        email: "",
        password: ""
    }

    const registerSchema = object({
        username: string().required("Cannot contain empty string"),
        email: string().email("Invalid email").required("Cannot contain empty string"),
        password: string().required("Cannot contain empty string")
    })

    const onSubmit = async (formValues: RegisterValues) => {
        await register(formValues.username, formValues.email, formValues.password);
        navigate("/login");
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
                    validationSchema={registerSchema}
                    onSubmit={onSubmit}
                >
                    <Form>
                        <div>
                            <label htmlFor="username">Username</label>
                            <Field type="text" name="username" />
                            <ErrorMessage name="username" className="text-red-600" component="div" />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <Field type="email" name="email" />
                            <ErrorMessage name="email" className="text-red-600" component="div" />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <Field type="text" name="password" />
                            <ErrorMessage name="password" className="text-red-600" component="div" />
                        </div>
                        <button type="submit">Sign Up</button>
                    </Form>
                </Formik>
            </div>
        </section>
    )
}

export default Register;