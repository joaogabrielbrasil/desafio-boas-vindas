//var bt = window.document.querySelector('#bt')
function botao() {
    
    var cont = window.document.querySelector('#continua')
    var nome = window.prompt(`Qual seu nome: `)
    var idade = window.prompt(`Olá, ${nome} , Qual sua idade: `)
    window.alert(`Acabei de conhecer ${nome} que tem ${idade} anos.`)
    cont.innerHTML = `Acabei de conhecer ${nome} que tem ${idade} anos.`
}