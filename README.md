 

<h1 align="center">Bot - X<br></h1>
<p align="center">
<img src="https://avatars.githubusercontent.com/u/61716582?v=4" />
</p>

<p align="center">
This bot base from <a href="https://github.com/SonzaiEkkusu" target="_blank">Xeon</a> using <a href="https://github.com/adiwajshing/Baileys" target="_blank">Baileys</a> and <a href="https://github.com/nodejs" target="_blank">Nodejs</a>.
</p>

------

# ```Bot Info```
<p align="center">
<a href="https://github.com/SonzaiEkkusu/followers"><img title="Followers" src="https://img.shields.io/github/followers/SonzaiEkkusu?color=red&style=flat-square"></a>
<a href="https://github.com/SonzaiEkkusu/Bot-X/stargazers/"><img title="Stars" src="https://img.shields.io/github/stars/SonzaiEkkusu/Bot-X?color=blue&style=flat-square"></a>
<a href="https://github.com/SonzaiEkkusu/Bot-X/network/members"><img title="Forks" src="https://img.shields.io/github/forks/SonzaiEkkusu/Bot-X?color=red&style=flat-square"></a>
<a href="https://github.com/SonzaiEkkusu/Bot-X/watchers"><img title="Watching" src="https://img.shields.io/github/watchers/SonzaiEkkusu/Bot-X?label=Watchers&color=blue&style=flat-square"></a>
<a href="https://github.com/SonzaiEkkusu/Bot-X"><img title="Open Source" src="https://img.shields.io/badge/Base-Xeon%20Bot%20Inc.-red?v=103"></a>
<a href="https://github.com/SonzaiEkkusu/Bot-X/"><img title="Size" src="https://img.shields.io/github/repo-size/SonzaiEkkusu/Bot-X?style=flat-square&color=green"></a>
<a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FSonzaiEkkusu%2FBot-X&count_bg=%2379C83D&title_bg=%23555555&icon=probot.svg&icon_color=%2300FF6D&title=hits&edge_flat=false"/></a>
<a href="https://github.com/SonzaiEkkusu/Bot-X/graphs/commit-activity"><img height="20" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg"></a>&nbsp;&nbsp;
</p>
<p align='center'>
    </p>

-------

## ` BUILDPACKS`

```
https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest
https://github.com/clhuang/heroku-buildpack-webp-binaries.git
```


# Install
## `Requirements`
* [Node.js](https://nodejs.org/en/)
* [Git](https://git-scm.com/downloads)
* [FFmpeg](https://github.com/BtbN/FFmpeg-Builds/releases/download/autobuild-2020-12-08-13-03/ffmpeg-n4.3.1-26-gca55240b8c-win64-gpl-4.3.zip)
* [Libwebp](https://developers.google.com/speed/webp/download)
* Any text editor
* Brain
## `Clone Repo & Installation dependencies`
```bash
git clone https://github.com/SonzaiEkkusu/Bot-X.git
cd Bot-X
npm i
npm start
```
## `For Termux/Ssh/Ubuntu`
```bash
apt update
apt upgrade
pkg update && pkg upgrade
pkg install bash
pkg install libwebp
pkg install git -y
pkg install nodejs -y 
pkg install ffmpeg -y 
pkg install wget
pkg install imagemagick -y
git clone https://github.com/SonzaiEkkusu/Bot-X
cd Bot-X
yarn install
npm start
```
## `For VPS`
```bash
apt install nodejs 
apt install git 
apt  install ffmpeg 
apt  install libwebp 
apt  install imagrmagick
apt install bash
git clone https://github.com/SonzaiEkkusu/Bot-X
cd Bot-X
npm start
```
## `For 24/7 Activation (Termux)`
```bash
npm i -g pm2 && pm2 start index.js && pm2 save && pm2 logs
```
