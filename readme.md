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
For Linux user, make sure you have [composer](https://getcomposer.org/) and php installed
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

## Screenshots
![screenshot0](https://user-images.githubusercontent.com/23207046/28584009-63c46d0c-7195-11e7-9a07-e413014a3722.png)
![screenshot1](https://user-images.githubusercontent.com/23207046/28584007-63b3e342-7195-11e7-97d0-e42820f33ea3.png)
![screenshot2](https://user-images.githubusercontent.com/23207046/28584006-63a9ee1e-7195-11e7-8048-4f9851c0dd57.png)
![screenshot3](https://user-images.githubusercontent.com/23207046/28584008-63b8752e-7195-11e7-8fad-7474a0eb0b59.png)
