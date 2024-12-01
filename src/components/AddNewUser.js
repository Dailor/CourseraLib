import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utilis/consts';
import { Context } from '../index';
import '../style/all.css';
const AddNewUser = ({ handleAuth }) => {
  const { user } = useContext(Context);

  const [newUserAuth, setNewUserAuth] = useState({
    name:"",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUserAuth(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (newUserAuth.password !== newUserAuth.confirmPassword) {
        // Пароль и его подтверждение не совпадают, обработка ошибки
        console.error("Passwords do not match");
        return;
    }
    
    const newUserWithId = {
      ...newUserAuth,
      id: user.userAuth.length + 1,
    };

    console.log(newUserWithId);

    user.setUserAuth([...user.userAuth, newUserWithId]);

    setNewUserAuth({
        name:"",
        email: "",
        password: "",
        confirmPassword: "",
    });
    handleAuth();
  };
  
  return (
    <div className="container">
      <div className="main cont">
        <form className="form" onSubmit={handleSubmit}>
          <h3 className='authForm'>Регистрация</h3>
          <fieldset className="fieldset">
            <label htmlFor="name">E-mail</label>
            <input 
            type="email" 
            placeholder="Введите почту"  
            name="email"
            value={newUserAuth.email}
            onChange={handleChange}
            />
          </fieldset>
          <fieldset className="fieldset">
            <label htmlFor="">Полное имя</label>
            <input 
             type="text" 
             placeholder="Введите полное имя" 
             name="name" 
             value={newUserAuth.name}
             onChange={handleChange} 
            />
          </fieldset>
          <fieldset className="fieldset">
            <label htmlFor="">Пароль</label>
            <input 
            type="password" 
            placeholder="Введите пароль" 
            name="password" 
            value={newUserAuth.password}
            onChange={handleChange}
            />
          </fieldset>
          <fieldset className="fieldset">
            <label htmlFor="">Подтвердите пароль</label>
            <input type="password" 
              placeholder="Подтвердите пароль" 
              name="confirmPassword" 
              value={newUserAuth.confirmPassword}
              onChange={handleChange} 
              />
            <Button className="fieldset" type="submit">
              Зарегистрироваться
            </Button>
          </fieldset>
          <p>
            У вас уже есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войти</NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default AddNewUser;