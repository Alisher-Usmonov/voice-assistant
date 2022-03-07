let talkBtn = document.getElementById("talk-btn");
let content = document.getElementById("content");

let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new SpeechRecognition();
recognition.lang = 'en-US';

recognition.onstart = () => {
    content.textContent = "💬💬💬💬";
    console.log("Recognition has been started");
}
recognition.onresult = (event) => {
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    answerSpeech(transcript)
}

talkBtn.addEventListener("click", () => {
    recognition.start();
})

function answerSpeech(text) {
    let speech = new SpeechSynthesisUtterance();
    speech.volume = 1;
    speech.lang = "en-US"
    speech.rate = 0.9;
    if(text.includes("hi") || text.includes("hello")) {
        speech.text = "Hello";
    } else if(text.includes("how are you")) {
        speech.text = "I am great!";
    } else {
        speech.text = "I don't understand. Please tell back"
    }
    speechSynthesis.speak(speech);
}