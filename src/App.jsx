import {useState} from 'react';
import axios from 'axios';  

function App(){
  const [fact, setFact] = useState(''); 
  const [error, setError] = useState(null);
    
  const handleSubmit = async (event) => {
    event.preventDefault(); // stops page refresh after submit/ search
    setError(''); // clear errors
    
    try { // try the following...
      const response = await axios.get('https://catfact.ninja/fact');
      setFact(response.data.fact);
    } catch (error) { // otherwise if an error occurs, try the following...
      setError('Failed to fetch fact. Try again.');
    } 
  };

  return (
    <div>
      <form onSubmit={handleSubmit}> 
       <button type="submit">Get Cat Fact</button> 
     </form> 
     {fact && <p>{fact}</p>} 
     {error && <p style={{ color: 'red' }}>{error}</p>} 
   </div> 
  );
}

export default App;