import Select from 'react-select';
import { RoleEnum, WorkBordersEnum } from "../redux/users/types";

export const rolesList = [
  { value: RoleEnum.ANT, label: RoleEnum.ANT },
  { value: RoleEnum.ANT_MANAGER, label: RoleEnum.ANT_MANAGER },
  { value: RoleEnum.ANT_OFFICER, label: RoleEnum.ANT_OFFICER },
  { value: RoleEnum.DEVELOPER, label: RoleEnum.DEVELOPER }
];

export const workBordersList = [
  { value: { id: '1', name: WorkBordersEnum.BEGLATOY }, label: WorkBordersEnum.BEGLATOY },
  { value: { id: '2', name: WorkBordersEnum.SHALY }, label: WorkBordersEnum.SHALY },
  { value: { id: '3', name: WorkBordersEnum.URUS_MARTAN }, label: WorkBordersEnum.URUS_MARTAN }
];

const MultiSelect = ({ field, form, options, placeholder = 'Select' }: any) => {
  for (let i = 0; i < options.length; i++) {
    if (typeof options[i].value === 'object') {
      options[i].value = Object.values(options[i].value)[1];
    }
  }

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