
import axios from "axios";
require("dotenv").config();

export default {
  // Gets all saved dates
  saveDates: function(dateData) {
    return axios.post("/api/dates", dateData, {"Authorization": localStorage.getItem('jwtToken') });
  },
  
  // Gets a saved date with the given id
  getSavedDates: function() {
    return axios.get("/api/dates"); 
  },

  getUserInfo : function(){
    return axios.get("/api/dates/getinfo")
  },
  
  deleteUser: function(){
    return axios.delete("/api/dates/deleteUser")
  },

  // Deletes the saved date with the given id
  deleteDate: function(id) {
    return axios.delete("/api/dates/" + id);
  },

  // Saves a user to the database


  //retrieves a recipe from our external api
  getRecipe : function(query){
    const RECIPE_API = "11fc0e368f94746dc17947610fa5ac19";
     return axios.get("https://www.food2fork.com/api/search?key="+RECIPE_API+"&q="+query);
  },

  //retrieves a movie from our external api
  getMovie : function(query){
    const MOVIE_API = "&apikey=trilogy";
     return axios.get("https://cors-anywhere.herokuapp.com/"+ "https://www.omdbapi.com/?t="+query+MOVIE_API);
  },

  //retrieves a restaurant location from our external api
  getRestaurant : function(type) {
     const YOUR_API_KEY = "AIzaSyDFpd-2EoMstvbarr8ywlER8dEv2nzfQhY"; //Google API
    return axios.get("https://cors-anywhere.herokuapp.com/"+
      "https://maps.googleapis.com/maps/api/place/textsearch/json?query="+type+
        "+restaurants+in+Denver&key="+YOUR_API_KEY);
  },

  //feed user query into google api and pull back related hiking points of interest
  getCoordinates : function(queryCity) {
    const YOUR_API_KEY = "AIzaSyDFpd-2EoMstvbarr8ywlER8dEv2nzfQhY";
    return axios.get("https://cors-anywhere.herokuapp.com/"+
      "https://maps.googleapis.com/maps/api/place/textsearch/json?query=hiking+in+"+queryCity+"&key="+YOUR_API_KEY);

  }
};

  