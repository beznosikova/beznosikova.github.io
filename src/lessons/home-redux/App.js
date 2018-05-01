import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

class App extends Component {
  state = {
    activeEditId: null,
    activeEditTitle: null
  };
  render() {
    const { data, handleClick = () => {}, onDelete = () => {}, onEdit = () => {} } = this.props;
    const {activeEditId, activeEditTitle} = this.state;

    return (
      <div className="container">
        <input name="name" ref={el => (this.input = el)} />
        <button
          onClick={() => {
            handleClick(this.input.value);
            this.input.value = "";
          }}
        >
          Save
        </button>
        <ul>
          {data.map((i, key) => (
            <li key={i.id}>
              {activeEditId !== key && (
                <div>
                  {i.title} 
                  <small>{` \[${new Date(i.id).toLocaleString()}\]`}</small>
                </div>
                )}
              {activeEditId === key && 
                <input 
                  value={activeEditTitle} 
                  onChange ={e=>{this.setState({activeEditTitle:e.target.value});}}/> }
              <button 
                onClick={() => this.setState({
                  activeEditId: (activeEditId === key) ? null : key,
                  activeEditTitle: i.title

                })}>
                {activeEditId === key ? 'Undo': 'Edit' }
              </button>
              {activeEditId === key && 
                <button onClick={() => {onEdit(key, activeEditTitle); this.setState({'activeEditId':null, activeEditTitle:null});}}>Save</button>}
              <button onClick={() => onDelete(key)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({
    data: state
  }),
  dispatch => ({
    handleClick: value =>
      dispatch({
        type: "ADD_TRACK",
        payload: {
          title: value,
          id: new Date().valueOf()
        }
      }),
    onDelete: id =>
      dispatch({
        type: "DELETE_TRACK",
        payload: id
      }),
    onEdit: (id, newValue) =>
      dispatch({
        type: "EDIT_TRACK",
        payload: {
          id: id,
          title: newValue
        }
      })    
  })
)(App);
