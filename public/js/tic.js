// Function called whenever user tab on any box 
function myfunc() { 

    // Setting DOM to all boxes or input field 
    var b1, b2, b3, b4, b5, b6, b7, b8, b9; 
    b1 = document.getElementById("b1").value; 
    b2 = document.getElementById("b2").value; 
    b3 = document.getElementById("b3").value; 
    b4 = document.getElementById("b4").value; 
    b5 = document.getElementById("b5").value; 
    b6 = document.getElementById("b6").value; 
    b7 = document.getElementById("b7").value; 
    b8 = document.getElementById("b8").value; 
    b9 = document.getElementById("b9").value; 
    
    var button1, button2, button3, button4, button5, 
    button6, button7, button8, button9; 
    button1 = document.getElementById("b1"); 
    button2 = document.getElementById("b2"); 
    button3 = document.getElementById("b3"); 
    button4 = document.getElementById("b4"); 
    button5 = document.getElementById("b5"); 
    button6 = document.getElementById("b6"); 
    button7 = document.getElementById("b7"); 
    button8 = document.getElementById("b8"); 
    button9 = document.getElementById("b9"); 
    
    if ((b1 == 'X') && (
    b2 == 'X') && (b3 == 'X')) { 
    document.getElementById('print') 
    .innerHTML = "Player X won"; 
    button4.disabled = true; 
    button5.disabled = true; 
    button6.disabled = true; 
    button7.disabled = true; 
    button8.disabled = true; 
    button9.disabled = true; 
    
    button1.style.color = "red"; 
    button2.style.color = "red"; 
    button3.style.color = "red"; 
    } 
    else if (( b1 == 'X') && (
    b4 == 'X') && (b7 == 'X')) { 
    document.getElementById('print') 
    .innerHTML = "Player X won"; 
    button2.disabled = true; 
    button3.disabled = true; 
    button5.disabled = true; 
    button6.disabled = true; 
    button8.disabled = true; 
    button9.disabled = true; 
    
    button1.style.color = "red"; 
    button4.style.color = "red"; 
    button7.style.color = "red"; 
    } 
    else if ((b7 == 'X') && (
    b8 == 'X') && (b9 == 'X')) { 
    document.getElementById('print') 
    .innerHTML = "Player X won"; 
    
    button1.disabled = true; 
    button2.disabled = true; 
    button3.disabled = true; 
    button4.disabled = true; 
    button5.disabled = true; 
    button6.disabled = true; 
    
    button7.style.color = "red"; 
    button8.style.color = "red"; 
    button9.style.color = "red"; 
    } 
    else if ((b3 == 'X' ) && (b6 == 'X' ) && (b9 == 'X' )) { 
    document.getElementById('print') 
    .innerHTML = "Player X won"; 
    
    button1.disabled = true; 
    button2.disabled = true; 
    button4.disabled = true; 
    button5.disabled = true; 
    button7.disabled = true; 
    button8.disabled = true; 
    
    button3.style.color = "red"; 
    button6.style.color = "red"; 
    button9.style.color = "red"; 
    } 
    else if ((b1 == 'X' ) && (b5 == 'X' ) && (b9 == 'X')) { 
    document.getElementById('print') 
    .innerHTML = "Player X won"; 
    button2.disabled = true; 
    button3.disabled = true; 
    button4.disabled = true; 
    button6.disabled = true; 
    button7.disabled = true; 
    button8.disabled = true; 
    
    button1.style.color = "red"; 
    button5.style.color = "red"; 
    button9.style.color = "red"; 
    } 
    else if ((b3 == 'X' ) && (b5 == 'X' ) && (b7 == 'X' )) { 
    document.getElementById('print') 
    .innerHTML = "Player X won"; 
    button1.disabled = true; 
    button2.disabled = true; 
    button4.disabled = true; 
    button6.disabled = true; 
    button8.disabled = true; 
    button9.disabled = true; 
    
    button3.style.color = "red"; 
    button5.style.color = "red"; 
    button7.style.color = "red"; 
    } 
    else if ((b2 == 'X') && (b5 == 'X' ) && (b8 == 'X')) { 
    document.getElementById('print') 
    .innerHTML = "Player X won"; 
    button1.disabled = true; 
    button2.disabled = true; 
    button4.disabled = true; 
    button6.disabled = true; 
    button7.disabled = true; 
    button9.disabled = true; 
    
    button2.style.color = "red"; 
    button5.style.color = "red"; 
    button8.style.color = "red"; 
    } 
    else if ((b4 == 'X' ) && (b5 == 'X' ) && (b6 == 'X' )) { 
    document.getElementById('print') 
    .innerHTML = "Player X won"; 
    button1.disabled = true; 
    button2.disabled = true; 
    button3.disabled = true; 
    button7.disabled = true; 
    button8.disabled = true; 
    button9.disabled = true; 
    
    button4.style.color = "red"; 
    button5.style.color = "red"; 
    button6.style.color = "red"; 
    } 
    
    // Checking of Player X finish 
    // Checking for Player 0 starts, Is player 0 won or 
    // not and after that disabled all the other fields 
    else if ((b1 == '0' ) && (b2 == '0' ) && (b3 == '0' )) { 
    document.getElementById('print') 
    .innerHTML = "Player 0 won"; 
    button4.disabled = true; 
    button5.disabled = true; 
    button6.disabled = true; 
    button7.disabled = true; 
    button8.disabled = true; 
    button9.disabled = true; 
    
    button1.style.color = "red"; 
    button2.style.color = "red"; 
    button3.style.color = "red"; 
    } 
    else if ((b1 == '0' ) && (b4 == '0' ) && (b7 == '0' )) { 
    document.getElementById('print') 
    .innerHTML = "Player 0 won"; 
    button2.disabled = true; 
    button3.disabled = true; 
    button5.disabled = true; 
    button6.disabled = true; 
    button8.disabled = true; 
    button9.disabled = true; 
    
    button1.style.color = "red"; 
    button4.style.color = "red"; 
    button7.style.color = "red"; 
    } 
    else if ((b7 == '0' || b7 == '0') && (b8 == '0' || 
    b8 == '0') && (b9 == '0' || b9 == '0')) { 
    document.getElementById('print') 
    .innerHTML = "Player 0 won"; 
    button1.disabled = true; 
    button2.disabled = true; 
    button3.disabled = true; 
    button4.disabled = true; 
    button5.disabled = true; 
    button6.disabled = true; 
    
    button7.style.color = "red"; 
    button8.style.color = "red"; 
    button9.style.color = "red"; 
    } 
    else if ((b3 == '0' ) && (b6 == '0' ) && (b9 == '0' )) { 
    document.getElementById('print') 
    .innerHTML = "Player 0 won"; 
    button1.disabled = true; 
    button2.disabled = true; 
    button4.disabled = true; 
    button5.disabled = true; 
    button7.disabled = true; 
    button8.disabled = true; 
    button3.style.color = "red"; 
    button6.style.color = "red"; 
    button9.style.color = "red"; 
    } 
    else if ((b1 == '0' ) && (b5 == '0' ) && (b9 == '0' )) { 
    document.getElementById('print') 
    .innerHTML = "Player 0 won"; 
    button2.disabled = true; 
    button3.disabled = true; 
    button4.disabled = true; 
    button6.disabled = true; 
    button7.disabled = true; 
    button8.disabled = true; 
    
    button1.style.color = "red"; 
    button5.style.color = "red"; 
    button9.style.color = "red"; 
    } 
    else if ((b3 == '0' ) && (b5 == '0' ) && (b7 == '0' )) { 
    document.getElementById('print') 
    .innerHTML = "Player 0 won"; 
    button1.disabled = true; 
    button2.disabled = true; 
    button4.disabled = true; 
    button6.disabled = true; 
    button8.disabled = true; 
    button9.disabled = true; 
    
    button3.style.color = "red"; 
    button5.style.color = "red"; 
    button7.style.color = "red"; 
    } 
    else if ((b2 == '0' ) && (b5 == '0' ) && (b8 == '0')) { 
    document.getElementById('print') 
    .innerHTML = "Player 0 won"; 
    button1.disabled = true; 
    button3.disabled = true; 
    button4.disabled = true; 
    button6.disabled = true; 
    button7.disabled = true; 
    button9.disabled = true; 
    
    button2.style.color = "red"; 
    button5.style.color = "red"; 
    button8.style.color = "red"; 
    } 
    else if ((b4 == '0' ) && (b5 == '0' ) && (b6 == '0' )) { 
    document.getElementById('print') 
    .innerHTML = "Player 0 won"; 
    button1.disabled = true; 
    button2.disabled = true; 
    button3.disabled = true; 
    button7.disabled = true; 
    button8.disabled = true; 
    button9.disabled = true; 
    
    button4.style.color = "red"; 
    button5.style.color = "red"; 
    button6.style.color = "red"; 
    } 
    
    // Checking of Player 0 finish 
    // Here, Checking about Tie 
    else if ((b1 == 'X' || b1 == '0') && (b2 == 'X'
    || b2 == '0') && (b3 == 'X' || b3 == '0') && 
    (b4 == 'X' || b4 == '0') && (b5 == 'X' || 
    b5 == '0') && (b6 == 'X' || b6 == '0') && 
    (b7 == 'X' || b7 == '0') && (b8 == 'X' || 
    b8 == '0') && (b9 == 'X' || b9 == '0')) { 
    document.getElementById('print') 
    .innerHTML = "Match Tie"; 
    } 
    else { 
    
    // Here, Printing Result 
    if (flag == 1) { 
    document.getElementById('print') 
    .innerHTML = "Player X Turn"; 
    } 
    else { 
    document.getElementById('print') 
    .innerHTML = "Player 0 Turn"; 
    } 
    } 
    } 
    
    // Function to reset game 
    function myfunc_2() { 
    location.reload(true); 

    } 
    
   
    flag = 1; 
    function myfunc_3() { 
    if (flag == 1) { 
    document.getElementById("b1").value = "X"; 
    document.getElementById("b1").disabled = true; 
    flag = 0; 
    } 
    else { 
    document.getElementById("b1").value = "0"; 
    document.getElementById("b1").disabled = true; 
    flag = 1; 
    } 
    } 
    
    function myfunc_4() { 
    if (flag == 1) { 
    document.getElementById("b2").value = "X"; 
    document.getElementById("b2").disabled = true; 
    flag = 0; 
    } 
    else { 
    document.getElementById("b2").value = "0"; 
    document.getElementById("b2").disabled = true; 
    flag = 1; 
    } 
    } 
    
    function myfunc_5() { 
    if (flag == 1) { 
    document.getElementById("b3").value = "X"; 
    document.getElementById("b3").disabled = true; 
    flag = 0; 
    } 
    else { 
    document.getElementById("b3").value = "0"; 
    document.getElementById("b3").disabled = true; 
    flag = 1; 
    } 
    } 
    
    function myfunc_6() { 
    if (flag == 1) { 
    document.getElementById("b4").value = "X"; 
    document.getElementById("b4").disabled = true; 
    flag = 0; 
    } 
    else { 
    document.getElementById("b4").value = "0"; 
    document.getElementById("b4").disabled = true; 
    flag = 1; 
    } 
    } 
    
    function myfunc_7() { 
    if (flag == 1) { 
    document.getElementById("b5").value = "X"; 
    document.getElementById("b5").disabled = true; 
    flag = 0; 
    } 
    else { 
    document.getElementById("b5").value = "0"; 
    document.getElementById("b5").disabled = true; 
    flag = 1; 
    } 
    } 
    
    function myfunc_8() { 
    if (flag == 1) { 
    document.getElementById("b6").value = "X"; 
    document.getElementById("b6").disabled = true; 
    flag = 0; 
    } 
    else { 
    document.getElementById("b6").value = "0"; 
    document.getElementById("b6").disabled = true; 
    flag = 1; 
    } 
    } 
    
    function myfunc_9() { 
    if (flag == 1) { 
    document.getElementById("b7").value = "X"; 
    document.getElementById("b7").disabled = true; 
    flag = 0; 
    } 
    else { 
    document.getElementById("b7").value = "0"; 
    document.getElementById("b7").disabled = true; 
    flag = 1; 
    } 
    } 
    
    function myfunc_10() { 
    if (flag == 1) { 
    document.getElementById("b8").value = "X"; 
    document.getElementById("b8").disabled = true; 
    flag = 0; 
    } 
    else { 
    document.getElementById("b8").value = "0"; 
    document.getElementById("b8").disabled = true; 
    flag = 1; 
    } 
    } 
    
    function myfunc_11()
    {
        if(flag==1)
        {
            document.getElementById("b9").value="X";
            document.getElementById("b9").disabled=true;
            flag=0;
        }
        else{

            document.getElementById("b9").value="0";
            document.getElementById("b9").disabled=true;
            flag=1;
        }
    }
    