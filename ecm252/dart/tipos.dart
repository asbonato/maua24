void main(){
  String nome = "João"; //aspas duplas
  String sobrenome = 'Silva'; //aspas simples
  String endereco = '''
   Rua B,
   número 1234, Vila J''';
  String irlandes = "O'neall";
  bool maior = false;
  int idade = 17;
  double peso = 80.5;
  num altura = 1.78;
  num alturaEmCm = 178;
  //string raw
  String comoPularLinha = r"Pule uma linha com \n";
  print(nome);
  print(sobrenome);
  print(endereco);
  print(irlandes);
  print(maior);
  print(idade);
  print(peso);
  print(altura);
  print(alturaEmCm);
  print(comoPularLinha);

//exibindo os tipos das variáveis
  print(nome.runtimeType);
  print(sobrenome.runtimeType);
  print(endereco.runtimeType);
  print(maior.runtimeType);
  print(idade.runtimeType);
  print(peso.runtimeType);
  print(altura.runtimeType);
  print(alturaEmCm.runtimeType);
  print(comoPularLinha.runtimeType);

  //também dá para exibir o tipo de literais
  print(2.runtimeType);
  print(true.runtimeType);
  print(30.3.runtimeType);

  //concatenação e interpolação de Strings
  print('Me chamo '+nome);
  //concatenar string com int não pode, dá erro
  //print('Minha idade é '+idade);
  /*para concatenar string e int temos que converter
    o int para string*/
    print('Minha idade é '+idade.toString());
    //interpolação com $variável
    print('Me chamo $nome');
    //interpolação com $(expressão)
    print('Meu sobrenome é ${sobrenome}');
    //com int e double
    print('Tenho $idade anos e $peso kg');
    //operações matemáticas demandam o uso de expressões
    print('Ano que vem eu terei ${idade+1} anos');

    //podemos repetir um caractere por meio de multiplicação
    print('*'*20);
    String sep = 'x-x-x ';
    print(sep * 10);
  
}