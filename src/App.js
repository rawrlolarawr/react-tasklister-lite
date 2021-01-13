import './App.css'
import Header from './components/Header.js'
import TodoContainer from './containers/TodoContainer.js'

function App() {
  return (
    <div id="App">
      <Header title='Task Lister Lite™' />
      <TodoContainer />
    </div>
  );
}

export default App;
