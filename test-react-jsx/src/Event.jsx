import React from 'react';

const Event = () => {
  const handleChange = (e) => {
    const { value } = e.target;
    console.log(value);
  };

  const showEvent = (e) => {
    alert('Clicou no botão');
    console.log(e);
  };

  const Button = <button onClick={showEvent}>Mostrar evento</button>;

  return (
    <div>
      <input onChange={handleChange}></input>
      {Button}
    </div>
  );
};

export { Event };
