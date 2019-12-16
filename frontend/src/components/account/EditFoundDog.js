import React, { Component } from 'react';
import axios from "axios"


export default class EditFoundDog extends Component {
  constructor(props) {
    super(props);

    this.onChangeBreed = this.onChangeBreed.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeSex = this.onChangeSex.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    // this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onSubmit = this.onSubmit.bind(this);


    this.state = {

      breed: "",
      description: "",
      sex: "",
      date: "",
      // location: "",

    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/found/' + this.props.match.params.id)
      .then(response => {
        this.setState({
          breed: response.data.dogData.breed,
          description: response.data.dogData.description,
          sex: response.data.dogData.sex,
          date: response.data.dogData.date,
          // location: response.data.location,
        })
        //   console.log(this.state);  
      })
      .catch(function (error) {
        console.log(error);
      })

  }


  onChangeBreed(e) {
    this.setState({
      breed: e.target.value
    })
  }
  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }
  onChangeSex(e) {
    this.setState({
      sex: e.target.value
    })
  }
  onChangeDate(e) {
    this.setState({
      date: e.target.value
    })
  }
  // onChangeLocation(e) {
  //     this.setState({
  //         location: e.target.value
  //     })
  // }


  onSubmit(e) {
    e.preventDefault();
    const dog = {
      breed: this.state.breed,
      description: this.state.description,
      sex: this.state.sex,
      date: this.state.date,
      location: this.state.location
    }
    console.log(dog);

    axios.post('http://localhost:5000/api/found/update/' + this.props.match.params.id, dog)
      .then(res => console.log(res.data));

    // window.location= '/'

  }



  deleteFoundDog(id) {
    axios.delete('http://localhost:5000/api/found/' + this.props.match.params.id)
      .then(response => { console.log(response.data) });

    this.setState({
      breed: "",
      description: "",
      sex: "",
      date: "",
    })
  }

  render() {
    return (
      <div>
        <h3>Редактировать данные о собаке</h3>
        <form onSubmit={this.onSubmit}>

          <div className="form-group">
            <label>Порода: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.breed}
              onChange={this.onChangeBreed}
            />
          </div>

          <div className="form-group">
            <label>Описание: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>

          <div className="form-group">
            <label>Пол: </label>
            <select value={this.state.sex}
              onChange={this.onChangeSex}>
              <option value="М">М</option>
              <option value="Ж">Ж</option>
            </select>
          </div>

          <div className="form-group">
            <label>Дата: </label>
            <input type="date"
              required
              className="form-control"
              value={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>

          {/* <div className="form-group"> 
                <label>Локация: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.location}
                    onChange={this.onChangeLocation}
                    />
              </div> */}

          <div className="form-group">
            <input type="submit" value="Редактировать" className="btn btn-primary" />
          </div>
        </form>
        <a href="#" onClick={() => { this.deleteFoundDog(this.state._id) }}>Удалить</a>
          </div>
          )
        }
      }