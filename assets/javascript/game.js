$(document).ready(function(){
    var crystal1 = -1;
    var crystal2 = -1;
    var crystal3 = -1;
    var crystal4 = -1;
    var random = -1;
    console.log(crystal1, crystal2, crystal3, crystal4);


    random = Math.floor(Math.random()*101)+19;
    $(".rndNum").html(random);

     //sets random number as page is loaded
    $(".crystalImgOne").on("click", function() {
        crystal1 = Math.floor(Math.random()*11)+1;
        $("")

    });
    $(".crystalTwo").on("click", function() {
        crystal2 = $(".crystalTwo").html(Math.floor(Math.random()*11)+1);
    });
    $(".crystalThree").on("click", function() {
        crystal3 = $(".crystalThree").html(Math.floor(Math.random()*11)+1);
    });
    $(".crystalFour").on("click", function() {
        crystal4 = $(".crystalFour").html(Math.floor(Math.random()*11)+1);
    });

}); //closes document.ready

