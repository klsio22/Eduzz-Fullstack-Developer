interface IUser {
  id: string;
  email: string;
}

interface IAdmin extends IUser {
  job: 'gerente' | 'Coordenador' | 'supervisor';
}

function redirect(user: IUser | IAdmin) {
  if ("jog" in user) {
    //Redirecionar para a área de administração
  }

  //Redirecionar para a área do usuário
}


