import React from 'react';
import './index.scss';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, FormikHelpers } from 'formik';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import { IUser, RoleEnum } from '../redux/users/types';
import { useAppDispatch } from '../hooks';
import { addUser } from '../redux/users/slice';
import { validationSchema, validationUniqueUsername } from '../utils';
import { selectUsers } from '../redux/users/selectors';
import UserForm from './UserForm';

const AddUser = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { users } = useSelector(selectUsers);
  const initialValues: IUser = {
    id: uuidv4(),
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    roles: [RoleEnum.ANT],
    workBorders: [],
  };

  const onUserSubmit = (values: IUser, { setSubmitting }: FormikHelpers<IUser>) => {
    const isValid = validationUniqueUsername(users, values);
    if (isValid) {
      dispatch(addUser(values));
      navigate('/');
      toast.success('Пользователь добавлен!');
    }
    setSubmitting(false);
  };

  return (
    <div className="wrapper">
      <h1>Добавление пользователя</h1>
      <Link to="/">
        <button className="outline-btn">Вернуться к списку</button>
      </Link>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onUserSubmit}>
        {({ errors, touched, setFieldValue }) => (
          <UserForm errors={errors} touched={touched} setFieldValue={setFieldValue} />
        )}
      </Formik>
    </div>
  );
};

export default AddUser;
