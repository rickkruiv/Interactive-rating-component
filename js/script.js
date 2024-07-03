const rateBtn = document.querySelectorAll('.rate-btn');
const submit = document.querySelector('.submit');
const rateValueBtn = document.querySelector('#rate-selected span');
let rateValue = null;
const ratingContainer = document.querySelector('#rating-container');
const thankYou = document.querySelector('#thank-you');
const feedBack = document.querySelector('#p');

rateBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        // remove todos selecionados, se houver, quando clicar em outro
        rateBtn.forEach((btn) => {
            btn.classList.remove('selected');
        });

        // adicionar o selecionar no valor do rate
        btn.classList.add('selected');
        
        // pegar o valor da avaliação
        const span = parseInt(btn.querySelector('span').innerHTML);
        rateValue = span;
    });
});

submit.addEventListener('click', () => {
    if (rateValue !== null) {
        thankYou.classList.toggle('hidden');
        ratingContainer.classList.toggle('hidden')
        rateValueBtn.textContent = rateValue
       
        if (rateValue >= 3) {
            feedBack.innerHTML = 'Agradecemos por dedicar seu tempo para avaliar. Se precisar de mais suporte, não hesite em entrar em contato!';

        } else {
            feedBack.innerHTML = 'Agradecemos por dedicar seu tempo para avaliar. Nos ajude a melhorar enviando um feedback, estamos sempre abertos a novas sugestões!';
            
            const template = `
            <div class="give-feedback">
                <input type="text" placeholder="Nos conte sobre sua experiência">
                <button id="send">
                    <img src="images/send-svgrepo-com.svg" alt="send-svgrepo-com">
                </button>
            </div>`;

            const parser = new DOMParser();
            const templateHTML = parser.parseFromString(template, 'text/html');

            const giveFeedback = templateHTML.querySelector('.give-feedback');

            thankYou.appendChild(giveFeedback);
        }

    } else {
        const alert = document.querySelector('#alert');
        alert.classList.add('show-alert')
        setTimeout(() => {
            if (alert) {
                alert.classList.remove('show-alert')
            }
        }, 3000)
    }
})
