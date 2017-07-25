<!doctype html>
<html lang="{{ config('app.locale') }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>My Pokedex</title>

        <!-- Dependencies -->
        <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular.js"></script>
        <script src="//angular-ui.github.io/bootstrap/ui-bootstrap-tpls-0.12.0.js"></script>
        <script src="example.js"></script>
        <link href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css" rel="stylesheet">

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">

        <!-- Styles -->
        <style>
            th, td {
                padding: 2px;
                text-align: left;
            }
            th#heading {
                padding: 10px;
                width: 300px;
                text-align: center;
                color:#000;
            }

            .type {
                font-size: 85%;
                font: x-small sans-serif;
                line-height:12px;
                border-radius: 2px;
                text-align: center;
            }
            .Grass {
                background: #78C850;
            }
            .Poison {
                background: #A040A0;
            }
            .Fire {
                background: #F08030;
            }
            .Flying {
                background: #A890F0;
            }
            .Water {
                background: #6890F0;
            }
            .Bug {
                background: #A8B820;
            }
            .Dark {
                background: #705848;
            }
            .Normal {
                background: #A8A878;
            }
            .Electric {
                background: #F8D030;
            }
            .Psychic {
                background: #F85888;
            }
            .Ground {
                background: #E0C068;
            }
            .Ice {
                background: #98D8D8;
            }
            .Steel {
                background: #B8B8D0;
            }
            .Fairy {
                background: #EE99AC;
            }
            .Fighting {
                background: #C03028;
            }
            .Rock {
                background: #B8A038;
            }
            .Ghost {
                background: #705898;
            }
            .Dragon {
                background: #7038F8;
            }
        </style>

        <!-- Scripts -->
        <script type="text/javascript" src="{{ URL::asset('js/myScript.js') }}"></script>
    </head>
    <body ng-app="myApp">

        <div ng-controller="myCtrl">
            <input type="text" ng-model="Keyword" placeholder="Search"/>

            <accordion close-others="true">
                <accordion-group ng-repeat="group in pokemon | filter:Keyword">
                    <accordion-heading style="background-color: #000000">
                        <img src="{{URL::asset("[[group.sprite]]")}}" alt="no_image" width="40px" height="40px">
                        #[[ group.id ]] [[ group.name ]]
                    </accordion-heading>
                    <table border="0" style="width: 100%">
                        <tr>
                            <th style="text-align: center">
                                <h1>[[ group.name ]]</h1>
                                <table border="0" align="center">
                                    <tr>
                                        <td class="type [[type]]" width="45px" ng-repeat="type in group.type">
                                            <span style="color:#FFF;"><b>[[type]]</b></span>
                                        </td>
                                    </tr>
                                </table>
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <img src="{{URL::asset("[[group.image]]")}}" alt="no_image" width="300px" height="300px" align="left">
                                <table style="border: 5px solid #000000;" align="right">
                                    <tbody>
                                    <tr>
                                        <th id="heading" class="[[ group.type[0] ]]">Stat</th>
                                    </tr>

                                    <tr style="background: #FF5959;">
                                        <td>
                                            <table border="0" style="background: #FF0000; border: 1px solid #A60000;" cellspacing="0" cellpadding="0">
                                                <tbody>
                                                <tr>
                                                    <th style="background: #FF5959; width: 75px;"><span style="color:#000;">HP:</span></th>
                                                    <th style="background: #FF5959; width: 30px;"> [[group.base.hp]]</th>
                                                    <td style="width: [[group.base.hp]]px;"></td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>

                                    <tr style="background: #F5AC78;">
                                        <td>
                                            <table style="background: #F08030; border: 1px solid #9C531F;" cellspacing="0" cellpadding="0">
                                                <tbody>
                                                <tr>
                                                    <th style="background: #F5AC78; width: 75px;"><span style="color:#000;">Attack:</span></th>
                                                    <th style="background: #F5AC78; width: 30px;"> [[group.base.attack]]</th>
                                                    <td style="width: [[group.base.attack]]px;"></td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr style="background: #FAE078;">
                                        <td>
                                            <table style="background: #F8D030; border: 1px solid #A1871F;" cellspacing="0" cellpadding="0">
                                                <tbody>
                                                <tr>
                                                    <th style="background: #FAE078; width: 75px;"><span style="color:#000;">Defense:</span></th>
                                                    <th style="background: #FAE078; width: 30px;"> [[group.base.defense]]</th>
                                                    <td style="width: [[group.base.defense]]px;"></td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr style="background: #9DB7F5;">
                                        <td>
                                            <table style="background: #6890F0; border: 1px solid #445E9C;" cellspacing="0" cellpadding="0">
                                                <tbody>
                                                <tr>
                                                    <th style="background: #9DB7F5; width: 75px;"><span style="color:#000;">Sp.Atk:</span></th>
                                                    <th style="background: #9DB7F5; width: 30px;"> [[group.base.spAtk]]</th>
                                                    <td style="width: [[group.base.spAtk]]px;"></td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr style="background: #A7DB8D;">
                                        <td>
                                            <table style="background: #78C850; border: 1px solid #4E8234;" cellspacing="0" cellpadding="0">
                                                <tbody>
                                                <tr>
                                                    <th style="background: #A7DB8D; width: 75px;"><span style="color:#000;">Sp.Def:</span></th>
                                                    <th style="background: #A7DB8D; width: 30px;"> [[group.base.spDef]]</th>
                                                    <td style="width: [[group.base.spDef]]px;"></td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr style="background: #FA92B2;">
                                        <td>
                                            <table style="background: #F85888; border: 1px solid #A13959;" cellspacing="0" cellpadding="0">
                                                <tbody>
                                                <tr>
                                                    <th style="background: #FA92B2; width: 75px;"><span style="color:#000;">Speed:</span></th>
                                                    <th style="background: #FA92B2; width: 30px;"> [[group.base.speed]]</th>
                                                    <td style="width: [[group.base.speed]]px;"></td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h3>[[ group.description ]]</h3>
                            </td>
                        </tr>
                    </table>
                </accordion-group>
            </accordion>
        </div>

    </body>
</html>
