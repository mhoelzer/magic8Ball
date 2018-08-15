function replace() { 
    document.getElementById("startBall").style.display="none"; 
    document.getElementById("mainStuff").style.display="block"; 
}
function replaceBack() { 
    document.getElementById("startBall").style.display="flex"; 
    document.getElementById("mainStuff").style.display="none"; 
}

document.getElementById("ballButt").onclick = function() {
    let answers = ["'Tis certain", "Beyond a doubteth", "My reply be no", "Answ'r is unc'rtain. Tryeth again lat'r", "V'ry doubtful", "Most unlikely", "As I seeth 't, Aye", "It be decidedly so", "Thee may relyeth on it", "Signs pointeth to Aye", "Better not be tellin' ye now", "Cannot predicteth anon", "Concentrateth an' asketh again", "Counteth not on 't", "Mine own sources sayeth nay", "Outlook nay so valorous"];
    let ballGivesAnswers = answers[Math.floor(Math.random() * answers.length)]
    document.getElementById('ballSpeaketh').innerHTML = ballGivesAnswers;
    /* the stuff below doesn't make it generate randomly and doesn't clear previous response onclick
    // let typedText = document.getElementById("questionInput");
    // typedText = document.createTextNode(ballGivesAnswers);
    // document.getElementById("ballSpeaketh").appendChild(typedText);
    */
}