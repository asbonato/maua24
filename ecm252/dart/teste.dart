///documentação da função main
void main(){
  //sou um comentário de uma linha
  print('Hello, Dart');
  /*
  * Sou um comentário de múltiplas linhas
  */

  /**
   * Comentário de múltiplas linhas
   * que vai sair na documentação.
   */

  String s1 = 'abc';
  String s2 = "abc";
  String s3 = '''
        Esta é uma string de 
        múltiplas linhas.''';
  String s4 = """
        Esta é uma string de 
        múltiplas linhas.""";
  print(s1);
  print(s2);
  print(s3);
  print(s4);
  String s5 = 'O \n serve para pular uma linha';
  String s6 = r'O \n serve para pular uma linha';
  print(s5);
  print(s6);

  int a = 10;
  double b = 10.4;
  num c = 10;
  num d = 10.4;
  print(a);
  print(b);
  print(c);
  print(d);

  bool verdadeiro = true;
  bool falso = false;

  print(verdadeiro);
  print(falso);
}