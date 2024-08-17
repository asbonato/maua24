void main(){
  //de string para int
  String idadeTextual = "25";
  int idade = int.parse(idadeTextual);
  print(idade);

  //de string para double
  String pesoTextual = '85.2';
  double peso = double.parse(pesoTextual);
  print(peso);

  //de strint para num
  String alturaTextual = '1.8';
  num altura = num.parse(alturaTextual);
  print(altura);

  String logradouro = 'Rua B';
  int numero = 325;
  //converter de número para string
  print(logradouro+', '+numero.toString());

//problemas da atribuição de int em double
/*aqui tudo bem, 2 é um literal de inteiro
  o compilador faz uma promoção (casting) implícita*/
  double d1 = 2;
  int i1 = 2;
  //erro em tempo de compilação
  //d1 = i1;
  //podemos resolver assim:
  d1 = i1.toDouble();
  print(d1);

  //não existe coerção de double para int
  double a = 1.05;
  //int b = (int)a; isso dá erro
  //podemos usar métodos
  int b1 = a.round(); //arredonda
  int b2 = a.ceil(); //teto
  int b3 = a.floor(); //chão
  int b4 = a.truncate(); //trunca as casas decimais
  print(b1);
  print(b2);
  print(b3);
  print(b4);



}