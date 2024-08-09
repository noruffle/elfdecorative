export default async function fetchData(path, setData) {
  try {
    
    const response = await fetch(`http://localhost:8000/${path}`);
    const data = await response.json();
    setData(data.message);
  
  } catch (error) {
    
    console.error('Error fetching the message:', error);
    
  } 
}