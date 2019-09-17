# ExampleProjectAltimi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Task description
This project contains example data source in `assets/data.json`.
This file has simple tree based data structure.

Example project includes already service which accesses data from the file and displays it in simple way in HTML template.
Task for developer is to **implement simple tree view module & component** which will:
* Take data structure from existing service (or from input)
* Define proper type definitions for data, which service method will be able to return - currently it uses unknown type
* Display tree data in proper tree structure - you can use any CSS/SCSS framwework
* Do not use ready to use libraries or UI components - the tree should be created by you
* You can divide tree component into smaller parts if that will work for you
* Bonus points if the tree nodes will hide/expand its children on click
