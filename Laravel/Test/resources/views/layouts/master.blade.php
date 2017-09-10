<!DOCTYPE html>
<html class="no-js">
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Master</title>
        <meta name="description" content="">

        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <link rel="stylesheet" href="{{URL::to('css/style.css')}}">
        <link href="https://fonts.googleapis.com/css?family=Arizonia" rel="stylesheet">
    </head>
    <body>
        @include('partials.header')
        <div class="container">
        @yield('content')
        </div>
    </body>
</html>