# Project Overview

## Project Links

- [SEIR-React-FGO](https://github.com/aria414/seir-react-fgo)
- [Deployed on Netlify](https://seir-react-fgo.netlify.app/)

## Project Description

Simple site for displaying character data in the FGO game. Similar to the iStocks lab.

The inspiration came from this website where I used to look up character info when I build teams in the game.

```
https://fate-go.cirnopedia.org/servant_all.php#nav
```

## API

FGO database with free API to use. Currently I'm using 2 urls to query data. The 1st url has the list of all the characters players can use.

```
https://api.atlasacademy.io/export/NA/basic_servant.json
```

Second link has the individual data for each character. The individual data can be accessed by the character ID

```
https://api.atlasacademy.io/nice/NA/servant/800100
```

## Main Info for each characters

```
{
  "id": 800100,
  "collectionNo": 1,
  "name": "Mash Kyrielight",
  "ruby": "Mash Kyrielight",
  "className": "shielder",
  "type": "heroine",
  "flag": "normal",
  "rarity": 3,
  "cost": 0,
  "lvMax": 80,
  "extraAssets": {
    "charaGraph": {
      "ascension": {
        "1": "https://assets.atlasacademy.io/GameData/NA/CharaGraph/800100/800100a@1.png",
        "2": "https://assets.atlasacademy.io/GameData/NA/CharaGraph/800100/800100a@2.png",
        "3": "https://assets.atlasacademy.io/GameData/NA/CharaGraph/800100/800100b@1.png",
        "4": "https://assets.atlasacademy.io/GameData/NA/CharaGraph/800100/800100b@2.png"
      },
      "costume": {
        "800130": "https://assets.atlasacademy.io/GameData/NA/CharaGraph/800130/800130a.png",
        "800140": "https://assets.atlasacademy.io/GameData/NA/CharaGraph/800140/800140a.png"
      }
    }
}
```

## Special attack info

```
  "noblePhantasms": [
    {
      id": 800101,
      "num": 1,
      "card": "arts",
      "name": "Lord Chaldeas",
      "ruby": " ",
      "icon": "https://assets.atlasacademy.io/GameData/NA/Servants/Commands/800100/card_servant_np.png",
      "rank": "D",
      "type": "Anti-Personnel",
      "detail": "Increase DEF (3 turns) <effect increases with Overcharge> & apply Incoming Damage Cut status (3 turns) for all allies",
    },
    {
      "id": 800104,
      "num": 1,
      "card": "arts",
      "name": "Lord Camelot",
      "ruby": " ",
      "icon": "https://assets.atlasacademy.io/GameData/NA/Servants/Commands/800100/card_servant_np1.png",
      "rank": "B+++",
      "type": "Anti-Evil",
      "detail": "Increase DEF (3 turns) <effect increases with Overcharge> & apply Incoming Damage Cut status (3 turns) for all allies + increase ATK for all allies except yourself",
    }
  ]
```

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [Wireframes](https://drive.google.com/drive/folders/14mjyCnoGD-uqrOlGJEYve3-fOqMsxhI8?usp=sharing)
- [React Architecture](https://drive.google.com/drive/folders/1G3Tq8J_I8Lv_ljFvDZv2ms7wyXtOmVqo?usp=sharing)

[Individual Card Inspiration](https://www.behance.net/gallery/87081313/Game-Portal?tracking_source=search_projects_recommended%7Cgame%20list)

![Card Image](https://drive.google.com/uc?export=download&id=1eM8WkH8cYcGHQYCLWO7Avj4S3GWoYkcd)

[Card List Inspiration](https://www.behance.net/gallery/97780191/StrategyBoards-Game-Planner?tracking_source=search_projects_recommended%7Cleague%20of%20legends)

![Card Image](https://drive.google.com/uc?export=download&id=1xgYKtltuMcWKfK59BiyPR9X5eAwFWAu9)

[Card List Inspiration](https://www.behance.net/gallery/107441469/Game-Streaming-App-Design-Concept?tracking_source=search_projects_recommended%7Cgame%20mobile%20character)

![Card Image](https://drive.google.com/uc?export=download&id=1Rx8ob6OvrEQq8eReZY8VFni0I8UUJIEu)

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP. Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.

#### MVP - Focus on making each component usable.

| Component                      | Priority | Estimated Time | Actual Time |
| ------------------------------ | :------: | :------------: | :---------: |
| Find Workable API              |    M     |     5 hrs      |   2.5 hrs   |
| Deploy API/ Find endpoints     |    M     |     3 hrs      |    4 hrs    |
| Link Pages with Router         |    L     |     3 hrs      |   0.5 hrs   |
| Mobile Main page               |    L     |     1 hrs      |   0.5 hrs   |
| Mobile Character List page     |    H     |     5 hrs      |    6 hrs    |
| Mobile character Display Page  |    H     |     8 hrs      |    6 hrs    |
| Nav Mobile                     |    M     |     1 hrs      |    1 hrs    |
| Desktop Main page              |    H     |     1 hrs      |   0.5 hrs   |
| Desktop Character List page    |    H     |     4 hrs      |    2 hrs    |
| Desktop character Display Page |    H     |     5 hrs      |   4.5 hrs   |
| Nav Desktop                    |    M     |    1.5 hrs     |   0.5 hrs   |
| Total Hrs                      |          |    37.5 hrs    |   31 hrs    |

#### PostMVP - Mainly styling and layouting the app

| Component                     | Priority | Estimated Time | Actual Time |
| ----------------------------- | :------: | :------------: | :---------: |
| Get icons to show up          |    L     |     2 hrs      |     hrs     |
| Put graphics on main page     |    M     |     2 hrs      |     hrs     |
| Grab data and plug into chart |    H     |     4 hrs      |     hrs     |
| Total Hrs                     |          |     8 hrs      |             |

## Components

##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components.

| Component              |                             Description                              |
| ---------------------- | :------------------------------------------------------------------: |
| App                    |         Deploy Main page Nav, Footer and Character List page         |
| Header                 |             This will render the header include the nav              |
| Footer                 |        This will render the footer include some sort of menu         |
| Main page              |               Main page to show introduction of site.                |
| Character List page    |           Make call to API and display list of characters            |
| Character Display page | Use the ID passed in from Character List to display single character |

Time frames are also key in the development cycle. You have limited time to code all phases of the game. Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component              | Priority | Estimated Time | Actual Time |
| ---------------------- | :------: | :------------: | :---------: |
| App                    |    H     |     2 hrs      |     hrs     |
| Header                 |    M     |     4 hrs      |     hrs     |
| Footer                 |    L     |     2 hrs      |     hrs     |
| Main page              |    L     |     2 hrs      |     hrs     |
| Character List page    |    H     |     6 hrs      |     hrs     |
| Character Display page |    H     |     6 hrs      |     hrs     |
| Total                  |          |     22 hrs     |     hrs     |

## Additional Libraries

Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc.

-SCSS
-React Bootstrap

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description. Code snippet should not be greater than 10 lines of code.

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```
