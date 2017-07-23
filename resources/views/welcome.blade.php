<!doctype html>
<html lang="{{ config('app.locale') }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Dependencies -->
        <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular.js"></script>
        <script src="//angular-ui.github.io/bootstrap/ui-bootstrap-tpls-0.12.0.js"></script>
        <script src="example.js"></script>
        <link href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css" rel="stylesheet">

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">

        <!-- Styles -->
        <style>
            html, body {
                background-color: #fff;
                color: #636b6f;
                font-family: 'Raleway', sans-serif;
                font-weight: 100;
                height: 100vh;
                margin: 0;
            }

            .full-height {
                height: 100vh;
            }

            .flex-center {
                align-items: center;
                display: flex;
                justify-content: center;
            }

            .position-ref {
                position: relative;
            }

            .top-right {
                position: absolute;
                right: 10px;
                top: 18px;
            }

            .content {
                text-align: center;
            }

            .title {
                font-size: 84px;
            }

            .links > a {
                color: #636b6f;
                padding: 0 25px;
                font-size: 12px;
                font-weight: 600;
                letter-spacing: .1rem;
                text-decoration: none;
                text-transform: uppercase;
            }

            .m-b-md {
                margin-bottom: 30px;
            }

            .trying {
                color: #636b6f;
                padding: 0 25px;
                font-size: 12px;
                font-weight: 600;
                letter-spacing: .1rem;
                text-decoration: none;
                text-transform: uppercase;
            }
        </style>

        <!-- Scripts -->
        <script>
            var app = angular.module("myApp", ['ui.bootstrap'], function($interpolateProvider) {
                $interpolateProvider.startSymbol('[[');
                $interpolateProvider.endSymbol(']]');
            });

            app.controller("myCtrl", function($scope) {
                $scope.firstName = "John";
                $scope.lastName = "Doe";
                $scope.groups = [
                    {
                        title: "Bulbasaur",
                        content: "Dynamic Group Body - 1"
                    },
                    {
                        title: "Ivysaur",
                        content: "Dynamic Group Body - 2"
                    },
                    {
                        title: "Venusaur",
                        content: "Dynamic Group Body - 3"
                    },
                    {
                        title: "Charmender",
                        content: "Dynamic Group Body - 4"
                    },
                    {
                        title: "Charmeleon",
                        content: "Dynamic Group Body - 5"
                    },
                    {
                        title: "Charizard",
                        content: "Dynamic Group Body - 6"
                    }
                ];
            });
        </script>
    </head>
    <body ng-app="myApp">

        <div ng-controller="myCtrl">
            <input type="text" ng-model="Keyword" placeholder="Search"/>

            <accordion close-others="true">
                <accordion-group ng-repeat="group in groups | filter:Keyword">
                    <accordion-heading>
                        <img src="https://image.freepik.com/free-vector/pirate-simple_17-1111184221.jpg" width="20px" height="20px"> [[ group.title ]]
                    </accordion-heading>
                    <span ng-bind="group.content"></span>
                </accordion-group>
            </accordion>
        </div>

        <div class="flex-center position-ref full-height" ng-app="">
            @if (Route::has('login'))
                <div class="top-right links">
                    @if (Auth::check())
                        <a href="{{ url('/home') }}">Home</a>
                    @else
                        <a href="{{ url('/login') }}">Login</a>
                        <a href="{{ url('/register') }}">Register</a>
                    @endif
                </div>
            @endif

            <div class="content">
                <div class="title m-b-md">
                    Laravel
                </div>

                <div class="links">
                    <a href="https://laravel.com/docs">Documentation</a>
                    <a href="https://laracasts.com">Laracasts</a>
                    <a href="https://laravel-news.com">News</a>
                    <a href="https://forge.laravel.com">Forge</a>
                    <a href="https://github.com/laravel/laravel">GitHub</a>
                </div>

                <div class="trying" ng-controller="myCtrl">

                    <p>Enter first name:<input type="text" ng-model="firstName"></p>
                    <p>Enter last name:<input type="text" ng-model="lastName"></p>
                    <p>The full name is: <span ng-bind="firstName + ' ' + lastName"></span></p>

                </div>
            </div>
        </div>
    </body>
</html>
