// function decleration 


hoisting()//here am invoking the function before its being defined
// it works well in the above

function hoisting(){

    console.log(hoist); //unidefined  bec variable is declared but not assigned 
    // the js engine know its declerated below and this doesnt throw an error 

    var hoist =`to lift or raise up`; //this line has tobe above line 6 to work well

    var what =`variable and function declaration`;

    console.log(`what is hoist? ${what}`); //what is hoist? variable and function declaration

    console.log(`Hoist means : ${hoist}`) //Hoist means : to lift or raise up
}