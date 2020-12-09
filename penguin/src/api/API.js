const getData= async ()=>{
    const response = await fetch('data.json');
    const data = await response.json();
    return data;
}
const getHtmlData= async ()=>{
    const response = await fetch('cleaned_data.json');
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
export {
  getData,
  getHtmlData,
  getRandomQuote,
}
