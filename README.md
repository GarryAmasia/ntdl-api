# Not to do api server

This is a api server for the react not to do list
The repo for react not to do list can be found here: ...

## how to use

- clone the repo `git clone ...`
- run `cd ntd-api`
- run npm install
- run npm start
  Note: you need to have nodemon installed globally, otherwise run `npm i nodemon`

All the sample api has been written in rest.http file

## APIs

All the api will follow the following URL : `{rootUrl}/api/v1/`

### Task API

All the task api will follow the following format URL : `{rootUrl}/api/v1/tasks`

| #   | API | METHOD   | DESCRIPTION                                                  |
| --- | --- | -------- | ------------------------------------------------------------ |
| 1.  | `/` | `GET`    | fetch all the task from database                             |
| 2.  | `/` | `POST`   | send new task to add in the database                         |
| 3.  | `/` | `PATCH`  | update task, i.e switch task item not to do task             |
| 4.  | `/` | `DELETE` | send single or multiple task's id(s) to delete from database |

### User API

All the user api will follow the following format URL : `{rootUrl}/api/v1/uses/`
