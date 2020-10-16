import validator from 'validator';

export default class Contato {
    constructor(formClass) {
        this.form = document.querySelector(formClass);
    }

    init() {
        this.events();
    }

    events() {
        if(!this.form) return;

        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validate(e);
        });
    }

    validate(e) {
        const el = e.target;
        const nomeInput = el.querySelector('input[name="nome"]');
        const emailInput = el.querySelector('input[name="email"]');
        console.log(nomeInput.value, emailInput.value);
        let error = false;
        
        if (nomeInput.value === '') {
            alert('Campo nome de preechimento obrigatório');
            error = true;
        }

        if(!validator.isEmail(emailInput.value)) {
            alert('E-mail inválido');
            error = true;
        }

        if(!error) el.submit(); 
    }
}