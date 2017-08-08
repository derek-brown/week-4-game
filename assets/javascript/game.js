$(document).ready(function(){
    var crystal1 = -1;
    var crystal2 = -1;
    var crystal3 = -1;
    var crystal4 = -1;
    var score = 0;


    random = Math.floor(Math.random()*102)+19; //sets a random number as the page is loaded
    $(".rndNum").html(random);
    crystal1 = Math.floor(Math.random()*12)+1;
    crystal2 = Math.floor(Math.random()*12)+1;
    crystal3 = Math.floor(Math.random()*12)+1;
    crystal4 = Math.floor(Math.random()*12)+1;
    console.log(crystal1, crystal2, crystal3, crystal4); //logs out the numbers for cheaters

    $(".crystalImgOne").on("click", function() {
        ($(".score").attr("crystalOne", crystal1));
        var crystalValue = ($(".score").attr("crystalOne"));
        crystalValue = parseInt(crystalValue);
        score += crystalValue;
        $(".score").html(score);
    });

        $(".crystalImgTwo").on("click", function() {
        ($(".score").attr("crystalTwo", crystal2));
        var crystalValue = ($(".score").attr("crystalTwo"));
        crystalValue = parseInt(crystalValue);
        score += crystalValue;
        $(".score").html(score);
    });

        $(".crystalImgThree").on("click", function() {
        ($(".score").attr("crystalThree", crystal3));
        var crystalValue = ($(".score").attr("crystalThree"));
        crystalValue = parseInt(crystalValue);
        score += crystalValue;
        $(".score").html(score);
    });

        $(".crystalImgFour").on("click", function() {
        ($(".score").attr("crystalFour", crystal4));
        var crystalValue = ($(".score").attr("crystalFour"));
        crystalValue = parseInt(crystalValue);
        score += crystalValue;
        $(".score").html(score);
    });



}); //closes document.ready

