let inputElement = document.querySelector('#app input');
let buttonElement = document.querySelector('#app button');
let resElement = document.querySelector('#app div');

function gerarNumero() {

    if(inputElement.value <= 0 || inputElement.value > 9){
        alert('Por favor digite um valor válido (entre 1 e 9)');
        inputElement.value = '';
        resElement.innerHTML = '';
    }

    let numSorteados = []

    while(numSorteados.length < inputElement.value) {
        let numGerado = Math.floor(Math.random() * 60);
        if(! numSorteados.includes(numGerado)) {
            numSorteados.push(numGerado);
        };
    }
    resElement.innerHTML = '';
    inputElement.value = '';
    resElement.innerHTML = `Os números sorteados são: ${numSorteados}`;
    
};

buttonElement.onclick = gerarNumero;