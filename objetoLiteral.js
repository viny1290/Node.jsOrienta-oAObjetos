const user = {
    nome: "Vinícius",
    email: "vinijudo532@gmail.com",
    nascimento: "25/09/2003",
    role: "estudante",
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email)
    }
}

const admin = {
    nome: "Mariana",
    email: "mariana@gmail.com",
    nascimento: "05/09/1990",
    role: "adim",
    criarCurso() {
        console.log('curso criado!')
    }
}

Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfos()
