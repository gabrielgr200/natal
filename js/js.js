document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById('loginForm');
    const modal = document.getElementById('modal');
    const modalMessage = document.getElementById('modalMessage');
    const identifierInput = document.getElementById('identifierInput');
    const passwordInput = document.getElementById('passwordInput');

    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const identifier = identifierInput.value;
        const password = passwordInput.value;

        try {
            const response = await fetch('http://localhost:3440/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ identifier, password })
            });

            const data = await response.json();

            if (response.ok) {
                
                const token = data.token;
                localStorage.setItem('token', token);

                modalMessage.innerText = data.mensagem;
                modal.classList.remove('invisible', 'opacity-0');
                modal.classList.add('visible', 'opacity-100');

                identifierInput.value = '';
                passwordInput.value = '';


                setTimeout(() => {
                    modal.classList.add('invisible', 'opacity-0');
                    modal.classList.remove('visible', 'opacity-100');
                }, 3000);

            } else if (data.mensagem === "Credenciais inválidas") {
                alert("Credenciais inválidas. Verifique suas informações de login.");

            } else {
                alert(data.mensagem);
            }

        } catch (error) {
            console.error('Erro ao realizar requisição:', error);
        }
    });
});
