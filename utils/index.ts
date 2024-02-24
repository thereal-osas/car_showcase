export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "017c29be58mshee1ad54d6c6cafep181b2djsn4e0ef78c4068",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
    {
      headers: headers,
    }
  );

  const result = await response.json();

  return result;
}
