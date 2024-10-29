document.addEventListener('DOMContentLoaded', () => getFetchApi(URL));

URL="https://api.open-meteo.com/v1/forecast?latitude=46.516&longitude=6.6328&hourly=temperature_2m&forecast_days=1"

async function getFetchApi(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log(data);
    ListOfTemperature(data);
  } catch (error) {
    console.error('Fetch error:', error);
  }
};

const weatherList = document.getElementById("weather-list");
let allList = "";

function ListOfTemperature(data) {
  weatherList.innerHTML ="";
  console.log('hey')
  data.hourly.time.forEach(hour => { 
  
    data.hourly.temperature_2m.forEach(temp => {
      allList += `<div class="col-sm-12 col-md-6 col-lg-4">  
          <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="./img/sunny.svg" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                 
                </div>
              </div>
            </div>
          </div>
        </div> `        
    });    
  });
  
  return weatherList.insertAdjacentHTML('beforeend',allList);
}

