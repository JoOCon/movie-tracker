## Movie-Tracker

This Project makes asynchronous fetch calls in order to draw film data from [The Movie DB API](https://www.themoviedb.org/documentation/api "The Movie DB API") and post user account information to a back-end built in node.js and a postgres database. It utilizes the React-Redux library to create a diverse component layout as well as React-Router to establish dynamic routing. Additional tools include [classnames](https://www.npmjs.com/package/classnames "classnames") and [react-star-ratings](https://www.npmjs.com/package/react-star-ratings "react-star-ratings") node packages. This program was tested with the assistance of the Jest and Enzyme libraries and features SCSS for styling purposes.

### Collaborators

[Joel O'Connor](https://github.com/JoOCon "Joel O'Connor")
[Tim Fischer](https://github.com/TFisch "Tim Fischer")

### Installation Instructions

* git clone https://github.com/TFisch/movie-tracker
* cd movie-tracker
* cd movie-tracker-be
* npm install
* cd movie-tracker-fe
* npm install
* npm start

### Application Navigation

From the home screeen a user may select "Sign up" to create a new account or "Log in" if they are an existing user. Once information is entered the user will find themselves located at their user page. From here they can select favorites by clicking the heart icon and view the star rating of each film by hovering over it. By clicking the "Favorites" button the user can view the list of selected films.

### Screenshots

![on-page-load](src/Images/screen-login.png)  

![on-page-load](src/Images/screen-user.png) 

![on-page-load](src/Images/screen-favorite.png)  
