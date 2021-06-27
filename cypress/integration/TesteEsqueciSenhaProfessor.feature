@professor-esqueceu-senha
Feature: Recuperar senha de professor cadastrado

    @positive
    Scenario: E-mail para recuperar senha é enviado
        Given que professor entrou no site
        When professor clicar no botão Entrar
        And clicar no botão de professor
        And ele apertar em Esqueceu sua Senha
        And digitar um e-mail registrado
        And clicar no botão Recuperar Senha
        Then irá aparecer um popup dizendo que o email foi enviado com sucesso

    @negative
    Scenario: E-mail inválido
        Given que professor entrou no site
        When professor clicar no botão Entrar
        And clicar no botão de professor
        And ele apertar em Esqueceu sua Senha
        And digitar um e-mail não cadastrado
        And clicar no botão Recuperar Senha
        Then irá aparecer um popup dizendo que o email não foi encontrado
