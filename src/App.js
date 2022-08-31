
import './App.css';
import image from'./foto.jpeg';
import { ShoppingList } from './ShoppingList';
import imageTwo from'./woman.webp';
function App() {
  return (
    <div className='app'>
      <div className='container'>
<img src={ image } width="300px" alt="shopping"/>
    </div>
     <div className='container'>
<h1>SHOPPING LIST</h1>
    </div>
    <ShoppingList/>
     <div className='container'>
     <img src={ imageTwo } width="200px" alt="woman"/>
         </div>
         </div> 
  );
}

export default App;
