// calculateStylePoints.js
const calculateStylePoints = (styleNotes) => {
    let minNote = Math.min(...styleNotes);
    let maxNote = Math.max(...styleNotes);
    let sumNotes = 0;

    for ( i = 0; i < styleNotes.length; i++) {
        sumNotes = sumNotes + styleNotes[i];
    }
    return sumNotes - (maxNote + minNote);
  };
  
  module.exports = calculateStylePoints;