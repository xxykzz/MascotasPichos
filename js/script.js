// Funcion del menu para cambiar de color
    $(window).scroll(function(){
        if($("#menu").offset().top > 400 ) {
            $("#menu").addClass("bg-dark");
        } else {
            $("#menu").removeClass("bg-primary","nav-link");
        }
    });

    $(window).scroll(function(){
        if($("#menu").offset().top < 400 ) {
            $("#menu").addClass("bg-primary");
        } else {
            $("#menu").removeClass("bg-primary");
        }
    });
