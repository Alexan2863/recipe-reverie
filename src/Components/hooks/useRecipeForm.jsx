import { useState } from "react";

const useRecipeForm = (initialState, onSubmit) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!values.name) tempErrors.name = "Recipe name is required";
    if (!values.description) tempErrors.description = "Description is required";
    if (!values.ingredients)
      tempErrors.ingredients = "Ingredients are required";
    if (!values.instructions)
      tempErrors.instructions = "Instructions are required";
    if (!values.author) tempErrors.author = "Author name is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      onSubmit(values);
      setValues(initialState);
    }
  };

  return { values, errors, handleChange, handleSubmit };
};

export default useRecipeForm;
