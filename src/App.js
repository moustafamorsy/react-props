import Profile from './profile/profile'
import './App.css';
import photo from './photo.jpeg';

function App() {

  function  HandleName(prop) {

  return alert(`this is ${prop} profile`)

  }


  
  return (


    <div className="App">
    
    <Profile 

       data = {HandleName}

      FullName = 'Mostafa' 

      bio = '27 years and i love progrmaing' 

     profession = 'Full stack web developer MERN'
    >
  
<img style={{width: 300  , height:300 }} src = {photo} alt="preson" />

     </Profile>

   
    
  


    </div>
  );
}

export default App;
