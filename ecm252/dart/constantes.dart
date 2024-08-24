void main(){
  //constantes são criadas com final
  final nome = "João";
  print(nome);
  //pode também explicitar o tipo
  final int idade = 17;
  print(idade);
  print(nome.runtimeType);
  print(idade.runtimeType);
  //não posso alterar nome nem idade
  //nome = 'Pedro';
  //idade++;
  final peso;
  //não posso usar se não inicializar
  //print(peso);
  //print(peso.runtimeType);

  //posso também criar constantes com a palavra const
  //mas aí preciso inicializar na hora da criação
  const nome1 = 'Ana';
  //também posso explicitar o tipo, de maneira opcional
  const String sobrenome = 'Silva';
  const int idade1 = 19;
  const bool vaiChover = true;
  const bool maior = false;

  //também vale com interpolação de string
  //se não inicializar com variáveis const da erro
  //const nomeCompletoInterpolacao = '$nome $sobrenome';
  const nomeCompletoInterpolacao = '$nome1 $sobrenome';
  //posso usar também com concatenação
  const nomeCompletoConcatenado = nome1 + ' ' + sobrenome;

  print('''${nome.runtimeType} ${nome1.runtimeType} ${sobrenome.runtimeType}
    ${idade.runtimeType} ${vaiChover.runtimeType} ${maior.runtimeType}
    ${nomeCompletoInterpolacao.runtimeType} ${nomeCompletoConcatenado.runtimeType}''');

    //o compilador não é responsável por chamar um método
    //const maiusculas = nome1.toUpperCase();

    //mas dá para fazer continhas
    const soma = 2 + 3;
    print('$soma ${soma.runtimeType}');
    //dá também para fazer contas com outras constantes
    const n1 = 2, n2 = 3, n3 = n1 + n2;
    print(n1 + n2 - n3);
    
    var n4 = 2;
    //não consigo inicializar constantes const com variáveis
    // const n5 = n4 + 2;

    final n6 = 5;
    //também dá erro inicializar com final
    //const n7 = n6 + 2;
}