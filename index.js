let words = [
    {
        "inputs":5,
        "category":"Sports",
        "word":"Chess"
        
    },
    {
        "inputs":6,
        "category":"European Country Name",
        "word":"France"
        
    },
    {
        "inputs":8,
        "category":"Indian Dish",
        "word":"Chokha Batee"
        
    },
    {
        "inputs":2,
        "category":"Outfit",
        "word":"Pajama"
        
    },

]

// calling a function using jquery
$(document).ready(function(){
    fillBlanks();
})

function fillBlanks() {
    //Select a random word
    const randomWord = words[Math.floor(Math.random() * words.length)];

    //Make sure blanks are empty to begin with
    $("#blanks").empty();

    //Show blanks uisng <span>
    for (let i = 0; i < randomWord.inputs; i++) {
        let input_html = `<span class="fill_blanks" id="input_${i}">_</span>`
        $("#blanks").append(input_html)
    }

    //Show Hint
    $("#hint").html(randomWord.category)

var gameOver=false

//Fill blanks only if the character match is found
$(".clickable").click(function (){
    var correctGuess = false;

    //Get the id of the utton clicked
    let id =$().attr("id");

   

    //get the life
    var life = parseInt($("#life").text())

    //Loop through all the letters
    for(var i = 0; i < randomWord.word.length; i++){

        //check if the character matches the id of the button
        if(randomWord.word.charAt(i).toLowerCase() == id) {

            //check if the life is still left and blank is empty/already filled
            if(life > 0 && ($(".fill_blanks").eq(i).html() == "_" ||
            $(".fill_blanks").eq(i).html() == id 
            )) {

                //fill blanks
                $(".fill_blanks").eq(i).html(id);
                correctGuess = true;


                //Check if the word guess is complete

                 if ($("#blanks").text() === randomWord.word.toLowerCase()) {
                    $("#result").text("YOU WIN !!")
                    correctGuess = true;
                    gameOver = true

                }

                if(life > 0){
                    correctGuess = false;
                    gameOver = false
                }

               
            }
        }
    }

    if (life > 0 && correctGuess!=true && gameOver!=true) {           
        life = life - 1
        $("#life").text(life)
    }
    else if (life == 0) {
        $("#result").text("You Lost!!")
    }

})
}