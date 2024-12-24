// teste.js
//console.log("Olá Babel!")

//Prática M25 - EBAC
//Cria um array de objetos, onde teremos como atributos do objeto: _
// o nome e a nota de alunos;
const alunos = [
    { nome: 'João', nota: 8.5 },
    { nome: 'Maria', nota: 9.2 },
    { nome: 'Carlos', nota: 7.8 },
    { nome: 'Ana', nota: 5.9 },
    { nome: 'Pedro', nota: 10 }
];
  
console.log(alunos);


// Criar uma função que irá retornar apenas os alunos que tiveram _
// a nota maior ou igual à 6;
console.log("Notas maiores que 6:")

const AlunosMaiorQue6 = alunos.filter(function(item) {
    return item.nota >= 6.0
})

console.log(AlunosMaiorQue6);

// agora utilizando arrowfunction
console.log("// usando arrow funciton");

function filtrarAlunosAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}
  
const alunosAprovados = filtrarAlunosAprovados(alunos);
  
console.log(alunosAprovados);