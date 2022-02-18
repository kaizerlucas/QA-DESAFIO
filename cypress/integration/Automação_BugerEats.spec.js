/// <reference types="cypress" />

/*
Sendo um visitante da página BugerEats
Quero me cadastrar
Para me tornar um parceiro entregador
 */

describe('Visitando a hone', () => {

  context('Dado que acesso o site da plataforma', () => {
      beforeEach(function () {
        cy.visit('https://buger-eats.vercel.app/');
      })
      
  context('Quando valido a opção de me cadastrar', () => {
      beforeEach(function () {
        cy.contains('Cadastre-se para fazer entregas').should('be.visible')
          .click();
      })

  it('Então sou direcionado para a página de cadastro', () => {
      cy.url('https://buger-eats.vercel.app/deliver')
          .should('be.equal', 'https://buger-eats.vercel.app/deliver');   
      })
    })
   })
})

describe('Buscando um endereço ', () => {

 context('Dado que eu estou na página de cadastro cadastro', () => {
     beforeEach(function () { 
      cy.url('https://buger-eats.vercel.app/deliver');
     })

  context('Quando quero informar um cep válido', () => {
    beforeEach(function () { 
      cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > input').type ('13092-117');
      cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2) > input'). click ();
    })

  it('Então devo ter os campos preenchidos de acordo com o cep', () => {
      cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > input').type ('13092-117');
      cy.get(':nth-child(3) > input');
      cy.get(':nth-child(5) > :nth-child(1) > input');
      cy.get(':nth-child(5) > :nth-child(2) > input')

  })
  })
 })
})

 