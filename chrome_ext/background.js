chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'analyzeText') {
        console.log(request.data)
      fetch('http://localhost:3000/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ texts: request.data })
      })
      .then(response => response.json())
      .then(data => {
        // Send the analysis results back to the content script
        chrome.tabs.sendMessage(sender.tab.id, { action: 'highlightText', data: data });
        console.log(data)
      })
      .catch(error => console.error('Error:', error));
    }
  });
  