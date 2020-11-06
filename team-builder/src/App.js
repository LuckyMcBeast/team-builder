import './App.css';
import { useState } from 'react';
import Form from './form';

function App() {
  const [ teamMembers, setTeamMembers ] = useState(['bread', 'butter']);
  
  return (
    <div className="App">
      { (teamMembers !== []) ? teamMembers.map(member => {
          console.log(member);
          return <h2>{member}</h2>;
      })
    : <h2>Loading...</h2>
    }
    <Form/>
    </div>
  );
}

export default App;
