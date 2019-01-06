## Resilient Email Sender

This projects lets you send emails using a web ui form
The backend initially tries to send email via sendgrid and falls back to mail gun.

This project is a react front end with express back end

### Before you start
Populate your own .env file in the /server directory, it has been omitted from the public git repo for security reasons.

Run `make install-dependencies` before trying to run either the client or the server

## Available Scripts

Before you start development please run `make install-dependencies` to automatically run npm install for the client and server

In the project directory, you can run:

### `make install-dependencies`
Installs dependencies for the client and the server, run this before running anything else

### `make dev` 

Runs the client in dev mode and starts the server.

Use this for development purposes only, if you wish to run production first build the react app and modify express to serve static html

## `dev-server`

Runs the client in non production ready mode, no live reloading included, please add if you wish.

If you wish to run in production make sure to set `NODE_ENV` environment variable to `production`

## `dev-client`

Runs the client in development mode, live reloading included thanks to `create-react-app`
