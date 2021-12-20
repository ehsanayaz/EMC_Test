import { useState } from "react";
import { useDispatch } from "react-redux";

const useForm = (objShape, action) => {
  const [data, changeData] = useState(objShape);
  const dispatch = useDispatch();

  const onChange = (e) => {
    const { name, value, files } = e.target;

    if (files && files[0]) {
      let reader = new FileReader();
      reader.onload = (ev) => {
        changeData((oldData) => ({ ...oldData, [name]: ev.target.result }));
      };
      reader.readAsDataURL(files[0]);
    } else {
      changeData((oldData) => ({ ...oldData, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(action({ ...data }));
  };

  return { onChange, handleSubmit, data };
};

export default useForm;
