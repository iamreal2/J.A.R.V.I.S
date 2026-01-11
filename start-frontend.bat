@echo off
echo =======================================
echo   J.A.R.V.I.S Frontend
echo =======================================
echo.

cd frontend

echo Installing dependencies...
call npm install

echo.
echo =======================================
echo   Starting JARVIS Frontend...
echo =======================================
echo.
echo Frontend will run on: http://localhost:3000
echo.

call npm run dev
