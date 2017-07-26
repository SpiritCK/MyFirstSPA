# My Pokedex

## About My Pokedex

My Pokedex is a Single Page Application, built using Laravel and AngularJS framework, that works like a real pokedex (well, not exactly the same as the original but I hope to improve it in the future). The main feature of this pokedex is the ability to search specific pokemon, and look up its detail without reloading the page like [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Main_Page). Obviously, the content isn't nearly as complete as other pokemon database. Which is why, My Pokedex focus on providing information that is needed when you play Pokemon games. For those who don't know about pokedex, Pokedex is a device where you can look up details about creature called Pokemon or Pocket Monster. Pokemon is made by The Pokemon Company.

As per June 25th 2017, My Pokedex has the following feature:
- Search pokemon by name
- Pokemon data up to Johto (First 151 Pokemon)

The following features are still to be updated (not sure when):
- Search pokemon by type
- Add details about pokemon (attack type effectivity, evolution and pre-evolution).

## How to Install
For UNIX user, make sure you have [composer](https://getcomposer.org/) and php installed
```
sudo apt-get install composer
sudo apt-get install php
```
Next, you eed to configure the cloned project
```
git clone https://github.com/SpiritCK/MyFirstSPA.git pokedex
cd pokedex
composer install
cp .env.example .env
php artisan key:generate
```
After that, run the project using
```
php artisan serve
```
and open the link provided. Enjoy My Pokedex to your heart content :)

P.S.
If `composer install` doesn't work, there are some library missing from your php. Try google because i forgot what libraries needed :)

## Unit Testing
For UNIX user, enter the following command to do unit testing
```
./vendor/bin/phpunit
```

## Screenshots
![screenshot_1](https://user-images.githubusercontent.com/23207046/28630312-2f4bb8ea-7254-11e7-9b28-26b3b866e079.png)
![screenshot_2](https://user-images.githubusercontent.com/23207046/28630313-2f78f242-7254-11e7-98a3-49fc2aedc234.png)
![screenshot_3](https://user-images.githubusercontent.com/23207046/28630315-2f81c656-7254-11e7-8e89-50ddac837f2a.png)
![screenshot_4](https://user-images.githubusercontent.com/23207046/28630314-2f815428-7254-11e7-963c-67c3110de699.png)
