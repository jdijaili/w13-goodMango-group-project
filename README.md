## GoodMango

GoodMango is an online social platform, for members interested in Mangas, inspired by [Goodreads](https://www.goodreads.com/). On the website, you can read, review, and research different types of mangas. 

Here, you can find your favorite manga: [GoodMango](https://goodmango.herokuapp.com/)

### Welcome View 

![welcome]

### Browse Mangas

![browsemangas]

### Manga Bookshelves

![mangabookshelves]

### Manga Details

![manga-details]

### Database Schema 

![database-schema]

## Features

- Create an account 
- Log in/out and demo user
- Read important details of mangas 
- Search mangas with different genres 
- Logged in users can add bookshelves to view a collection of mangas
- Logged in users can add reviews to mangas


## Installation

  1. Clone the repository ```git clone https://github.com/jdijaili/w13-goodMango-group-project.git```
  2. Install necessary dependencies for node.js ```npm install```
  3. Create a database called `good_mango`
  4. Set password as 'password' or any password. *Note: make sure it is the same password as the one in the .env file variables*
  5. Create a new env file. Use `.env.example` as a reference.
  6. Run migrations and seed data: ` npx dotenv sequelize db:migrate ` && `npx dotenv sequelize db:seed:all `
  7. Start the server: `npm start`

## Techologies Used 

- JavaScript
- Express
- Git 
- Pug
- CSS
- BCrypt
- Heroku
- Sequelize
- PostgreSQL

## Documentation Links
- [Documentation Home Page](https://github.com/jdijaili/w13-goodMango-group-project)
- [API Documentation](https://github.com/jdijaili/w13-goodMango-group-project/wiki/API-Documentation)
- [Database Schema](https://github.com/jdijaili/w13-goodMango-group-project/wiki/Database-Schema)
- [Frontend Routes](https://github.com/kvh8899/week13-project/wiki/Frontend-Routes)
- [MVP Feature List](https://github.com/jdijaili/w13-goodMango-group-project/wiki/Frontend-Routes)
- [User Stories](https://github.com/jdijaili/w13-goodMango-group-project/wiki/User-Stories)

## Contributors

- [Jennifer Dijaili](https://github.com/jdijaili)
- [Vivian Thach](https://github.com/bobaguardian)
- [James Chen](https://github.com/jameschen56)
- [Andres Soca](https://github.com/DevDre783)


[welcome]: ./images/welcome.png
[browsemangas]: ./images/browsemangas.png
[mangabookshelves]: ./images/mangabookshelves.png
[manga-details]: ./images/manga-details.png
[database-schema]: ./images/database-schema.png