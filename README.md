# About this PoC

Demonstrating a CAP application with a VUE front end that uses social login in the form of Github logon using Passport as middleware, and a custom CAP authorisation function. 

## To replicate

You'll need a Github oAuth app, please use [this](https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app) helpful document to create one. For Homepage URL, enter `http://localhost:4004`, and for authorisation callback URL, enter `http://localhost:4004/auth/github/callback`.

After that, copy the client ID, secret and callback URL into the provided `.env.example` and rename it to `.env`. 

If you do not run this project under port 4004, you have to adjust the paths used in your oAuth app. 

## The intention

The intention of this proof of concept is to prove that custom authentication works and that CAP can integrate with practical and production ready authorisation platforms other than XSUAA. 

This app demonstrates that, if the Github session cookie is not present, all actions on the CAP service are rejected with a 401. Once the oAuth dance is completed, the user can proceed. 

## Disclaimer

This app does not store any user information, nor is any information about you collected. It is a local project only for development and demonstration purposes. 