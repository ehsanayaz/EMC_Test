import { AUTH_REGISTER_USER } from "store/auth/authSagaActions";
import useForm from "hooks/useForm";

import { Form, Input } from "components/generic";
import SubmitButton from "components/Buttons/SubmitButton";

export const Register = () => {
  const { onChange, handleSubmit } = useForm(
    {
      username: "",
      email: "",
      password: "",
    },
    AUTH_REGISTER_USER
  );

  return (
    <Form {...{ title: "Register Form", type: "login" }}>
      <Input {...{name:"Username", onChange}}/>
      <Input {...{name:"Email", onChange}}/>
      <Input {...{name:"Password", onChange}}/>
      <SubmitButton className="toggle-submit" onClick={handleSubmit} />
    </Form>
  );
};
