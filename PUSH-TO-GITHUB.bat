@echo off
setlocal
cd /d "%~dp0"
title Push MajorMap to the PUBLIC GitHub repo (georgevillalobos/majormap)
git add -A
git diff --cached --quiet && ( echo Nothing changed since the last push. & pause & exit /b 0 )
echo Scanning staged changes for anything that looks like a live key...
git grep --cached -nE -e "sk-ant-api03-[A-Za-z0-9_-]{30,}" -e "-----BEGIN [A-Z]+ PRIVATE KEY" -e "AC[0-9a-f]{32}" -e "api_key=[A-Za-z0-9]{40}" 1>"%TEMP%\push_secrets.txt" 2>nul
for %%A in ("%TEMP%\push_secrets.txt") do if %%~zA GTR 0 ( echo. & echo  !! STOP - a LIVE KEY looks staged: & type "%TEMP%\push_secrets.txt" & echo  Nothing was pushed. Tell Claude. & pause & exit /b 1 )
echo.
echo These changes WILL be pushed to a PUBLIC repo:
git --no-pager diff --cached --name-status
echo.
set "MSG=Update"
set /p "MSG=Commit message [Update]: "
git commit -q -m "%MSG%"
git push || ( echo. & echo  Push failed - no internet or GitHub sign-in expired: gh auth login & pause & exit /b 1 )
echo.
echo  DONE - live in about a minute at https://georgevillalobos.github.io/majormap/
pause
