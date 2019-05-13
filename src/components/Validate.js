import "../styles/Validate.css";
import React from "react";

class Validate extends React.Component {
  state = { email: "" };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.email);
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div id="form-container" className="form-container slide-left-in">
          <div className="icon-container">
            <img
              className="question-icon"
              src="./icons/mail.svg"
              alt="your email"
            />
          </div>
          <h3 className="question">Laissez nous votre email</h3>
          <h4 className="sub-question">
            (Vous recevrez notre proposition sur cette adresse)
          </h4>
          <input
            type="email"
            placeholder="steve.wozniak@apple.com"
            onChange={e => this.setState({ email: e.target.value })}
            value={this.state.email}
          />
          <button className="button" type="submit">
            Estimer Mon Produit
          </button>
        </div>
      </form>
    );
  }
}

export default Validate;
