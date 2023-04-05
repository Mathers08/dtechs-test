import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import './index.scss';
import { Field, Form, Formik, FormikHelpers } from "formik";
import { IUser, RoleEnum, WorkBordersEnum } from "../redux/users/types";
import { MultiSelect } from "../component";
import { useAppDispatch } from "../hooks";
import { addUser } from "../redux/users/slice";

const AddUser = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const optionList = [
    { value: RoleEnum.ANT, label: RoleEnum.ANT },
    { value: RoleEnum.ANT_MANAGER, label: RoleEnum.ANT_MANAGER },
    { value: RoleEnum.ANT_OFFICER, label: RoleEnum.ANT_OFFICER },
    { value: RoleEnum.DEVELOPER, label: RoleEnum.DEVELOPER }
  ];
  const workBordersList = [
    { value: { id: '1', name: WorkBordersEnum.BEGLATOY }, label: WorkBordersEnum.BEGLATOY },
    { value: { id: '2', name: WorkBordersEnum.SHALY }, label: WorkBordersEnum.SHALY },
    { value: { id: '3', name: WorkBordersEnum.URUS_MARTAN }, label: WorkBordersEnum.URUS_MARTAN }
  ];

  const onUserSubmit = (values: IUser, { setSubmitting }: FormikHelpers<IUser>) => {
    setTimeout(() => {
      console.log(values);
      dispatch(addUser(values));
      navigate('/');
      setSubmitting(false);
    }, 500);
  };

  return (
    <div className="wrapper">
      <h1>Добавление пользователя</h1>
      <Link to="/">
        <button className="outline-btn">Вернуться к списку</button>
      </Link>
      <Formik
        initialValues={{
          id: Math.random().toString(),
          username: '',
          password: '',
          firstName: '',
          lastName: '',
          roles: [RoleEnum.ANT],
          workBorders: [{ id: '1', name: WorkBordersEnum.BEGLATOY }]
        }}
        onSubmit={onUserSubmit}>
        <Form className="user-form">
          <Field id="username" name="username" placeholder="username"/>
          <Field id="password" name="password" placeholder="password"/>
          <Field id="firstName" name="firstName" placeholder="first name"/>
          <Field id="lastName" name="lastName" placeholder="last name"/>
          <Field
            name="roles"
            id="roles"
            placeholder="Roles"
            component={MultiSelect}
            options={optionList}
          />
          <Field
            name="workBorders"
            id="workBorders"
            placeholder="WorkBorders"
            component={MultiSelect}
            options={workBordersList}
          />
          <button type="submit" className="outline-btn form-btn">Создать пользователя</button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddUser;