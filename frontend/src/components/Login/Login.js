import React, { Component } from "react";
import { connect } from "react-redux";

import { requestLoginAC } from "../../redux/actions";

class Login extends Component {
  state = {
    message: ""
  };

  handleSubmit = event => {
    event.preventDefault();

    const user = JSON.stringify({
      password: event.target.password.value,
      email: event.target.email.value
    });
    this.props.loginUser(user);
    window.location = "/";
  };
  render() {
    return (
      <>
        <h1>Вход в профиль</h1>
        <div>
          <form onSubmit={this.handleSubmit}>
            <p>
              <label>Email</label>
              <input name="email" type="email" required></input>
            </p>
            <p>
              <label>Пароль</label>
              <input name="password" type="password" required></input>
            </p>
            <p>
              <button type="submit">Отправить</button>
            </p>
            <p>{this.state.message}</p>
          </form>
        </div>
      </>
    );
  }
}

function mapStateToProps(store) {
  return {
    message: store.message
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loginUser: user => dispatch(requestLoginAC(user))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
