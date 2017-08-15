# Matrix Monstruosa

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.0.

## Roadmap

- Search: Partial text matching.
- Search: Filters, ranges, sliders, etc.

- Monsters: CRUD interface.
- Monsters: Forking Variants.
- Monsters: Pairing suggestions from Collections.
- Monsters: URL Routing to individual monsters.

- Collections: Add/Remove monsters to/from Collections.
- Collections: Save Collections to User.
- Collections: URL Routing to user collections.

- API: Roll20 integration.
- API: Archives of Nethys integration.
- API: The Homebrewery integration.

## Known Issues

- The database does not populate a monster's spells known or spells prepared. This is due to an error in the [scraper developed by aarongarrett](https://github.com/aarongarrett/inspired.roll20).

## Developer Notes

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
