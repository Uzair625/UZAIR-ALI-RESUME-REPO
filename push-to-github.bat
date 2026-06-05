@echo off
echo =========================================
echo  Uzair Ali Portfolio — GitHub Push
echo =========================================

cd /d "%~dp0"

git config user.email "uziikhan309@gmail.com"
git config user.name "Uzair Ali"

git init
git branch -M main
git add .
git commit -m "feat: initial portfolio — Next.js 14 + Three.js 3D + Framer Motion + CI/CD"

git remote remove origin 2>nul
git remote add origin https://github.com/Uzair625/UZAIR-ALI-RESUME-REPO.git

git push -u origin main

echo.
echo =========================================
echo  Done! Check your repo:
echo  https://github.com/Uzair625/UZAIR-ALI-RESUME-REPO
echo =========================================
pause
