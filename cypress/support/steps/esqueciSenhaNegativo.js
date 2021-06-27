/*global Given, Then, When, And */
import codigoEsqueciSenhaProfessor from '../pageobjects/codigoEsqueciSenhaProfessor';
const CodigoEsqueciSenhaProfessor = new codigoEsqueciSenhaProfessor();

Given('que professor entrou no site', () => {
    CodigoEsqueciSenhaProfessor.acessarSite();
})

When('professor clicar no botão Entrar', () => {
    CodigoEsqueciSenhaProfessor.clicarBotaoEntrar();
})

And('clicar no botão de professor', () => {
    CodigoEsqueciSenhaProfessor.clicarBotaoProfessor();
})

And('ele apertar em Esqueceu sua Senha', () => {
    CodigoEsqueciSenhaProfessor.clicarEsqueciSenha();
})

And('digitar um e-mail não cadastrado', () => {
    CodigoEsqueciSenhaProfessor.digitarEmailInvalido();
})

And('clicar no botão Recuperar Senha', () => {
    CodigoEsqueciSenhaProfessor.enviarEmail();
})

Then('irá aparecer um popup dizendo que o email não foi encontrado', () => {
    CodigoEsqueciSenhaProfessor.emailNaoEnviado();
})