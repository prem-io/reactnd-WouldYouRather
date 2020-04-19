# Would You Rather

### A Game developed using React & Redux

'Would You Rather' is a quiz based game which allows user to login, post questions and also poll to a question posted by other users. The project emphasizes using React & Redux to build the application. Redux store is used to persist information as we interact with the application and also helps in easy access to the store data in any component.

## Prerequisites

To install this project onto your machine and run it. You require Node.js installed in your system.
To install node.js, navigate to [Node.js](https://nodejs.org/en/download/) and install. The Node.js installer includes the NPM package manager.

## Installation Procedure

```bash

git clone https://github.com/prem-io/reactnd-WouldYouRather.git
cd reactnd-WouldYouRather

```
- install all project dependencies with `npm install` or `yarn install`
- start the development server with `npm start` or `yarn start`

A new browser window should automatically open displaying the app. If it doesn't, navigate to http://localhost:3000/ in your browser

## Features of the project

- Login & Logout
- Navigation Bar
- Home Screen (Question Page w/ Answered and Unanswered category)
- Poll View - Poll Screen is available at `/questions/:id` user can poll to respective question
- Result View - Result Screen is available at `/questions/:id` user can view results of people votes to that question
- New Question Form - This form provides user ability to create new poll. It is available at `/add`
- Leaderboard - Leaderboard is available at `/leaderboard`. List of users arranged in the descending order of their score. The individual score is calculated as sum of total questions answered and total questions asked by user.
  
## What You're Getting

```bash

├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
├── ├── assets
│   └── index.html
└── src
    ├── actions
    │   ├── authUser.js
    │   ├── questions.js
    │   ├── shared.js
    │   └── users.js
    ├── components
    │   ├── App.js
    │   ├── AppHeader.js
    │   ├── ImageCard.js
    │   ├── LeadCard.js
    │   ├── Login.js
    │   ├── NewQuestionForm.js
    │   ├── NotFound.js
    │   ├── Poll.js
    │   ├── QueCard.js
    │   ├── QuePreview.js
    │   ├── QueQuetion.js
    │   ├── QueResult.js
    │   ├── Questions.js
    │   └── app.css # Component Style Sheet
    ├── middleware
    │   └── index.js # Redux middlewares
    ├── reducers
    │   ├── authUser.js
    │   ├── index.js # Root Reducer
    │   ├── questions.js
    │   └── users.js
    ├── utils
    │   ├── _DATA.js
    │   └── api.js
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

Remember that good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed.

## Backend Server

The `_DATA.js` file represents a fake database and methods that let you access the data. The only thing you need to edit in the ` _DATA.js` file is the value of `avatarURL`. Each user should have an avatar, so you’ll need to add the path to each user’s avatar.

Using the provided starter code, you'll build a React/Redux front end for the application. We recommend using the [Create React App](https://github.com/facebook/create-react-app) to bootstrap the project.

## Data

There are two types of objects stored in our database:

* Users
* Questions

### Users

Users include:

| Attribute    | Type             | Description           |
|-----------------|------------------|-------------------         |
| id                 | String           | The user’s unique identifier |
| name          | String           | The user’s first name  and last name     |
| avatarURL  | String           | The path to the image file |
| questions | Array | A list of ids of the polling questions this user created|
| answers      | Object         |  The object's keys are the ids of each question this user answered. The value of each key is the answer the user selected. It can be either `'optionOne'` or `'optionTwo'` since each question has two options.

### Questions

Questions include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id                  | String | The question’s unique identifier |
| author        | String | The author’s unique identifier |
| timestamp | String | The time when the question was created|
| optionOne | Object | The first voting option|
| optionTwo | Object | The second voting option|

### Voting Options

Voting options are attached to questions. They include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| votes             | Array | A list that contains the id of each user who voted for that option|
| text                | String | The text of the option |

Your code will talk to the database via 4 methods:

* `_getUsers()`
* `_getQuestions()`
* `_saveQuestion(question)`
* `_saveQuestionAnswer(object)`

1) `_getUsers()` Method

*Description*: Get all of the existing users from the database.  
*Return Value*: Object where the key is the user’s id and the value is the user object.

2) `_getQuestions()` Method

*Description*: Get all of the existing questions from the database.  
*Return Value*: Object where the key is the question’s id and the value is the question object.

3) `_saveQuestion(question)` Method

*Description*: Save the polling question in the database.  
*Parameters*:  Object that includes the following properties: `author`, `optionOneText`, and `optionTwoText`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| author | String | The id of the user who posted the question|
| optionOneText| String | The text of the first option |
| optionTwoText | String | The text of the second option |

*Return Value*:  An object that has the following properties: `id`, `author`, `optionOne`, `optionTwo`, `timestamp`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id | String | The id of the question that was posted|
| author | String | The id of the user who posted the question|
| optionOne | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option|
| optionTwo | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option|
|timestamp|String | The time when the question was created|

4) `_saveQuestionAnswer(object)` Method

*Description*: Save the answer to a particular polling question in the database.
*Parameters*: Object that contains the following properties: `authedUser`, `qid`, and `answer`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| authedUser | String | The id of the user who answered the question|
| qid | String | The id of the question that was answered|
| answer | String | The option the user selected. The value should be either `"optionOne"` or `"optionTwo"`|

## Resources and Documentation

* [Create-react-app Documentation](https://github.com/facebook/create-react-app)
* [Redux Documentation](https://redux.js.org/)
* [React Router Documentation](http://knowbody.github.io/react-router-docs/)
* [Official Ant Design React Integration](https://ant.design/docs/react/introduce)
* [Project starter template](https://github.com/udacity/reactnd-project-would-you-rather-starter)
* [Project Rubric](https://review.udacity.com/#!/rubrics/1567/view)
* [Royalty Free Icons](https://www.flaticon.com/)

