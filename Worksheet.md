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

- [add link to your wireframes]()
- [add link to your react architecture]()

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP. Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.

#### MVP EXAMPLE

- Find and use external api
- Render data on page
- Allow user to interact with the page

#### PostMVP EXAMPLE

- Add localStorage or firebase for storage

## Components

##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components.

| Component |                          Description                          |
| --------- | :-----------------------------------------------------------: |
| App       | This will make the initial data pull and include React Router |
| Header    |          This will render the header include the nav          |
| Footer    |          This will render the header include the nav          |

Time frames are also key in the development cycle. You have limited time to code all phases of the game. Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component        | Priority | Estimated Time | Time Invetsted | Actual Time |
| ---------------- | :------: | :------------: | :------------: | :---------: |
| Adding Form      |    H     |      3hrs      |     3.5hrs     |   3.5hrs    |
| Working with API |    H     |      3hrs      |     2.5hrs     |   2.5hrs    |
| Total            |    H     |      6hrs      |      5hrs      |    5hrs     |

## Additional Libraries

Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc.

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description. Code snippet should not be greater than 10 lines of code.

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```
