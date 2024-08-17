main(){
  int a = 2;
  //somente pré incremento, a vale 3
  ++a;
  print(a);
  //somente pós incremento, a vale 4
  a++;
  print(a);
  //duas operações
  //vai exibir 5
  print(++a);
  //vai exibir 5 de novo
  print(a++);
  //mas agora a vale 6
  print(a);
}