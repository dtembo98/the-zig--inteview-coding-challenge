import React from "react";
import MovieList from "../../components/movie-list/movie-list.component";
import Header from "../header/header.component";
//import SearchBox from "../../components/search-box/search-box.component";
import { config } from "../../config";
import LoadMoreButton from "../../components/loadmore button/loadmore.component";
import "./home.style.css";
class Home extends React.Component {
  state = {
    movies: [],
    heroimage: {},
    searchField: "",
    currentPage: 0,
  };
  componentDidMount() {
    //check for local storage browser support
    if (typeof Storage !== undefined) {
      if (localStorage.getItem("homeState")) {
        // retrieve items from local storage
        const homeState = JSON.parse(localStorage.getItem("homeState")!);

        this.setState({ ...homeState });
      }
    }
    const API_URL = `${config.BASE_URL}popular/?&page=1`;

    this.fetchData(API_URL);
  }
  // fetch data from the moviedb api
  fetchData = (API_URL: string) => {
    fetch(API_URL)
      .then((results) => results.json())
      .then((data) => {
        this.setState(
          {
            movies: [...this.state.movies, ...data.results],
            heroimage: data.results[1],
            currentPage: data.page,
          },
          () => {
            // check for browser support for local storage and set the state in local storage
            if (typeof Storage !== undefined) {
              localStorage.setItem("homeState", JSON.stringify(this.state));
            }
            console.log(this.state.movies);
          }
        );
      });
  };
  // method for passing the url to fetch data from the api
  fetchMovie = () => {
    let API_URL = "";

    if (this.state.searchField) {
      API_URL = `${config.BASE_URL}search?&query=${this.state.searchField}`;
    } else {
      API_URL = `${config.BASE_URL}popular/?&page=1`;
    }
    this.fetchData(API_URL);
  };
  componentWillUnmount() {
    localStorage.clear();
  }
  //get the entered chareacter as the user types in the search bar
  handleChange = (event: any) => {
    const query: string = event.target.value;
    this.setState(
      {
        movies: [],
        heroimage: {},
        searchField: query,
      },
      () => this.fetchMovie()
    );
  };
  // method to implement the load more button functionality
  loadMore = () => {
    let API_URL: string = "";

    if (this.state.searchField === "") {
      API_URL = `${config.BASE_URL}popular/?&page=${
        this.state.currentPage + 1
      }`;
    } else {
      API_URL = `${config.BASE_URL}search?&query=${this.state.searchField}`;
    }

    this.fetchData(API_URL);
  };
  render() {
    return (
      <div className="home">
        <Header
          heroimage={this.state.heroimage}
          handleChange={this.handleChange}
        />
        {/* <SearchBox handleChange={this.handleChange} /> */}
        {this.state.searchField ? (
          <h2 className="title">Search Results</h2>
        ) : (
          <h2 className="title">Popular movies</h2>
        )}
        <MovieList movies={this.state.movies} />
        <LoadMoreButton onclick={this.loadMore} />
      </div>
    );
  }
}

export default Home;
