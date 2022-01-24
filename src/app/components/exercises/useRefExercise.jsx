import React, { useRef } from 'react';
import CollapseWrapper from '../common/collapse';

const UseRefExercise = () => {
  const inputRef = useRef();
  const handleClick = () => {
    console.log(inputRef.current.innerHTML);
    inputRef.current.style.width = '150px';
    inputRef.current.style.height = '80px';
    inputRef.current.innerHTML = '<small>text</small>';
  };

  return (
    <CollapseWrapper title="Упражнение">
      <p className="mt-3">
        У вас есть блок, у которого заданы ширина и высота. Добавьте кнопку, при нажатии которой изменятся следующие свойства:
      </p>
      <ul>
        <li>Изменится содержимое блока на &quot;text&quot;</li>
        <li>высота и ширина станут равны 150 и 80 соответственно</li>
      </ul>
      <div
        className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
        ref={inputRef}
        style={{
          height: 40,
          width: 60,
          color: 'white'
        }}
      >
        <small>Блок</small>
      </div>
      <button className="btn btn-secondary mt-2" onClick={handleClick}>
        Изменить блок
      </button>
    </CollapseWrapper>
  );
};

export default UseRefExercise;
