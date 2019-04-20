import React, { Component } from "react";

class FormEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      poster: "",
      comment: ""
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submitForm(e) {
    e.preventDefault();
  }

  render() {
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    };

    const url = "http://campus-bordeaux.ovh:3001/api/quests/movies/";
    fetch(url, config)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          alert(res.error);
        } else {
          alert(`Film ajouté avec l'ID ${res}!`);
        }
      })
      .catch(e => {
        console.error(e);
        alert("Erreur lors de l'ajout d'un film");
      });


    return (
      <div className="FormEmployee">
        <h1>Saisie d'un film</h1>

        <form >
          <fieldset>
            <legend>Informations</legend>
            <div className="form-data">
              <label htmlFor="movieName">Nom</label>
              <input
                type="text"
                id="movieName"
                name="movieName"
              />
            </div>

            <div className="form-data">
              <label htmlFor="poster">Poster</label>
              <input
                type="text"
                id="poster"
                name="poster"
              />
            </div>

            <div className="form-data">
              <label htmlFor="comment">Commentaire</label>
              <input 
                type="text area"
                id="comment"
                name="comment"
              />
            </div>
            <hr />
            <div className="form-data">
              <input onSubmit={this.submitForm} type="submit" value="Envoyer"/>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default FormEmployee;
