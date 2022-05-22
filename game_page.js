player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");
p1s = 0;
p2s = 0;
document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";
document.getElementById("player1_score").innerHTML = p1s;
document.getElementById("player2_score").innerHTML = p2s;
document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
function send() {
    n1 = document.getElementById("n1").value;
    n2 = document.getElementById("n2").value;

  
    rem3 =n1+' + '+n2
        question_word = "<h4 id='word_display'> Q. " + rem3 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}
qt = "p1";
at = "p2";
function check() {
    ans= document.getElementById("input_check_box").value;
    
    if (ans == (n1+n2)) {
        if (at == "p1") {
            p1s += 1;
            qt = "p1";
            at = "p2";
            document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
            document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
            document.getElementById("player1_score").innerHTML = p1s;
           }else{
            p2s += 1;
            qt = "p2";
            at = "p1";
            document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;
            document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name;
            document.getElementById("player1_score").innerHTML = p2s;  
           }
    }else{
        if (at == "p1") {
            qt = "p1";
            at = "p2";
            document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
            document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
           }else{
            qt = "p2";
            at = "p1";
            document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;
            document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name;
           }    
    
        }  document.getElementById("output").innerHTML = "";
}