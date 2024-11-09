# Angular18 InMemoryWebApiModule

```js
npm i angular-in-memory-web-api 
```

> InMemoryWebApiModule does provide a mock API by intercepting HTTP requests made by the Angular application.

1 - Interception of HTTP Requests: It catches HTTP requests directed to your backend (like GET, POST, PUT, DELETE) and instead routes them to an in-memory database defined in your AppData class.

2 - Mock Data Response: The AppData service implements InMemoryDbService and provides a createDb method, which returns a set of mock data collections (similar to tables in a database). When a component makes an HTTP request, it retrieves data from these collections.

3 - API-like Behavior: The module simulates a real API by supporting CRUD operations (Create, Read, Update, Delete), allowing you to test different scenarios in your app without needing a real server or database. You can specify options like delay to mimic network latency, adding realism to the development environment.

---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
