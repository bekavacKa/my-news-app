import axios from 'axios';

export default class MyNewsService {
    static getData(){
        return axios.get("https://newsapi.org/v2/everything?q=bitcoin&apiKey=9d797eb7548e4c8b901ec5b1566af163");
    }
    static getCategoryData(category: string){
        return axios.get(`https://newsapi.org/v2/top-headlines?category=${category}&apiKey=9d797eb7548e4c8b901ec5b1566af163`);
    }
};