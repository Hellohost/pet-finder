import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class FindMatchesFound extends Component {
  state = {
    guesses: []
  };

  async componentDidMount() {
    const response = await fetch("/api/matches/found", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ id: this.props.match.params.id })
    });
    if (response.status === 200) {
      const result = await response.json();
      this.setState({ guesses: result });
    } else {
      console.log("error: ", response);
    }
  }

  renderGuesses(advert) {
    const date = new Date(advert.createdAt);
    return (
      <div className="card cardList" key={advert._id}>
        <img alt="dog" src={"/api/images/" + advert.dogData.image}></img>
        <div>
          <b>Порода: </b>
          {advert.dogData.breed}
        </div>
        <div>
          <b>Пол: </b>
          {advert.dogData.sex}
        </div>
        {/* <div>
          {advert.dogData.description.length > 30
            ? advert.dogData.description.slice(0, 30) + "..."
            : advert.dogData.description}
        </div> */}
        <div>
          <b>Нашедший: </b>{advert.authorData.name}, {advert.authorData.email}
        </div>
        {/* <div>{advert.authorData.name},</div>
        <div>{advert.authorData.email}</div>
        <div>{advert.authorData.phoneNumber}</div> */}
        <div>
          <b>Дата объявления: </b>
          {date.toLocaleDateString("ru")}
        </div>

        <Link className="btn btn-primary" to={"/advert/lost/" + advert._id}>
          Перейти к объявлению
        </Link>
      </div>
    );
  }

  render() {
    return (
      <div className="matches-found">
        <h1>Найденные совпадения:</h1>
        <ul>
          {this.state.guesses.length > 0 ? (
            this.state.guesses.map(advert => this.renderGuesses(advert))
          ) : (
            <h2>Извините, совпадений нет.</h2>
          )}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    foundDogsList: store.foundDogsList,
    lostDogsList: store.lostDogsList
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(FindMatchesFound);
