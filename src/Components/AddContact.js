import React from "react";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="ui main"
        style={{
          backgroundImage: `url("data:image/jpeg;base64,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
          ")`
        }}>
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
