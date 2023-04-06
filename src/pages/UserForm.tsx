import React from 'react';
import { Field, Form } from "formik";
import { MultiSelect } from "../components";
import { rolesList, workBordersList } from "../components/MultiSelect";
import { useLocation } from "react-router-dom";

const UserForm = () => {
  const location = useLocation();

  return (
    <Form className={`${location.pathname === '/user' ? 'user-form' : 'user-form user-form-modal'}`}>
      <Field id="username" name="username" placeholder="username"/>
      <Field id="password" type="password" name="password" placeholder="password"/>
      <Field id="firstName" name="firstName" placeholder="first name"/>
      <Field id="lastName" name="lastName" placeholder="last name"/>
      <Field
        name="roles"
        id="roles"
        placeholder="roles"
        component={MultiSelect}
        options={rolesList}
      />
      <Field
        name="workBorders"
        id="workBorders"
        placeholder="work borders"
        component={MultiSelect}
        options={workBordersList}
      />
      <button type="submit" className="outline-btn form-btn">
        {location.pathname === '/user' ? 'Добавить пользователя' : 'Сохранить изменения'}
      </button>
    </Form>
  );
};

export default UserForm;