@echo off
cd /d "%~dp0"
title NOMI - Travel Planner Server

echo ===================================================
echo               STARTING NOMI SERVER
echo ===================================================
echo.

where node >nul 2>nul
if errorlevel 1 goto NO_NODE

if exist "node_modules\express" goto START_SERVER

echo [INFO] First-time setup: Installing required packages...
call npm install
if errorlevel 1 goto NPM_ERROR
echo [INFO] Packages installed successfully!
echo.

:START_SERVER
echo [INFO] Starting NOMI server and opening browser...
echo [INFO] URL: http://localhost:3000/home.html
echo [INFO] Keep this window open while using NOMI. Press Ctrl+C to stop.
echo.
node server.js
echo.
echo [INFO] Server has stopped.
pause
exit /b 0

:NO_NODE
echo [ERROR] Node.js is not installed or not found in your PATH.
echo Please download and install Node.js from: https://nodejs.org/
echo.
start https://nodejs.org/
pause
exit /b 1

:NPM_ERROR
echo.
echo [ERROR] Failed to install dependencies via npm.
echo Please check your internet connection and try again.
echo.
pause
exit /b 1
