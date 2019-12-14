const calculateDistancePoints = (distance, hillSize, kPoint) => {
    let startPoints, pointsForMeter;

    switch(hillSize) {
        case 'normal':
            startPoints = 60;
            pointsForMeter = 2;
            break;
        case 'large':
            startPoints = 60;
            pointsForMeter = 1.8;
            break;
        case 'mammoth':
            startPoints = 120;
            pointsForMeter = 1.2
            break;
    }
    if (((hillSize === 'normal') || (hillSize === 'large') || (hillSize ==='mammoth')) && (!isNaN(distance)) && (!isNaN(kPoint)) && (distance !== null) && (kPoint !== null) && (distance !== ' ') && (kPoint !== ' ')) {
        return (
            startPoints + (pointsForMeter * (distance - kPoint))
        )
    }
}
    


  module.exports = calculateDistancePoints;