const weatherContainer = document.getElementById("weatherContainer");
const tempC= document.getElementById("tempC");
const tempf = document.getElementById("tempf");
const DammamBtn = document.getElementById("DammamBtn");
const cairoBtn = document.getElementById("cairoBtn");
const parisBtn = document.getElementById("parisBtn");
const londonBtn = document.getElementById("londonBtn");
const city = document.getElementById("city");

async function buttons() {
    
    const apiUrl = `https://tatbeqak.site/apps/tatbeqey/apps/projects/test_api/getTemperature?location=${DammamBtn.Value}&location=${cairoBtn.Value}&location=${parisBtn.Value}&location=${londonBtn.Value}`

        const response = await fetch(apiUrl);

    const data = await response.json();

    const status = data.status;
}