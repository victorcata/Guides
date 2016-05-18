(function() {

    /**
     * @summary: Modo Estricto:
                    1-Detecta más errores
                    2-Facilita a los motores de JavaScript hacer optimizaciones
                    3-Previene el uso de sintaxis de futuras versiones ECMAScript
    */
    "use strict";

    /**
     * ----------------------------------------------------------------------------------------- @summary Tipos de Variables
     */
    // Undefined
    typeof undefined;

    // Object
    typeof null;
    typeof [15, 4];
    typeof new Date();
    typeof {
        a: 1
    };

    // Boolean
    typeof false;
    typeof true;
    typeof Boolean(false);

    // Number
    typeof 3;
    typeof 3.14;
    typeof NaN;
    typeof Infinity;

    // String
    typeof "hola";

    // Function
    typeof
    function() {};
    typeof class C {}; // ES6

    // Symbol - ES6
    typeof Symbol();
    typeof Symbol("simbolo");

    /**
     * ----------------------------------------------------------------------------------------- @summary Propiedades de los números
     */
    console.log(Number.MAX_VALUE);
    console.log(Number.MIN_VALUE);
    console.log(Number.NEGATIVE_INFINITY);
    console.log(Number.POSITIVE_INFINITY);
    console.log(NaN === NaN); //false
    console.log(Number.NaN === NaN); // false
    console.log(isNaN(NaN)); //true
    console.log(isNaN(Number.NaN)); //true

    /**
     * ----------------------------------------------------------------------------------------- @summary Métodos de los números
     */

    /**
     * .toExponential()
     *
     * @param {Number} Numero de decimales
     * @returns {Number} Devuelve una cadena con el número en formato potencia
     */
    console.log(77.123.toExponential());
    console.log(77.123.toExponential(2));

    /**
     * .toFixed()
     *
     * @param {Number} Numero de decimales
     * @returns {Number} Devuelve un numero con decimales
     */
    console.log(77.123.toFixed());
    console.log(77.123.toFixed(2));

    /**
     * .toLocalString()
     *
     * @param {String} Locale
     * @returns {Number} Devuelve el numero representado en el lenguaje local
     */
    var numero = 3500;
    // En Local
    console.log(numero.toLocaleString()); // 3.500
    // En Árabe
    console.log(numero.toLocaleString('ar-EG')); // ٣٬٥٠٠
    // En Chino decimal
    console.log(numero.toLocaleString('zh-Hans-CN-u-nu-hanidec')); // 三,五〇〇

    /**
     * .toPrecision()
     *
     * @param {number} Numero de digitos
     * @returns {number} Devuelve el numero con precision
     */
    var numero = 5.123456;
    console.log(numero.toPrecision());
    console.log(numero.toPrecision(2));

    /**
     * .toString()
     *
     * @param {number} Base decimal/octal/hexadecimal
     * @returns {string} Cadena con el número
     */
    console.log((17).toString());
    console.log((-0xFF).toString(2));
    console.log((254).toString(16));

    /**
     * .parseFloat()
     *
     * @param {string} Cadena con el numero a parsear
     * @returns {number} Devuelve un numero decimal partiendo de una cadena
     */
    console.log(Number.parseFloat("3.14"));
    console.log(Number.parseFloat("3.14text"));

    /**
     * .parseInt()
     *
     * @param {string, number} Cadena con el numero a parsear y la base especifica
     * @returns {number} Devuelve el numero entero partiendo de la cadena
     */
    console.log(parseInt("0xF", 16));
    console.log(parseInt("15e2"));

    /**
     * ----------------------------------------------------------------------------------------- @summary Métodos matemáticos
     */

    /**
     * .random()
     *
     * @returns {number} Devuelve un numero aleatorio entre 0(incluido) y 1(excluido)
     */
    console.log(Math.random());
    var min = 10;
    var max = 20;
    console.log(Math.random() * (max - min) + min);

    /**
     * .round()
     *
     * @param {number} Numero a redondear
     * @returns {number} Devuelve el valor de un numero redondeado al entero mas cercano
     */
    console.log(Math.round(20.5));
    console.log(Math.round(-20.51));

    /**
     * .floor()
     *
     * @param {number} Numero a redondear
     * @returns {number} Devuelve el máximo entero menor o igual al número
     */
    console.log(Math.floor(20.5));
    console.log(Math.floor(-20.51));

    /**
     * .max()
     *
     * @param {number, ...} Listado de numeros
     * @returns {number} Devuelve el mayor de cero o más numeros
     */
    console.log(Math.max(1, 2, 10, 3));

    /**
     * .min()
     *
     * @param {number, ...} Listado de numeros
     * @returns {number} Devuelve el menor de cero o más numeros
     */
    console.log(Math.min(1, 2, 10, 3));


    /**
     * ----------------------------------------------------------------------------------------- @summary Fechas
     */
    console.log(new Date()); // ahora
    console.log(new Date(3600 * 24 * 1000)); // Usando milisegundos
    console.log(new Date("January 1, 2016 00:00:00")); // Usando una cadena de texto
    console.log(new Date(2016, 1, 1, 0, 0, 0)); // AAAA, MM, DD, HH, MM, SS
    console.log(new Date(Date.UTC(2016, 1, 1))); // Usando UTC

    /**
     * ----------------------------------------------------------------------------------------- @summary Fechas Getters Local
     */
    var ahora = new Date();
    console.log("La fecha es " + ahora);
    console.log("==== FECHA ====");
    console.log("El año: " + ahora.getFullYear()); // 4 digitos
    console.log("El mes: " + ahora.getMonth()); // 0 - 11
    console.log("El día de la semana: " + ahora.getDay()); // 0 - 6 (D - S)
    console.log("El día del mes: " + ahora.getDate()); // 1-31
    console.log("==== HORA ====");
    console.log("Horas: " + ahora.getHours());
    console.log("Minutos: " + ahora.getMinutes());
    console.log("Segundos: " + ahora.getSeconds());
    console.log("Milisegundos desde 1/1/1970: " + ahora.getTime());
    console.log("milisegundos: " + ahora.getMilliseconds());

    /**
     * ----------------------------------------------------------------------------------------- @summary Fechas Getters UTC
     */
    var ahora = new Date();
    console.log("Con UTC: ");
    console.log("==== FECHA ====");
    console.log("El año: " + ahora.getUTCFullYear()); // 4 digitos
    console.log("El mes: " + ahora.getUTCMonth()); // 0 - 11
    console.log("El día de la semana: " + ahora.getUTCDay()); // 0 - 6 (D - S)
    console.log("El día del mes: " + ahora.getUTCDate()); // 1-31
    console.log("==== HORA ====");
    console.log("Horas: " + ahora.getUTCHours());
    console.log("Minutos: " + ahora.getUTCMinutes());
    console.log("Segundos: " + ahora.getUTCSeconds());
    console.log("milisegundos: " + ahora.getUTCMilliseconds());

    /**
     * ----------------------------------------------------------------------------------------- @summary Fechas Setters
     */
    var newYear = new Date(Date.UTC(2016, 1, 1));
    console.info("La fecha es " + newYear);

    newYear.setFullYear(1980); // Pasamos a 1980
    console.info("La fecha es " + newYear);

    newYear.setDate(56); // 1 Enero + 56 Días
    console.info("La fecha es " + newYear);

    newYear.setUTCMilliseconds(1500); // 1500ms en formato UTC
    console.info("La fecha es " + newYear);

    newYear.setUTCHours(36); // le sumamos 36 horas
    console.info("La fecha es " + newYear);

    newYear.setMonth(-6); // le quitamos 6 meses
    console.info("La fecha es " + newYear);

    /**
     * ----------------------------------------------------------------------------------------- @summary Fechas Métodos
     */
    var ahora = new Date();

    /**
     * .getTimezoneOffset()
     *
     * @returns {number} Devuelve la diferencia entre tu zona horaria y UTC
     */
    console.log(ahora.getTimezoneOffset());

    /**
     * .toString(), .toDateString(), .toTimeString()
     *
     * @returns {string} Devuelve una cadena con la fecha
     */
    console.log(ahora.toString());
    console.log(ahora.toDateString());
    console.log(ahora.toTimeString());

    /**
     * .toUTCString(), .toISOString();
     *
     * @returns {string} Devuelve una cardena con la fecha en formatos especificos
     */
    console.log(ahora.toISOString());
    console.log(ahora.toUTCString());

    /**
     * .toLocaleString()
     *
     * @param {string, object} Cadena con el local y objecto con opciones avanzadas
     * @returns {string} Devuelve una cadena con la fecha en version local
     */
    console.log(ahora.toLocaleString());
    console.log(ahora.toLocaleString('es-ES'));
    var opciones = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    console.log(ahora.toLocaleString('de-DE', opciones));

    /**
     * ----------------------------------------------------------------------------------------- @summary String Propiedades
     */

    /**
     * .length
     *
     * @returns {number} Devuelve la longitud
     */
    console.log("hola".length);

    /**
     * ----------------------------------------------------------------------------------------- @summary String Metodos
     */

    /**
     * .fromCharCode()
     *
     * param {number,...} Secuencia Unicode
     * @returns {string} Devuelve una cadena creada mediante la secuencia Unicode
     */
    console.log(String.fromCharCode(8559, 8559, 8553, 9554));

    /**
     * .anchor()
     *
     * @param {string} Propiedad name del ancla
     * @returns {string} Devuelve un ancla dentro de la misma pagina
     */
    console.log("Contenido del ancla".anchor("attr_name"));

    /**
     * .charAt()
     *
     * @param {number} Posicion dentro del string
     * @returns {string} Caracter en la posicion indicada
     */
    console.log("Cadena de texto".charAt(3));

    /**
     * .charCodeAt()
     *
     * @param {number} Posicion dentro del string
     * @returns {string} Devuelve el valor Unicode del caracter
     */
    console.log("Cadena de texto".charCodeAt(3));

    /**
     * .concat()
     *
     * @param {string, ...} Cadenas a concatenar
     * @returns {string} Combina el texto de dos o más cadenas
     */
    console.log("cadena 1".concat("cadena 2", "cadena 3"));

    /**
     * .indexOf()
     *
     * @param {string} Cadena a buscar
     * @returns {number} Posicion donde primero aparece la cadena o -1
     */
    console.log("Cadena de texto".indexOf(' '));

    /**
     * .lastIndexOf()
     *
     * @param {string} Cadena a buscar
     * @returns {number} Ultima posicion donde aparece la cadena o -1
     */
    console.log("Cadena de texto".indexOf(' '));

    /**
     * .link()
     *
     * @param {string} Url del link
     * @returns {string} Link con la url pasada como parametro
     */
    console.log("Contenido del link".link("http://url"))

    /**
     * .slice()
     *
     * @param {number, number} Posicion de comienzo y fin de la subcadena
     * @returns {string} Subcadena a partir de la original
     */
    console.log("Cadena".slice(2, 3))

    /**
     * .split()
     *
     * @param {string, string} Cadena con el separador
     * @returns {object} Array de strings
     */
    console.log("Cadena a dividir por espacios".split(' '));

    /**
     * .substr()
     *
     * @param {number, number} Posicion de comienzo y longitud de la subcadena
     * @returns {string} Subcadena a partir de los parametros especificados
     */
    console.log("Cadena".substr(0, 3));

    /**
     * .substring()
     *
     * @param {number, number} Posicion de comienzo y fin de la subcadena
     * @returns {string} Subcadena a partir de la original, igual que .split
     */
    console.log("Cadena".substring(0, 3));

    /**
     * .toLocaleLowerCase()
     *
     * @returns {string} Devuelve en minusculas con las caracteristicas locales
     */
    console.log("CADENA".toLocaleLowerCase());

    /**
     * .toLocaleUpperCase()
     *
     * @returns {string} Devuelve en mayusculas con las caracteristicas locales
     */
    console.log("cadena".toLocaleUpperCase());

    /**
     * .toLowerCase()
     *
     * @returns {string} Devuelve la cadena en minusculas
     */
    console.log("CADENA".toLowerCase());

    /**
     * .toUpperCase()
     *
     * @returns {string} Devuelve la cadena en mayusculas
     */
    console.log("cadena".toUpperCase());

    /**
     * .trim()
     *
     * @returns {string} Elimina espacios vacios al principio y fin de la cadena
     */
    console.log(" esto es una cadena   ".trim());

    /**
     * ----------------------------------------------------------------------------------------- @summary Arrays
     */
    var array = [];
    array = [1, 2, 3, 4];
    console.log(array[2]);
    array[2] = 10;
    delete array[0];
    array[0] = undefined;

    var array1 = [1, 2, 3];
    var array2 = [4, 5, 6];
    var juntos = [array1, array2];
    juntos[0][1];

    /**
     * ----------------------------------------------------------------------------------------- @summary Arrays Propiedades
     */

    /**
     * .length
     *
     * @returns {number} Longitud del array
     */
    console.log(array.length);

    /**
     * ----------------------------------------------------------------------------------------- @summary Arrays Metodos
     */

    /**
     * .push()
     *
     * @param {object} Elemento a añadir
     * @returns {object} Añade el  al principio y devuelve la longitud del array
     */
    array.push(4);

    /**
     * .pop()
     *
     * @returns {object} Elimina el ultimo elemento del indice y lo devuelve
     */
    array.pop();

    /**
     * .shift()
     *
     * @returns {object} Elimina el primer elemento y lo devuelve
     */
    array.shift();

    /**
     * .splice()
     *
     * @param {number, number} Indice de comienzo del array y número de elementos
     * @retuns {object} Devuelve un array y elimina el subarray del original
     */
    array.splice(3, 1);

    /**
     * .map()
     *
     * @param {function} Funcion a ejecutar por cada elemento
     * @returns {object} Array procesando la funcion a cada elemento
     */
    array.map(function(elem) {
        elem + " modificado!"
    });

    /**
     * .isArray()
     *
     * @param {object} Elemento a comprobar como array
     * @returns {boolean} True si es un array, false en caso contrario
     */
    Array.isArray([1]); //true
    Array.isArray(array); //true
    Array.isArray(); //false
    Array.isArray(null); //false
    Array.isArray(undefined); //false

    /**
     * .concat()
     *
     * @param {object, ...} Arrays a concatenar al original
     * @returns {object} Array con los elementos concatenados
     */
    array.concat([10, 11, 12], [20, 21, 22]);

    /**
     * .every()
     *
     * @param {function} Funcion a ejecutar por cada elemento
     * @returns {boolean} True si todos los elementos del array pasan la funcion dada
     */
    array.every(function(elem) {
        return elem > 10
    });

    /**
     * .filter()
     *
     * @param {function} Funcion a ejecutar por cada elemento
     * @returns {object} Nuevo array con los elementos que cumplan la condicion
     *
     */
    array.filter(function(elem) {
        return elem > 10
    });

    /**
     * .forEach()
     *
     * @param {function} Funcion a ejecutar por cada elemento
     */
    array.forEach(function(elem, index, array) {
        console.log("array [" + index + "] = " + elem)
    })

    /**
     * .indexOf()
     *
     * @param {object} Elemento a buscar
     * @returns {number} Posicion donde se encuentra el elemento o -1
     */
    array.indexOf(10);

    /**
     * .join()
     *
     * @param {string} Cadena separador entre elementos del array
     * @returns {string} Cadena con todos elementos unidos
     */
    array.join(" + ");

    /**
     * .lastIndexOf()
     *
     * @param {object} Elemento a buscar
     * @returns {number} Posicion donde se encuentra el elemento desde el final o -1
     */
    array.lastIndexOf(7)

    /**
     * .reduce()
     *
     * @param {function} Funcion a aplicar por cada elemento
     * @returns {object} Aplica una funcion a un acumulador y a cada valor para reducirlo a un unico valor
     */
    array.reduce(function(valorAnterior, valorActual, indice, vector) {
        return valorAnterior + valorActual;
    });

    /**
     * .reduceRight()
     *
     * @param {function} Funcion a aplicar por cada elemento
     * @return {object} Al igual que reduce pero de izquierda a derecha
     */
    array.reduceRight(function(valorAnterior, valorActual, indice, vector) {
        return valorAnterior + valorActual;
    });

    /**
     * .reverse()
     *
     * @return {object} Invierte el orden de un array
     */
    array.reverse();

    /**
     * .slice()
     *
     * @param {number, number} Indice de comienzo y fin
     * @returns {object} Subarray obtenido
     */
    array.slice(1, 3);

    /**
     * .some()
     *
     * @param {function} Function aplicada a cada elemento
     * @returns {boolean} True si alguno de los elementos pasan la funcion
     */
    array.some(function(elem, idx, array) {
        return elem > 10;
    });

    /**
     * .sort()
     *
     * @returns {object} Devuelve el array ordenado
     */
    array.sort();

    /**
     * .toLocalString()
     *
     * @returns {string} Devuelve como string local todos los elementos
     */
    array.toLocaleString();

    /**
     * .toString()
     *
     * @returns {string} Devuelve como string todos los elementos
     */
    array.toString();

    /**
     * .unshift()
     *
     * @param {object} Elementos a añadir en el array
     * @returns Devuelve la longitud del array y los añade al principio
     */
    array.unshift(1, 2, 3, 4);

    /**
     * ----------------------------------------------------------------------------------------- @summary Object
     */

    // Propiedades
    var props = {
        cadena: 'cadena de texto',
        numero: 2,
        booleano: false
    };

    // Metodos
    var method = {
        saludar: function() {
            console.log('Hola!');
        }
    }

    console.log(props.cadena);
    console.log(props["cadena"]);

    /**
     * ----------------------------------------------------------------------------------------- @summary Object Metodos
     */

    /**
     * .defineProperties()
     * 
     * @param {object, object} Objecto y propiedades a añadir
     * @returns {object} Devuelve el objeto tras añadir o modificar las propiedades
     */
    var myObj = {
        prop1: "propiedad inicial"
    };
    Object.defineProperties(myObj, {
        "propiedad1": {
            value: true,
            writable: true
        },
        "propiedad2": {
            value: "cadena de texto",
            writable: false
        }
    });

    /**
     * .getOwnPropertyDescriptor()
     * 
     * @param {object, string} Objeto y metodo del objeto
     * @returns {object} Devuelve los detalles del objeto y metodo indicado, undefined si no existe
     */
    Object.getOwnPropertyDescriptor(myObj, "propiedad1");

    /**
     * .getOwnPropertyNames
     * 
     * @param {object} Objeto del que se quieren obtener las propiedades
     * @returns {object} Array con todas las propiedades
     */
    Object.getOwnPropertyNames(myObj);

    /**
     * .isExtensible()
     * 
     * @param {object} Objecto del que comprobar si es extensible
     * @returns {boolean} True si es extensible
     */
    Object.isExtensible(myObj);

    /**
     * .hasOwnProperty()
     * 
     * @param {string} Nombre de la propiedad a buscar
     * @returns {boolean} True si la propiedad existe, false en caso contrario
     */
    myObj.hasOwnProperty('propiedad1');

    /**
     * .propertyIsEnumerable()
     * 
     * @param {string} Nombre de la propiedad
     * @returns {boolean} True si la propiedad es enumerable, false en caso contrario
     */
    myObj.propertyIsEnumerable('propiedad1');

    /**
     * .toLocaleString()
     * 
     * @returns {string} Devuelve un string local con todas las propiedades
     */
    myObj.toLocaleString();

    /**
     * For..in
     */
    for (var i in myObj) {
        console.log(myObj[i]);
    }

    /**
     * ----------------------------------------------------------------------------------------- @summary Funciones
     */
    function myFunction() {};

    /**
     * Propiedad Name
     */
    console.log(myFunction.name);

    /**
     * Propiedad this: contexto window, en modo estricto en este contexto es undefined y no window
     */
    function ambitoGlobal() {
        return this;
    }

    /**
     * Propiedad this: contexto al objeto al que pertenece el metodo
     * .apply() y .call(): Modifica el contexto del this
     */
    obj.metodo = function() {
        return this;
    }

    /**
     * arguments: Lista de argumentos, no es un array
     */
    function args() {
        console.log(arguments, arguments[0]);
    }

    /**
     * ----------------------------------------------------------------------------------------- @summary Funciones avanzadas
     */

    /**
     * Funciones anónimas
     */
    var sumar = function(a, b) {
        return a + b;
    }

    /**
     * Funciones autoejecutables
     */
    (function() {
        console.log('estoy dentro');
    })();

    /**
     * Funciones autoejecutables que incluya referencias y manipule otros elementos
     */
    var myApp = myApp || {};
    (function(w, doc, ns) {
        ns.accesoWindow = function() {
            return w === window;
        };
        ns.accesoDocument = function() {
            return doc === document;
        };
        ns.confirmacion = function() {
            console.log('Hola Mundo! Mis caracteristicas son: \n Acceso a Window: ' + this.accesoWindow() + '\n Acceso a Document: ' + this.accesoDocument());
        }
    })(window, document, myApp);

    /**
     * Funcion que devuelve una funcion anonima
     */
    function saludo(quien) {
        return function() {
            console.log('hola ' + quien);
        }
    }
    saludo('Nombre')();

    /**
     * Closures: Recuerdan variables definidas dentro del entorno donde se declaro
     *  No crear closures innecesariamente ya que afectan al rendimiento en consumo de memoria y velocidad de procesamiento
     */
    function sumador(x) {
        return function(y) {
            return x + y;
        }
    }
    var sum1 = sumador(10);
    console.log(sum1(2));

    /**
     * Callbacks: Una funcion que ejecuta otra función de vuelta
     *   Se debe sanitizar el callback: if ((callback) && typeof callback === 'function')
     */
    var quieroCallback = function(parametro, callback) {
        if ((callback) && typeof callback === 'function') {
            callback(parametro);
        }
        else {
            console.log(parametro, callback);
        }
    }
    quieroCallback('a', function(val) {
        console.log(val)
    });

    /**
     * ----------------------------------------------------------------------------------------- @summary AJAX
     */
    function peticionAjax(url) {
        var xmlHttp = new XMLHttpRequest();

        xmlHttp.onreadystatechange = function() {

            if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
                console.info(JSON.parse(xmlHttp.responseText));
            }
            else if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {
                console.error("ERROR! 404");
                console.info(JSON.parse(xmlHttp.responseText));
            }
        };
        xmlHttp.open("GET", url, true);
        xmlHttp.send();
    }

    /**
     * ----------------------------------------------------------------------------------------- @summary JSON Metodos
     */

    /**
     * .parse()
     * 
     * @param {string} Cadena a procesar
     * @returns {object} Objeto tras procesar la cadena
     */
    JSON.parse("{}");
    JSON.parse("true");
    JSON.parse('"foo"');
    JSON.parse("[1, 5, 'false']")

    /**
     * .stringify()
     * 
     * @param {object} Objecto a procesar
     * @returns {string} Cadena de texto con el objeto procesado
     */
    JSON.stringify(true);
    JSON.stringify([1, "false", false]);
});
