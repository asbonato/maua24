import 'package:flutter/material.dart';
import '../blocs/bloc.dart';
import '../blocs/provider.dart';

class LoginTela extends StatelessWidget{
  @override
  Widget build(BuildContext context){
    final bloc = Provider.of(context);
    return Container(
      //20 pixels de margem esquerda, direita, em cima e embaixo
      margin: EdgeInsets.all(20.0),
      child: Column(
        children: [
          emailField(bloc),
          passwordField(bloc),
          Container(
            margin: EdgeInsets.only(top: 12.0),
            child: Row(
              children: [
                Expanded(child: submitButton(bloc),)
              ],)
          )
        ],
      ),
    );
  }

  Widget passwordField(Bloc bloc){
    return StreamBuilder(
      stream: bloc.password,
      builder: (context, AsyncSnapshot<String> snapshot) {
        return TextField(
          onChanged: bloc.changePassword,
          obscureText: true,
          decoration: InputDecoration(
            hintText: "Senha",
            labelText: "Senha",
            errorText: snapshot.hasError? snapshot.error.toString():null
          ),
        );
      },
    );  
  }

  Widget submitButton(Bloc bloc) {
    return StreamBuilder (
      stream: bloc.emailPasswordAreOk,
      builder: (context, AsyncSnapshot<bool> snapshot){
        return ElevatedButton(
          onPressed: snapshot.hasError? null: (){}, 
          child: Text('Login')
         );
      }
    );
  
  }

  Widget emailField(Bloc bloc){
    return StreamBuilder (
      //stream que, quando atualizado, produz um snapshot
      //observe como usamos o stream definido no bloco
      stream: bloc.email,
      //função que, quando chamada, causa a atualização do Widget (TextField, neste caso)
      //empacotado pelo Stream Builder
      builder: ((context, AsyncSnapshot<String> snapshot){
        return TextField(
          onChanged: bloc.changeEmail,
          keyboardType: TextInputType.emailAddress,
          decoration: InputDecoration(
            //dica que aparece quando o usuário clica
            hintText: 'seu@email.com',
            //rótulo flutuante'
            labelText: 'Endereço de e-mail',
            //o erro não necessariamente é String, por isso o seu tipo é Object?
            //daí o uso do toString()
            //errorText: snapshot.hasError || snapshot.hasData ? snapshot.error.toString() : null
            errorText: snapshot.hasError ? snapshot.error.toString() : null
          ),
        );
      }),
      );
  }
}