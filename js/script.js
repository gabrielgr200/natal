document.addEventListener("DOMContentLoaded", () => {
    const cadastroForm = document.getElementById('cadastroForm');

    cadastroForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const nameInput = document.getElementById('nameInput');
        const emailInput = document.getElementById('emailInput');
        const passwordInput = document.getElementById('passwordInput');

        const name = nameInput.value;
        const email = emailInput.value;
        const password = passwordInput.value;

        try {
            const response = await fetch('https://web-production-8912.up.railway.app/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password })
            });

            const data = await response.json();

            if (response.ok) {
                
                const modal = document.getElementById('modal');
                const modalMessage = document.getElementById('modalMessage');
                modalMessage.innerText = data.mensagem;

                modal.classList.remove('invisible', 'opacity-0');
                modal.classList.add('visible', 'opacity-100');

                setTimeout(() => {
                    modal.classList.add('invisible', 'opacity-0');
                    modal.classList.remove('visible', 'opacity-100');

                    nameInput.value = '';
                    emailInput.value = '';
                    passwordInput.value = '';
                }, 3000);

            } else if (data.mensagem === "Nome de usuário já existe") {
                alert("Nome de usuário já existe");

            } else if (data.mensagem === "Email já está em uso") {
                alert("Email já está em uso");

            } else {
                console.error('Erro ao cadastrar usuário:', data.mensagem);
            }
        } catch (error) {
            console.error('Erro ao realizar requisição:', error);
        }
    });
});
