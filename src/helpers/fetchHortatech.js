
const fetchHortatech = async (category) => {
  const response = await fetch(`/api/getTrustyData?category=${category}`, {
    method: 'GET'
  });
  //console.log("fetchHortatech response", response);
  const retrievedJSON = await response.json();
  return retrievedJSON;
};

export default fetchHortatech;