const input = document.querySelector("textarea");
const time = document.querySelector(".time-box");
const big_container = document.querySelector(".container");
const text_to_write = document.querySelector(".text-box-to-write");
const container = document.querySelector(".info-container");
const after_right_word_container = document.querySelector(".after-right-word-container");
const after_wrong_word_container = document.querySelector(".after-wrong-word-container");
const btn_container = document.querySelector(".btn-container");
const ten_btn = document.querySelector("#first-btn");
const fifthteen_btn = document.querySelector("#second-btn");
const thirty_btn = document.querySelector("#third-btn");
const one_btn = document.querySelector("#fourth-btn");

let check = true;
const allWords = ["Far", "far", "away,", "behind", "the", "word", "mountains,", "for", "from", "the",
"countries", "Vokalia", "and", "Consonantia,", "there", "live", "the", "blind", "texts.", "Separated",
"they", "live", "in", "Bookmarksgrove", "right", "at", "coast", "of", "the", "Semantics,", "a", "large."];

// one minute function

function getDataOneMinute() {
    if (check === true) {
        getTime();
        check = false;
    }
}

function getTime() {
    let sec = 0;
    let min = 0;

    setInterval(() => {
        if (sec < 59) {

            if (sec < 9) {
                sec++;
                time.innerHTML = `
                <p class="time">0${min}:0${sec}</p>
                `;
            } else {
                sec++;
                time.innerHTML = `
                <p class="time">0${min}:${sec}</p>
                `;
            }

        } else if (sec === 59) {

            min++;
            if (min < 9) {
                sec = 0;
                time.innerHTML = `
                <p class="time">0${min}:0${sec}</p>
                `;
            } else {
                sec = 0;
                time.innerHTML = `
                <p class="time">${min}:0${sec}</p>
                `;
            }

            let correctWords = [];
            let wrongWords = [];
            const data = document.querySelector("textarea").value;
            const realData = data.split(" ");
            const sentence = data.split(".");
            const words = data.split(" ");
            
            words.forEach(word => {
                switch (word) {
                    case allWords[0]:
                        correctWords.push(word)
                        break;
                    
                    case allWords[1]:
                        correctWords.push(word)
                        break;
                    
                    case allWords[2]:
                        correctWords.push(word)
                        break;

                    case allWords[3]:
                        correctWords.push(word)
                        break;
                    
                    case allWords[4]:
                        correctWords.push(word)
                        break;
                        
                    case allWords[5]:
                        correctWords.push(word)
                        break;
                        
                    case allWords[6]:
                        correctWords.push(word)
                        break;
    
                    case allWords[7]:
                        correctWords.push(word)
                        break;

                    case allWords[8]:
                        correctWords.push(word)
                        break;
                        
                    case allWords[9]:
                        correctWords.push(word)
                        break;
                        
                    case allWords[10]:
                        correctWords.push(word)
                        break;
    
                    case allWords[11]:
                        correctWords.push(word)
                        break;
                        
                    case allWords[12]:
                        correctWords.push(word)
                        break;
                            
                    case allWords[13]:
                        correctWords.push(word)
                        break;
                            
                    case allWords[14]:
                        correctWords.push(word)
                        break;
        
                    case allWords[15]:
                        correctWords.push(word)
                        break;

                    case allWords[16]:
                        correctWords.push(word)
                        break;
                        
                    case allWords[17]:
                        correctWords.push(word)
                        break;
                        
                    case allWords[18]:
                        correctWords.push(word)
                        break;
    
                    case allWords[19]:
                        correctWords.push(word)
                        break;
                        
                    case allWords[20]:
                        correctWords.push(word)
                        break;
                            
                    case allWords[21]:
                        correctWords.push(word)
                        break;
                            
                    case allWords[22]:
                        correctWords.push(word)
                        break;
        
                    case allWords[23]:
                        correctWords.push(word)
                        break;
                
                    case allWords[24]:
                        correctWords.push(word)
                        break;
                        
                    case allWords[25]:
                        correctWords.push(word)
                        break;
                        
                    case allWords[26]:
                        correctWords.push(word)
                        break;
    
                    case allWords[27]:
                        correctWords.push(word)
                        break;
                        
                    case allWords[28]:
                        correctWords.push(word)
                        break;
                            
                    case allWords[29]:
                        correctWords.push(word)
                        break;
                            
                    case allWords[30]:
                        correctWords.push(word)
                        break;
        
                    case allWords[31]:
                        correctWords.push(word)
                        break;

                    default:
                        wrongWords.push(word)
                        break;
                }
            });

            let correctFullWords = correctWords.join("/");
            let wrongFullWords = wrongWords.join("/");
            console.log(correctWords);
            console.log(wrongWords);
            console.log(correctFullWords);
            console.log(wrongFullWords);
            
            // create boxes

            after_right_word_container.innerHTML = `
                <div class="after-right-word">
                    <h1>These are the words you got right</h1>
                    <p class="text-right-word">${correctFullWords}</p>
                </div>
            `;

            after_wrong_word_container.innerHTML = `
                <div class="after-wrong-word">
                    <h1>These are the words you got Wrong</h1>
                    <p class="text-wrong-word">${wrongFullWords}</p>
                </div>
            `;

            const div = document.createElement("div");
            div.classList.add("info-box");

            div.innerHTML = `
                    <p class="min">${min} min</p>
                    <p class="sentence">${sentence.length - 1} sectences</p>
                    <p class="words">${realData.length} words</p>
            `;

            container.appendChild(div);
        }
    }, 1000);
}

one_btn.addEventListener("click", () => {
    buttonHandler();
    input.addEventListener("input", getDataOneMinute);
});

// 30 seconds function

function getDataThirtySeconds() {
    if (check === true) {
        getTimeThirty();
        check = false;
    }
}

function getTimeThirty() {
    let sec = 0;
    let min = 0;

    setInterval(() => {
        if (sec < 59) {

            if (sec < 9) {
                sec++;
                time.innerHTML = `
                <p class="time">0${min}:0${sec}</p>
                `;
            } else if (sec === 29 || sec === 58) {
                sec++;
                time.innerHTML = `
                <p class="time">00${min}:${sec}</p>
                `;

                let correctWords = [];
                let wrongWords = [];
                const data = document.querySelector("textarea").value;
                const realData = data.split(" ");
                const sentence = data.split(".");
                const words = data.split(" ");
            
                words.forEach(word => {
                    switch (word) {
                        case allWords[0]:
                            correctWords.push(word)
                            break;
                    
                        case allWords[1]:
                            correctWords.push(word)
                            break;
                    
                        case allWords[2]:
                            correctWords.push(word)
                            break;

                        case allWords[3]:
                            correctWords.push(word)
                            break;
                    
                        case allWords[4]:
                            correctWords.push(word)
                            break;
                        
                        case allWords[5]:
                            correctWords.push(word)
                            break;
                        
                        case allWords[6]:
                            correctWords.push(word)
                            break;
    
                        case allWords[7]:
                            correctWords.push(word)
                            break;

                        case allWords[8]:
                            correctWords.push(word)
                            break;
                        
                        case allWords[9]:
                            correctWords.push(word)
                            break;
                        
                        case allWords[10]:
                            correctWords.push(word)
                            break;
    
                        case allWords[11]:
                            correctWords.push(word)
                            break;
                        
                        case allWords[12]:
                            correctWords.push(word)
                            break;
                            
                        case allWords[13]:
                            correctWords.push(word)
                            break;
                            
                        case allWords[14]:
                            correctWords.push(word)
                            break;
        
                        case allWords[15]:
                            correctWords.push(word)
                            break;

                        case allWords[16]:
                            correctWords.push(word)
                            break;
                        
                        case allWords[17]:
                            correctWords.push(word)
                            break;
                        
                        case allWords[18]:
                            correctWords.push(word)
                            break;
    
                        case allWords[19]:
                            correctWords.push(word)
                            break;
                        
                        case allWords[20]:
                            correctWords.push(word)
                            break;
                            
                        case allWords[21]:
                            correctWords.push(word)
                            break;
                            
                        case allWords[22]:
                            correctWords.push(word)
                            break;
        
                        case allWords[23]:
                            correctWords.push(word)
                            break;
                
                        case allWords[24]:
                            correctWords.push(word)
                            break;
                        
                        case allWords[25]:
                            correctWords.push(word)
                            break;
                        
                        case allWords[26]:
                            correctWords.push(word)
                            break;
    
                        case allWords[27]:
                            correctWords.push(word)
                            break;
                        
                        case allWords[28]:
                            correctWords.push(word)
                            break;
                            
                        case allWords[29]:
                            correctWords.push(word)
                            break;
                            
                        case allWords[30]:
                            correctWords.push(word)
                            break;
        
                        case allWords[31]:
                            correctWords.push(word)
                            break;

                        default:
                            wrongWords.push(word)
                            break;
                }
            });

                let correctFullWords = correctWords.join("/");
                let wrongFullWords = wrongWords.join("/");
                console.log(correctWords);
                console.log(wrongWords);
                console.log(correctFullWords);
                console.log(wrongFullWords);
            
                // create boxes

                after_right_word_container.innerHTML = `
                    <div class="after-right-word">
                        <h1>These are the words you got right</h1>
                        <p class="text-right-word">${correctFullWords}</p>
                    </div>
                `;

                after_wrong_word_container.innerHTML = `
                    <div class="after-wrong-word">
                        <h1>These are the words you got Wrong</h1>
                        <p class="text-wrong-word">${wrongFullWords}</p>
                    </div>
                `;

                const div = document.createElement("div");
                div.classList.add("info-box");

                div.innerHTML = `
                        <p class="min">${sec} sec</p>
                        <p class="sentence">${sentence.length - 1} sectences</p>
                        <p class="words">${realData.length} words</p>
                `;

                container.appendChild(div);

            } else {
                sec++;
                time.innerHTML = `
                <p class="time">0${min}:${sec}</p>
                `;
            }

        } else if (sec === 59) { 

            min++;
            if (min < 9) {
                sec = 0;
                time.innerHTML = `
                <p class="time">0${min}:0${sec}</p>
                `;
            } else {
                sec = 0;
                time.innerHTML = `
                <p class="time">${min}:0${sec}</p>
                `;
            }
        }
    }, 1000);
}

thirty_btn.addEventListener("click", () => {
    buttonHandler();
    input.addEventListener("input", getDataThirtySeconds);
});

const buttonHandler = () => {
    btn_container.classList.add("clicked");
    big_container.classList.remove("closed-container");
    text_to_write.classList.remove("closed-container");
};

ten_btn.addEventListener("click", () => {
    buttonHandler();
});

fifthteen_btn.addEventListener("click", () => {
    buttonHandler();
});