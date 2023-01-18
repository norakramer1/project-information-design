# project-information-design
Final Project of the minor Information Design in collaboration with Nationaal Archief

## Table of contents
## About the assignment
This application is made for [Nationaal Archief](https://www.nationaalarchief.nl/). Nationaal Archief is an archive that collects and archives all documents from the Province of den Haag, Netherlands and is the archive of the Dutch government. They have a large userbase of researches looking for archival material regarding for example WOII or the Dutch East India Company. Their goal was to make users aware of the fact that not all the material they have is available online with a datavisulisation.

## What is the app
The team ended up making the decision to show different data available in the archive based on how deep in the archive the user was. This is based on three main levels: The home page, The research page and The detail page. Each page you visit shows more in depth data and filters. 

### The home page
The home page shows a small block of content that explains that Nationaal Archief is busy digitilizing their materials but that this is going to take a long time. It shows a barchart and percentage of the materials that are available on their website. 

### The research page
The research page shows more in depth information about not only the online availability but also how much of the archives the user searched for is public and available to view.

### The detail page
The detail page shows besides the previous information a graph that shows you how much information is available online in a certain time period. This information is rendered dynamically based on the archive you search for.

## API
All data from Nationaal Archief is available via Open Data. Using OAI-PMH you can make a call or fetch an xml file. You can use preset verbs to get the specific information that you need. documentation is available [here](https://www.nationaalarchief.nl/onderzoeken/open-data/archiefinventarissen-digitale-objecten-en-scans-van-archieven) in Dutch.

## How to use this project
1. Clone this project
2. Open in a code environment of choice
3. Run live server or open the `index.html` file
4. Change archive entry in the `getData.js` file to change the data based on the file

## Features
1. Fetch XML files 
2. Show user how much of the particular archive is digitalised
3. Show user how many files are publicly available
4. Show the user a graph with how much information is digitalised in a certain time period

## Wishlist
1. Show a percentage that shows how much data is available across all XML/archives in the website
2. Optimise the chart to represent the design made

## License
This project uses the MIT license