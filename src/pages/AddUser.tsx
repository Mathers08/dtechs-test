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
import { validation } from "../utils";

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

  const onUserSubmit = (values: any, { setSubmitting }: FormikHelpers<any>) => {
    setTimeout(() => {
      const isValid = validation(values);
      if (isValid) {
        dispatch(addUser(values));
        navigate('/');
        toast.success('Пользователь добавлен!');
      }
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