import React from 'react';
// import PropTypes from 'prop-types';

const SimpleComponent = () => {
  const isAuth = localStorage.getItem('auth');
  const onLogin = () => {
    localStorage.setItem('auth', 'true');
    console.log('Пользовательский статус: ', localStorage.getItem('auth'));
  };

  const onLogOut = () => {
    localStorage.setItem('auth', 'false');
    console.log('Пользовательский статус: ', localStorage.getItem('auth'));
  };

  return isAuth === 'true' ? (
    <button className="btn btn-primary" onClick={onLogOut}>
      Выйти из системы
    </button>
  ) : (
    <button className="btn btn-primary" onClick={onLogin}>
      Войти
    </button>
  );
};

// SimpleComponent.propTypes = {
//   onLogin: PropTypes.string,
//   onLogOut: PropTypes.string,
//   isAuth: PropTypes.string
// };

export default SimpleComponent;
