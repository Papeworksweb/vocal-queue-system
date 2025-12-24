const title = document.getElementById('card-title');
const counter = document.getElementById('counter');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');
const marqueeNumber = document.getElementById('marquee-number');
let count = 0;

function Counter() {  
    counter.textContent = count;

    // marquee number
    if (marqueeNumber) marqueeNumber.textContent = count;

    // decrement & increment btn disable
    if (count === 0) {
        decrementBtn.disabled = true;
    } else {
        decrementBtn.disabled = false;
    }
    if (count >= 10) {
        incrementBtn.disabled = true;
    } else {
        incrementBtn.disabled = false;
    }

    // Reset btn display
    if (count === 0) {
        resetBtn.style.display = 'none';
    } else {
        resetBtn.style.display = 'block';
    }

    // Card-title
    if (count > 0 && count < 10) {
        title.style.display = 'none';
    } else if (count === 0) {
        title.style.display = 'block';
        title.style.backgroundColor = '#dc3545';
        title.style.color = 'white';
        title.innerHTML = '<i class="bi bi-alarm-fill"></i> min';
    } else if (count >= 10) {
        title.style.display = 'block';
        title.style.backgroundColor = 'gold';
        title.style.color = 'black';
        title.innerHTML = '<i class="bi bi-exclamation-triangle"></i> max';
    }

    // counter color
    counter.classList.remove('glow-red', 'glow-blue', 'glow-gold');

    if (count === 0) {
    counter.style.color = '#dc3545';
    counter.classList.add('glow-red');

    } else if (count > 0 && count < 10) {
    counter.style.color = 'darkturquoise';
    counter.classList.add('glow-blue');

    } else if (count >= 10) {
    counter.style.color = 'gold';
    counter.classList.add('glow-gold');
   }
}

// Parler guichet
function direClient(numero) {
    speechSynthesis.cancel();

    const DireText = `Client numéro ${numero}, au guichet.`;
    const utterance = new SpeechSynthesisUtterance(DireText);
    utterance.lang = 'fr-FR';

    speechSynthesis.speak(utterance);
}

// increment button
incrementBtn.addEventListener('click', () => {
    count++;
   Counter();

    // Parler guichet
    direClient(count);
});

// decrement button
decrementBtn.addEventListener('click', () => {
    if (count > 0) {
        count--;
        Counter();

        // Parler guichet
        direClient(count);
    }
}); 

// reset button
resetBtn.addEventListener('click', () => {
    count = 0;
    Counter();

    // Parler guichet
    direClient(count);
});

