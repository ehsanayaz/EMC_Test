import { PROFILE_LOCATION_EDIT } from "store/profile/profileSagaActions";
import useForm from "hooks/useForm";

import { Form, Input } from "components/generic";
import SubmitButton from "components/Buttons/SubmitButton";

export const LocationForm = ({ location }) => {
  const {
    id,
    name,
    coordinates,
    address,
    description,
    image = null,
  } = location;

  const { onChange, handleSubmit, data } = useForm(
    {
      id,
      name,
      coordinates,
      address,
      description,
      image,
    },
    PROFILE_LOCATION_EDIT
  );

  return (
    <>
      <Form {...{ title: "Location Form", type: "login", handleSubmit }}>
        <Input {...{ name: "Name", defaultValue: name, onChange }} />
        <Input
          {...{
            name: "Coordinates",
            defaultValue: coordinates,
            onChange,
          }}
        />
        <Input
          {...{
            name: "Adress",
            defaultValue: address,
            onChange,
          }}
        />
        <Input
          {...{
            name: "Description",
            defaultValue: description,
            onChange,
          }}
        />
        {/* <img
          src={data.image || "/images/profile/default.jpg"}
          alt="location_image"
        /> */}
        {/* <Input {...{ name: "Image", type: "file", onChange }} /> */}
        <SubmitButton className="toggle-submit" onClick={handleSubmit} />
      </Form>
    </>
  );
};
