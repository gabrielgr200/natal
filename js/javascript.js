fetch('https://web-production-8912.up.railway.app/users')
  .then(response => response.json())
  .then(data => {
    const usersTableBody = document.getElementById('usersTableBody');

    data.users.forEach(user => {
      const row = document.createElement('tr');

      const nameCell = document.createElement('td');
      nameCell.textContent = user.name;
      nameCell.classList.add('text-center', 'py-2', 'horizontal-border', 'text-[16px]');
      row.appendChild(nameCell);

      const idCell = document.createElement('td');
      idCell.textContent = user.id;
      idCell.classList.add('text-center', 'py-2', 'horizontal-border', 'text-[16px]');
      row.appendChild(idCell);

      const selectCell = document.createElement('td');
      selectCell.classList.add('text-center', 'py-2', 'horizontal-border', 'text-[16px]');
      
      const selectButton = document.createElement('button');
      selectButton.textContent = 'Selecionar';
      selectButton.classList.add('bg-[#f8f8ff]', 'text-[#21231e]', 'px-3', 'py-1', 'rounded-full');

      selectButton.addEventListener('click', () => {
        console.log(`Usuário ${user.name} (${user.id}) selecionado.`);
      });

      selectCell.appendChild(selectButton);
      row.appendChild(selectCell);

      usersTableBody.appendChild(row);
    });
  })
  .catch(error => {
    console.error('Erro ao buscar usuários:', error);
  });
