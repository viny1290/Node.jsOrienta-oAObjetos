export default class User {
    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role, ativo = true) {
        this.#nome = nome,
        this.#email = email,
        this.#nascimento = nascimento,
        this.#role = role || 'estudante',
        this.#ativo = ativo
    }

    get nome() {
        return this.#nome
    }

    get email() {
        return this.#email
    }

    get role() {
        return this.#role
    }

    set email(novoEmail) {
        if(novoEmail === '') {
            throw new Error('Formato não valido');
        }
        this.#email = novoEmail
    }

    exibirInfos() {
        return `${this.nome}, ${this.email}`
    }
}