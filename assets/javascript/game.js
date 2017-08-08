$(document).ready(function(){
    var crystal1 = Math.floor(Math.random()*12)+1;
    var crystal2 = Math.floor(Math.random()*12)+1;
    var crystal3 = Math.floor(Math.random()*12)+1;
    var crystal4 = Math.floor(Math.random()*12)+1;
    var random = Math.floor(Math.random()*102)+19;
    var score = 0;
    var win = 0;
    var loss = 0;

    function check(){
        if (score === random){
            win++;
            $(".wins").html("Wins: "+win);
            alert("You win!");
            crystal1 = Math.floor(Math.random()*12)+1;
            crystal2 = Math.floor(Math.random()*12)+1;
            crystal3 = Math.floor(Math.random()*12)+1;
            crystal4 = Math.floor(Math.random()*12)+1;
            random = Math.floor(Math.random()*102)+19;
            score = 0;
            $(".rndNum").html(random);
            $(".score").html(score);
        }
        else if(score >= random){
            loss++;
            $(".losses").html("Losses: "+loss);
            alert("You lose!");
            crystal1 = Math.floor(Math.random()*12)+1;
            crystal2 = Math.floor(Math.random()*12)+1;
            crystal3 = Math.floor(Math.random()*12)+1;
            crystal4 = Math.floor(Math.random()*12)+1;
            random = Math.floor(Math.random()*102)+19;
            score = 0;
            $(".rndNum").html(random);
            $(".score").html(score);
        }
    };

    $(".rndNum").html(random); //loads the randomly generated number to the html

    console.log(crystal1, crystal2, crystal3, crystal4); //logs out the numbers for cheaters

    $(".crystalImgOne").on("click", function() {
        ($(".score").attr("crystalOne", crystal1));
        var crystalValue = ($(".score").attr("crystalOne"));
        crystalValue = parseInt(crystalValue);
        score += crystalValue;
        $(".score").html(score);
        check();
    });

        $(".crystalImgTwo").on("click", function() {
        ($(".score").attr("crystalTwo", crystal2));
        var crystalValue = ($(".score").attr("crystalTwo"));
        crystalValue = parseInt(crystalValue);
        score += crystalValue;
        $(".score").html(score);
        check();
    });

        $(".crystalImgThree").on("click", function() {
        ($(".score").attr("crystalThree", crystal3));
        var crystalValue = ($(".score").attr("crystalThree"));
        crystalValue = parseInt(crystalValue);
        score += crystalValue;
        $(".score").html(score);
        check();
    });

        $(".crystalImgFour").on("click", function() {
        ($(".score").attr("crystalFour", crystal4));
        var crystalValue = ($(".score").attr("crystalFour"));
        crystalValue = parseInt(crystalValue);
        score += crystalValue;
        $(".score").html(score);
        check();
    });
}); //closes document.ready

