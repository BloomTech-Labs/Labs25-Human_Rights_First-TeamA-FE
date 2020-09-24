# Human Rights First - Police Incident Report

You can find the deployed project at [Police Use of Force Tracker](https://a.humanrightsfirst.dev/).

## Contributors

|                                                       [Cole Wilkison](https://github.com/cwilkison)                                                       |                                                    [Gordon Caister](https://github.com/GordonCaister)                                                     |                                                    [Andrew Hoffmann](https://github.com/ashoffmann90)                                                     |                                                       [Nathan Howland](https://github.com/NateyLB)                                                        |                                                          [Phil Fives](https://github.com/ph5500)                                                          |                                                       [Brannan Conrad](https://github.com/BrannanC)                                                       |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------: |
| [<img src="https://avatars1.githubusercontent.com/u/60902582?s=400&u=361d46cd844ed7362f12ccc3c1f9622d4a373f13&v=4" width = "200" />](https://github.com/) | [<img src="https://avatars3.githubusercontent.com/u/41546522?s=400&u=64e9bef9293431008dabedfb150c956495b6b6d2&v=4" width = "200" />](https://github.com/) | [<img src="https://avatars0.githubusercontent.com/u/46906462?s=400&u=f541fc637d418ecda1c5d924d4bff009a0c7c5af&v=4" width = "200" />](https://github.com/) | [<img src="https://avatars0.githubusercontent.com/u/38302941?s=400&u=3b7e89f5287acbf4ba469f7a2625f3bc4a58927f&v=4" width = "200" />](https://github.com/) | [<img src="https://avatars1.githubusercontent.com/u/60459707?s=400&u=4c7df9fb20aa4f17da036fa1149ef114edfa06e4&v=4" width = "200" />](https://github.com/) | [<img src="https://avatars2.githubusercontent.com/u/39506884?s=400&u=1c20856dbf147e53e7b413fee1c9a22ff3453952&v=4" width = "200" />](https://github.com/) |
|                                  [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/cwilkison)                                   |                                [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/gordoncaister)                                 |                                  [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/ashoffman)                                   |                                   [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/NateyLB)                                    |                                    [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/ph5500)                                    |                                   [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/BrannanC)                                   |
|              [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/cole-wilkison/)               |              [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/gordoncaister/)               |               [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/ashoffmann90/)               |         [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/nathan-howland-3611241a6/)         |                [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/n/phil-fives/)                 |         [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/brannan-conrad-18852616b/)         |

<br>
<br>

![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)
![React](https://img.shields.io/badge/react-v16.7.0--alpha.2-blue.svg)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Ant Design](https://img.shields.io/badge/design%20system-ant--design-yellowgreen)](https://ant.design/docs/react/introduce)
[![ESLint](https://img.shields.io/badge/linter-eslint-orange)](https://eslint.org/)

## Project Overview

[Trello Board](https://trello.com/b/f5IBtPhV/labs25hrfbrannan)

[Product Canvas](https://whimsical.com/4Gg7cNjtFfmcAXKDpRu8oJ)

Single page application that maps police brutality based on scraping data from Twitter and Reddit. It includes a timeline view, visual
map and feed page. Intended for journalists, activists and lawyers.

### Key Features

- Interactive Map
- Timeline
- Feed page
- Search Function

## Tech Stack

### [Front end](https://github.com/Lambda-School-Labs/Labs25-Human_Rights_First-TeamA-FE) built using:

#### React

- React is highly customizable with 3rd party wrappers and libraries
- React handles single page applications extremely well and can be expanded to multipage applications easily
- React puts most of the rendering on the client, thus reducing the amount of server power required

- Ant Design
- React-Google-Map
- craco-less
- react-places-autocomplete
- react-loader-spinner
- react-twitter-embed

#### Front end deployed to AWS Amplify

<br>

#### [Back end](https://github.com/Lambda-School-Labs/Labs25-Human_Rights_First-TeamA-BE) built using:

#### Node

- It is a built in requirement from Engineering Standards
- It has better efficiency and developer productivity
- It is easily scalable

- Express
- Axios
- Knex
- Postgres
- CORS

# APIs

## Okta Authentication

The Okta Authentication API provides operations to authenticate users, perform multifactor enrollment and verification, recover forgotten passwords, and unlock accounts. Primary authentication allows you to verify username and password credentials for a user.

## Google Maps API

Allows building of customized, agile experiences that bring the real world to our users with static and dynamic maps, Street View imagery, and 360° views.
This map uses the google-map-react library which is built on the Google Maps API.

- https://github.com/google-map-react/google-map-react#use-google-maps-api
- Requires Google Maps API key including: "Places", "Geocoding", "Maps" and "JavaScript" apis.
- Subscription to apis is available through the Google Maps Api api key dashboard.
- https://developers.google.com/maps/documentation/javascript/get-api-key

## Back-End API

Allows for access of locations of police incidents and details.
<br>
https://labs25-hrf-teama-api.herokuapp.com/

## Data Science API

Data Science scrapes data from Twitter and Reddit which compiles and cleans that information for the Web Developers.
<br>
http://human-rights-considered.eba-api7kmju.us-east-1.elasticbeanstalk.com/

# Environment Variables

In order for the app to function correctly, the user must set up their own environment variables. There should be a .env file containing the following:

    *  PORT - What port the backend is on
    *  DS_API_URL - Data Science API
    *  DS_API_TOKEN - Secret Token for DS API
    *  DATABASE_URL - Postgres URL for our database, includes username, password, port and database name
    *  OKTA_URL_ISSUER - URL connecting authentification to Okta
    *  OKTA_CLIENT_ID - Client specific id for web dev
    *  REACT_APP_CLIENT_ID - Okta client specific id for front end
    *  REACT_APP_OKTA_ISSUER_URI - Okta URL connecting with authentification for front end
    *  REACT_APP_API_URI - API URL for back end API
    *  REACT_APP_GOOGLE_MAPS_API_KEY - Google Maps API key

# Content Licenses

| Image Filename | Source / Creator | License                                                                      |
| -------------- | ---------------- | ---------------------------------------------------------------------------- |
| doodles.png    | Nicole Bennett   | [Creative Commons](https://www.toptal.com/designers/subtlepatterns/doodles/) |
| rings.svg      | Sam Herbert      | [MIT](https://github.com/SamHerbert/SVG-Loaders)                             |

# Testing

- SuperTest
- Jest
- Cypress

# Installation Instructions

- Navigate to the root directory with this README in it.
- Using NPM: npm install
- then type 'npm start'

## Other Scripts

    * npm start
      - starts the production server after a build is created
    * start: "craco --max_old_space_size=4096 start"
      - Increases JavaScript heap size
    * test:
      - Craco test --env=jest-environment-jsdom-sixteen
    * lint:
      - Runs linter

# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./CODE_OF_CONDUCT.md). Please follow it in all your interactions with the project.

## Issue/Bug Request

**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

- Check first to see if your issue has already been reported.
- Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
- Create a live example of the problem.
- Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).
