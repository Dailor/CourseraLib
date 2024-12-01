import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { REGISTRATION_ROUTE } from '../utilis/consts';

const LoginUser = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Передаем введенные данные родительскому компоненту для обработки
    handleLogin(email, password);
    // Перенаправляем пользователя на главную страницу
  };

  return (
         <div className="container ">
          <div className="main cont">
            <form className="form" onSubmit={handleSubmit}>
              <h3 className='authForm'>Войти</h3>
              <fieldset className="fieldset" > 
                <label htmlFor="">E-mail</label>
                <input 
          type="email" 
          id="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />              </fieldset>
              <fieldset className="fieldset">
                <label htmlFor="">Пароль</label>
                <input 
          type="password" 
          id="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />                <button className="fieldset" type="submit" >
                  Войти
                </button>
              </fieldset>
              <p>
                У вас нету аккаунта? <NavLink to={REGISTRATION_ROUTE} >Регистрация</NavLink>
              </p>
            </form>
          </div>
        </div>

  );
};

export default LoginUser;
