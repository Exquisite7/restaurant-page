(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var a=n.getElementsByTagName("script");if(a.length)for(var o=a.length-1;o>-1&&(!t||!/^http(s?):/.test(t));)t=a[o--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"chef-image.jpg";function n(e){const t=document.createElement("p");return t.textContent=e,t}const a=function(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("home");const a=document.createElement("img");return a.src=t,a.alt="Chef",e.appendChild(n("Best pizza restaurant in your city!")),e.appendChild(n("Made with passion since 1994.")),e.appendChild(a),e.appendChild(n("Order online or visit us!")),e}())};function o(e,t,n){console.log("sss",n);const a=document.createElement("div");a.classList.add("menu-item");const o=document.createElement("h2");o.textContent=e;const c=document.createElement("p");c.textContent=t;const i=document.createElement("img");return i.src=n,i.alt=`${e}`,a.appendChild(i),a.appendChild(o),a.appendChild(c),a}function c(){const e=document.createElement("header");e.classList.add("header");const t=document.createElement("h1");return t.classList.add("restaurant-name"),t.textContent="Trattoria",e.appendChild(t),e.appendChild(function(){const e=document.createElement("nav"),t=document.createElement("button");t.classList.add("button-nav"),t.textContent="Home",t.addEventListener("click",(e=>{e.target.classList.contains("active")||(i(t),a())}));const n=document.createElement("button");n.classList.add("button-nav"),n.textContent="Menu",n.addEventListener("click",(e=>{e.target.classList.contains("active")||(i(n),function(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");return e.classList.add("menu"),e.appendChild(o("Salsiccia","Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil","images/food/salsiccia.png")),e.appendChild(o("Gamberi","Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil","images/food/gamberi.png")),e.appendChild(o("Pepe","Tomato sauce, Mozarella, Chilli flakes, Olives, Basil","images/food/pepe.png")),e.appendChild(o("Disgustoso","Tomato sauce, Bacon, Pineapple, Olives, Basil","images/food/disgustoso.png")),e.appendChild(o("Colorato","Tomato sauce, Mozarella, Onion, Pepper, Champignons, Basil","images/food/colorato.png")),e.appendChild(o("Pomodoro","Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli","images/food/pomodoro.png")),e.appendChild(o("Crema","White sauce, Mozarella, Shrimps, Salmon, Pineapple, Olives, Basil","images/food/crema.png")),e.appendChild(o("Carne","Tomato sauce, Mozarella, Homemade sausage, Bacon, Garlic, Pepper, Chilli","images/food/carne.png")),e}())}())}));const c=document.createElement("button");return c.classList.add("button-nav"),c.textContent="Contact",c.addEventListener("click",(e=>{e.target.classList.contains("active")||(i(c),function(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("contact");const t=document.createElement("h1");t.textContent="Contact Us";const n=document.createElement("p");n.textContent="Email: info@restaurant.com \n Phone: 📞 123-456-7890",n.style.whiteSpace="pre-line";const a=document.createElement("p");a.textContent="🏠 Hollywood Boulevard 42, Los Angeles, USA";const o=document.createElement("img");return o.src="images/restaurant-location.png",o.alt="Trattoria restaurant location",e.appendChild(t),e.appendChild(n),e.appendChild(a),e.appendChild(o),e}())}())})),e.appendChild(t),e.appendChild(n),e.appendChild(c),e}()),e}function i(e){document.querySelectorAll(".button-nav").forEach((e=>{e!==this&&e.classList.remove("active")})),e.classList.add("active")}!function(){const e=document.getElementById("content");e.innerHTML="",e.appendChild(c()),e.appendChild(function(){const e=document.createElement("main");return e.classList.add("main"),e.setAttribute("id","main"),e}()),e.appendChild(function(){const e=document.createElement("footer");e.classList.add("footer");const t=document.createElement("p");return t.textContent=`Copyright © ${(new Date).getFullYear()} razvanmanea`,e.appendChild(t),e}()),i(document.querySelector(".button-nav")),a()}()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVlsRSxTQUFTYyxjQUFjLEtBSXpDLE9BSEFvRCxFQUFVbkQsWUFBYyxnQkFBZSxJQUFJb0QsTUFBT0MsNEJBRWxESCxFQUFPL0MsWUFBWWdELEdBQ1pELENBQ1gsQ0FRd0JJLElBRXBCMUIsRUFBZ0IzQyxTQUFTc0UsY0FBYyxnQkFDdkMsR0FDSixDRTlGQSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGFja2FnZS5qc29uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BhY2thZ2UuanNvbi93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3BhY2thZ2UuanNvbi93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wYWNrYWdlLmpzb24vLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9wYWNrYWdlLmpzb24vLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9wYWNrYWdlLmpzb24vLi9zcmMvd2Vic2l0ZS5qcyIsIndlYnBhY2s6Ly9wYWNrYWdlLmpzb24vLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9wYWNrYWdlLmpzb24vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgY2hlZkltYWdlUGF0aCBmcm9tIFwiLi9pbWFnZXMvY2hlZi1pbWFnZS5qcGdcIjtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUhvbWUoKSB7XHJcbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaG9tZS5jbGFzc0xpc3QuYWRkKFwiaG9tZVwiKTtcclxuXHJcbiAgY29uc3QgY2hlZkltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBjaGVmSW1hZ2Uuc3JjID0gY2hlZkltYWdlUGF0aDtcclxuICBjaGVmSW1hZ2UuYWx0ID0gXCJDaGVmXCI7XHJcblxyXG4gIGhvbWUuYXBwZW5kQ2hpbGQoY3JlYXRlUGFyYWdyYXBoKFwiQmVzdCBwaXp6YSByZXN0YXVyYW50IGluIHlvdXIgY2l0eSFcIikpO1xyXG4gIGhvbWUuYXBwZW5kQ2hpbGQoY3JlYXRlUGFyYWdyYXBoKFwiTWFkZSB3aXRoIHBhc3Npb24gc2luY2UgMTk5NC5cIikpO1xyXG4gIGhvbWUuYXBwZW5kQ2hpbGQoY2hlZkltYWdlKTtcclxuICBob21lLmFwcGVuZENoaWxkKGNyZWF0ZVBhcmFncmFwaChcIk9yZGVyIG9ubGluZSBvciB2aXNpdCB1cyFcIikpO1xyXG5cclxuICByZXR1cm4gaG9tZTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUGFyYWdyYXBoKHRleHQpIHtcclxuICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBwYXJhZ3JhcGgudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gIHJldHVybiBwYXJhZ3JhcGg7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRIb21lKCkge1xyXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XHJcbiAgbWFpbi50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVIb21lKCkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2FkSG9tZTtcclxuIiwiZnVuY3Rpb24gY3JlYXRlTWVudSgpIHtcclxuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBtZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xyXG5cclxuICBtZW51LmFwcGVuZENoaWxkKFxyXG4gICAgY3JlYXRlTWVudUl0ZW0oXHJcbiAgICAgIFwiU2Fsc2ljY2lhXCIsXHJcbiAgICAgIFwiVG9tYXRvIHNhdWNlLCBNb3phcmVsbGEsIFRvbWF0bywgSG9tZW1hZGUgc2F1c2FnZSwgR2FybGljLCBCYXNpbFwiLFxyXG4gICAgICBcImltYWdlcy9mb29kL3NhbHNpY2NpYS5wbmdcIlxyXG4gICAgKVxyXG4gICk7XHJcbiAgbWVudS5hcHBlbmRDaGlsZChcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFxyXG4gICAgICBcIkdhbWJlcmlcIixcclxuICAgICAgXCJUb21hdG8gc2F1Y2UsIE1vemFyZWxsYSwgU2hyaW1wcywgRmV0YSBjaGVlc2UsIE9saXZlcywgQmFzaWxcIixcclxuICAgICAgXCJpbWFnZXMvZm9vZC9nYW1iZXJpLnBuZ1wiXHJcbiAgICApXHJcbiAgKTtcclxuICBtZW51LmFwcGVuZENoaWxkKFxyXG4gICAgY3JlYXRlTWVudUl0ZW0oXHJcbiAgICAgIFwiUGVwZVwiLFxyXG4gICAgICBcIlRvbWF0byBzYXVjZSwgTW96YXJlbGxhLCBDaGlsbGkgZmxha2VzLCBPbGl2ZXMsIEJhc2lsXCIsXHJcbiAgICAgIFwiaW1hZ2VzL2Zvb2QvcGVwZS5wbmdcIlxyXG4gICAgKVxyXG4gICk7XHJcbiAgbWVudS5hcHBlbmRDaGlsZChcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFxyXG4gICAgICBcIkRpc2d1c3Rvc29cIixcclxuICAgICAgXCJUb21hdG8gc2F1Y2UsIEJhY29uLCBQaW5lYXBwbGUsIE9saXZlcywgQmFzaWxcIixcclxuICAgICAgXCJpbWFnZXMvZm9vZC9kaXNndXN0b3NvLnBuZ1wiXHJcbiAgICApXHJcbiAgKTtcclxuICBtZW51LmFwcGVuZENoaWxkKFxyXG4gICAgY3JlYXRlTWVudUl0ZW0oXHJcbiAgICAgIFwiQ29sb3JhdG9cIixcclxuICAgICAgXCJUb21hdG8gc2F1Y2UsIE1vemFyZWxsYSwgT25pb24sIFBlcHBlciwgQ2hhbXBpZ25vbnMsIEJhc2lsXCIsXHJcbiAgICAgIFwiaW1hZ2VzL2Zvb2QvY29sb3JhdG8ucG5nXCJcclxuICAgIClcclxuICApO1xyXG4gIG1lbnUuYXBwZW5kQ2hpbGQoXHJcbiAgICBjcmVhdGVNZW51SXRlbShcclxuICAgICAgXCJQb21vZG9yb1wiLFxyXG4gICAgICBcIlRvbWF0byBzYXVjZSwgTW96YXJlbGxhLCBUb21hdG8sIE9uaW9uLCBGZXRhIGNoZWVzZSwgQ2hpbGxpXCIsXHJcbiAgICAgIFwiaW1hZ2VzL2Zvb2QvcG9tb2Rvcm8ucG5nXCJcclxuICAgIClcclxuICApO1xyXG4gIG1lbnUuYXBwZW5kQ2hpbGQoXHJcbiAgICBjcmVhdGVNZW51SXRlbShcclxuICAgICAgXCJDcmVtYVwiLFxyXG4gICAgICBcIldoaXRlIHNhdWNlLCBNb3phcmVsbGEsIFNocmltcHMsIFNhbG1vbiwgUGluZWFwcGxlLCBPbGl2ZXMsIEJhc2lsXCIsXHJcbiAgICAgIFwiaW1hZ2VzL2Zvb2QvY3JlbWEucG5nXCJcclxuICAgIClcclxuICApO1xyXG4gIG1lbnUuYXBwZW5kQ2hpbGQoXHJcbiAgICBjcmVhdGVNZW51SXRlbShcclxuICAgICAgXCJDYXJuZVwiLFxyXG4gICAgICBcIlRvbWF0byBzYXVjZSwgTW96YXJlbGxhLCBIb21lbWFkZSBzYXVzYWdlLCBCYWNvbiwgR2FybGljLCBQZXBwZXIsIENoaWxsaVwiLFxyXG4gICAgICBcImltYWdlcy9mb29kL2Nhcm5lLnBuZ1wiIFxyXG4gICAgKVxyXG4gICk7XHJcblxyXG4gIHJldHVybiBtZW51O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNZW51SXRlbShuYW1lLCBkZXNjcmlwdGlvbiwgaW1nc3JjKSB7XHJcbiAgY29uc29sZS5sb2coXCJzc3NcIiwgaW1nc3JjKVxyXG4gIGNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtXCIpO1xyXG5cclxuICBjb25zdCBmb29kTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICBmb29kTmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XHJcblxyXG4gIGNvbnN0IGZvb2REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGZvb2REZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xyXG5cclxuICBjb25zdCBmb29kSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGZvb2RJbWFnZS5zcmMgPSBpbWdzcmM7XHJcbiAgZm9vZEltYWdlLmFsdCA9IGAke25hbWV9YDtcclxuXHJcbiAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoZm9vZEltYWdlKTtcclxuICBtZW51SXRlbS5hcHBlbmRDaGlsZChmb29kTmFtZSk7XHJcbiAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoZm9vZERlc2NyaXB0aW9uKTtcclxuXHJcbiAgcmV0dXJuIG1lbnVJdGVtO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkTWVudSgpIHtcclxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XHJcbiAgICBtYWluLnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlTWVudSgpKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9hZE1lbnU7IiwiaW1wb3J0IGxvYWRIb21lIGZyb20gXCIuL2hvbWVcIjtcclxuaW1wb3J0IGxvYWRNZW51IGZyb20gXCIuL21lbnVcIjtcclxuaW1wb3J0IGxvYWRDb250YWN0IGZyb20gXCIuL2NvbnRhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XHJcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcclxuXHJcbiAgICBjb25zdCByZXN0YXVyYW50TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgIHJlc3RhdXJhbnROYW1lLmNsYXNzTGlzdC5hZGQoXCJyZXN0YXVyYW50LW5hbWVcIik7XHJcbiAgICByZXN0YXVyYW50TmFtZS50ZXh0Q29udGVudCA9IFwiVHJhdHRvcmlhXCI7XHJcblxyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHJlc3RhdXJhbnROYW1lKTtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChjcmVhdGVOYXYoKSk7XHJcblxyXG4gICAgcmV0dXJuIGhlYWRlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTmF2KCkge1xyXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcclxuXHJcbiAgICBjb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGhvbWVCdXR0b24uY2xhc3NMaXN0LmFkZChcImJ1dHRvbi1uYXZcIik7XHJcbiAgICBob21lQnV0dG9uLnRleHRDb250ZW50ID0gXCJIb21lXCI7XHJcbiAgICBob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHJldHVybjtcclxuICAgICAgICBzZXRBY3RpdmVCdXR0b24oaG9tZUJ1dHRvbik7XHJcbiAgICAgICAgbG9hZEhvbWUoKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIG1lbnVCdXR0b24uY2xhc3NMaXN0LmFkZChcImJ1dHRvbi1uYXZcIik7XHJcbiAgICBtZW51QnV0dG9uLnRleHRDb250ZW50ID0gXCJNZW51XCI7XHJcbiAgICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHJldHVybjtcclxuICAgICAgICBzZXRBY3RpdmVCdXR0b24obWVudUJ1dHRvbik7XHJcbiAgICAgICAgbG9hZE1lbnUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgY29udGFjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uLW5hdlwiKTtcclxuICAgIGNvbnRhY3RCdXR0b24udGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcclxuICAgIGNvbnRhY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkgcmV0dXJuO1xyXG4gICAgICAgIHNldEFjdGl2ZUJ1dHRvbihjb250YWN0QnV0dG9uKTtcclxuICAgICAgICBsb2FkQ29udGFjdCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbmF2LmFwcGVuZENoaWxkKGhvbWVCdXR0b24pO1xyXG4gICAgbmF2LmFwcGVuZENoaWxkKG1lbnVCdXR0b24pO1xyXG4gICAgbmF2LmFwcGVuZENoaWxkKGNvbnRhY3RCdXR0b24pO1xyXG5cclxuICAgIHJldHVybiBuYXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldEFjdGl2ZUJ1dHRvbihidXR0b24pIHtcclxuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJ1dHRvbi1uYXZcIik7XHJcblxyXG4gICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcclxuICAgICAgICBpZiAoYnV0dG9uICE9PSB0aGlzKSB7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNYWluKCkge1xyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xyXG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcclxuICAgIG1haW4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWluXCIpO1xyXG4gICAgcmV0dXJuIG1haW47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcclxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XHJcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZChcImZvb3RlclwiKTtcclxuXHJcbiAgICBjb25zdCBjb3B5cmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGNvcHlyaWdodC50ZXh0Q29udGVudCA9IGBDb3B5cmlnaHQgwqkgJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9IHJhenZhbm1hbmVhYDtcclxuXHJcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoY29weXJpZ2h0KTtcclxuICAgIHJldHVybiBmb290ZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxpemVXZWJzaXRlKCkge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcclxuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbigpKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xyXG5cclxuICAgIHNldEFjdGl2ZUJ1dHRvbihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi1uYXZcIikpO1xyXG4gICAgbG9hZEhvbWUoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbGl6ZVdlYnNpdGU7IiwiZnVuY3Rpb24gY3JlYXRlQ29udGFjdCgpIHtcclxuICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb250YWN0LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0XCIpO1xyXG5cclxuICBjb25zdCBoZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICBoZWFkbGluZS50ZXh0Q29udGVudCA9IFwiQ29udGFjdCBVc1wiO1xyXG5cclxuICBjb25zdCBjb250YWN0SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGNvbnRhY3RJbmZvLnRleHRDb250ZW50ID1cclxuICAgIFwiRW1haWw6IGluZm9AcmVzdGF1cmFudC5jb20gXFxuIFBob25lOiDwn5OeIDEyMy00NTYtNzg5MFwiO1xyXG4gIGNvbnRhY3RJbmZvLnN0eWxlLndoaXRlU3BhY2UgPSBcInByZS1saW5lXCI7XHJcblxyXG4gIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBhZGRyZXNzLnRleHRDb250ZW50ID0gXCLwn4+gIEhvbGx5d29vZCBCb3VsZXZhcmQgNDIsIExvcyBBbmdlbGVzLCBVU0FcIjtcclxuXHJcbiAgY29uc3QgcmVzdGF1cmFudExvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICByZXN0YXVyYW50TG9jYXRpb24uc3JjID0gXCJpbWFnZXMvcmVzdGF1cmFudC1sb2NhdGlvbi5wbmdcIjtcclxuICByZXN0YXVyYW50TG9jYXRpb24uYWx0ID0gXCJUcmF0dG9yaWEgcmVzdGF1cmFudCBsb2NhdGlvblwiO1xyXG5cclxuICBjb250YWN0LmFwcGVuZENoaWxkKGhlYWRsaW5lKTtcclxuICBjb250YWN0LmFwcGVuZENoaWxkKGNvbnRhY3RJbmZvKTtcclxuICBjb250YWN0LmFwcGVuZENoaWxkKGFkZHJlc3MpO1xyXG4gIGNvbnRhY3QuYXBwZW5kQ2hpbGQocmVzdGF1cmFudExvY2F0aW9uKTtcclxuXHJcbiAgcmV0dXJuIGNvbnRhY3Q7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRDb250YWN0KCkge1xyXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XHJcbiAgbWFpbi50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVDb250YWN0KCkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2FkQ29udGFjdDtcclxuIiwiaW1wb3J0IGluaXRpYWxpemVXZWJzaXRlIGZyb20gXCIuL3dlYnNpdGVcIjtcclxuXHJcbmluaXRpYWxpemVXZWJzaXRlKCk7Il0sIm5hbWVzIjpbIl9fd2VicGFja19yZXF1aXJlX18iLCJnIiwiZ2xvYmFsVGhpcyIsInRoaXMiLCJGdW5jdGlvbiIsImUiLCJ3aW5kb3ciLCJzY3JpcHRVcmwiLCJpbXBvcnRTY3JpcHRzIiwibG9jYXRpb24iLCJkb2N1bWVudCIsImN1cnJlbnRTY3JpcHQiLCJzcmMiLCJzY3JpcHRzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJsZW5ndGgiLCJpIiwidGVzdCIsIkVycm9yIiwicmVwbGFjZSIsInAiLCJjcmVhdGVQYXJhZ3JhcGgiLCJ0ZXh0IiwicGFyYWdyYXBoIiwiY3JlYXRlRWxlbWVudCIsInRleHRDb250ZW50IiwibWFpbiIsImdldEVsZW1lbnRCeUlkIiwiYXBwZW5kQ2hpbGQiLCJob21lIiwiY2xhc3NMaXN0IiwiYWRkIiwiY2hlZkltYWdlIiwiYWx0IiwiY3JlYXRlSG9tZSIsImNyZWF0ZU1lbnVJdGVtIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiaW1nc3JjIiwiY29uc29sZSIsImxvZyIsIm1lbnVJdGVtIiwiZm9vZE5hbWUiLCJmb29kRGVzY3JpcHRpb24iLCJmb29kSW1hZ2UiLCJjcmVhdGVIZWFkZXIiLCJoZWFkZXIiLCJyZXN0YXVyYW50TmFtZSIsIm5hdiIsImhvbWVCdXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwidGFyZ2V0IiwiY29udGFpbnMiLCJzZXRBY3RpdmVCdXR0b24iLCJtZW51QnV0dG9uIiwibWVudSIsImNyZWF0ZU1lbnUiLCJjb250YWN0QnV0dG9uIiwiY29udGFjdCIsImhlYWRsaW5lIiwiY29udGFjdEluZm8iLCJzdHlsZSIsIndoaXRlU3BhY2UiLCJhZGRyZXNzIiwicmVzdGF1cmFudExvY2F0aW9uIiwiY3JlYXRlQ29udGFjdCIsImNyZWF0ZU5hdiIsImJ1dHRvbiIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwicmVtb3ZlIiwiY29udGVudCIsImlubmVySFRNTCIsInNldEF0dHJpYnV0ZSIsImNyZWF0ZU1haW4iLCJmb290ZXIiLCJjb3B5cmlnaHQiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJjcmVhdGVGb290ZXIiLCJxdWVyeVNlbGVjdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==
