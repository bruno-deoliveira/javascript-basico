//Solicitar o nome do aluno e as 3 notas do bimestre calcular a média daquele aluno. Se o Aluno passou no bimestre, dar os parabéns. Se o aluno não passo uno bimestre, motinar o aluno a dar o seu melhor na prova de recuperação. Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota

let student = prompt("Qual o nome do(a) aluno(a)?");
let n1 = prompt("Qual a nota da primeira prova?");
let n2 = prompt("Qual a nota da segunda prova?");
let n3 = prompt("Qual a nota da terceira prova?");

let average = (Number(n1) + Number(n2) + Number(n3)) / 3;

let result = average > 6;

average = average.toFixed(2);

if (result) {
    alert("Parabéns, " + student + "! Sua média foi de: " + average);
} else if (average < 3) {
    alert("Reprovado");
} else {
    alert(
    student +
        " estude para sua prova de recuperação! Sua média foi de: " +
        average
    );
}