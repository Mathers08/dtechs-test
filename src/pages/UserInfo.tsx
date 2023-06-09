import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Formik, FormikHelpers } from 'formik';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { selectUsers } from '../redux/users/selectors';
import { editUser, removeUser } from '../redux/users/slice';
import { useAppDispatch } from '../hooks';
import { Modal } from '../components';
import UserForm from './UserForm';
import { validationSchema, validationUniqueUsername } from '../utils';
import { IUser } from '../redux/users/types';

const UserInfo = () => {
  const { id } = useParams();
  const { users } = useSelector(selectUsers);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isModalActive, setIsModalActive] = useState(false);
  const user = users && users.find((u) => u.id === id);
  const initialValues: IUser = {
    id: user?.id,
    username: user?.username,
    password: user?.password,
    firstName: user?.firstName,
    lastName: user?.lastName,
    roles: user?.roles,
    workBorders: user?.workBorders,
  };

  const onModalClick = () => setIsModalActive(!isModalActive);
  const onRemoveClick = () => {
    dispatch(removeUser(id));
    navigate('/');
    toast.success('Пользователь удален!');
  };
  const onUserSubmit = (values: IUser, { setSubmitting }: FormikHelpers<IUser>) => {
    setTimeout(() => {
      const isValid = validationUniqueUsername(users, values);
      if (isValid) {
        dispatch(editUser(values));
        navigate('/');
        toast.success('Информация обновлена!');
      }
      setSubmitting(false);
    }, 500);
  };

  return (
    <div className="wrapper">
      <h1>Информация о пользователе</h1>
      <Link to="/">
        <button className="outline-btn">Вернуться к списку</button>
      </Link>
      <div className="user-info">
        <div className="info-item">
          <p>Username:</p>
          <h4>{user?.username}</h4>
        </div>
        <div className="info-item">
          <p>Password:</p>
          <h4>{user?.password}</h4>
        </div>
        <div className="info-item">
          <p>FirstName:</p>
          <h4>{user?.firstName}</h4>
        </div>
        <div className="info-item">
          <p>LastName:</p>
          <h4>{user?.lastName}</h4>
        </div>
        <div className="info-item">
          <p>Roles:</p>
          <h4>{user?.roles?.join(', ')}</h4>
        </div>
        <div className="info-item">
          <p>WorkBorders:</p>
          <h4>{user?.workBorders?.join(', ')}</h4>
        </div>
      </div>
      <div className="user-btns">
        <button onClick={onModalClick} className="outline-btn form-btn">Обновить информацию</button>
        <button onClick={onRemoveClick} className="red-btn form-btn">Удалить пользователя</button>
      </div>
      {isModalActive && (
        <Modal props={{
          active: isModalActive,
          setActive: setIsModalActive,
          color: '#000',
          width: 550,
          height: 500,
        }}
        >
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onUserSubmit}>
            {({ errors, touched, setFieldValue }) => (
              <UserForm errors={errors} touched={touched} setFieldValue={setFieldValue} />
            )}
          </Formik>
        </Modal>
      )}
    </div>
  );
};

export default UserInfo;
