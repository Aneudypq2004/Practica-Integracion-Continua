const helloWord = require('./index');

test('Debería devolver Hola Mundo', () => {
    expect(helloWord()).toBe('Hola Mundo');
});