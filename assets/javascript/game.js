$(document).ready(function(){
    var crystal1 = -1;
    var crystal2 = -1;
    var crystal3 = -1;
    var crystal4 = -1;
    var random = -1;
    console.log(crystal1, crystal2, crystal3, crystal4);


    random = Math.floor(Math.random()*102)+19;
    $(".rndNum").html(random);

     //sets random number as page is loaded
    $(".crystalImgOne").on("click", function() {
        crystal1 = Math.floor(Math.random()*12)+1;
        $(".resultOne").html(crystal1);
    });
    $(".crystalImgTwo").on("click", function() {
        crystal2 = Math.floor(Math.random()*12)+1;
        $(".resultTwo").html(crystal2);
    });
    $(".crystalImgThree").on("click", function() {
        crystal3 = Math.floor(Math.random()*12)+1;
        $(".resultThree").html(crystal3);
    });
    $(".crystalImgFour").on("click", function() {
        crystal4 = Math.floor(Math.random()*12)+1;
        $(".resultFour").html(crystal4);
    });

}); //closes document.ready

