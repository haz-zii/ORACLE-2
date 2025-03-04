document.addEventListener('DOMContentLoaded', () => {
    const input1 = document.getElementById("wordInput1");
    const input2 = document.getElementById("wordInput2");
    const options = document.querySelectorAll('.option');
  
    options.forEach(option => {
      option.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData("text", option.textContent);
      });
  
      option.addEventListener('click', () => {
        if (input1.value === '') {
          input1.value = option.textContent;
        } else if (input2.value === '') {
          input2.value = option.textContent;
        } else {
          input1.value = option.textContent;
        }
      });
    });
  
    [input1, input2].forEach(input => {
      input.addEventListener('dragover', (e) => {
        e.preventDefault();
      });
  
      input.addEventListener('drop', (e) => {
        e.preventDefault();
        const droppedText = e.dataTransfer.getData("text");
        input.value = droppedText;
      });
    });
});
    
const imageDictionary = {
    "STEADY PSYCHADELIC": "STEADY-PSYCHADELIC.gif",
    "STEADY CHATHARTIC": "STEADY-CHATHARTIC.gif",
    "STEADY PANIC": "STEADY-CHATHARTIC.gif",
    "STEADY BITTER": "STEADY-BITTER.gif",
    "PSYCHADELIC STEADY": "PSYCHADELIC-STEADY.gif",
    "PSYCHADELIC CHATHARTIC": "PSYCHADELIC-CHATHARTIC.gif",
    "PSYCHADELIC PANIC": "PSYCHADELIC-PANIC.gif",
    "PSYCHADELIC BITTER": "PSYCHADELIC-BITTER.gif", 
    "CHATHARTIC STEADY": "CHATHARTIC-STEADY.gif",
    "CHATHARTIC PSYCHADELIC": "CHATHARTIC-PSYCHADELIC.gif",
    "CHATHARTIC PANIC": "CHATHARTIC-PANIC.gif",
    "CHATHARTIC BITTER": "CHATHARTIC-BITTER.gif",        
    "PANIC PSYCHADELIC": "PANIC-PSYCHADELIC.gif",
    "PANIC CHATHARTIC": "PANIC-CHATHARTIC.gif",
    "PANIC STEADY": "PANIC-STEADY.gif",
    "PANIC BITTER": "PANIC-BITTER.gif",        
    "BITTER STEADY": "BITTER-STEADY.gif",
    "BITTER PSYCHADELIC": "BITTER-PSYCHADELIC.gif",
    "BITTER CHATHARTIC": "BITTER-CHATHARTIC.gif",
    "BITTER PANIC": "BITTER-PANIC.gif",
  };
  
  function displayImage() {
    const input1 = document.getElementById("wordInput1").value.trim();
    const input2 = document.getElementById("wordInput2").value.trim();
    
    if (!input1) {
      console.warn("Please enter at least one word.");
      return;
    }
    
    let key = input1.toUpperCase();
    if (input2) {
      key = `${input1.toUpperCase()} ${input2.toUpperCase()}`;
    }
    
    if (!imageDictionary[key] && input2) {
      const reverseKey = `${input2.toUpperCase()} ${input1.toUpperCase()}`;
      if (imageDictionary[reverseKey]) {
        key = reverseKey;
      }
    }
    
    const filePath = imageDictionary[key];
    if (!filePath) {
      console.warn("Image not found for the given input combination.");
      return;
    }
    
    const imgElement = document.getElementById("displayedImage");
    imgElement.src = filePath;
    imgElement.style.display = "block";
}
  
  



