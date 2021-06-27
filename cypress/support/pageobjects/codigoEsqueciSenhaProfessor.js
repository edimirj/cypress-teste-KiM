/// <reference types="cypress" />

import esqueciSenhaProfessorElements from "../elements/esqueciSenhaProfessorElements";
const EsqueciSenhaProfessorElements = new esqueciSenhaProfessorElements();
const url = Cypress.config("baseUrl");

class codigoEsqueciSenhaProfessor {

    //Cenário global
    acessarSite(){
        cy.visit(url);
    }

    clicarBotaoEntrar(){
        cy.get(EsqueciSenhaProfessorElements.btnEntrar()).click();
    }

    clicarBotaoProfessor(){
        cy.get(EsqueciSenhaProfessorElements.btnProfessor()).click();
    }

    clicarEsqueciSenha(){
        cy.get(EsqueciSenhaProfessorElements.btnRecuperarSenha()).click();
    }

    enviarEmail(){
        cy.get(EsqueciSenhaProfessorElements.btnEnviarEmail()).submit();
    }

    //Cenário positivo
    digitarEmailCadastrado(){
        cy.get(EsqueciSenhaProfessorElements.inputEmail()).type('fernando@gmail.com');
    }

    emailEnviado(){
        cy.get(EsqueciSenhaProfessorElements.txSucess()).should('be.visible');
    }

    //Cenário negativo
    digitarEmailInvalido(){
        cy.get(EsqueciSenhaProfessorElements.inputEmail()).type('dfdsfa@gmail.com');
    }

    emailNaoEnviado(){
        cy.get(EsqueciSenhaProfessorElements.txFail()).should('be.visible');
    }


}

export  default codigoEsqueciSenhaProfessor;