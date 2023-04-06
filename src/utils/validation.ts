import { toast } from "react-toastify";

export const validation = (values: any) => {
  let flag = true;
  if (values.username.length < 3) {
    toast.error('Поле username должно иметь не менее 3 символов');
    flag = false;
  }
  if (values.password.length < 4) {
    toast.error('Поле password должно иметь не менее 4 символов');
    flag = false;
  }
  if (values.firstName.length < 2) {
    toast.error('Поле first name должно иметь не менее 2 символов');
    flag = false;
  }
  if (values.roles.length < 1) {
    toast.error('Поле roles должно иметь не менее 1 элемента');
    flag = false;
  }
  if (values.workBorders.length < 1) {
    toast.error('Поле work borders должно иметь не менее 1 элемента');
    flag = false;
  }
  return flag;
};