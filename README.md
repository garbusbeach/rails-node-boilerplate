# Rails with Node boilerplate
> This is a boilerplate for a Rails app with Node.js. It gives easy possibility to separate frontend app code and develop it independently, but leaves Rails for backend API, server side rendering and whole application.

## How it works
Majority of node modules are not working properly with ruby asset bundlers (like importmap). If you would like to have separated front-end code with back-end, but share files like `.env` or some directories this is perfect solution. You can write your Rails app like regular (also having some FE on Rails side), but leave little or main part of front-end app to Node. Node is bundling your front-end code from `/frontend` directory to single `application.js` and `application.css` files in rails assets directory (`/app/assets/build`). This way you can use `javascript_include_tag` and have easy served front-end code, without any additional configuration.

Default js framework is vue, but it can be easily changed to any other one like React or Angular (check `/frontend/build.js`).

## Setup
1. `bundle install` - install ruby gems and rails dependencies
2. `cd frontend && npm install` - install frontend dependencies

## Development
1. `bin/dev` - running automatically rails and node for bundling js / css, watching changes

## Preparing for production
1. `cd frontend && npm run build:production` - builds all frontend dependencies once
2. Deploy to production server as regular Rails app

## Can I use it?
Of course! - do with it whatever you want. However I would be glad if you could give me a message - that can show me this project is worth to be developed and maintained.

Garbus Beach © 2022;
