import React, { FC } from 'react';
import { Field, Form, FormikTouched, FormikValues } from "formik";
import { rolesList, workBordersList } from "../components/MultiSelect";
import { useLocation } from "react-router-dom";
import { MultiSelect } from "../components";

interface UserFormProps {
  errors: any;
  touched: FormikTouched<FormikValues>;
  setFieldValue: (name: string, value: string[]) => void;
}

const UserForm: FC<UserFormProps> = ({ errors, touched, setFieldValue }) => {
  const location = useLocation();

  return (
    <Form className={`${location.pathname === '/user' ? 'user-form' : 'user-form user-form-modal'}`}>
      <div>
        <Field name="username" placeholder="username"/>
        {errors.username && touched.username &&
          <div className="error-msg">{errors.username}</div>}
      </div>
      <div>
        <Field type="password" name="password" placeholder="password"/>
        {errors.password && touched.password &&
          <div className="error-msg">{errors.password}</div>}
      </div>
      <div>
        <Field name="firstName" placeholder="first name"/>
        {errors.firstName && touched.firstName &&
          <div className="error-msg">{errors.firstName}</div>}
      </div>
      <div>
        <Field name="lastName" placeholder="last name"/>
      </div>
      <div>
        <Field
          name="roles"
          placeholder="roles"
          component={MultiSelect}
          options={rolesList}
          isMulti
          onChange={(value: any) => {
            setFieldValue(
              'roles',
              value ? value.map((option: any) => option.value) : []
            );
          }}
        />
        {errors.roles && touched.roles && <div className="error-msg">{errors.roles}</div>}
      </div>
      <div>
        <Field
          name="workBorders"
          placeholder="work borders"
          component={MultiSelect}
          options={workBordersList}
          isMulti
          onChange={(value: any) => {
            setFieldValue(
              'workBorders',
              value ? value.map((option: any) => option.value) : []
            );
          }}
        />
        {errors.workBorders && touched.workBorders && <div className="error-msg">{errors.workBorders}</div>}
      </div>
      <button type="submit" className="outline-btn form-btn">
        {location.pathname === '/user' ? 'Добавить пользователя' : 'Сохранить изменения'}
      </button>
    </Form>
  );
};

export default UserForm;