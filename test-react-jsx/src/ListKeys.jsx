import React from "react";

const listCustumer = [
  {
    id: 1,
    name: "kleber",
    skills: ["HTML", "JS", "SASS", "React"],
  },
  {
    id: 2,
    name: "Tiago Silva",
    skills: ["Node", "Typescript", "Express", "Prisma"],
  },
  {
    id: 3,
    name: "Roberto",
    skills: ["HTML", "CSS"],
  },

  {
    id: 4,
    name: "Andre Silva",
    skills: ["Python"],
  },
  {
    id: 5,
    name: "Sara Morais",
    skills: ["HTML", "Ruby", "Elixir"],
  },
];

const ListKeys = () => {
  const rendersCustumers = (custumer) => {
    return (
      <div key={`customer- ${custumer.id}`}>
        <li>{custumer.name}</li>
        {custumer.skills.map(renderSkills)}
      </div>
    );
  };

  const renderSkills = (skill, index) => {
    return (
      <div style={{ paddingLeft: "30px" }} key={`Skills : ${index}`}>
        <li>{skill};</li>
      </div>
    );
  };

  return (
    <div>
      <h1>Digital Innovation One</h1>
      <p>Bem vindo a nossa aula</p>

      <ul>{listCustumer.map(rendersCustumers)}</ul>
    </div>
  );
};

export default ListKeys;
