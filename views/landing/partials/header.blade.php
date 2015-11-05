<div class="header-helper {{ Route::currentRouteName() == 'landing.home' ? 'header-helper--home' : '' }}">
    <header data-hook="wochap-header" class="header {{ Route::currentRouteName() == 'landing.home' ? 'header--home' : '' }}">
        <div class="u-wrapper header-wrapper">
            <div class="header-logo">
                <a href="{{ URL::route('landing.home') }}" title="Aupair Exchange">
                    <img src="{{ asset('img/logo.png') }}" alt="Aupair Exchange"/>
                </a>
            </div>

            <div class="header-menu">
                @include('landing.partials.nav')

                <div class="header-social">
                    <ul class="header-social-list">
                        <li class="header-social-item">
                            <a href="#" class="header-social-link">
                                <i class="icon-twitter-circle"></i>
                            </a>
                        </li>{{--
                    --}}<li class="header-social-item">
                            <a href="#" class="header-social-link">
                                <i class="icon-facebook-circle"></i>
                            </a>
                        </li>
                    </ul>
                </div>

                <button data-hook="wochap-menu-toggle" class="wochap-toggle">
                	<em></em>
                	<em></em>
                	<em></em>
                </button>
            </div>
        </div>
    </header>
</div>

<div data-hook="wochap-menu" class="wochap-menu">
    @include('landing.partials.nav')

    <div class="morph-shape" id="morph-shape" data-morph-open="M-1,0h101c0,0,0-1,0,395c0,404,0,405,0,405H-1V0z">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 800" preserveAspectRatio="none">
            <path d="M-1,0h101c0,0-97.833,153.603-97.833,396.167C2.167,627.579,100,800,100,800H-1V0z"/>
        </svg>
    </div>
</div>
