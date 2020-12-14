const getData = async ()=>{
    const response = await fetch('data.json');
    const data = await response.json();
    return data;
}
const getHtmlData = async ()=>{
    const response = await fetch('http://localhost:8000/api/command_list/'); //FOR LOCAL DEV
    //const response = await fetch('cleaned_data.json');  JSON DATA
    //take cors anywhere off once in production and add cors to whitelist in django settings
    // const response = await fetch('https://cors-anywhere.herokuapp.com/https://penguinbackend.herokuapp.com/api/command_list/');
    const data = await response.json();
    return data;
}
const getHtmlDataByCommand = async (command)=>{
    const response = await fetch(`http://localhost:8000/api/commandview/${command}/`); //FOR LOCAL DEV
    //const response = await fetch('cleaned_data.json'); #JSON DATA
    //take cors anywhere off once in production and add cors to whitelist in django settings
    // const response = await fetch(`https://cors-anywhere.herokuapp.com/https://penguinbackend.herokuapp.com/api/commandview/${command}/`);
    const data = await response.json();
    return data;
}
const getRandomQuote = async () => {
  const response = await fetch('http://quotes.stormconsultancy.co.uk/random.json');
  const data = await response.json();
  return data;
}
// const getAsciiArt = async (text) = {
//   const response = await fetch(`https://artii.herokuapp.com/make?text=linux+rules`)
// }

const getAllFavorites = async ()=>{
    const response = await fetch('http://localhost:8000/api/favorites_list/'); //FOR LOCAL DEV
    const data = await response.json();
    return data;
}

export {
  getData,
  getHtmlData,
  getRandomQuote,
  getHtmlDataByCommand,
  getAllFavorites,
}
