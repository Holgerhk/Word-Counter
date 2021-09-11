const input = document.querySelector("textarea");
const time = document.querySelector(".time-box");
const container = document.querySelector(".info-container");

let check = true;

function getData() {
    if (check === true) {
        getTime();
        check = false;
    }
}

function getTime() {
    let sec = 50;
    let min = 0;

    setInterval(() => {
        if (sec < 59) {
            sec++;
            time.innerHTML = `
            <p class="time">${min}:${sec}</p>
            `;
        } else if (sec === 59) {
            min++;
            sec = 0;
            time.innerHTML = `
            <p class="time">${min}:${sec}</p>
            `;

            const data = document.querySelector("textarea").value;
            const realData = data.split(" ");

            const div = document.createElement("div");
            div.classList.add("info-box");

            div.innerHTML = `
                    <p class="min">${min} min</p>
                    <p class="words">${realData.length} words</p>
            `;

            container.appendChild(div);
        }
    }, 1000);
}

input.addEventListener("input", getData);