# react-with-rails-starter
This is a starter kit for react and rails. this will or will not be update so be mindful of versions being used at the time of creating this app.

```
node - v12.14.1
Rails - 6.0.2.1
ruby - 2.5.1p57 (2018-03-29 revision 63029) [x86_64-darwin19]
yarn - v1.21.1
react - "^16.13.0",
react-dom - "^16.13.0",
react-scripts - "3.4.0"
```

reference:
https://dpl.neolms.com/teacher_lesson/show/1559495?lesson_id=6848106&section_id=21269813

## Steps used to setup this project if cloned
> !!!!! if you cloned this repo follow these instructions

- clone repo
- cd in to project
  ```
  $ bundle
  $ rails db:create db:migrate db:seed
  $ bundle exec rails s -p 3001
``` 

- cd into project/client
```
  $ yarn
  $ yarn start
```

>you should be running at this point. localhost:3000 will be your react app and localhost:3001 will be your server

## Steps used to setup this project (if starting from scratch)
> !!!!! if you cloned this repo you don't need to repeat these, also note if you start from scratch the dependencies from above don't need to match

### rails setup 
```
rails new react-with-rails-starter -d postgresql --api
cd react-with-rails
rails db:create
rails g controller api/things  --skip-routes
rails g model thing name 
rails db:migrate
```
- look in `things_controller to see CRUD actions`

### ad routes
>config/routes.rb
```
namespace :api do
  resources :things
end
```

### react setup
>In our root directory of our Rails application we will create a React application called client.
```
yarn create react-app client
cd client
yarn add axios  //must be in client folder
```

look at App.js to see how axios app is made

in client/package.json add a proxy
```javascript
....
"proxy": "http://localhost:3001",
"scripts": {
  ....
```

- in your rails project directory run 
`bundle exec rails s -p 3001`


- in client folder in your rails project directory run
`yarn start` 


>you should be running at this point




