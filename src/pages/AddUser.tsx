import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import './index.scss';
import { Formik, FormikHelpers } from "formik";
import { RoleEnum } from "../redux/users/types";
import { useAppDispatch } from "../hooks";
import { addUser } from "../redux/users/slice";
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import UserForm from "./UserForm";

const AddUser = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const initialValues = {
    id: uuidv4(),
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    roles: [RoleEnum.ANT],
    workBorders: []
  };
  const validation = (values: any) => {
    if (values.username.length < 3) toast.error('Поле username должно иметь не менее 3 символов');
    if (values.password.length < 4) toast.error('Поле password должно иметь не менее 4 символов');
    if (values.firstName.length < 2) toast.error('Поле first name должно иметь не менее 2 символов');
    if (values.roles.length < 1) toast.error('Поле roles должно иметь не менее 1 элемента');
    if (values.workBorders.length < 1) toast.error('Поле work borders должно иметь не менее 1 элемента');
  };

  const onUserSubmit = (values: any, { setSubmitting }: FormikHelpers<any>) => {
    setTimeout(() => {

      validation(values);

      dispatch(addUser(values));
      navigate('/');
      toast.success('Пользователь добавлен!');

      setSubmitting(false);
    }, 500);
  };

  return (
    <div className="wrapper">
      <h1>Добавление пользователя</h1>
      <Link to="/">
        <button className="outline-btn">Вернуться к списку</button>
      </Link>
      <Formik initialValues={initialValues} onSubmit={onUserSubmit}>
        <UserForm/>
      </Formik>
    </div>
  );
};

export default AddUser;