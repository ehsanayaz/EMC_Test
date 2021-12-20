import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export const RadioFilters = ({
  title = "",
  name = "",
  isHidden = false,
  values = [],
  handleChange,
}) => {
  const populateRadios = () => {
    return values.map(({ value, name, isDisabled = false }, idx) => {
      return (
        <FormControlLabel
          key={idx}
          index={idx}
          value={value}
          control={<Radio />}
          label={name}
          disabled={isDisabled}
        />
      );
    });
  };
  return (
    <>
      <FormControl component="fieldset">
        <FormLabel component="legend">{title}</FormLabel>
        <RadioGroup name={name} onChange={handleChange}>
          <FormControlLabel
            value="default"
            index="-1"
            control={<Radio />}
            label="Default"
            defaultChecked
          />
          {populateRadios()}
        </RadioGroup>
      </FormControl>
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

export const CustomizedRadios = () => {};
