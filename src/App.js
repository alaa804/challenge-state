import React from "react";
import './App.css';



class App extends React.Component {

state ={
  todos:[ { text:"Go To school", id: 0, isDone:false},
          { text:"Go To GoMyCode", id: 1, isDone:true},
],
   newText: "",

};

handleAdd = (text) => {
  if  (text.trim() === ""){
    return alert("Invalid Task");
  }
const newTodo = {text: text, id:Date.now(), isDone:false };

this.setState({todos: [...this.state.todos, newTodo] });
this.setState({ newText: ""});

} ;



handleComplete = index => 
this.setState({todos:this.state.todos.map((todo) =>
  todo.id===index ? {...todo , isDone: !todo.isDone } : todo ) });


removeToDo = (index) => 
this.setState({ 
  todos: this.state.todos.filter((todo) => todo.id !==index),
 });

 handleChange = (event) => this.setState({newText : event.target.value })
     



render() {
      return (
      <div className="App">
        <form onSubmit={(e) =>e.preventDefault() }>
          <input 
          value={this.state.newText}
          type="text" onChange = { (event) => this.setState({newText : event.target.value })} />
          <button onClick={ ()=>this.handleAdd (this.state.newText) } >Add</button>
        </form>
       <div className="todo-list">
      
       {this.state.todos.map((el) =>(  
       <div key={el.id} className="todo-card">
         <p className={el.isDone ? "done" : "" } >{el.text}</p>
         <div>
           <button onClick={() => this.removeToDo(el.id) } >Delete</button>
           <button onClick={() => this.handleComplete(el.id)}> { el.isDone ? "Undo" : "complete" }</button>
         </div>
         </div>
          ))}



        

       </div>
        </div>
      );

}

}

export default App;
