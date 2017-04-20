# Regular Expressions

<!-- TOC -->

- [Regular Expressions](#regular-expressions)
    - [Declaration](#declaration)
    - [Flags](#flags)
    - [Methods](#methods)
    - [Complex patterns](#complex-patterns)
        - [Basic](#basic)
        - [Anchors](#anchors)
        - [Metacharacters](#metacharacters)
        - [Quantifiers](#quantifiers)
        - [Characters](#characters)
    - [Grouping and ranges](#grouping-and-ranges)

<!-- /TOC -->

## Declaration
```javascript
var regexp = /searching/;
var regexp = new RegExp("searching");
```

## Flags
- **g:** Looks for it in all the text
- **i:** Case-insensitive
- **m:** Multiline
- **y:** Sticky, remember the last search

```javascript
var regexp = /searching/gi;
var regexp = new RegExp("searching", "gi");
```

## Methods
- **exec:** Returns an array of information
```javascript
var coincidences = /lorem/.exec("lorem ipsum");
console.log(coincidences[0]); // lorem
```
- **test:** True if there is any coincidence
```javascript
var coincidences = /lorem/.test("lorem ipsum");
console.log(coincidences); // true
```
- **match:** Returns an array like exec but applys to a string
```javascript
var content = "lorem ipsum";
var coincidences = content.match(/lorem/);
console.log(coincidences[0]); // lorem
```
- **search:** Returns the index of the coincidence or -1 if it's not founded
```javascript
var content = "lorem ipsum";
var coincidences = content.search(/ipsum/);
console.log(coincidences); // 6
```
- **replace:** Replaces the substring founded with another string
```javascript
var content = "lorem ipsum";
var coincidences = content.replace(/rem/, "REM");
console.log(coincidences); // loREM ipsum
```
- **split:** Returns an array of substrings starting from a given pattern
```javascript
var content = "lorem ipsum";
var coincidences = content.split(/rem/);
console.log(coincidences); // ["lo", " ipsum"]
```

## Complex patterns

### Basic
- **ab:** Literal matching
```javascript
/Regular/.test("Regular")
```

### Anchors
- **^ab:** Starting by a string
```javascript
/^000/g.test("0001 is an id")
```
- **ab$:** Ending by a string
```javascript
/ing$/.test("singing")
```

### Metacharacters
- **.:** Matches any character except \n \r \u2028 or \u2029
```javascript
"That's hot!".match(/Th.t/g)
```
- **a|b:** Matches with one or the other
```javascript
/Monday|Tuesday/.test("Monday")
```
- **\\:** Escapes an specific character
```javascript
/\*/.test("*")
```

### Quantifiers
- ***:** Zero or more ocurrences of the expression before the asterisk
```javascript
/Ah*/.test("Ahhhhhh!") // A, Ah, Ahh, ...
```
- **+:** One or more ocurrences of the expression before the asterisk
```javascript
/Ah+/.test("Ahhhhh!") // Ah, Ahh, Ahhh, ...
```
- **?:** Zero or one ocurrence of the character
```javascript
/Ah?/.test("Ahhhhh!") // A, Ah
```
- **{X,y}:** Matches a set number of times
```javascript
/[1-9]{2}/.test(12);
/[1-9]{2, 5}/.test(12345);
/[1-9]{2}/.test(123);
```

### Characters
- **\\d:** Number
```javascript
"Hi u_123! *.*".match(/\d/g)
```
- **\\D:** Not number and _
```javascript
"Hi u_123! *.*".match(/\D/g)
```
- **\\s:** White spaces
```javascript
"Hi u_123! *.*".match(/\s/g)
```
- **\\S:** Not matchs with any white space
```javascript
"Hi u_123! *.*".match(/\S/g)
```
- **\\w:** Alphanumeric characters and _
```javascript
"Hi u_123! *.*".match(/\w/g)
```
- **\\W:** Not alphanumeric characters and _
```javascript
"Hi u_123! *.*".match(/\W/g)
```
- **\\b:** Coincidences at the begining or end of the word
```javascript
/\bme/.test("minus")
```
- **\\B:** Avoid coincidences at the begining or end of the word
```javascript
/\Bte/.test("battery")
```
- **\\n:** Matches a line break
```javascript
/\n/.test("hi!\nNew line")
```
- **\\r:** Matches a return
```javascript
/\r/.test("hi!\rReturn")
```
- **\\t:** Matches a tabulation
```javascript
/\t/.test("hi!\tTabulation")
```
- **\\xxx:** Character in octal
```javascript
/\127/g.test("Website")
```
- **\\uxxxx:** Character in unicode
```javascript
/\u0057/g.test("Website")
```

## Grouping and ranges
- **[ab]:** Matches at least one character
```javascript
"Hi... and hi again".match(/[hi]/g)
```
- **[1-9]:** Range between 1 and 9
```javascript
"123610823710932".match(/[1-4]/g)
```
- **[a-f]:** Range between a and f
```javascript
"asdjlk3akdsjalsd".match(/[5-8q-zA-C]/g)
```
- **[^ab]:** Should not match with any of these characters
```javascript
"hi... and ..".match(/[^hi]/g)
```
- **(ab):** Creates a group
```javascript
"hi _who are_".replace(/_(.*?)_/, "<strong>$1</strong>")
```
- **(?:ab):** Group not matched
```javascript
"foo".match(/(foo){1,2}/)
"foo".match(/(?:foo){1,2}/)
```
- **a(?=b):** a only if it's followed by b
```javascript
/Meta(?=character|characters)/.test("Metacharacter")
```
- **a(?!b):** a only if it's not followed by b
```javascript
/\d+(?!\.)/.test("3.141")
```