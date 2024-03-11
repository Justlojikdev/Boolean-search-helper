// Function to generate a Boolean string based on the provided keywords
function generateBooleanString(andKeywords, orKeywords) {
    let andString = andKeywords.split(' ').filter(Boolean).map(word => `"${word}"`).join(' AND ');
    let orString = orKeywords.split(' ').filter(Boolean).map(word => `"${word}"`).join(' OR ');
  
    // Combining the strings based on user input
    let booleanString = '';
    if (andString && orString) {
      booleanString = `(${andString}) AND (${orString})`;
    } else if (andString) {
      booleanString = andString;
    } else if (orString) {
      booleanString = orString;
    }
  
    return booleanString;
  }
  
  // Listening for a message from the popup
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'generateBooleanString') {
      const booleanString = generateBooleanString(request.andKeywords, request.orKeywords);
  
      // Respond with the generated Boolean string
      sendResponse({message: booleanString});
  
      // To allow async sendResponse, return true from the event listener.
      return true;
    }
  });
  