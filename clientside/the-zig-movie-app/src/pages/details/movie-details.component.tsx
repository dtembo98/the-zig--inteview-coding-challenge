import * as React from "react";
import "./movie-details.style.css";
import { withRouter } from "react-router";
import { config } from "../../config";
import MovieInfo from "../../components/movie-info/movie-info.component";
import Actors from "../../components/actors/actors-list.component";
type propTypes = {
  match: any;
  location: any;
  history: any;
};

class MovieDetails extends React.Component<propTypes> {
  state = {
    movie: [],
    actors: [],
    directors: [],
  };
  componentDidMount() {
    const movieid = this.props.match.params.movieid;
    //const API_URL = `${config.BASE_URL}${movieid}?api_key=${config.API_KEY}&language=en-US&page=1}`;
    const API_URL = `${config.BASE_URL}${movieid}`;
    fetch(API_URL)
      .then((results) => results.json())
      .then((data) => {
        this.setState({ movie: data }, () => console.log(this.state));
      });
    //fetch movie credits

    const credits_endpoint = `${config.BASE_URL}credits/${movieid}`;
    fetch(credits_endpoint)
      .then((results) => results.json())
      .then((data) => {
        const directors = data.crew.filter(
          (member: any) => member.job === "Director"
        );
        this.setState(
          {
            directors,
            actors: [...data.cast],
          },
          () => console.log(this.state)
        );
      });
  }

  render() {
    return (
      <div className="details-page">
        <MovieInfo movie={this.state.movie} directors={this.state.directors} />
        <h2>Cast</h2>
        <Actors cast={this.state.actors} />
      </div>
    );
  }
}
export default withRouter(MovieDetails);
