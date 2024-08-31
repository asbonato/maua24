import 'dart:io';

import 'package:colecoes/colecoes.dart' as colecoes;

void main(List<String> arguments) {
  // //podemos usar final
  // final nomes = ['Ana', 'Pedro'];
  // //pode alterar o conteúdo
  // nomes[0] = 'Ana Maria';
  // //mas não pode trocar o objeto referenciado
  // nomes = ['João', 'Maria'];

  // //List<Object>
  // var qualquerCoisa = [1, true, 'Ana'];
  // //List<String> com type annotation
  // var somenteStrings = <String>['Ana', 'Pedro'];
  // print(qualquerCoisa.runtimeType);
  // print(somenteStrings.runtimeType);

  // List<String> nomes = ['Ana', 'Pedro'];
  // print(nomes.runtimeType);
  // List<int> idades = [17, 22];
  // print(idades.runtimeType);
  // List<bool> maiorDeIdade = [false, true];
  // print(maiorDeIdade.runtimeType);

  // //lista de listas
  // var listas = [nomes, idades, maiorDeIdade];
  // print(listas);
  // print(listas.runtimeType);
  // //não pode, pois é escalar e a lista é List<List<Object>>
  // //listas.add(3.0);
  //  listas.add([3.0]);
  //  print(listas);

  // var nomes = ['Ana', 'João', 'Maria'];
  // //o método contains
  // //true
  // print(nomes.contains('Ana'));
  // //false
  // print(nomes.contains('ANA'));
  // //false
  // print(nomes.contains('Pedro'));

  // //adiciona no final
  // nomes.add('Cristina');
  // print(nomes);
  // //insere em uma certa posição
  // nomes.insert(0, 'Ana Maria');
  // print(nomes);
  // //se adicionarmos na posição 5 temos o efeito do add
  // nomes.insert(5, 'Vagner');
  // print(nomes);
  // //agora a lista tem 6 elementos
  // //vamos inserir alguém na posição 7
  // nomes.insert(7, 'Antonio'); //Range Error

  // //verifica se a lista está vazia
  // print(nomes.isEmpty);
  // //verifica se a lista não está vazia
  // print(nomes.isNotEmpty);
  // //devolve um Iteable<String> contendo os elementos em ordem reversa
  // //não altera a lista atual
  // print(nomes.reversed);
  // //devolve o primeiro elemento da lista
  // //erro se estiver vazia
  // print(nomes.first);
  // //devolve o primeiro ou null, sem causar erro
  // var lista = [];
  // print(lista.firstOrNull);
  // //o mesmo vale para o último elemento
  // print(nomes.last);
  // print(lista.lastOrNull);

  // var nomes = ['João', 'Pedro', 'Maria'];
  // print(nomes);
  // print(nomes.toString());
  // print(nomes.runtimeType);
  // print(nomes[0]);
  // print(nomes[1]);
  // //Range Error
  // //print(nomes[-1]);
  // //print(nomes[3]);
  // for(int i = 0; i < nomes.length; i++){
  //   print(nomes[i]);
  // }
  // for(final nome in nomes){
  //   print(nome);
  // }
  // //erro pois é lista de strings
  // //nomes[0] = 2;

  // var itensDiversos = ['Ana', true, 2, 2.5];
  // print(itensDiversos);
  // print(itensDiversos.runtimeType);
  // itensDiversos[0] = false;
  // print(itensDiversos);
  // //soma todos os valores passados para o main
  // int total = 0;
  // for(final valor in arguments){
  //   total += int.parse(valor);
  // }
  // print('O total dos parâmetros passados é $total');
}
