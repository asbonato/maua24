import 'package:pedra_papel_tesoura/pedra_papel_tesoura.dart';
import 'package:test/test.dart';

void main() {
  test('opcaoEhValida', () {
    expect(opcaoEhValida(1), true);
  });
  test('opcaoEhValida', () {
    expect(opcaoEhValida(2), true);
  });
  test('opcaoEhValida', () {
    expect(opcaoEhValida(3), true);
  });
  test('opcaoEhValida', () {
    expect(opcaoEhValida(4), true);
  });
  test('opcaoEhValida', () {
    expect(opcaoEhValida(0), false);
  });
  test('opcaoEhValida', () {
    expect(opcaoEhValida(5), false);
  });
}
