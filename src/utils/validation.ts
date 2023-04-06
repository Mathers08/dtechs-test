import { toast } from "react-toastify";
import { IUser } from "../redux/users/types";
import * as yup from 'yup';

export const validationUniqueUsername = (users: IUser[], values: IUser) => {
  const currentUser = users.find(obj => obj.username === values?.username);
  const usernames = users.map(obj => obj.username);
  if (usernames.includes(currentUser?.username) && window.location.pathname !== `/users/${currentUser?.id}`) {
    toast.error('Пользователь с таким ником уже существует');
    return false;
  }
  return true;
};

export const validationSchema = yup.object().shape({
  username: yup.string().min(3, 'Поле username должно иметь не менее 3 символов').required('Поле обязательное'),
  password: yup.string().min(4, 'Поле password должно иметь не менее 4 символов').required('Поле обязательное'),
  firstName: yup.string().min(2, 'Поле firstName должно иметь не менее 2 символов').required('Поле обязательное'),
  roles: yup.array().min(1, 'Поле roles должно иметь не менее 1 элемента'),
  workBorders: yup.array().min(1, 'Поле work borders должно иметь не менее 1 элемента'),
});