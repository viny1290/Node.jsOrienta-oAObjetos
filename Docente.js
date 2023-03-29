import User from './User.js';

export default class Docente extends User {
    constructor(nome, email, nascimento, role = 'docente', ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    aprovaEstudante(estudante, curso) {
        return `Estudante ${estudante} aprovado no curso ${curso}`;
    }
}

// const novoDocente = new Docente("Vinicius", "Vini@gmail.com", "2003-09-25", "docente")

// console.log(novoDocente)
// console.log(novoDocente.exibirInfos())
// console.log(novoDocente.aprovaEstudante("Juliana", "JS"))