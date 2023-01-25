# project-information-design
Final Project of the minor Information Design in collaboration with Nationaal Archief

> Process and week by week documentation can be found in the wiki of this repo

![screencapture-norakramer1-github-io-project-information-design-serie-html-2023-01-24-16_02_24](https://user-images.githubusercontent.com/74241562/214329573-39034033-0127-4208-b420-6e152a2c2151.png)


## Table of contents
## About the assignment
This application is made for [Nationaal Archief](https://www.nationaalarchief.nl/). Nationaal Archief is an archive that collects and archives all documents from the Province of den Haag, Netherlands and is the archive of the Dutch government. They have a large userbase of researches looking for archival material regarding for example WOII or the Dutch East India Company. Their goal was to make users aware of the fact that not all the material they have is available online with a datavisulisation.

## What is the app
The team ended up making the decision to show different data available in the archive based on how deep in the archive the user was. This is based on three main levels: The home page, The research page and The detail page. Each page you visit shows more in depth data and filters. 


## Activity diagram
To explain what code is used where and how different functions call each other I made this (sort of) activity diagram. These functions dont get called if you open the page (they fire all at once), but it is more to show the structure of which functions are used where and on which page. 

![Flowchart](https://user-images.githubusercontent.com/74241562/214337683-83701c80-9a19-4bd7-8aa5-8de13f5ed835.jpg)

### The home page
The home page shows a small block of content that explains that Nationaal Archief is busy digitilizing their materials but that this is going to take a long time. It shows a barchart and percentage of the materials that are available on their website. 

![screencapture-norakramer1-github-io-project-information-design-2023-01-24-16_03_28](https://user-images.githubusercontent.com/74241562/214329782-38f924b4-fb25-4d73-b146-1a5b8e30d860.png)


### The research page
The research page shows more in depth information about not only the online availability but also how much of the archives the user searched for is public and available to view.

![screencapture-norakramer1-github-io-project-information-design-resultaat-html-2023-01-24-16_02_05](https://user-images.githubusercontent.com/74241562/214329844-9185d767-e340-4520-a606-f7bbfcad1b9e.png)

### The detail page
The detail page shows besides the previous information a graph that shows you how much information is available online in a certain time period. This information is rendered dynamically based on the archive you search for.

![screencapture-norakramer1-github-io-project-information-design-serie-html-2023-01-24-16_02_24](https://user-images.githubusercontent.com/74241562/214329883-36b4c45e-cd9f-40d8-8ddd-5e349dbe7b7b.png)

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
4. Show the user a graph with how much information is digitalised and not digitalised in a certain time period

## Wishlist
1. Show a percentage that shows how much data is available across all XML/archives in the website
2. Optimise the chart to represent the design made
3. Make a tooltip on the bar chart to show an accurate number (started)
4. Clean up modules
5. Make a button that lets you enter a different archive number (for demonstration purposes)

## License
This project uses the MIT license
