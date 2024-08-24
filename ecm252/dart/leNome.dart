import 'dart:io';

void main(){
  //exibe o texto e pula uma linha
  stdout.writeln('Digite o seu nome:');
  //lê a partir do teclado e devolve uma string
  var nome = stdin.readLineSync();
  //imprime sem pular linha
  stdout.write('Olá, $nome!');

  print('Digite a sua idade: ');
  //como retorna string, precisa converter
  String? idadeStr = stdin.readLineSync();
  if(idadeStr != null){
    int idade = int.parse(idadeStr);
    print('Você tem $idade anos de idade');
  }

  String? idadeStr2;
  while(idadeStr2 == null){
    print('Digite outra vez');
    idadeStr2 = stdin.readLineSync();
  }
  int idade2 = int.parse(idadeStr2);
  print('Agora você tem $idade2');

  //ou você pode usar o opearador !
  //com ele estamos promento para o compilador que o valor não vai ser nulo
  print('Digite sua idade pela última vez:');
  int idade3 = int.parse(stdin.readLineSync()!);
}