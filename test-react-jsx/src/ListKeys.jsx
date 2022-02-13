import React from 'react';
import { Button } from './componets/Button';
import { listUsers } from './listUsers';


const ListKeys = () => {
  
  const handleClick = (id) => {
    console.log('Deleta cliente');
    alert(`Id do cliente ${id}`);
  };

  const rendersCustumers = (custumer) => {
    return (
      <div key={`customer- ${custumer.id}`}>
        <li>
          {custumer.name}
          <Button onClick={() => handleClick(custumer.id)}>
            Deletar cliente
          </Button>
        </li>
        {custumer.skills.map(renderSkills)}
      </div>
    );
  };

  const renderSkills = (skill, index) => {
    return (
      <div style={{ paddingLeft: '30px' }} key={`Skills : ${index}`}>
        <li>{skill};</li>
      </div>
    );
  };

  return (
    <div>
      <h1>Digital Innovation One</h1>
      <p>Bem vindo a nossa aula</p>
      <ul>{listUsers.map(rendersCustumers)}</ul>
    </div>
  );
};

export default ListKeys;
