import People from './components/people/people';
import './App.css';

//functional component that will be rendered to the 'index.html' file in the public folder
function App() {
  return (
    <div>
       <People/>
      <footer> Source of information : Forbes </footer>
    </div>
  );
}

export default App;
