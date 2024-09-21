import 'dart:convert';
import 'dart:io';

import 'package:colecoes/colecoes.dart' as colecoes;

void main(List<String> arguments) {
  var nomes = ['Ana', 'Pedro'];
  var copiaComCollectionFor = [
    for(var nome in nomes)
      nome
  ];
  copiaComCollectionFor[0] = 'João';
  print(copiaComCollectionFor);
  print(nomes);

  var copiaComSpread = [
    ...nomes
  ];
  copiaComSpread[0] = 'João';
  print(copiaComSpread);
  print(nomes);

  // var nomes = ['Ana', 'Pedro'];
  // var copia = nomes;
  // // alterando a cópia
  // copia[0] = 'João';
  // //resultado
  // print(copia);
  // print(nomes);

  // var nomes1 = ['Ana', 'Pedro'];
  // var nomes2 = [
  //   'Cristina',
  //   ...nomes1 //spread
  // ];
  // print(nomes2);


  // var nomes1 = ['Ana', 'Pedro'];
  // var nomes2 = [
  //   'Cristina',
  //   for (var nome in nomes1)
  //     nome
  // ];
  // print(nomes2);


  // var idadePedro = 17;
  // var idadeCristina = 18;
  // //collection if
  // var maioresDeIdade = [
  //   'Ana',
  //   'João',
  //   if (idadePedro >= 18) 'Pedro',
  //   if (idadeCristina >= 18) 'Cristina'
  // ];
  // print(maioresDeIdade);

  // var filmes = <Map<String, dynamic>>[];
  // print(filmes.runtimeType);
  // print("Título?");
  // String? titulo = stdin.readLineSync();
  // print("Gênero?");
  // String? genero = stdin.readLineSync();
  // var notas = [5,5];
  // filmes.add({
  //   'titulo': titulo,
  //   'genero': genero,
  //   'notas': notas 
  // });
  // print(filmes);


  // var pessoa = <String, dynamic> {
  //   'nome': 'Pedro',
  //   'idade': 22
  // };

  // //for (var prop in pessoa){} //erro pois não é iterável
  // var chaves = pessoa.keys;
  // print(chaves);
  // print(chaves.runtimeType);

  // for (final prop in pessoa.keys){
  //   print(pessoa[prop]);
  // }

  // var valores = pessoa.values;
  // print(valores);
  // print(valores.runtimeType);

  // for (final valores in pessoa.values){
  //   print(valores);
  // }

  // var entries = pessoa.entries;
  // print(entries);
  // print(entries.runtimeType);

  // for (final entry in pessoa.entries){
  //   print(entry);
  //   print(entry.key);
  //   print(entry.value);
  // }

  // var pessoa = <String, dynamic> {
  //   'nome': 'Pedro',
  //   'idade': 22
  // };
  // print(pessoa.runtimeType);
  // print(pessoa['nome'].runtimeType);
  // print(pessoa['idade'].runtimeType);
  
  // //usando o operador as
  // var nome = pessoa['nome'] as String;
  // var idade = pessoa['idade'] as String;

  // print(idade.toUpperCase());//dá erro de execução

  // //sem inferência de tipo
  // Map <String, Object> pessoa = {
  //   'nome': 'Pedro',
  //   'idade': 22
  // };
  // print(pessoa);
  // print(pessoa.runtimeType);

  // //com type annotation
  // var pessoa2 = <String, Object> {
  //   'nome': 'Ana',
  //   'idade': 19
  // };
  // print(pessoa2);
  // print(pessoa2.runtimeType);

  // print(pessoa['nome']);
  // print(pessoa['idade']);
  // print(pessoa['altura']);
  // var pessoa = {
  //   'nome': 'Ana',
  //   'idade': 22,
  //   'altura': 1.8
  // };
  // print(pessoa);
  // print(pessoa.runtimeType);

  // var lembretes = {
  //   1: 'comprar café',
  //   2: 'ver um filme'
  // };
  // print(lembretes);
  // print(lembretes.runtimeType);

  // //se for igual vale a última
  // var nomes = {
  //   'nome': 'Pedro',
  //   'nome': 'Ana'
  // };
  // print(nomes);
  // print(nomes.runtimeType);

  // //união, interseção e diferença
  // var A = {1, 2, 3, 4, 5, 6};
  // var B = {1, 3, 7};

  // print(A.union(B));
  // print(B.union(A));
  // print(A.intersection(B));
  // print(B.intersection(A));
  // print(A.difference(B));
  // print(B.difference(A));

  // //não podemos indexar um conjunto
  // var nomes = {'Ana', 'João'};
  // //print(nomes[0]); 
  // // print(nomes{0});
  // // posso acessar usando elementAt(posição)
  // for (int i = 0; i < nomes.length; i++){
  //   print(nomes.elementAt(i));
  // }
  // //for-each
  // for (final nome in nomes){
  //   print(nome);
  //}

  // // vai ser um set
  // var numeros = {1};
  // print(numeros.runtimeType);

  // //vai ser um map
  // var nomes = {};
  // print(nomes.runtimeType);

  //vai ser um _Set<String>
  // var paises = <String> {};
  // print(paises.runtimeType);

  // var maiores = <int, bool> {};
  // print(maiores.runtimeType);

  // //conjuntos
  // var nomes = {'Ana', 'Pedro'};
  // print(nomes);
  // print(nomes.runtimeType);

  // var paises = {'Brasil', 'Brasil'};
  // print(paises);
  // var tupla = ('Ana', 18, true);
  // print(tupla);
  // print(tupla.runtimeType);
  // //para acessar os elementos
  // print(tupla.$1); //sim, começa em 1
  // print(tupla.$2);
  // print(tupla.$3);
  // //print(tupla.$4);
  

  //   var nomes1 = ['Ana', 'Pedro'];
  //   var nomes2 = [];
  //   nomes2.add('Ana');
  //   //posso colocar null
  //   nomes2.add(null);

  //   List<String> nomes3 = [];
  //  // nomes3.add(null);

  //  List<String?> nomes4 = [];
  //  nomes4.add(null);

  //  //com type annotations
  //  //var nomes5 = <String>[null];

  //  var nomes6 = <String?>[null];

  //  //posição da ?
  //  List<String>? podeSerNullMasNaoEh = [];

  //  print(podeSerNullMasNaoEh.runtimeType);

  //  List<String?>? podeSerNullEEh;

  //  podeSerNullEEh = [null, 'Ana'];

   //podeSerNullMasNaoEh.add(null);

  // // podemos usar const
  // const nomes = ['Ana', 'Pedro'];
  // nomes[0] = 'Ana Maria';
  // //nomes = ['Joao', 'Vitor'];

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
