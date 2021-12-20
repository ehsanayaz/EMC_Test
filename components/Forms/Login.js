import { AUTH_LOGIN_USER } from "store/auth/authSagaActions";
import useForm from "hooks/useForm";

import { Form, Input } from "components/generic";
import SubmitButton from "components/Buttons/SubmitButton";

export const Login = () => {
  const { onChange, handleSubmit } = useForm(
    {
      identifier: "",
      password: "",
    },
    AUTH_LOGIN_USER
  );

  return (
    <Form {...{ title: "Login Form", type: "login" }}>
      <Input {...{name:"Email", customName:"identifier", onChange}}/>
      <Input {...{name:"Password", onChange}}/>
      <SubmitButton className="toggle-submit" onClick={handleSubmit} />
    </Form>
  );
};
