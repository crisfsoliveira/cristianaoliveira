$(window).load(function () {


    /********************************************
                   SMOOTH SCROLL
    ********************************************/

    $('a[href*=#]:not([href=#]):not(#simple-menu)').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {

                // Default (tablets and desktop)
                var gap = 80;
                var window_width = $(window).width();

                // Phone
                if (window_width < 768) {
                    gap = 60;
                }


                $('html,body').animate({
                    scrollTop: target.offset().top - gap
                }, 1000);
                return false;
            }
        }
    });


    /********************************************
                    FADING NAV
    ********************************************/

    var stickyNav = function () {
        //distancia do topo do avatar ao ínicio da página
        var distanceHeaderToTop = $('.avatar object').offset().top + $('.avatar object').height();

        //distancia do topo do paragrafo até ao inicio da página
        var distanceCentralContentToTop = $('.central_content p').offset().top;

        //distancia entre o topo do paragrafo ao topo do avatar
        var distanceBetweenHeaderAndCentralContent = distanceCentralContentToTop - distanceHeaderToTop;

        if (distanceBetweenHeaderAndCentralContent <= 0) {

            $('header').css({
                'backgroundColor': 'rgba(255, 255, 255,.93)',
            })
        } else {

            $('header').css({
                'backgroundColor': 'rgba(255, 255, 255,0)',
            })
        }
    };

    /********************************************
        SKILLS ANIMATION TRIGGER ON SCROLL
    ********************************************/

    // Esta variável indica que se os skills já foram
    // animados os skills | inicialmente ainda não
    // foram animados, daí o "false"

    var wasAnimated = false;

    var skillsTrigger = function () {
        //distancia entre o topo do avtar até ao incio da página 
        var distanceHeaderToTop = $('.avatar object').offset().top + $('.avatar object').height();
        console.log('nav:' + distanceHeaderToTop);

        //distancia das my skills até ao inicio da página
        var distanceSkillsToTop = $('#my_skills').offset().top;
        console.log('#my_skills:' + distanceSkillsToTop);

        //distancia entre o topo das skills ao topo do avatar
        var distanceBetweenHeaderAndSkills = distanceSkillsToTop - distanceHeaderToTop - 150;
        console.log('diference:' + distanceBetweenHeaderAndSkills);

        // O "if" testa se:
        // - já feito scroll suficiente para animar e
        // e (&&)
        // - e ainda não foi animado
        if (distanceBetweenHeaderAndSkills <= 0 && wasAnimated == false) {

            wasAnimated = true;


            //new progress bar -jquery UI

            $(".progress_bar").each(function () {
                // fui buscar a instancia
                var bar = $(this);

                // label 
                var label = bar.find(".progress_label");


                // fui buscar a cor
                var color = bar.data("color");

                // fui buscar o level
                var level = bar.data("level");

                bar.progressbar({
                    value: 0,
                    change: function () {
                        bar.find(".ui-progressbar-value").text(bar.progressbar("value") + "%");

                    }

                })

                // progress
                var progress = bar.find(".ui-progressbar-value");


                progress.css("background", color);

                var id = setInterval(function () {
                    var val = bar.progressbar("value");
                    var final_val = val + 1;
                    bar.progressbar("value", final_val);

                    if (final_val == level) {
                        clearInterval(id);
                    }

                }, 40);

            });

        }
    }

    // Corre uma vez quando a página é carregada
    stickyNav();
    skillsTrigger();

    // Corre sempre que o utilizador faz scroll
    $(window).scroll(function () {
        stickyNav();
        skillsTrigger();
    });


    /********************************************
                    CONTACT FORM
    ********************************************/

    (function () {
        var qs, js, q, s, d = document,
            gi = d.getElementById,
            ce = d.createElement,
            gt = d.getElementsByTagName,
            id = 'typef_orm',
            b = 'https://s3-eu-west-1.amazonaws.com/share.typeform.com/';
        if (!gi.call(d, id)) {
            js = ce.call(d, 'script');
            js.id = id;
            js.src = b + 'share.js';
            q = gt.call(d, 'script')[0];
            q.parentNode.insertBefore(js, q)
        }
    })()

    /********************************************
                    WOW PLUG IN
    ********************************************/
    new WOW().init();

    /********************************************
             SIDR - LATERAL MOBILE MENU
    ********************************************/

    $('#simple-menu').sidr({
        side: 'right'
    });

    $('#sidr a').click(function () {
        $.sidr('close', 'sidr');
    });

    /********************************************
            LAST THING TO RUN ON LOAD
    ********************************************/
    //loading screen fade out

    $('.loading_screen').fadeOut();


}); // END WINDOW LOAD