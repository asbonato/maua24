enum DiaSemana {SEGUNDA, TERCA, QUARTA, QUINTA, SEXTA, SABADO, DOMINGO}
void main(){
  //exibindo todos os valores
  print(DiaSemana.values);
  DiaSemana dia = DiaSemana.SEGUNDA;
  print(dia);
  print(dia.name);
 
  switch(dia){
    case DiaSemana.SEGUNDA:
      print(":'(");
    case DiaSemana.TERCA:
      print(':(');
    case DiaSemana.QUARTA:
      print(':|');
    case DiaSemana.QUINTA:
      print(':)');
    case DiaSemana.SEXTA:
      print('\o/');
    case DiaSemana.SABADO:
      print(':))');
    case DiaSemana.DOMINGO:
      print(':(');
  }
}