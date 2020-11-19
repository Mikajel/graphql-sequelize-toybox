## Running the app
### To run the database container:
```$ docker run -p 3306:3306 -t --name vestberry-mariadb --env MYSQL_ALLOW_EMPTY_PASSWORD=true --env MYSQL_DATABASE=library  mariadb:latest```

### To run the app:
```$ yarn start```

### To seed the data:
```$ cd $PROJECT_DIR/src/database/```

```$ npx sequelize-cli db:seed:all```

### App is now served on <href>http://localhost:8000/graphql</href>

## Issues
1. babel-cli is at 7.x.x in package-json but ^6.x.x is demanded?
2. direct book/genre->author reference (only one author/genre) rather than N-to-N mapping (author/genre is not a part of the history)
