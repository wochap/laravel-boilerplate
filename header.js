$(function(){
    lastScrollTop = 0;
    //
    delta = 5;
    // barra de busqueda oculta
    searchFlag = false;
    dom = {};
    st = {
        header: '[data-hook="header"]',

        search: '[data-hook="search"]',
        searchToggle: '[data-hook="search-toggle"]',

        userMenu: '[data-hook="userMenu"]',
        userMenuToggle: '[data-hook="userMenu-toggle"]',
        userMenuOverlay: '[data-hook="userMenu-overlay"]',
    };

    catchDom = function () {
        dom.header = $(st.header);

        dom.search = $(st.search);
        dom.searchToggle = $(st.searchToggle);

        dom.userMenu = $(st.userMenu);
        dom.userMenuToggle = $(st.userMenuToggle);
        dom.userMenuOverlay = $(st.userMenuOverlay);
    };

    suscribeEvents = function () {
        $(window).on('scroll', events.changeHeader);

        $(document).on('click', st.searchToggle, events.toggleSearch);

        $(document).on('click', st.userMenuToggle, events.toggleUserMenu);
        $(document).on('mouseup', events.closeUserMenu);
    };

    events = {
        changeHeader : function () {
            var nowScrollTop = $(this).scrollTop();

            if (Math.abs(lastScrollTop - nowScrollTop) >= delta) {
                if (nowScrollTop > lastScrollTop) {
                    // scroll hacia abajo

                    if (searchFlag === false) {
                        // caja de busqueda esta oculta

                        if (nowScrollTop <= 250) {
                            // functions.toggleSearch(false);
                        }

                        if (nowScrollTop > 250) {
                            // ya no es visible el header
                            functions.hideHeader(true);
                            functions.fixedHeader(true);
                            $('.userMenu--desktop').removeClass('userMenu--active');

                            // functions.toggleSearch(false);

                            if (GLOBAL.config.headerType == "transparent") {
                                functions.greenHeader(true);
                            }

                            setTimeout(function () {
                                functions.transitionHeader(true);
                            }, 300);
                        }
                    }
                } else {

                    if (searchFlag === false) {
                        // caja de busqueda esta oculta

                        // scroll hacia arriba
                        functions.hideHeader(false);

                        if (nowScrollTop <= 0) {
                            // el usuario llego al limite superior de la ventana
                            functions.fixedHeader(false);
                            if (GLOBAL.config.headerType == "transparent") {
                                functions.greenHeader(false);
                            }
                            functions.transitionHeader(false);
                        }
                    }
                }
                lastScrollTop = nowScrollTop;
            }
        },

        toggleSearch: function (event) {
            functions.toggleSearch(true);
            searchFlag = !searchFlag;
            functions.fixedHeader(true);

            if ($(window).scrollTop() == '0' && searchFlag === false) {
                functions.fixedHeader(false);
                functions.transitionHeader(false);
            }
        },

        toggleUserMenu: function (event) {
            dom.userMenu.toggleClass('userMenu--active');

            if (dom.userMenu.hasClass('userMenu--active')) {
                dom.userMenuOverlay.addClass('userMenu-overlay--active');
            }
        },

        closeUserMenu: function (event) {
            // el targen el es toggle, o el toggle tiene dentro al target
            if (dom.userMenuToggle.is(event.target) || dom.userMenuToggle.has(event.target).length !== 0) {
                // hize click a userMenuToggle
                dom.userMenuOverlay.removeClass('userMenu-overlay--active');
                return;
            }

            // The target of the click isn't the container.
            if (!dom.userMenu.is(event.target) && dom.userMenu.has(event.target).length === 0 && dom.userMenu.hasClass('userMenu--active'))
            // Nor a child element of the container
            {
                dom.userMenuOverlay.removeClass('userMenu-overlay--active');
                dom.userMenu.removeClass('userMenu--active');
            }
        }
    };

    functions = {

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

        greenHeader: function (flag) {
            if (flag) {
                // vuelvo verde el header
                dom.header.addClass('header--green');
            } else {
                // quito el background verde al header
                dom.header.removeClass('header--green');
            }
        },

        toggleSearch: function (flag) {
            if (flag === true) {
                // muestro la barra de busqueda
                dom.search.toggleClass('searchBar--hidden');

                setTimeout(function () {
                    dom.search.toggleClass('searchBar--active');
                    dom.searchToggle.toggleClass('header-search--active');
                }, 100);
            } else {
                // escondo la barra de busqueda
                dom.search.addClass('searchBar--hidden');
                dom.search.removeClass('searchBar--active');
                dom.searchToggle.removeClass('header-search--active');
            }

        }
    };

    var init = function(){
        catchDom();
        suscribeEvents();
    };

    init();
});
