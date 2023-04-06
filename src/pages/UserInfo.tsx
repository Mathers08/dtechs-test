import React, { useState } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { useSelector } from "react-redux";
import { selectUsers } from "../redux/users/selectors";
import { editUser, removeUser } from "../redux/users/slice";
import { toast } from "react-toastify";
import { useAppDispatch } from "../hooks";
import { MultiSelect, Modal } from "../components";
import { rolesList, workBordersList } from "../components/MultiSelect";

const UserInfo = () => {
  const { id } = useParams();
  const { users } = useSelector(selectUsers);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isModalActive, setIsModalActive] = useState(false);
  const user = users && users.find(user => user.id === id);

  const onModalClick = () => setIsModalActive(!isModalActive)
  const onRemoveClick = () => {
    dispatch(removeUser(id));
    navigate('/');
    toast.success('Пользователь удален!');
  };
  const onUserSubmit = (values: any, { setSubmitting }: FormikHelpers<any>) => {
    setTimeout(() => {
      dispatch(editUser(values));
      navigate('/');
      toast.success('Информация обновлена!');
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
          <h4>{user?.roles.join(', ')}</h4>
        </div>
        <div className="info-item">
          <p>WorkBorders:</p>
          <h4>{user?.workBorders.join(', ')}</h4>
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
        }}>
          <Formik initialValues={{
            id: user?.id,
            username: user?.username,
            password: user?.password,
            firstName: user?.firstName,
            lastName: user?.lastName,
            roles: user?.roles,
            workBorders: user?.workBorders
          }} onSubmit={onUserSubmit}>
            <Form className="user-form" style={{ maxWidth: '100%' }}>
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
              <button type="submit" className="outline-btn form-btn">Сохранить изменения</button>
            </Form>
          </Formik>
        </Modal>
      )}
    </div>
  );
};

export default UserInfo;
