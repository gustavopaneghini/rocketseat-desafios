const students = [
  {
    name: "João",
    firstNote: 8.5,
    secondNote: 7.2,
  },
  {
    name: "Henrique",
    firstNote: 3.5,
    secondNote: 2.5,
  },
  {
    name: "Gustavo",
    firstNote: 3.1,
    secondNote: 6.5,
  },
  {
    name: "Mariane",
    firstNote: 9.4,
    secondNote: 5.9,
  },
  {
    name: "Gabriel",
    firstNote: 8.5,
    secondNote: 9.3,
  },
  {
    name: "Pedro",
    firstNote: 3.7,
    secondNote: 10,
  },
];
for (let i = 0; i < students.length; i++) {
  const note = (students[i].firstNote + students[i].secondNote) / 2;
  if (note.toFixed(1) >= 7) {
    alert(`
    A média do(a) aluno(a) ${students[i].name} é: ${note}\n
    Parabéns ${students[i].name}! Você foi aprovado(a) no concurso!
    `);
  } else {
    alert(`
    A média do(a) aluno(a) ${students[i].name} é: ${note}\n
    Não foi dessa vez ${students[i].name}! Tente novamente!
    `);
  }
}

function calc(FN, SN) {
  let media = (FN + SN) / 2;
  return media;
}

for (const estudante of students) {
  media = calc(estudante.firstNote, estudante.secondNote);

  media >= 7
    ? alert(`
  A média do(a) aluno(a) ${estudante.name} é: ${media}\n
  Parabéns ${estudante.name}! Você foi aprovado(a) no concurso!
  `)
    : alert(`
  A média do(a) aluno(a) ${estudante.name} é: ${media}\n
  Não foi dessa vez ${estudante.name}! Tente novamente!
  `);
}
