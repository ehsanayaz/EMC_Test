import Button from "components/generic/Button";

const ToggleButton = ({ onClick, ...props }) => {
  return (
    <>
      <Button onClick={onClick} className="toggle-edit" {...props}>
        Toggle Edit
      </Button>
      <style jsx global>{`
        .toggle-edit {
          position: absolute;
          right: 0px;
          top: 10px;
        }
      `}</style>
    </>
  );
};

export default ToggleButton;
