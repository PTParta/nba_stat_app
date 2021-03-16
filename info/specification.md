# NBA player stats visualization

## Purpose

The purpose of this website is to get NBA stats from an external API and present that data
visually in a chart form.

Usually NBA stats are presented in a number format and only one game per page.
This makes it hard to see trends in the data. By showing data in a chart form
it's easier to see how a player has performed during a season or throughout his career.

## Implementation

An exteranl API www.balldontlie.io is used to get the data necessary to present player
stats visually in chart form. In the chart it will be possible to see all the player stats
per game.

The following libraries will be used:
 - React: general implementation of the website
 - Axios: request to the external API
 - Chart: showing visually the data

## Project plan

 - Write the project specification: ongoing
 - Set up the project files
 - Study how to use the external API
 - Study how to use Chart.js
 - Put data to MongoDB from the API to be less dependent on the API.
   This way it's also faster to get all the players with a single 
   database query. To get all the players from the API takes 35 GET
   requests which takes about 10 seconds. Also the API gives sometimes
   status code 429 (Too Many Requests). If there more than one user
   on the website there will be for sure this error because it's
   happening with one user already.
