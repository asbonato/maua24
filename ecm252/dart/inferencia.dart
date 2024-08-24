void main(){
  //não precisamos dizer que "João" é uma string
  var nome = "João";
  print(nome.runtimeType);
  //depois de inferido o tipo, não pode mudar
  //nome = 2;
  //o mesmo vale para int
  var idade = 25;
  print(idade.runtimeType);
  //e assim por diante
  var vaiChover = true;
  print(vaiChover.runtimeType);
  var salario = 2532.2;
  print(salario.runtimeType);
}