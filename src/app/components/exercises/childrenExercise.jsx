import React from 'react';
import CollapseWrapper from '../common/collapse';

const CountChildren = ({ children }) =>
  React.Children.map(children, (child, index) => (
    <div style={{ display: 'flex', gap: '10px' }}>
      <div>№{index + 1 + ')'}</div>
      {React.cloneElement(child)}
    </div>
  ));

const ChildrenExercise = () => {
  return (
    <CollapseWrapper title="Упражнение">
      <p className="mt-3">
        У вас есть компоненты Списка. Вам необходимо к каждому из них добавить порядковый номер, относительно того, как они располагаются на
        странице. Вы можете использовать как <code>React.Children.map</code> так и <code>React.Children.toArray</code>
      </p>
      <CountChildren>
        <Component />
        <Component />
        <Component />
        <Component />
        <Component />
        <Component />
      </CountChildren>
    </CollapseWrapper>
  );
};

const Component = () => {
  return <div>Компонент списка</div>;
};

export default ChildrenExercise;
