document.getElementById('generate').addEventListener('click', () => {
    const andKeywords = document.getElementById('andKeywords').value;
    const orKeywords = document.getElementById('orKeywords').value;
  
    // Send the keywords to the background script
    chrome.runtime.sendMessage({
      action: 'generateBooleanString',
      andKeywords: andKeywords,
      orKeywords: orKeywords
    }, response => {
      // Display the response from the background script
      document.getElementById('result').textContent = response.message;
    });
  });
  