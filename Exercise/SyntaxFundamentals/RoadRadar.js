function solve(speed, area) {
    const speedLimits = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    };

    const currentSpeedLimit = speedLimits[area];
    const speedOverLimit = speed - currentSpeedLimit;
    let typeSpeed;

    if (speedOverLimit > 40) {
        typeSpeed = 'reckless driving';
    } else if (speedOverLimit > 20) {
        typeSpeed = 'excessive speeding'
    } else {
        typeSpeed = 'speeding';
    }

    if (speedOverLimit <= 0) {
        console.log(`Driving ${speed} km/h in a ${currentSpeedLimit} zone`);
    } else {
        console.log(`The speed is ${speedOverLimit} km/h faster than the allowed speed of ${currentSpeedLimit} - ${typeSpeed}`);
        
    }
}

solve(200, "motorway");