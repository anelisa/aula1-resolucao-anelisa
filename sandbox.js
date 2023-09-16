//////////////////////////////////////////////////////////////////////////////
//// VARIÁVEIS
//////////////////////////////////////////////////////////////////////////////

//var a = 10;                         // variável do escopo

// (function() {
//     a = 10;                      // variável global
// })();

// console.log(a);

// console.log( typeof a );

// a = "hello world";

// console.log(a);

// console.log( typeof a );

// if (true) {

//     const a = 10;               // constante
//     let b = 20;                 // variável

//     b = 30;

// }

// console.log(a);
// console.log(b);

//////////////////////////////////////////////////////////////////////////////
//// NOMENCLATURA DE VARIÁVEIS
//////////////////////////////////////////////////////////////////////////////

// clean code - uncle bob

//////////////////////////////////////////////////////////////////////////////
//// IDENTIFICADORES - nomes válidos de variáveis
//////////////////////////////////////////////////////////////////////////////

// [a-zA-Z_$][a-zA-Z0-9_$]*

//////////////////////////////////////////////////////////////////////////////
//// TIPOS DE DADOS - tipos primitivos
//////////////////////////////////////////////////////////////////////////////

// imutáveis
// number   
// string
// boolean


// NUMBER - IEEE 754 = 64 BITS

// console.log( typeof 10 );               // number
// console.log( typeof 2.45 );             // number

// console.log ( 0.1 + 0.2 );
// console.log ( 666.7 - 666.6 );

// STRING - UNICODE UTF-16

// console.log( typeof "abc" );
// console.log( typeof 'abc' );
// console.log( typeof `abc` );

// let host = "localhost";
// const port = "3000";
// const resource = "restaurantes"

// host = "127.0.0.1";

// const url = "http://" + host + ":" + port + "/" + resource;

// console.log(url);

// const url2 = `http://${host}:${port}/${resource}`;

// console.log(url2);

// const espacos = "a\nb\nc";

// console.log(espacos);

// const espacos2 =
// `a
// b
// c`
// console.log(espacos2);

// console.log( "\u5890");

// console.log ( url.toUpperCase() );

// console.log( typeof null );

// console.log( typeof undefined );

// function sum(a, b) {
//     return null;
// }

// const total = sum(1, 2);

//////////////////////////////////////////////////////////////////////////////
//// COMPARADORES - OPERADORES LÓGICOS
//////////////////////////////////////////////////////////////////////////////

// ==           tenta fazer a conversão de tipos === 
// ===          faz a comparação com o mesmo tipo
//if (total === null);

// console.log( 0 == '0' );
// console.log( 0 === parseInt('0') );

//////////////////////////////////////////////////////////////////////////////
//// TRATAMENTO DE VARIÁVEIS E DEFAULT VALUES / PARAMETERS
//////////////////////////////////////////////////////////////////////////////

/*
function soma(a = 0, b = 0) {
    // // iniciante - não estudou a linguagem
    // if (a == undefined || a == null) {
    //     a = 0;
    // }
    // básico
    // if (a === undefined) {
    //     a = 0;
    // }
    // if (b === undefined) {
    //     b = 0;
    // }
    // intermediário
    // if (!a) {
    //     a = 0;
    // }
    // if (!b) {
    //     b = 0;
    // }
    // avançado
    // a = a || 0;
    // b = b || 0;
    return a + b;
}
*/

// console.log( soma(1, 2) );  // 1 + 2 = 3
// console.log( soma(1) );     // NaN

//////////////////////////////////////////////////////////////////////////////
//// CENÁRIOS ONDE UMA VARIÁVEL É FALSE
//////////////////////////////////////////////////////////////////////////////

// todos os cenários onde uma variável é "false"
// console.log( !!0 );
// console.log( !!NaN );
// console.log( !!"" );
// console.log( !!false );
// console.log( !!undefined );
// console.log( !!null );

//////////////////////////////////////////////////////////////////////////////
//// STRING API
//////////////////////////////////////////////////////////////////////////////

// let linguagem = "JavaScript";
// let email = "    ronszcka@gmail.com   ";

// console.log( linguagem.length );
// console.log( linguagem.indexOf("S") );
// console.log( linguagem.startsWith("J") );
// console.log( linguagem.endsWith("t") );
// console.log( linguagem.lastIndexOf("a") );
// console.log( linguagem.substring(0, 4) );
// console.log( linguagem.substring(4) );
// console.log( linguagem.replace("Java", "ECMA") );
// console.log( email );
// console.log( email.trim() );
// console.log( email.trimStart() );
// console.log( email.trimEnd() );

//////////////////////////////////////////////////////////////////////////////
//// OBJETOS
//////////////////////////////////////////////////////////////////////////////

// let obj = {};

// console.log( obj );
// console.log( typeof obj );

// const book = {
//     title: "Clean code",
//     author: "Robert Martin",
//     pages: 464,
//     available: true
// }

// console.log(book);

// // short-hand notation - ES6

// const title = "Clean code";
// const author = "Robert Martin";
// const pages = 464;
// const available = true;

// const book2 = {
//     title,
//     author,
//     pages,
//     available
// }

// console.log(book2);

// const book3 = {
//     title: title,
//     author: author,
//     pages2: pages,
//     available: available
// }

// console.log(book3);

// // comparação de referências   book (*) -> 0x12312 { ... }        book2 (*) -> 0x3321AF { ... }

// console.log( book == book2 ); 

// book.author = "Adriano";

// console.log(book.author);
// console.log(book2.author);

// //book (*) -> 0x12312 { author: "Maria" }
// //book4 (*) ---V
// //book3 (*) 0x444444 { author: "Robert Martin" }

// let book4 = book;

// console.log( book == book4 );

// book4.author = "Maria";

// console.log(book.author);

// book4 = book3;

// console.log(book4.author);

// book4 = book;

// console.log(book4.author);

//////////////////////////////////////////////////////////////////////////////
//// JSON
//////////////////////////////////////////////////////////////////////////////

// const book = {
//     title: "Clean code",
//     author: "Robert Martin",
//     pages: 464,
//     available: true
// }

// const json = JSON.stringify(book);

// console.log(json);
// console.log(typeof json);

// const parsed = JSON.parse(json);

// console.log(parsed);
// console.log(typeof parsed);

// console.log( parsed.pages );

//////////////////////////////////////////////////////////////////////////////
//// FUNÇÕES
//////////////////////////////////////////////////////////////////////////////

// function subtract(a = 0, b = 0) {
//     return a - b;
// }

// const sum = function(a = 0, b = 0) {
//     return a + b;
// }

// console.log( subtract );
// console.log( sum );

// const calculator = function (fn) {          // function as parameter

//     return function (a, b) {                // returning a function

//         return fn(a, b);                    // call of a param function

//     }

// }

// console.log( calculator(sum)(5, 2) );
// console.log( calculator(subtract)(5, 2) );

// const sumAll = function() {

//     console.log(arguments);

//     let total = 0;

//     for (let argument in arguments) {
//         total += arguments[argument];
//     }

//     return total;


// }

// console.log ( sumAll(1, 2, 3, 4, 5) );

// // rest parameter

// const sumAll2 = function(...numbers) {

//     console.log(arguments);
//     console.log(numbers);

//     let total = 0;

//     for (let number of numbers) {
//         total += number;
//     }

//     return total;


// }

// console.log ( sumAll2(1, 2, 3, 4, 5) );

//////////////////////////////////////////////////////////////////////////////
//// THIS
//////////////////////////////////////////////////////////////////////////////

// x = 10;
// y = 20;

// const calculateArea = function() {
//     console.log( this.x * this.y );
// }

// //console.log ( calculateArea() );

// const rectangle = {
//     x: 10,
//     y: 2,
//     calculateArea
// }

// //console.log( rectangle.calculateArea() );

// const method = calculateArea.bind(rectangle);

// console.log(calculateArea);
// console.log(method);

// //setTimeout(method, 1000);

// (function teste() {
//     console.log(this);
//     setTimeout(calculateArea.bind(this), 2000);
// })();

