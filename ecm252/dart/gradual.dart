main(){
  //variável estaticamente tipada int
  //em tempo de compilação e em tem de execução é int
  int a = 2;
  print(a.runtimeType);
  //erro em tempo de compilação ao chamar um método que 
  //a classe int não possui
  //a.indexOf('b');
  //erro de atribuição de tipo indevido
  //a = 'abc';

  //variável dinamicamente tipada
  //não há checagem em tempo de compilação
  //no exemplo, em tempo de execução o tipo é int
  dynamic b = 2;
  print(b.runtimeType);
  //erro somente em tempo de execução
  //b.indexOf('2');
  b = 'abc';
  //agora o tipo é string
  print(b.runtimeType);
}