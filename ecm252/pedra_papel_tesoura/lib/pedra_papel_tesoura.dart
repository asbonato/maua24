import 'dart:io';
import 'dart:math';

enum OPCAO { pedra, papel, tesoura}

void exibe(String texto){
  print(texto);
}

int pegaOpcaoUsuario() {
  return int.parse(stdin.readLineSync()!);
}

bool opcaoEhValida(int opcao){
  return opcao >= 1 && opcao <= 4;
}

OPCAO mapeiaOpcao(int opcao){
  return OPCAO.values[opcao - 1];
}

String decideResultado(OPCAO opcaoUsuario, OPCAO opcaoComputador){
  if (opcaoUsuario == opcaoComputador) return "Empate";
  if ((opcaoUsuario == OPCAO.papel && opcaoComputador == OPCAO.pedra) ||
    (opcaoUsuario == OPCAO.pedra && opcaoComputador == OPCAO.tesoura) ||
    (opcaoUsuario == OPCAO.tesoura && opcaoComputador == OPCAO.papel)) {
      return "Você venceu";
    }
  return "Computador venceu";
}

void jogo(){
  int opUsuario;
  do{
    //exibir menu

    //capturar opção do usuário, validando
    do{
      exibe('1-Pedra\n2-Papel\n3-Tesoura\n4-Sair');
      opUsuario = pegaOpcaoUsuario();
    }while(!opcaoEhValida(opUsuario));
    //se o usuário quer sair, digitando 4
    //senão
    if (opUsuario != 4){
      //sortear a escolha do computador
      int opComputador = Random().nextInt(3) + 1;
      //mapear opcao usuario, de int para enum
      OPCAO opcaoUsuario = mapeiaOpcao(opUsuario);
      //mapear opecao computador, de int para enum
      OPCAO opcaoComputador = mapeiaOpcao(opComputador);
      //exibir opções de cada um
      exibe('Você (${opcaoUsuario.name}) vs (${opcaoComputador.name}) Computador');
      //decidir quem venceu ou se houve empate
      String vencedor = decideResultado(opcaoUsuario, opcaoComputador);
      exibe(vencedor);
      exibe('*'*50);
      //exibir o resultado
      sleep(Duration(seconds: 3));
    }
  }while(opUsuario != 4);
  exibe('Até logo');
}
