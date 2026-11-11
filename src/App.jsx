import {useState} from 'react';
import axios from 'axios';  
import './App.css';

function App(){
  const [fact, setFact] = useState(''); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const response = await axios.get('https://catfact.ninja/fact');
      setFact(response.data.fact);
    } catch (error) {
      setError('Failed to fetch fact. Try again.');
    } finally {
      setLoading(false);
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