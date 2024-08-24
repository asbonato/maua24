void main(){
  for(int i = 0; i < 10; i++){
    print(i);
  }

  //for-each
  const nomes = ['Pedro', 'Maria', 'João'];
  for (final nome in nomes) {
    print(nome);
  }

  //com continue
  for (final nome in nomes) {
    if (nome == 'Maria'){
      continue;
    }
    print(nome);
  }

  //com break
  for (final nome in nomes) {
    if (nome == 'Maria'){
      break;
    }
    print(nome);
  }

  //as 3 regiões do for são opctionais
  //for(;;){
  //  print('loop infito');
 // }

  int contador = 0;
  while (contador < 10){
    print(contador);
    contador++;
  }

  do {
    print(contador);
    contador++;
  } while (contador < 10);

}