document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Предотвращаем стандартную отправку формы

        // Получаем значения полей
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Валидация полей
        if (name === '' || email === '' || message === '') {
            alert('Пожалуйста, заполните все поля.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Пожалуйста, введите корректный email.');
            return;
        }

        // Отправка данных через Fetch API
        const formData = { name, email, message };

        fetch('http://localhost:3000/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Сетевая ошибка');
            }
            return response.json();
        })
        .then(data => {
            alert('Ваше сообщение успешно отправлено!');
            form.reset(); // Очищаем форму
        })
        .catch(error => {
            alert('Произошла ошибка при отправке сообщения: ' + error.message);
        });
    });

    // Функция для проверки корректности email
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
