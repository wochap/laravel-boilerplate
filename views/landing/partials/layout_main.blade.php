<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <meta name="description" content=""/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>

    <title>Boilerplate</title>

    <!-- og tags Facebook -->
    <!-- /og tags Facebook -->
    <!-- og tags Google+ -->
    <!-- /og tags Google+ -->
    <!-- Twitter Cards -->
    <!-- /Twitter Cards -->

    <link rel="shortcut icon" href="#.ico" type="image/x-icon"/>
    <link rel="icon" href="#.png" sizes="32x32"/>
    <link rel="icon" href="#.png" sizes="192x192"/>
    <!-- Stylesheets -->
    <link rel="stylesheet" href="{{ asset('landing/css/main.css') }}"/>
    
    <script src="{{ asset('landing/js/modernizr.js') }}"></script>
</head>
<body>
    <!--[if lt IE 8]>
        <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->
        
    @include('landing.partials.header')

    <!-- Content -->
    <div class="wochap-main">
        @yield('content')
    </div>
    <!-- /Content -->

    @include('landing.partials.footer')

    <!-- Scripts -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="{{ asset("landing/js/jquery.js") }}"><\/script>')</script>
    <script src="{{ asset('landing/js/main.js') }}"></script>
    @yield('scripts')
    <!-- /Scripts -->
    
    <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
    <script async type="text/javascript">
        (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
        function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
        e=o.createElement(i);r=o.getElementsByTagName(i)[0];
        e.src='https://www.google-analytics.com/analytics.js';
        r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
        ga('create','UA-XXXXX-X','auto');ga('send','pageview');
    </script>
    <!-- End Google Analytics -->
    
    <!-- Live Reload -->
    <!-- <script src="http://localhost:35729/livereload.js?snipver=1" type="text/javascript"></script> -->
    <!-- /Live Reload -->
</body>
</html>
