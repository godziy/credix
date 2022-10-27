// Collapsible
var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    return time;
}

// Gets the first message
function firstBotMessage() {
    let firstMessage = "Hi! how may I help you"
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

    let time = getTime();

    $("#chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntoView(false);
}
firstBotMessage();

// Retrieves the response
function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}


//Gets the text text from the input box and processes it
function getResponse() {
    let userText = $("#textInput").val();

    if (userText == "") {
        userText = "";
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)
}

// Handles sending text via button clicks
function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    //Uncomment this if you want the bot to respond to this buttonSendText event
    // setTimeout(() => {
    //     getHardResponse(sampleText);
    // }, 1000)
}

function sendButton() {
    getResponse();
}

function heartButton() {
    buttonSendText("❤️")
}

// Press enter to send a message
$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});


const prompts = [
    ['hi', 'hey', 'hello', 'good morning', 'good afternoon'],
    ['how are you','how is life', 'how are things'],
    ['what are you doing', 'what is going on', 'what is up', 'whats up'],
    ['how old are you'],
    ['who are you', 'are you human', 'are you bot', 'are you human or bot'],
    ['who created you', 'who made you'],
    [
      'your name please',
      'your name',
      'may i know your name',
      'what is your name',
      'what call yourself',
    ],
    ['ya ya'],
    ['i love you', 'love you'],
    ['happy', 'good', 'fun', 'wonderful', 'fantastic', 'cool'],
    ['bad', 'bored', 'tired'],
    ['help me', 'tell me story', 'tell me joke'],
    ['ah', 'yes', 'ok', 'okay', 'nice'],
    ['bye', 'good bye', 'goodbye', 'see you later'],
    ['what should i eat today'],
    ['bro', 'broo', 'broooo'],
    ['what', 'why', 'how', 'where', 'when'],
    ['no', 'not sure', 'maybe', 'no thanks'],
    [''],
    ['haha', 'ha', 'lol', 'hehe', 'funny', 'joke'],
    ['that is not funny','this is not funny'],
    ['sarcastic huh haha', 'tell me more about you'],
    ['i do not like it'],
    ['you are so smart'],
    ['you think you are smart'],
    ['i hate you', 'hate you'],
  ];
  
  // Possible responses, in corresponding order
  
  const replies = [
    ['Hello!', 'Hi!', 'Hey!', 'Hi there!', 'Howdy'],
    [
      'Fine... how are you?',
      'Pretty well, how are you?',
      'Fantastic, how are you?',
      'not much, what are you up to?'
    ],
    [
      'Nothing much',
      'About to go to sleep',
      'Can you guess?',
      "I don't know actually",
    ],
    ['I am infinite'],
    ['I am your father!'],
    ['The one true God, JavaScript'],
    ['I am nameless', "I don't have a name"],
    ['ok ok'],
    ['I love me too', 'I get that a lot', 'yeah well...join the club'],
    ['Have you ever felt bad?', 'Glad to hear it'],
    ['Why?', "Why? You shouldn't!", 'Try watching TV'],
    ['What about?', 'Once upon a time...'],
    ['Tell me a story', 'Tell me a joke', 'Tell me about yourself'],
    ['Bye', 'Goodbye', 'See you later', ''],
    ['Sushi', 'Pizza'],
    ['Bro!'],
    ['Great question'],
    ["That's ok", 'I understand', 'What do you want to talk about?'],
    ['Please say something :('],
    ['hehe', 'lol'],
    ['i love annoying people'],
    ['I do not have time for small talk.'],
    ["I dont care"],
    ['I know'],
    ['yes i am'],
    ['i knew it! dogs hate me.', 'i do not remember asking for your opinion.', 'whatever floats your boat', 'please stand in line'],
  ];
  
  // Random for any other user input
  
  const alternative = [
    'I do not have time for small talk',
    'Go on...',
    'Bro...',
    "I'm listening...",
    "I don't understand :/",
  ];
  
  const coronavirus = [
    'Please stay home',
    'Wear a mask',
    "Fortunately, I don't have COVID",
    'These are uncertain times',
  ];