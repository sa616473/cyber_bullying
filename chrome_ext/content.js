// Function to extract visible text from the webpage
function extractText() {
    const tags = ['span', 'p', 'a', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'li'];
    const textArray = [];
  
    tags.forEach(tag => {
      const elements = document.getElementsByTagName(tag);
      Array.from(elements).forEach(element => {
        const text = element.textContent.trim();
        if (text) {
          textArray.push(text);
        }
      });
    });
    // console.log(textArray)
    return textArray;
  }
  
  
//   // Send extracted text to the background script
chrome.runtime.sendMessage({ action: 'analyzeText', data: extractText() });
  
//   // Listen for messages from the background script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'highlightText') {
      let elements = document.body.getElementsByTagName('*');
      for (let element of elements) {
        if (element.children.length === 0 && element.textContent.trim() !== '') {
          let text = element.textContent.trim();
          if (request.data[text] && request.data[text].toxicity > 0.5) {
            element.style.backgroundColor = 'red';
          }
        }
      }
    }
  });
  