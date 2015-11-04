;$(function(){
    animationDuration = 400;
    delta             = 5;
    lastScrollTop     = 0;
    mobilNavBreak     = '992';

    isOpen      = false;
    isAnimating = false;

    // off canvas vendor
    morphEl     = document.getElementById( 'morph-shape' );
    s           = Snap( morphEl.querySelector( 'svg' ) );
    path        = s.select( 'path' );
    initialPath = window.path.attr('d');
    pathOpen    = morphEl.getAttribute( 'data-morph-open' );

    dom = {};
    st = {
        header: '[data-hook="wochap-header"]',

        menu       : '[data-hook ="wochap-menu"]',
        menuToggle : '[data-hook ="wochap-menu-toggle"]',
        menuOverlay: '[data-hook ="wochap-menu-overlay"]',
    };

    catchDom = function () {
        dom.header = $(st.header);

        dom.menu        = $(st.menu);
        dom.menuToggle  = $(st.menuToggle); // necesario
        dom.menuOverlay = $(st.menuOverlay);

        dom.html        = $("html");
    };

    suscribeEvents = function () {
        $(window).on('scroll', events.changeHeader);

        if ($(window).width() <= mobilNavBreak) {
            $(document).on('click', st.menuToggle, events.toggleMenu);
            $(document).on('mouseup', functions.closeMenu);
        }
    };

    events = {
        changeHeader : function (event) {
            if (isOpen) {
                return false;
            }

            var nowScrollTop = $(this).scrollTop();

            if (Math.abs(lastScrollTop - nowScrollTop) >= delta) {
                if (nowScrollTop > lastScrollTop) {
                    // scroll hacia abajo

                    if (nowScrollTop > 250) {
                        // ya no es visible el header

                        functions.hideHeader(true);
                        functions.fixedHeader(true);
                        functions.backgroundHeader(true);

                        setTimeout(function () {
                            functions.transitionHeader(true);
                        }, 300);
                    }
                } else {
                    // scroll hacia arriba

                    functions.hideHeader(false);

                    if (nowScrollTop <= 0) {
                        // el usuario llego al limite superior de la ventana

                        functions.fixedHeader(false);
                        functions.transitionHeader(false);
                        functions.backgroundHeader(false);
                    }
                }
                lastScrollTop = nowScrollTop;
            }
        },

        toggleMenu: function (event) {

            if (isOpen) {
                if (isAnimating) return false;

        		functions.toggleMenu(false);
            } else {
                if (isAnimating) return false;

                functions.toggleMenu(true);
            }

    		isOpen = !isOpen;
        }
    };

    functions = {

        backgroundHeader: function (flag) {
            if (flag) {
                // escondo el header
                dom.header.addClass('header--background');
            } else {
                // muestro el header
                dom.header.removeClass('header--background');
            }
        },

        hideHeader: function (flag) {
            if (flag) {
                // escondo el header
                dom.header.addClass('header--hidden');
            } else {
                // muestro el header
                dom.header.removeClass('header--hidden');
            }
        },

        fixedHeader: function (flag) {
            if (flag) {
                // cambio position fixed al header
                dom.header.addClass('header--fixed');
            } else {
                // quito position fixed al header
                dom.header.removeClass('header--fixed');
            }
        },

        transitionHeader: function (flag) {
            if (flag) {
                // añado transiciones al header
                dom.header.addClass('header--transition');
            } else {
                // quito transicion al header
                dom.header.removeClass('header--transition');
            }
        },

        toggleMenu: function (flag) {
            if (flag) {
                // muestro el menu mobil

                isAnimating = true;
                dom.html.addClass('wochap-menu--active');

                // animate path
    			path.animate( { 'path' : pathOpen }, animationDuration, mina.easeinout, function () {
                    isAnimating = false;
                });

            } else {
                // escondo el menu mobil

                isAnimating = true;
                dom.html.removeClass('wochap-menu--active');

                // animate path
    			setTimeout( function () {
    				// reset path
    				path.attr( 'd', initialPath );
    				isAnimating = false;
    			}, animationDuration );
            }
        },

        closeMenu: function (event) {

            if (isOpen) {
                // el target es el toggle, o el toggle tiene dentro al target
                if (dom.menuToggle.is(event.target) || dom.menuToggle.has(event.target).length !== 0) {
                    // toggle click
                    return false;
                }

                // The target of the click isn't the container. && Nor a child element of the container
                if (!dom.menu.is(event.target) && dom.menu.has(event.target).length === 0 && dom.html.hasClass('wochap-menu--active')) {
                    // overlay click

                    if (isAnimating) return false;

            		functions.toggleMenu(false);
                    isOpen = !isOpen;
                }
            }
        }
    };

    var init = function(){
        catchDom();
        suscribeEvents();
    };

    init();
});
