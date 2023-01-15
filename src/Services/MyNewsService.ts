import axios from 'axios';

export default class MyNewsService {
    //  !! News API
    // static getData(){
    //     return axios.get("https://newsapi.org/v2/everything?q=all&apiKey=9d797eb7548e4c8b901ec5b1566af163");
    // }
    // static getCategoryData(category: string){
    //     return axios.get(`https://newsapi.org/v2/top-headlines?category=${category}&apiKey=9d797eb7548e4c8b901ec5b1566af163`);
    // }
    // !! Dev Portal API
    static getCategoryData(category: string){
        return axios.get(`https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=XBtrrnpA0GCNGWLtSJMNMNSIVePYOqMP`);
    }
};