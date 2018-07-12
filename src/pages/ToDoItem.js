// 
// import React, {Component} from 'react';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import SimpleSelect from '../components/SimpleSelect/SimpleSelect'
//
//
// export default class ToDoItem extends Component {
//   constructor(props) {
//        super(props);
//        this.state = {
//          todos: [],
//          count: 0
//        };
//        this.removeTodo = this.removeTodo.bind(this);
//        this.addTodo = this.addTodo.bind(this)
//       this.upToDo = this.upToDo.bind(this)
//
//    }
//
//
//   render(props) {
//     return (
//       <div>
//       {
//         this.props.todos.map(function(todo, i) {
//           return (
//             <li data-id={i} key={i}>
//             <div>
//             <Paper >
// >              <SimpleSelect/>
//               <div className='deleteButton'>
//                 <button onClick={() => {
//                     this.removeItem(this.props.todos, i)
//                   }}>
//                   <li>
//                   {todo.id}
//                   </li>
//                 </button>
//               </div>
//
//             </Paper>
//             </div>
//             </li>
//
//           )
//         }, this)
//       }
//       </div>
//     )
//   }
// }
