import React from 'react';
import "./App.css";

const Btn = ({
  theme = 'red',
  size ='',
  className = '',
  ...rest
}) => {
  const sizeClassName = size ? `btn--${size}` : '';
  return (
    <a
      className={`btn ${className} ${sizeClassName} theme-${theme}`}
      {...rest}
    />
  )
};

const Buttons = () => (
  <div>
    <Btn 
      size="small"
      theme="blue"
      href="https://symfony.com"
    >
      small btn
    </Btn>
    <Btn
      size="medium"
      theme="red"
      href="https://learn.javascript.ru"
      target="_blanck"
    >
      medium box
    </Btn>
    <Btn
      size="large"
      theme="blue"
    >
      large box
    </Btn>
  </div>
);

export default Buttons
