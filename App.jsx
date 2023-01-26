function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <
    <button id="start-button">Početak</button>
    <button id="stop-button" style="display:none">Stop</button>
    <div id="popup"></div>
    <div id="timer" style="display:none"></div>
    <div id="input-container" style="display:none">
      <form>
        <label for="word-input">Unesi riječ</label>
        <input type="text" id="word-input">
        <button type="submit" id="submit-button">Potvrdi</button>
      </form>
    </div>

    <script>
      let startButton = document.getElementById("start-button");
      let stopButton = document.getElementById("stop-button");
      let popup = document.getElementById("popup");
      const timer = document.getElementById("timer");
      let inputContainer = document.getElementById("input-container");
      let wordInput = document.getElementById("word-input");
      let submitButton = document.getElementById("submit-button");
      const letters = "abcdefghijklmnopqrstuvwxyz";
      let intervalId;
      let randomLetters;

      startButton.addEventListener("click", function() {
        stopButton.style.display = "inline";
        intervalId = setInterval(function() {
          randomLetters = "";
          for (let i = 0; i < 5; i++) {
            randomLetters += letters[Math.floor(Math.random() * letters.length)];
          }
          popup.innerHTML = randomLetters;
        }, 100);
      });

      stopButton.addEventListener("click", function() {
        clearInterval(intervalId);
        stopButton.style.display = "none";
        timer.style.display = "block";
        inputContainer.style.display = "block";

        const seconds = 30;
        let intervalId = setInterval(function() {
          timer.innerHTML = "Preostalo vrijeme:" + seconds + " sekundi";
          seconds--;
          if (seconds < 0) {
            clearInterval(intervalId);
            timer.innerHTML = "Vrijeme isteklo!";
            inputContainer.style.display = "none";
            wordInput.value = "";
          }
        }, 1000);

        submitButton.addEventListener("click", function(event) {
          event.preventDefault();
          let word = wordInput.value;
          if (checkWord(word)) {
            alert("Pronašli ste riječ!");
          } else {
            alert("Niste upotrebili slova");
          }
          wordInput.value = "";
        });
        submitButton.addEventListener("click", function(event) {
          event.preventDefault();
          let word = wordInput.value;
          if (checkWord(word)) {
            alert("Pronašli ste riječ!");
            console.log("Broj korištenih slova: " + word.length);
          } else {
            alert("Niste upotrebili slova");
          }
          wordInput.value = "";
        });
      });

      function checkWord(word)
      {
for (let i = 0; i < word.length; i++) {
if (randomLetters.indexOf(word[i]) === -1) {
return false;
}
}
return true;
}
</script>
      </header>
    </div>
  );
}

export default App;
