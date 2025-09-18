// Lógica para exibir a mensagem de confirmação do formulário
const form = document.querySelector('form');
const message = document.getElementById('confirmationMessage');

form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    message.textContent = 'Obrigado por entrar em contato conosco!';
    message.classList.remove('hidden');
    message.classList.add('text-green-600', 'font-semibold'); 
    form.reset(); 
});

// Lógica para popular as cidades com base no estado selecionado
const estadosCidades = {
    "SP": ["São Paulo", "Campinas", "Guarulhos"],
    "RJ": ["Rio de Janeiro", "Niterói", "Duque de Caxias"],
    "MG": ["Belo Horizonte", "Uberlândia", "Contagem"],
    "PR": ["Curitiba", "Londrina", "Maringá"],
    "DF": ["Brasília"]
};

const estadoSelect = document.getElementById('estado');
const cidadeSelect = document.getElementById('cidade');

function popularEstados() {
    for (const estado in estadosCidades) {
        const option = document.createElement('option');
        option.value = estado;
        option.textContent = estado;
        estadoSelect.appendChild(option);
    }
}

estadoSelect.addEventListener('change', () => {
    const estadoSelecionado = estadoSelect.value;
    
    cidadeSelect.innerHTML = '<option value="">Selecione a Cidade</option>';
    
    if (estadoSelecionado) {
        estadosCidades[estadoSelecionado].forEach(cidade => {
            const option = document.createElement('option');
            option.value = cidade;
            option.textContent = cidade;
            cidadeSelect.appendChild(option);
        });
        cidadeSelect.disabled = false;
    } else {
        cidadeSelect.disabled = true;
    }
});

popularEstados();