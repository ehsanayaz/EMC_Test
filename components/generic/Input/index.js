import { TextField } from "@mui/material";

export const Input = ({
  name = "",
  customName = undefined,
  defaultValue,
  onChange,
  toggleEdit = false,
  type = "text",
  variant = "standard",
}) => {
  const lowerCase = name.toLowerCase();
  return (
    <>
      <TextField
        id={lowerCase}
        className={`mui-input ${lowerCase}-input`}
        label={name}
        type={lowerCase === "password" ? lowerCase : type}
        defaultValue={defaultValue}
        variant={variant}
        InputProps={{
          readOnly: toggleEdit,
          disableUnderline: toggleEdit,
          disabled: toggleEdit,
        }}
        name={customName || lowerCase}
        onChange={onChange}
      />
      <style jsx global>{`
        .mui-input {
          margin: 20px 0;
        }
        .mui-input.email-input {
          background-color: none;
        }
      `}</style>
    </>
  );
};
