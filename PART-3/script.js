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
    "STEADY PSYCHADELIC": "/Users/haz/Documents/CORE 2 Interaction/PART-3/STEADY-PSYCHADELIC.gif",
    "STEADY CHATHARTIC": "/Users/haz/Documents/CORE 2 Interaction/PART-3/STEADY-CHATHARTIC.gif",
    "STEADY PANIC": "/Users/haz/Documents/CORE 2 Interaction/PART-3/STEADY-PANIC.gif",
    "STEADY BITTER": "/Users/haz/Documents/CORE 2 Interaction/PART-3/STEADY-BITTER.gif",
    "PSYCHADELIC STEADY": "/Users/haz/Documents/CORE 2 Interaction/PART-3/PSYCHADELIC-STEADY.gif",
    "PSYCHADELIC CHATHARTIC": "/Users/haz/Documents/CORE 2 Interaction/PART-3/PSYCHADELIC-CHATHARTIC.gif",
    "PSYCHADELIC PANIC": "/Users/haz/Documents/CORE 2 Interaction/PART-3/PSYCHADELIC-PANIC.gif",
    "PSYCHADELIC BITTER": "/Users/haz/Documents/CORE 2 Interaction/PART-3/PSYCHADELIC-BITTER.gif", 
    "CHATHARTIC STEADY": "/Users/haz/Documents/CORE 2 Interaction/PART-3/CHATHARTIC-STEADY.gif",
    "CHATHARTIC PSYCHADELIC": "/Users/haz/Documents/CORE 2 Interaction/PART-3/CHATHARTIC-PSYCHADELIC.gif",
    "CHATHARTIC PANIC": "/Users/haz/Documents/CORE 2 Interaction/PART-3/CHATHARTIC-PANIC.gif",
    "CHATHARTIC BITTER": "/Users/haz/Documents/CORE 2 Interaction/PART-3/CHATHARTIC-BITTER.gif",        
    "PANIC PSYCHADELIC": "/Users/haz/Documents/CORE 2 Interaction/PART-3/PANIC-PSYCHADELIC.gif",
    "PANIC CHATHARTIC": "/Users/haz/Documents/CORE 2 Interaction/PART-3/PANIC-CHATHARTIC.gif",
    "PANIC STEADY": "/Users/haz/Documents/CORE 2 Interaction/PART-3/PANIC-STEADY.gif",
    "PANIC BITTER": "/Users/haz/Documents/CORE 2 Interaction/PART-3/PANIC-BITTER.gif",        
    "BITTER STEADY": "/Users/haz/Documents/CORE 2 Interaction/PART-3/BITTER-STEADY.gif",
    "BITTER PSYCHADELIC": "/Users/haz/Documents/CORE 2 Interaction/PART-3/BITTER-PSYCHADELIC.gif",
    "BITTER CHATHARTIC": "/Users/haz/Documents/CORE 2 Interaction/PART-3/BITTER-CHATHARTIC.gif",
    "BITTER PANIC": "/Users/haz/Documents/CORE 2 Interaction/PART-3/BITTER-PANIC.gif",
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
  
  



