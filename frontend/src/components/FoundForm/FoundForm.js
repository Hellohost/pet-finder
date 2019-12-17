import React, { Component } from "react";
import { connect } from "react-redux";

import { createFoundAdvertAC } from "../../redux/actions";
import Maps from "../Maps/Maps";

class FoundForm extends Component {
  state = {};
  handleImageUpload = event => {
    event.preventDefault();
    const imgData = new FormData();
    imgData.append("file", event.target.imgInput.files[0]);
    this.setState({ imgData });
  };
  handleSubmit = event => {
    event.preventDefault();

    const {
      dogBreed,
      dogDescription,
      dogSex,
      locationLat,
      locationLng
    } = event.target;

    const request = {
      method: "POST",
      body: this.state.imgData
    };

    if (this.state.imgData) {
      fetch("/api/images/", request)
        .then(response => response.json())
        .then(data => {
          const advert = JSON.stringify({
            dogData: {
              breed: dogBreed.value,
              description: dogDescription.value,
              sex: dogSex.value,
              image: data.filename
            },
            location: { lat: locationLat.value, lng: locationLng.value },
            id: this.props.user._id
          });
          this.props.createFoundAdvert(advert);
        });
    } else {
      const advert = JSON.stringify({
        dogData: {
          breed: dogBreed.value,
          description: dogDescription.value,
          sex: dogSex.value,
          image: "placeholder.jpg"
        },
        location: { lat: locationLat.value, lng: locationLng.value },
        id: this.props.user._id
      });
      this.props.createFoundAdvert(advert);
    }
  };

  getLocation = location => {
    document.getElementById("location-input-lat").value = location.lat;
    document.getElementById("location-input-lng").value = location.lng;
  };

  render() {
    return (
      <div>
        <div>{this.props.message}</div>
        <form
          id="found-form"
          onSubmit={this.handleSubmit}
          encType="multipart/form-data"
        >
          <label htmlFor="dog-breed">Порода:</label>
          <input
            onChange={this.handleInput}
            name="dogBreed"
            id="dog-breed"
            type="text"
            required
          />

          <label htmlFor="dog-description">Описание:</label>
          <input
            onChange={this.handleInput}
            name="dogDescription"
            id="dog-description"
            type="text"
            required
          />

          <label htmlFor="dog-sex">Пол:</label>
          <input
            onChange={this.handleInput}
            name="dogSex"
            id="dog-sex"
            required
          />

          <input
            id="location-input-lat"
            name="locationLat"
            hidden
            required
          ></input>
          <input id="location-input-lng" name="locationLng" hidden></input>

          <button>Submit</button>
        </form>
        <form onSubmit={this.handleImageUpload}>
          <input type="file" name="imgInput" />
          <button>Добавить картинку</button>
        </form>
        <Maps getLocation={this.getLocation} />
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    user: store.user,
    message: store.message
  };
}

const mapDispatchToProps = dispatch => {
  return {
    createFoundAdvert: advert => dispatch(createFoundAdvertAC(advert))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FoundForm);
