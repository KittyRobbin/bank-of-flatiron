import './App.css';
import NewItemForm from './components/NewItemForm'
import SearchForm from './components/SearchForm';
import Transactions from './components/Transaction';
// import "semantic-ui-css"

function App() {
  return (
    <div className="ui raise segment">
      <div className='header-text'>
        <h2>Flatrion Bank</h2>
      </div>
      <SearchForm/>
      <NewItemForm/>
      <Transactions/>
      
    </div>
  );
}

export default App;
