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

        // Валидация прошла успешно
        alert('Форма успешно заполнена!');
        form.reset(); // Очищаем форму
    });

    // Функция для проверки корректности email
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
