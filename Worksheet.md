# Project Overview

## Project Links

- [SEIR-React-FGO](https://github.com/aria414/seir-react-fgo)
- [add your deployment link]()

## Project Description

Simple site for displaying and searching Servant data in the FGO game. Similar to the korilla receipt and the shopping cart lab.

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

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [Wireframes](https://drive.google.com/file/d/1Pl_BkyrFbi_PA2b_LPNhdwWSecAQNLWt/view?usp=sharing)
- [React Architecture](https://docs.google.com/drawings/d/1VBHthZz1P3aszosLFiFmN9Vi_7Jk4wEUIzoLny4NWrk/edit?usp=sharing)

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP. Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.

#### MVP - Focus on making each component usable.

| Component                       | Priority | Estimated Time | Actual Time |
| ------------------------------- | :------: | :------------: | :---------: |
| Find Workable API               |    H     |     8 hrs      |     hrs     |
| Deploy API/ Find endpoints      |    H     |     10 hrs     |     hrs     |
| Set Up Page Components          |    H     |     6 hrs      |     hrs     |
| Render List from API            |    H     |     5 hrs      |     hrs     |
| Render Individual Item from API |    H     |     5 hrs      |     hrs     |
| Set up Nav and Footer Comp      |    H     |     3 hrs      |     hrs     |
| Link Pages with Router          |    H     |     3 hrs      |     hrs     |
| Total                           |    H     |     40 hrs     |     hrs     |

#### PostMVP - Mainly styling and layouting the app

| Components Styled              | Priority | Estimated Time | Actual Time |
| ------------------------------ | :------: | :------------: | :---------: |
| Mobile Main page               |    H     |     3 hrs      |     hrs     |
| Mobile Character List page     |    H     |     5 hrs      |     hrs     |
| Mobile character Display Page  |    H     |     5 hrs      |     hrs     |
| Nav Mobile                     |    H     |     2 hrs      |     hrs     |
| Footer Mobile                  |    H     |     2 hrs      |     hrs     |
| Desktop Main page              |    H     |     4 hrs      |     hrs     |
| Desktop Character List page    |    H     |     5 hrs      |     hrs     |
| Desktop character Display Page |    H     |     5 hrs      |     hrs     |
| Desktop Nav                    |    H     |     2 hrs      |     hrs     |
| Desktop Footer                 |    H     |     2 hrs      |     hrs     |
| Total Hrs                      |    H     |     35 hrs     |     hrs     |

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
| App                    |    H     |     2 hrs      |   3.5hrs    |
| Header                 |    H     |     4 hrs      |   2.5hrs    |
| Footer                 |    H     |     2 hrs      |    5hrs     |
| Main page              |    H     |     2 hrs      |   3.5hrs    |
| Character List page    |    H     |     6 hrs      |   2.5hrs    |
| Character Display page |    H     |     6 hrs      |    5hrs     |
| Total                  |    H     |     22 hrs     |    5hrs     |

## Additional Libraries

Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc.

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description. Code snippet should not be greater than 10 lines of code.

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```
