import React from "react";
import FormInput from "./components/formInput";
import TodoItem from "./components/TodoItem";
import EditModal from "./components/editModal";

import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Sholat Shubuh Berjamaah"
      },
      {
        id: 2,
        title: "Baca Quran"
      }
    ],
    isEdit: false,
    editData: {
      id: "",
      title: ""
    }
  };

  setTitle = (e) => {
    this.setState({
      editData: {
        ...this.state.editData,
        title: e.target.value
      }
    });
  };

  openModal = (id, data) => { // Reverted back to openModal
    this.setState({
      isEdit: true,
      editData: {
        id,
        title: data
      }
    });
  };

  closeModal = () => {
    this.setState({
      isEdit: false
    });
  };

  deleteTask = (id) => {
    alert("Data Dihapus...");
    this.setState({
      todos: this.state.todos.filter((item) => item.id !== id)
    });
  };

  addTask = (data) => {
    alert("Data Ditambahkan...");
    const id = this.state.todos.length;
    const newData = {
      id: id + 1,
      title: data
    };

    this.setState({
      todos: [...this.state.todos, newData]
    });
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="app">
        <div className="logo">
          <img src={logo} alt="logo" />
          <h3>Task List</h3>
        </div>
        <div className="list">
          {todos.map((item) => (
            <TodoItem
              key={item.id}
              todo={item}
              del={this.deleteTask}
              edit={this.openModal}
            />
          ))}
        </div>
        <div className="input-form">
          <FormInput add={this.addTask} />
        </div>
        <EditModal
          edit={this.state.isEdit}
          close={this.closeModal}
          change={this.setTitle}
          data={this.state.editData}
        />
      </div>
    );
  }
}

export default App;
