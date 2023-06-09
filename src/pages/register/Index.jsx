import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.css";
import { Form, Label, Input, Button, Message, Loading } from "../../components";
import { register } from "./slice";

function Register() {
  const { registerPending, registerRejected, errorMessage } = useSelector(
    (state) => state.register
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    dispatch(register({ formData: values, navigate }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <Form className={styles.formContainer} onFinish={handleSubmit}>
          <h2 className={styles.formLabel}>Register an Account</h2>
          <div className={styles.formFields}>
            <div className={styles.formFieldContainer}>
              <Label>Username:</Label>
              <Input name="username" className={styles.formInput} />
            </div>
            <div className={styles.formFieldContainer}>
              <Label>E-Mail (no confirmation needed):</Label>
              <Input name="email" className={styles.formInput} />
            </div>
            <div className={styles.formFieldContainer}>
              <Label>Password:</Label>
              <Input
                name="password"
                type="password"
                className={styles.formInput}
              />
            </div>
            <div className={styles.formFieldContainer}>
              <Label>Confirm Password:</Label>
              <Input
                name="confirmPassword"
                type="password"
                className={styles.formInput}
              />
            </div>
          </div>
          {registerRejected && (
            <div className={styles.errorMessageContainer}>
              <Message>{errorMessage}</Message>
            </div>
          )}
          <div className={styles.formFooter}>
            <Link className={styles.formFooterLink} to="/login">
              Already have an account?
            </Link>
            <Button type="submit">
              {registerPending ? <Loading /> : "Register"}
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Register;
