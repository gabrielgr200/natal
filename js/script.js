document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('cadastroForm');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const name = document.getElementById('nameInput').value;
        const email = document.getElementById('emailInput').value;
        const password = document.getElementById('passwordInput').value;

        try {
            const response = await fetch('https://api-natal.onrender.com/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password })
            });

            const data = await response.json();

            if (response.ok) {
                // Código para exibir sucesso ao usuário
                console.log('Usuário cadastrado com sucesso!', data);
            } else {
                // Exibir mensagem de erro no seu modal
                console.error('Erro ao cadastrar usuário:', data.mensagem);
            }
        } catch (error) {
            console.error('Erro ao realizar requisição:', error);
        }
    });
});
