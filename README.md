# TypeScriptTraining

**TypeScript settings in Ubuntu Desktop for Windows OS**

Download Ubuntu Desktop for Windows and turning on the linux features

WIN + R and type 'optionalfeatures.exe'
![image](https://user-images.githubusercontent.com/19968541/145580026-1e8419e1-a95a-456f-81e3-22842113fc15.png)
Re-start the machine 

sudo apt-get install curl
curl -sL https://deb.nodesource.com/setup_13.x | sudo -E bash -
sudo apt-get install nodejs

node -v 
npm -v

**Install GIT**
(sudo) apt update  // to get updates
(sudo) apt install git

**Compiling TypeScript program**
tsc main.ts && node main.js
tsc --target ES6 main.ts && node main.js

**GIT commands**
git clone https://github.com/MalithaDilshan/TypeScriptTraining.git
(git init) 
git status
git add .
git commit -m 'First type script training with a call'
(git remote add origin https://github.com/MalithaDilshan/TypeScriptTraining.git)
(git remote show origin)
(git push -u origin master   // This is for password authentication. Currently git is using the token authentication mechanism)
![image](https://user-images.githubusercontent.com/19968541/145585376-634cc603-4f89-408b-a302-22815891f117.png)
https://stackoverflow.com/questions/68775869/support-for-password-authentication-was-removed-please-use-a-personal-access-to
git push




