"use strict";var menuScrollOn=function(){20<document.body.scrollTop||50<document.documentElement.scrollTop?(document.querySelector("#cabecalho").style.cssText="margin-top: 0",document.querySelector(".logo>a>img").style.cssText="max-height: 85%; margin: 20px auto 0; top: 0"):0!==document.body.scrollTop&&0!==document.documentElement.scrollTop||(document.querySelector("#cabecalho").style.cssText="margin-top: 50px",document.querySelector(".logo>a>img").style.cssText="max-height: 100%; margin: auto; top: 0")};window.onscroll=function(){menuScrollOn()};var modalEntrar=function(){document.getElementById("modalContainerAge").classList.add("fechar")},modalFechar=function(){window.location.href="http://www.google.com.br/"};