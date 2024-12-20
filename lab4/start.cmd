@echo off

echo Запуск JSON Server...
start npx mock-json-server data.json --port=3000

echo Запуск HTTP Server...
start "HTTP Server" cmd /k "http-server -c-1 -p 8000"

echo Открытие сайта в браузере...
start "" "http://localhost:8000/index.html"

echo Все серверы запущены и сайт открыт в браузере.
pause
