import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './index.scss';
import { Field, Form, Formik, FormikHelpers } from "formik";
import { IUser } from "../types";
import MultiSelect from "../component/Select";

const AddUser = () => {
  const optionList = [
    { value: "ANT", label: "ANT" },
    { value: "ANT_MANAGER", label: "ANT_MANAGER" },
    { value: "ANT_OFFICER", label: "ANT_OFFICER" },
    { value: "DEVELOPER", label: "DEVELOPER" }
  ];
  const workBordersList = [
    { label: '1', value: 'Белгатой' },
    { label: '2', value: 'Шали' },
    { label: '3', value: 'Урус-Мартан' }
  ];

  return (
    <div className="wrapper">
      <h1>Добавление пользователя</h1>
      <Link to="/">
        <button className="outline-btn">Вернуться к списку</button>
      </Link>
      <Formik
        initialValues={{
          username: '',
          password: '',
          firstName: '',
          lastName: '',
          roles: ['ANT'],
          workBorders: []
        }}
        onSubmit={(values: IUser, { setSubmitting }: FormikHelpers<IUser>) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
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