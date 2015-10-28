<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="description" content=""/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>

    <title>Aupair Exchange</title>

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
    <link rel="Stylesheet" type="text/css" href="{{ asset('landing/css/main.css') }}"/>
</head>
<body>
    @include('landing.partials.header')

    <!-- Content -->
    <div class="wochap-main">
        @yield('content')
    </div>
    <!-- /Content -->

    @include('landing.partials.footer')

    <!-- Scripts -->
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
    <script type="text/javascript" src="landing/js/main.js"></script>
    @yield('scripts')
    <!-- /Scripts -->

    <!-- Live Reload -->
    <!-- <script src="http://localhost:35729/livereload.js?snipver=1" type="text/javascript"></script> -->
    <!-- /Live Reload -->
</body>
</html>
