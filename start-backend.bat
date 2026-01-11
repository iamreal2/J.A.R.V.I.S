@echo off
echo =======================================
echo   J.A.R.V.I.S Backend Server
echo =======================================
echo.

cd backend

echo Checking virtual environment...
if not exist "venv" (
    echo Creating virtual environment...
    python -m venv venv
)

echo Activating virtual environment...
call venv\Scripts\activate

echo Installing dependencies...
pip install -q -r requirements.txt

echo.
echo =======================================
echo   Starting JARVIS Backend...
echo =======================================
echo.
echo Backend will run on: http://localhost:8000
echo API Docs: http://localhost:8000/docs
echo.

python app/main.py
