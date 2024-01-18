document.addEventListener("DOMContentLoaded", function () {
    const trafficLight = document.querySelector('.traffic-light');
    const lights = trafficLight.querySelectorAll('.light');
    let currentLight = 0; 

    function changeLight() {
 
        lights.forEach(light => light.classList.remove('active'));

        lights[currentLight].classList.add('active');

        currentLight = (currentLight + 1) % lights.length;
    }

    setInterval(changeLight, 2000);

    lights[currentLight].classList.add('active');
});