var player1_name = localStorage.getItem("player_1");
var player2_name = localStorage.getItem("player_2");
document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";
var score1 = 0;
var score2 = 0;
var answer_turn = "player2";
var question_turn = "player1";
document.getElementById("score1_display").innerHTML = score1;
document.getElementById("score2_display").innerHTML = score2;
document.getElementById("question_turn").innerHTML = "Question turn : " + player1_name;
document.getElementById("answer_turn").innerHTML = "Answer turn : " + player2_name;
function send(){
    number1 = document.getElementById("number_1").value;
    number2 = document.getElementById("number_2").value;
    var question_display = "<h4>" + number1 + " x " + number2 + "</h4>";
    var answer_display = "<br> <h4>Answer : </h4> <input id='input_answer' type='text'> <br>"
    var btn_display = "<button class='btn btn-primary' onclick='check()'>Check</button>";
    var program = question_display + answer_display + btn_display;
    document.getElementById("output").innerHTML = program;
}
function check(){
    var input = document.getElementById("input_answer").value;
    var actual_answer = parseInt(number1) * parseInt(number2);
    if (input == actual_answer) {
        if (answer_turn == "player1") {
            score1++;
            document.getElementById("score1_display").innerHTML = score1;
        }
        if (answer_turn == "player2") {
            score2++;
            document.getElementById("score2_display").innerHTML = score2;
        }
    }
    if (answer_turn == "player1") {
        answer_turn = "player2";
        question_turn = "player1"
        document.getElementById("question_turn").innerHTML = "Question turn : " + player1_name;
        document.getElementById("answer_turn").innerHTML = "Answer turn : " + player2_name;
    }
    if (answer_turn == "player2") {
        answer_turn = "player1";
        question_turn = "player2";
        document.getElementById("question_turn").innerHTML = "Question turn : " + player1_name;
        document.getElementById("answer_turn").innerHTML = "Answer turn : " + player2_name;
    }
}