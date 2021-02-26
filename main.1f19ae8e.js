// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"lang/en.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var EN = {
  greeting: "Hello!",
  im: "I'm",
  quick_self_desc: "IT student and aspiring",
  full_desc: "I'm interested in developing web apps and pages with the use of the newest technologies for about four years. In my free time, I practicing my skills and broadening my knowledge about React.js by making projects that I put up on my Github. Endurance and determination help me in realizing certain goals. Furthermore, my experience with different languages allows me easier and more effective absorption of new techs. Familiarity with the English language is another advantage as it allows me to freely read documentations. My purpose is to earn commercial experience by working with professionals.",
  my_stack: {
    coffee: "Coffee",
    thinking: "Analytic thinkink",
    curiosity: "Curiosity"
  },
  info_titles: {
    uni: "University",
    email: "e-mail",
    github: "Github"
  },
  uni: "Cracow University of Technology",
  btn_projects: "See my projects",
  btn_aboutme: "About me",
  technologies: "Technology stack",
  spanish_app: {
    title: "App for learning words",
    desc: "I'm into learning spanish, so when I discovered that I lack some sort of tool to revise my vocabulary I started working on this project. React.js allowed me to keep this app small and simple but effective. Using Firebase I'm able to store different users dictionaries allowing them to use it on whatever device they wish to. As a user you can manage your set of words by adding or removing them as well as practising. With friendly and nice to look at UI, everyone should have fun using this web application!",
    link: "Try me on GitHub"
  },
  mobile_app: {
    title: "App for tasks and chores",
    desc: "There are a million apps like this on the app store so why shouldn't I try making one myself too? Making something for mobile is also an opportunity to do things differently. It's a very simple application allowing you to keep your daily tasks in one place, you can put them into categories so you always know where to find them. By using React Native I was able to develop my app on both Android and iOS devices with one code-base.",
    link: "Visit me on GitHub"
  },
  filterninja: {
    title: "App for editing filters",
    desc: "As a fan of a certain video game with a complex ecosystem of tools, I found myself in a situation where I needed something to edit a special kind of files called loot filters because editing them in a Notepad was unacceptable as there is a lot of depth to handle. So I started developing this app, by using Electron I'm able to use every tool that is available to desktop application programmers such as file system, etc. Using API enables me to offer users some special abilities when editing their filters such as fetching real-time game data from the web.",
    link: "Visit me on GitHub"
  },
  commando: {
    title: "C64 game port",
    desc: "My last JavaScript class assignment in high school was to make a remake of any Commodore64 game. I chose Commando when I was searching the web for some idea, as it's really fun to play fast-paced shooter. It was a really interesting project to do as I had to make everything from the ground-up. Moving, shooting, enemies and their AI, and many more. Despite having only one level it's a very engaging and hard game to play. You should give it a try!",
    link: "Play me on GitHub"
  }
};
var _default = EN;
exports.default = _default;
},{}],"lang/pl.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var PL = {
  greeting: "Cześć!",
  im: "Jestem",
  quick_self_desc: "Student Informatyki i przyszły",
  full_desc: "Od czterech lat interesuję się tworzeniem stron i aplikacji internetowych, przy użyciu najnowszych technologii dostępnych na rynku. W wolnym czasie rozwijam swoje umiejętności i poszerzam wiedzę na temat React.js realizując projekty, które umieszczam na githubie. W osiąganiu określonych celów pomaga mi wytrwałość i determinacja. Ponadto, programowanie w przeszłości przy użyciu wielu języków pozwala mi na łatwiejsze i efektywniejsze przyswajanie nowych technologii. Dodatkowym atutem jest znajomość języka angielskiego na poziomie pozwlającym swobodnie korzystać z dokumentacji i zasobów wiedzy dostępnych w internecie. Moim celem jest nabranie doświadczenia zawodowego dzięki pracy przy komercyjnych projektach i rozwijanie swoich pasji.",
  my_stack: {
    coffee: "Kawa",
    thinking: "Myślenie analityczne",
    curiosity: "Ciekawość"
  },
  info_titles: {
    uni: "Uniwersytet",
    email: "e-mail",
    github: "Github"
  },
  uni: "Politechnika Krakowska im. Tadeusza Kościuszki",
  btn_projects: "Moje prace",
  btn_aboutme: "O mnie",
  technologies: "Stack technologiczny",
  spanish_app: {
    title: "Aplikacja do nauki słówek",
    desc: "W wolnych chwilach uczę się języka hiszpańskiego, więc potrzebowałem jakiegoś narzędzia do powtarzania słownictwa bo inaczej nici z postępów. Z racji moich zainteresowań postanowiłem samemu zrobić taką aplikację zamiast korzystać z tych dostępnych na rynku.W projekcie używam React.js dzięki czemu praca nad projektem jest bardzo przyjemna i satysfakcjonująca. Firebase umożliwia mi dostarczenie każdemu użytkownikowi unikalnych doświadczeń z aplikacją dzięki temu, że każdy może zarządzać swoim własnym słownikiem, by potem korzystając z niego ćwiczyć swoje słownictwo. Prosty ale elegancki desing z pewnością sprawia, że korzystanie z tej aplikacji jest przyjemniejsze.",
    link: "Wypróbuj na GitHub"
  },
  mobile_app: {
    title: "Aplikacja do zarządzania zadaniami",
    desc: "Skoro w sklepach z aplikacjami jest tyle takich jak ta, to dlaczego ja miałbym nie spróbować zrobić jej po swojemu? Możliwość oderwania się od tworzenia wyłącznie stron i aplikacji internetowych na rzecz programowania mobilengo jest dobrym sposobem na otwarcie głowy na świeże pomysły, tak więc zacząłem pracować nad tą aplikacją. Dzięki użyciu React Native zamiast natywnych rozwiązań byłem w stanie napisać aplikację na dwa systemy mając tylko jedną wersję kodu, co sprawia, że praca nad tym projektem jest bardzo prosta i przyjemna.",
    link: "Zobacz na GitHub"
  },
  filterninja: {
    title: "Aplikacja do edytcji filtrów",
    desc: "Jako fan pewnej gry, która ma dość skomplikowany ekosystem narzędzi potrzebnych do wykorzystania wszystkich możliwości w pełni, znalazłem się w sytuacji, w której potrzebowałem czegoś do edycji specjalnego rodzaju plików – filtrów. Z racji tego, że są to zwykłe pliki tekstowe, możnaby je modyfikować w notatniku, ale jest to dość problematyczne ze względu na ich skomplikowaną strukturę. Zdecydowałem się na wykorzystanie technologii Electron w tym projekcie dzięki czemu jestem w stanie przy użyciu React.js i node.js stworzyć aplikacje desktopową i wykorzystać wszystkie dostępne dla niej narzędzia takie jak system plików. Dodatkowo, wykorzystując API daję użytkownikom możliwość użycia w swoich filtrach danych z gry, które pobierane są na żywo.",
    link: "Zobacz na GitHub"
  },
  commando: {
    title: "Port gry z C64",
    desc: "Moim ostatnim zadaniem w technikum na zajęciach z programowania w JavaScript było wykonanie portu jakiejkolwiek gry z Commodore 64. Szukając inspiracji natrafiłem na grę Commando, którą zdecydowałem się wybrać ze względu na to, że jest to bardzo ciekawy i trudny shooter. Był to jeden z najbardziej interesujących projektów, ponieważ wszystko musiałem wykonać sam korzystając jedynie z narzędzi dostępnych w JSie. Zachęcam do przetestowania owoców mojej pracy i sprawdzenia swoich możliwości klikając w poniższy link.",
    link: "Zagraj na GitHub"
  }
};
var _default = PL;
exports.default = _default;
},{}],"gfx/icons/pl.svg":[function(require,module,exports) {
module.exports = "/pl.2acec777.svg";
},{}],"gfx/icons/gb.svg":[function(require,module,exports) {
module.exports = "/gb.fd9329f5.svg";
},{}],"main.js":[function(require,module,exports) {
"use strict";

var _en = _interopRequireDefault(require("./lang/en"));

var _pl = _interopRequireDefault(require("./lang/pl"));

var _pl2 = _interopRequireDefault(require("./gfx/icons/pl.svg"));

var _gb = _interopRequireDefault(require("./gfx/icons/gb.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LANGUAGE = _en.default;
var ELEMENTS = [];

function parseLanguage() {
  LANGUAGE = localStorage.getItem("lang") == "pl" ? _pl.default : _en.default;
  document.querySelector("#language").src = LANGUAGE == _en.default ? _pl2.default : _gb.default;

  if (ELEMENTS.length == 0) {
    document.querySelectorAll("h1,h2,h3,p,b,i,a,label").forEach(function (e) {
      return parseElement(e);
    });
  } else {
    ELEMENTS.forEach(function (e) {
      return parseElement(e.e, e.text);
    });
  }
}

function parseElement(e, inner) {
  var text = inner != undefined ? inner : e.innerHTML;

  while (text.includes("{{") && text.includes("}}")) {
    if (inner == undefined) ELEMENTS.push({
      e: e,
      text: text
    });
    var key = text.substring(text.indexOf("{{") + 2, text.indexOf("}}"));
    var value = key.includes(".") ? LANGUAGE[key.substr(0, key.indexOf("."))][key.substr(key.indexOf(".") + 1, key.length)] : LANGUAGE[key];
    e.innerHTML = text = text.substring(0, text.indexOf("{{")) + value + text.substring(text.indexOf("}}") + 2, text.length);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  parseLanguage();
  setVH();
  setFramesHeights();
  initFrames();
  setInterval(update, 1000 / 60);

  if (window.innerWidth > 600) {
    window.addEventListener("resize", function () {
      setVH();
      setFramesHeights();
      initFrames();
    });
  }

  document.querySelector("#language").addEventListener("click", function () {
    localStorage.setItem("lang", LANGUAGE == _en.default ? "pl" : "en");
    LANGUAGE = LANGUAGE == _en.default ? _pl.default : _en.default;
    parseLanguage();
  });
});

function update() {
  fadeAnimation();
  stepFrames();
}

function setVH() {
  var vh = window.innerHeight / 100;
  console.log("resizing", {
    vh: vh
  });
  document.documentElement.style.setProperty("--vh", "".concat(vh, "px"));
  console.log(document.documentElement.style.getPropertyValue("--vh"));
}

function setFramesHeights() {
  document.querySelectorAll(".display-image, .display-vertical").forEach(function (e) {
    return setHeights(e);
  });
}

function setHeights(display) {
  var img = display.querySelector("img");
  var width = img.width;
  var ratio = img.naturalHeight / img.naturalWidth;

  if (img.complete) {
    // display.style.width = `${Math.round(width)}px`;
    display.style.height = "".concat(Math.round(ratio * width), "px");
  } else {
    img.addEventListener("load", function () {
      var width = img.width;
      var ratio = img.naturalHeight / img.naturalWidth; // display.style.width = `${Math.round(width)}px`;

      display.style.height = "".concat(Math.round(ratio * width), "px");
    });
  }
}

function initFrames() {
  document.querySelectorAll(".display-image").forEach(function (e) {
    var reversed = e.classList.contains("--reversed");
    e.setAttribute("data-timeout", TIMEOUT_MAX);
    e.querySelectorAll("img").forEach(function (f, i) {
      f.style.position = "absolute";
      f.style.left = "".concat((reversed ? i : -i) * f.width, "px");
    });
  });
  document.querySelectorAll(".display-vertical").forEach(function (e) {
    var reversed = e.classList.contains("--reversed");
    e.setAttribute("data-timeout", TIMEOUT_MAX);
    e.querySelectorAll("img").forEach(function (f, i) {
      f.complete ? setVerticalRatio(f, i, reversed) : f.addEventListener("load", function () {
        return setVerticalRatio(f, i, reversed);
      });
    });
  });
}

function setVerticalRatio(img, i, reversed) {
  var ratio = img.naturalHeight / img.naturalWidth;
  img.style.position = "absolute";
  img.style.top = "".concat((reversed ? i : -i) * Math.round(img.width * ratio), "px");
  img.height = Math.round(img.width * ratio);
}

var TIMEOUT_MAX = 240;
var STEP_SPEED_DIVIDER = 40;

function makeStep(display) {
  var vertical = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var timeout = display.getAttribute("data-timeout") || TIMEOUT_MAX;
  var reversed = display.classList.contains("--reversed");
  var imgs = display.querySelectorAll("img");

  if (imgs.length > 2) {
    if (timeout <= 0) {
      for (var i = 0; i < imgs.length; i++) {
        var f = imgs[i];
        var x = vertical ? getTop(f) : getLeft(f);
        var step = (reversed ? -1 : 1) * (vertical ? f.height / STEP_SPEED_DIVIDER : f.width / STEP_SPEED_DIVIDER);

        if (!reversed && x < 0 && x + step >= 0 || reversed && x > 0 && x + step <= 0) {
          display.setAttribute("data-timeout", TIMEOUT_MAX);
          var next = (vertical ? -f.height : -f.width) * (reversed ? -1 : 1);
          var prev = (vertical ? f.height : f.width) * (reversed ? -1 : 1);
          imgs[(i + 1) % imgs.length].style[vertical ? "top" : "left"] = "".concat(next, "px");
          f.style[vertical ? "top" : "left"] = "0px";
          imgs[i > 0 ? (i - 1) % imgs.length : imgs.length - 1].style[vertical ? "top" : "left"] = "".concat(prev, "px");
          break;
        } else {
          f.style[vertical ? "top" : "left"] = "".concat(x + step, "px");
        }
      }
    } else {
      display.setAttribute("data-timeout", timeout - 1);
    }
  }
}

function stepFrames() {
  document.querySelectorAll(".display-image").forEach(function (e) {
    return makeStep(e);
  });
  document.querySelectorAll(".display-vertical").forEach(function (e) {
    return makeStep(e, true);
  });
}

function getLeft(element) {
  return element.style.left != undefined ? Math.round(parseFloat(element.style.left.split("px")[0])) : 0;
}

function getTop(element) {
  return element.style.top != undefined ? Math.round(parseFloat(element.style.top.split("px")[0])) : 0;
}

var fade = {
  titles: ["Front-End Developer", "Web Developer", "Fullstack Developer"],
  counter: 0,
  previous: 1,
  switched: false
};

function fadeAnimation() {
  var b = document.querySelector("header h3 b");

  var _window$getComputedSt = window.getComputedStyle(b),
      opacity = _window$getComputedSt.opacity;

  var titles = fade.titles,
      previous = fade.previous,
      switched = fade.switched;
  var delta = Math.abs(previous - opacity);
  fade.previous = opacity;

  if (opacity <= delta) {
    if (!switched) {
      fade.counter++;
      b.innerHTML = titles[fade.counter % titles.length];
      fade.switched = true;
    }
  } else if (opacity >= 1 - delta) fade.switched = false;
}
},{"./lang/en":"lang/en.js","./lang/pl":"lang/pl.js","./gfx/icons/pl.svg":"gfx/icons/pl.svg","./gfx/icons/gb.svg":"gfx/icons/gb.svg"}],"C:/Users/Szymon/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57997" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/Szymon/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map