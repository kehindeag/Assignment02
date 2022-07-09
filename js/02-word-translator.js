console.log("hello!!!!");
//The Word Translator

//Usage: Use simple conditional statements

let languageCode = prompt("Enter your prefer language code to greet today");

if (languageCode == "en") {
  document.write("Hello World in English!!!!");
} else if (languageCode == "es") {
  document.write("Hello World translated in Spanish is: Hola mundo");
} else if (languageCode == "de") {
  document.write("Hello World translated in German is: Holla welt");
} else if (languageCode == "fr") {
  document.write("Hello World translated in French is: Salut tout le monde");
} else {
  document.write("Hello World");
}
