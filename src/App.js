import './App.css';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import Header from './components/Header';
import Filter from './components/Filter';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App m-10">
      <Header/>
      <AddTask/>
      <Filter/> 
      <TaskList/>
    </div>
  );
}

export default App;
