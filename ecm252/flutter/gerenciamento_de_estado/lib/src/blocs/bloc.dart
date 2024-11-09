import 'dart:async';
import 'package:flutter/material.dart';
import 'package:fluttertoast/fluttertoast.dart';

import 'validators.dart';
import 'package:rxdart/rxdart.dart';

class Bloc with Validators{
  //StreamController verm do pacote dart:async
  //final _emailController = StreamController<String>.broadcast();
  //final _passwordController = StreamController<String>.broadcast();

  final _emailController = BehaviorSubject<String>();
  final _passwordController = BehaviorSubject<String>();

  Stream<String> get email => _emailController.stream.transform(validateEmail);
  Stream<String> get password => _passwordController.stream.transform(validatePassword);
  Stream<bool> get emailPasswordAreOk => CombineLatestStream.combine2(email, password, (e, p) => true);

  Function(String) get changeEmail => _emailController.sink.add;
  Function(String) get changePassword => _passwordController.sink.add;

  void submitForm(){
    final email = _emailController.value;
    final password = _passwordController.value;
    Fluttertoast.showToast(
      msg: 'E-mail: $email, Password: $password',
      toastLength: Toast.LENGTH_SHORT,
      gravity: ToastGravity.CENTER,
      timeInSecForIosWeb: 1,
      backgroundColor: Colors.blue,
      textColor: Colors.white,
      fontSize: 16.0
    );
  }

  void dispose() {
    _emailController.close();
    _passwordController.close();
  }
}


//a instância global não será mais utilizada
//final bloc = Bloc();