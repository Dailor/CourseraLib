import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom/cjs/react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utilis/consts';
import { Context } from '../index';
import '../style/all.css';
import AddNewUser from '../components/AddNewUser';
import LoginUser from '../components/LoginUser';

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === "/login";
  const { user } = useContext(Context);

  const handleAuth = () => {
    // user.setIsAuth(true);
    alert('Вы зарегались')
  };
  const handleLogin = (email, password) => {
    const userFound = user.userAuth.find(user => user.email === email && user.password === password);

    if (userFound) {
        // Если пользователь найден, устанавливаем флаг авторизации в true
        user.setIsAuth(true);
        // Также вы можете выполнить какие-то дополнительные действия, например, перенаправить пользователя на другую страницу
        alert('Вы успешно вошли в систему!');
      } else {
        // Если пользователь не найден или введены неправильные данные, вы можете вывести сообщение об ошибке
        alert('Неправильный email или пароль');
      }
  
    }
  return (
    <Container>
     {isLogin ? (
      
      <LoginUser handleLogin={handleLogin}/>
    ) : (
              <AddNewUser handleAuth={handleAuth} />

    )}
    </Container>
  );
};

export default Auth;
