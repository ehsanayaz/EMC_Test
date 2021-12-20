import Button from "components/generic/Button";

const SubmitButton = ({ onClick, ...props }) => {
  return (
    <Button onClick={onClick} {...props}>
      Submit
    </Button>
  );
};

export default SubmitButton;
