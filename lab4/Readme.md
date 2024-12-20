# Лабораторная работа №4


## Для автоматического запуска сервера:
```bash
start start.cmd
```
```bash
@echo off
echo Запуск JSON Server...
start "JSON Server" cmd /k "json-server --watch data.json --port 3000"

echo Запуск HTTP Server...
start "HTTP Server" cmd /k "http-server -c-1 -p 8000"

echo Открытие сайта в браузере...
start "" "http://localhost:8000/index.html"

echo Все серверы запущены и сайт открыт в браузере.
pause

```
