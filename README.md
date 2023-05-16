# MyNews App
    React - TypeScript

## 🔗 Links
    Visit web application by clicking the button 
    or copy link ( https://my-news-bekavac.netlify.app/ )
[![portfolio](https://img.shields.io/badge/netlify-my_news_app-000?style=for-the-badge&logoColor=white)](https://my-news-bekavac.netlify.app/)

## HOW TO START
    1. Download or clone my-news-app repository to your computer.

    2. Open the project (folder) using the terminal
    
        2.1  Using the terminal, enter the my-news-app folder and run the command "npm i"

    3. After installation (npm i)

        3.1 3.2 Using the terminal enter the folder my-news-app and run the command "npm start"

### APP REQUIREMENTS

    Build a simple frontend application using React and Sass/SCSS. Usage of TypeScript is not required but is encouraged.

    1. The app should contain a “homepage” for all articles grouped by categories and sorted chronologically.
        1.1. “Latest news” widget must implement infinite scroll functionality.
    
    2. Each category must be clickable and lead to a “category page” where you can find all articles from that category.

    3. The app should have a search filter (by name) for the article list.

    4. The app should have a feature for bookmarking favorite articles (use app state or browser storage).
        4.1. There is no design for bookmarking the articles.
            Feel free to choose an approach you think is most useful, and be ready to explain why. 😊

            ➡️ Done in the following way ✔️
                Each card has the option of marking favorites by clicking on the heart icon
                located in the upper right corner, when the heart is filled, it means that the
                user has saved that news in favorites and that news is grouped in the favorites category.

    5. Display favorites on the “homepage” under “Favorites” category.

### RESOURCES

- [New Yourk Times API](https://developer.nytimes.com/) ✔️
- [News API](https://newsapi.org/)
- [Font](https://rsms.me/inter/)

The most difficult part of the whole task for me was deciding which API source to use. Although I tested both sources several times, I finally decided to use the [New Yourk Times API](https://developer.nytimes.com/), regardless of the fact that it does not meet all the requirements stated in the task, I still chose to use it because it turned out to be a source with more consistent data.

#### Needs further development

    ➡️ Currently, the advertising badge is displayed for all sections of the business
        category because the API data does not offer a specific category for advertising.

    ➡️ Due to the lack of data indicating breaking news, I set breaking news to be
        displayed when there is no multimedia information in the data.