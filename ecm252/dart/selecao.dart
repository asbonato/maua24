void main(){
  const idade = 19;
  //lembre-se do if sem chaves
  if (idade > 18)
    print('Pode dirigir'); //dentro do if
  print('Até logo'); // fora do if

  if (idade > 18){
    print('Pode dirigir');
  }
  print('Até logo');
  //if else
  const nome = 'Ana';
  if (nome.startsWith('A')){
    print('O nome começa com A');
  } else {
    print('O nome não começa com A');
  }
  //if else if
  dynamic nota = 7.5;
  if (nota >= 9)
    print('A');
  else if (nota >= 7)
    print('B');
  else if (nota >= 5)
    print ('C');
  else
    print('R');

  nota = 5;

  //o break é ímplicito, não precisa colocar
  //o fall-through só acontece em cláusulas vazias
  //é possível também usar || (or) em vez de cláusulas vazias
  switch (nota) {
    case 10:
      print('A+');
      break;
    case 9:
      print('A');
    case 8:
    case 7:
      print('B');
    case 6 || 5:
      print('C');
    default:
      print('R');
  }

  //também é possível usar strings
  var vaiChover = 'Sim';
  switch (vaiChover){
    case 'Sim':
      print('Leve guarda chuva');
    default:
      print('Não leve guarda chuva');
  }

  //é possível lidar com valores reais
  nota = 6.75;
  switch(nota){
    case > 9 && <= 10:
      print('A');
    case > 7 && <= 9:
      print('B');
    case > 5 && <= 7:
      print('C');
    default:
      print('R');
  }

  //lida até com listas
  var frutas = ['banana', 'laranja'];
  switch(frutas){
    case ['laranja', 'banana']:
      print('laranja e banana');
    case [ 'banana', 'laranja']:
      print('banana e laranja');
    case ['banana', 'maçã']:
      print('banana e maça');
    default:
      print('Outras frutas');
  }
  nota = 10;
  switch(nota){
    case 10:
      print('Parabéns, você tirou 10!');
      continue conceito;
      conceito:
      case 9:
        print('Você tirou A');
      case 8:
        print('Você tirou B');
  }
  //switch expression
  var mediaFinal = 5;
  final conceito = switch(mediaFinal){
    10 || 9 => 'A',
    8 => 'B',
    7 => 'C',
    6 => 'D',
    5 => 'E',
    _ => 'R' //caso default
  };
  print('Conceito $conceito');
}



