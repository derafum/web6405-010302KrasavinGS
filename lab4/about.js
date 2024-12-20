document.addEventListener('DOMContentLoaded', () => {
    const tableContainer = document.querySelector('.flex-table');

    // Функция для загрузки данных с сервера
    function loadSkills() {
        fetch('http://localhost:3000/skills')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Сетевая ошибка при загрузке данных');
                }
                return response.json();
            })
            .then(data => {
                populateTable(data);
            })
            .catch(error => {
                alert('Не удалось загрузить данные: ' + error.message);
            });
    }

    // Функция для заполнения таблицы данными
    function populateTable(skills) {
        const table = document.querySelector('.flex-table');

        // Удаляем существующие строки, кроме заголовка
        const rows = table.querySelectorAll('.flex-row:not(.header)');
        rows.forEach(row => row.remove());

        // Добавляем новые строки
        skills.forEach(skill => {
            const row = document.createElement('div');
            row.classList.add('flex-row');

            const skillName = document.createElement('div');
            skillName.classList.add('flex-cell');
            skillName.textContent = skill.name;

            const skillExperience = document.createElement('div');
            skillExperience.classList.add('flex-cell');
            skillExperience.textContent = skill.experience;

            row.appendChild(skillName);
            row.appendChild(skillExperience);

            table.appendChild(row);
        });
    }

    // Загружаем данные при загрузке страницы
    loadSkills();
});
