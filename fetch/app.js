const api_url = "https://randomuser.me/api/"; 
async function getUser() { 
    
    // Making an API call (request) 
    // and getting the response back 
    const response = await fetch(api_url); 
    
    // Parsing it to JSON format 
    const data = await response.json(); 
    console.log(data.results); 
}