;$(function(){
    mobilNavBreak = '992';
    lastScrollTop = 0;
    //
    delta = 5;
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
        dom.menuToggle  = $(st.menuToggle);
        dom.menuOverlay = $(st.menuOverlay);
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
            functions.preventSpam();

            dom.menu.toggleClass('wochap-menu--active');
            dom.menuToggle.toggleClass('wochap-toggle--active');

            if (dom.menu.hasClass('wochap-menu--active')) {
                dom.menuOverlay.addClass('wochap-overlay--active');
            }
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

        preventSpam: function (event) {
            dom.menuToggle.prop('disabled', true);

            setTimeout(function () {
                dom.menuToggle.prop('disabled', false);
            }, 500);
        },

        closeMenu: function (event) {

            // el target es el toggle, o el toggle tiene dentro al target
            if (dom.menuToggle.is(event.target) || dom.menuToggle.has(event.target).length !== 0) {
                // hize click a menuToggle
                dom.menuOverlay.removeClass('wochap-overlay--active');

                return false;
            }

            // The target of the click isn't the container. && Nor a child element of the container
            if (!dom.menu.is(event.target) && dom.menu.has(event.target).length === 0 && dom.menu.hasClass('wochap-menu--active')) {
                functions.preventSpam();

                dom.menu.removeClass('wochap-menu--active');
                dom.menuOverlay.removeClass('wochap-overlay--active');
                dom.menuToggle.toggleClass('wochap-toggle--active');
            }
        }
    };

    var init = function(){
        catchDom();
        suscribeEvents();
    };

    init();
});
