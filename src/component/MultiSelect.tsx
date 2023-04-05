import Select from 'react-select';
import { FC } from "react";

interface MultiSelectProps {
  field: any;
  form: any;
  options: any;
  placeholder: any;
}

const MultiSelect: FC<MultiSelectProps> = ({ field, form, options, placeholder = 'Select' }) => {
  const onChange = (option: any) => {
    form.setFieldValue(
      field.name,
      option ? (option).map((item: any) => item.value) : [],
    );
  };

  const getValue = () => {
    if (options) {
      return options.filter((option: any) => field.value?.indexOf(option.value) >= 0);
    } else {
      return [];
    }
  };

  return (
    <Select
      className="react-select-container"
      classNamePrefix="react-select"
      name={field.name}
      value={getValue()}
      onChange={onChange}
      options={options}
      isMulti={true}
      placeholder={placeholder}
    />
  );
};

export default MultiSelect;