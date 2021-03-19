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

## Data migration from API to Atlas MongoDB

 - 1 page from the API contains 100 entries
 - 100 pages from API takes 110 seconds with a 1.1 s delay to prevent status code 429 (Too Many Requests).
 - The request limit in the API is 60 requests / minute
 - Saving those 100 pages of data to MongoDB takes 3 min 25 s
 - Total time it takes to fetch 100 pages of data is 4 min 35 s
 - There is 11298 pages of data in total so 11298 / 100 = 113 request-database saves are required
 - total time to migrate the entire data from API do database is 4 min 35 s * 113 = 31075 s = 518 min = 8.6 h
 - 6000 pages were migrated which equates to about 340MB of data. The limit in Atlas MongoDB free in 512MB
   so all the data is not going to fit unless the account is upgraded to cluster tier M2 which is 9$/month 
   and gives 2 GB of storage which should be enough for all the stats (playoffs included) and possible
   indexing.
 - The cluster tier M2 was subscribed so all the data can be migrated to the database. Also this way the app
   is not so dependent on the API. Also it's good practice to use the database.

## Database management

 - To manage the active database connections maybe it would be good to open the connection when data is needed
   and close the connection when the data is delivered. If the user is constantly connected to the database
   then the maximum allowed connections to Atlas MongoDB can be reached quite quickly. The limit for cluster
   tier M2 is 500 connections. EDIT: THIS IS NOT A VALID POINT SINCE I THINK A CONNECTION MEANS A QUERY FROM
   USER AND IT'S NOT NEEDED TO HANDLE THOSE IN THE APP. ATLAS MONGODB TAKES CARE OF IT.
