function Se(a) {
  a = a.toLowerCase();
  for (var b = !0, c = "", d = 0; d < a.length; d++) {
    var e = a.charAt(d);
    /\.|\!|\?|\n|\r/.test(e)
      ? (b = !0)
      : "" != e.trim() && 1 == b && ((e = e.toUpperCase()), (b = !1)),
      (c += e);
  }
  return (c = _(
    (c =
      "/" == window.location.pathname &&
      -1 == window.location.search.indexOf("skip=i")
        ? c.replace(/\bi\b/g, "I")
        : c)
  ));
}
function ke(a) {
  a = a.toLowerCase();
  for (var b = "", c = 0; c < a.length; c++) {
    var d = a.charAt(c);
    b += c % 2 ? d.toUpperCase() : d;
  }
  return b;
}
function Te(a) {
  return (
    (c = a.toLowerCase()),
    (c = (c + "").replace(/^(\S)|\s+(\S)/g, function (a) {
      return a.toUpperCase();
    })),
    (c = _(c)),
    (c = c.replace(/\(([A-Za-z])/g, function (a) {
      return a.toUpperCase();
    })),
    c
  );
}
function _(c) {
  return (c = c.replace(/\"([A-Za-z])/g, function (a) {
    return a.toUpperCase();
  }));
}
function ke(a) {
  a = a.toLowerCase();
  for (var b = "", c = 0; c < a.length; c++) {
    var d = a.charAt(c);
    b += c % 2 ? d.toUpperCase() : d;
  }
  return b;
}
function Ie(a) {
  for (var s = "", i = 0; i < a.length; i++) {
    var n = a.charAt(i);
    s += n == n.toUpperCase() ? n.toLowerCase() : n.toUpperCase();
  }
  return s;
}
function Be(a) {
  return (a = (a = (a = Te(a)).replace(
    /\b(A|An|And|As|At|But|By|En|For|If|In|Of|On|Or|The|To|Vs?\\.?|Via)\b/g,
    function (_) {
      return _.toLowerCase();
    }
  )).replace(
    /(?:([\.\?!] |\n|^))(a|an|and|as|at|but|by|en|for|if|in|of|on|or|the|to|vs?\\.?|via)/g,
    Te
  ));
}
function xe(_, $, ee) {
  for (var te = "", c = 0; c < _.length; c++) {
    var ne = _.charAt(c),
      re = ne;
    $[(re = ee ? ne.toLowerCase() : re)] ? (te += $[re]) : (te += ne);
  }
  return (te = te.replace(/\n/g, "<br>"));
}
function Ae(_, ee) {
  return _.split("")
    .reduce(function (_, $) {
      return _ + $ + ee;
    }, "")
    .replace(/\n/g, "<br>");
}
function Me(_) {
  -1 < window.location.search.indexOf("hyphenate=true") &&
    ((_.value = _.value.replace(/ /g, "-")),
    (_.placeholder = _.placeholder.replace(/ /g, "-"))),
    -1 < window.location.search.indexOf("stripdashes=true") &&
      ((_.value = _.value.replace(/-/g, " ")),
      (_.placeholder = _.placeholder.replace(/-/g, " "))),
    -1 < window.location.search.indexOf("stripspaces=true") &&
      ((_.value = _.value.replace(/ /g, "")),
      (_.placeholder = _.placeholder.replace(/ /g, "")));
}
function He(_, $) {
  "undefined" != typeof gtag &&
    gtag("event", $, {
      event_category: _,
      value: parseInt(document.getElementById("word_count").innerHTML),
    });
}
function Oe(_) {
  document.getElementById("char_count").innerHTML = _.value.length;
  var $ = 0,
    ee = _.value.trim().replace(/\s+/gi, " ");
  0 < ee.length && ($ = ee.split(" ").length),
    (document.getElementById("word_count").innerHTML = $);
  $ = 0;
  0 < _.value.length && ($ = _.value.split(/\r*\n/).length),
    (document.getElementById("line_count").innerHTML = $);
}
var te;
function je(_, $) {
  clearTimeout(te);
  var ee = document.querySelector(".messages");
  (ee.innerHTML = '<div class="message ' + $ + '">' + _ + "</div>"),
    (te = setTimeout(function () {
      ee.innerHTML = "";
    }, 3e3));
}
var $ = Date.now();
function _e() {
  $ + 5e3 < Date.now() &&
    ((window.aaw = window.aaw || { cmd: [] }).cmd.push(function () {
      window.aaw.refreshAdunits([
        "/153247860/ConvertCase_728x90_ATF",
        "/153247860/ConvertCase_300x250_Belowtxtbox_1",
        "/153247860/ConvertCase_300x250_Belowtxtbox_2",
      ]);
    }),
    ($ = Date.now()));
}
function Re(_, ee) {
  return _.replace(/[\s\S]/g, function (_) {
    var $;
    return (
      ($ = _.charCodeAt().toString(2)),
      (_ = "00000000".slice(String($).length) + $),
      0 == ee ? _ : _ + " "
    );
  });
}
function Ue(_) {
  var $ = (_ = (_ = _.replace(/\s+/g, "")).match(/.{1,8}/g).join(" ")).split(
      " "
    ),
    ee = [];
  for (i = 0; i < $.length; i++)
    ee.push(String.fromCharCode(parseInt($[i], 2)));
  return ee.join("");
}
setInterval(function () {
  var _;
  "visible" ===
    (void 0 !== document.hidden
      ? (_ = "visibilityState")
      : void 0 !== document.mozHidden
      ? (_ = "mozVisibilityState")
      : void 0 !== document.msHidden
      ? (_ = "msVisibilityState")
      : void 0 !== document.webkitHidden && (_ = "webkitVisibilityState"),
    document[_]) &&
    $ + 6e4 < Date.now() &&
    _e();
}, 1e3);
var a,
  b,
  De = {
    0: "???",
    1: "??",
    2: "??",
    3: "??",
    4: "???",
    5: "???",
    6: "???",
    7: "???",
    8: "???",
    9: "???",
    "+": "???",
    "-": "???",
    "=": "???",
    "(": "???",
    ")": "???",
    a: "???",
    b: "???",
    c: "???",
    d: "???",
    e: "???",
    f: "???",
    g: "???",
    h: "??",
    i: "???",
    j: "??",
    k: "???",
    l: "??",
    m: "???",
    n: "???",
    o: "???",
    p: "???",
    q: "???",
    r: "??",
    s: "??",
    t: "???",
    u: "???",
    v: "???",
    w: "??",
    x: "??",
    y: "??",
    z: "???",
  },
  qe = {
    a: "???",
    b: "??",
    c: "???",
    d: "???",
    e: "???",
    f: "???",
    g: "??",
    h: "??",
    i: "??",
    j: "???",
    k: "???",
    l: "??",
    m: "???",
    n: "??",
    o: "???",
    p: "???",
    r: "??",
    s: "???",
    t: "???",
    u: "???",
    v: "???",
    w: "???",
    y: "??",
    z: "???",
  },
  ze = {
    " ": "???",
    0: "???",
    1: "???",
    2: "???",
    3: "???",
    4: "???",
    5: "???",
    6: "???",
    7: "???",
    8: "???",
    9: "???",
    a: "???",
    b: "???",
    c: "???",
    d: "???",
    e: "???",
    f: "???",
    g: "???",
    h: "???",
    i: "???",
    j: "???",
    k: "???",
    l: "???",
    m: "???",
    n: "???",
    o: "???",
    p: "???",
    q: "???",
    r: "???",
    s: "???",
    t: "???",
    u: "???",
    v: "???",
    w: "???",
    x: "???",
    y: "???",
    z: "???",
    A: "???",
    B: "???",
    C: "???",
    D: "???",
    E: "???",
    F: "???",
    G: "???",
    H: "???",
    I: "???",
    J: "???",
    K: "???",
    L: "???",
    M: "???",
    N: "???",
    O: "???",
    P: "???",
    Q: "???",
    R: "???",
    S: "???",
    T: "???",
    U: "???",
    V: "???",
    W: "???",
    X: "???",
    Y: "???",
    Z: "???",
    "!": "???",
    '"': "???",
    "#": "???",
    $: "???",
    "%": "???",
    "&": "???",
    "(": "???",
    ")": "???",
    "*": "???",
    "+": "???",
    ",": "???",
    "-": "???",
    ".": "???",
    "/": "???",
    ":": "???",
    ";": "???",
    "<": "???",
    "=": "???",
    ">": "???",
    "?": "???",
    "@": "???",
    "[": "???",
    "'": "'",
    "]": "???",
    "^": "???",
    _: "???",
    "`": "???",
    "{": "???",
    "|": "???",
    "}": "???",
    "~": "???",
  },
  Fe = {
    A: "????",
    B: "????",
    C: "????",
    D: "????",
    E: "????",
    F: "????",
    G: "????",
    H: "????",
    I: "????",
    J: "????",
    K: "????",
    L: "????",
    M: "????",
    N: "????",
    O: "????",
    P: "????",
    Q: "????",
    R: "????",
    S: "????",
    T: "????",
    U: "????",
    V: "????",
    W: "????",
    X: "????",
    Y: "????",
    Z: "????",
    a: "????",
    b: "????",
    c: "????",
    d: "????",
    e: "????",
    f: "????",
    g: "????",
    h: "????",
    i: "????",
    j: "????",
    k: "????",
    l: "????",
    m: "????",
    n: "????",
    o: "????",
    p: "????",
    q: "????",
    r: "????",
    s: "????",
    t: "????",
    u: "????",
    v: "????",
    w: "????",
    x: "????",
    y: "????",
    z: "????",
    0: "????",
    1: "????",
    2: "????",
    3: "????",
    4: "????",
    5: "????",
    6: "????",
    7: "????",
    8: "????",
    9: "????",
  },
  Pe = {
    A: "????",
    B: "????",
    C: "????",
    D: "????",
    E: "????",
    F: "????",
    G: "????",
    H: "????",
    I: "????",
    J: "????",
    K: "????",
    L: "????",
    M: "????",
    N: "????",
    O: "????",
    P: "????",
    Q: "????",
    R: "????",
    S: "????",
    T: "????",
    U: "????",
    V: "????",
    W: "????",
    X: "????",
    Y: "????",
    Z: "????",
    a: "????",
    b: "????",
    c: "????",
    d: "????",
    e: "????",
    f: "????",
    g: "????",
    h: "????",
    i: "????",
    j: "????",
    k: "????",
    l: "????",
    m: "????",
    n: "????",
    o: "????",
    p: "????",
    q: "????",
    r: "????",
    s: "????",
    t: "????",
    u: "????",
    v: "????",
    w: "????",
    x: "????",
    y: "????",
    z: "????",
  },
  Ne = {
    " ": "???",
    a: "??",
    b: "q",
    c: "??",
    d: "p",
    e: "??",
    f: "??",
    g: "??",
    h: "??",
    i: "???",
    j: "??",
    k: "??",
    l: "l",
    m: "??",
    n: "u",
    o: "o",
    p: "d",
    q: "b",
    r: "??",
    s: "s",
    t: "??",
    u: "n",
    v: "??",
    w: "??",
    x: "x",
    y: "??",
    z: "z",
    A: "???",
    B: "B",
    C: "??",
    D: "???",
    E: "??",
    F: "???",
    G: "??",
    H: "H",
    I: "I",
    J: "??",
    K: "K",
    L: "??",
    M: "W",
    N: "N",
    O: "O",
    P: "??",
    Q: "Q",
    R: "R",
    S: "S",
    T: "???",
    U: "???",
    V: "??",
    W: "M",
    X: "X",
    Y: "???",
    Z: "Z",
    0: "0",
    1: "??",
    2: "???",
    3: "??",
    4: "???",
    5: "??",
    6: "9",
    7: "???",
    8: "8",
    9: "6",
    ",": "'",
    ".": "??",
    "?": "??",
    "!": "??",
    '"': ",,",
    "'": ",",
    "`": ",",
    "(": ")",
    ")": "(",
    "[": "]",
    "]": "[",
    "{": "}",
    "}": "{",
    "<": ">",
    ">": "<",
    "&": "???",
    _: "???",
  },
  Ve = {
    a: "??",
    b: "d",
    c: "??",
    d: "b",
    e: "??",
    f: "??",
    g: "??",
    h: "??",
    i: "i",
    j: "???",
    k: "??",
    l: "l",
    m: "m",
    n: "n",
    o: "o",
    p: "q",
    q: "p",
    r: "??",
    s: "??",
    t: "??",
    u: "u",
    v: "v",
    w: "w",
    x: "x",
    y: "y",
    z: "z",
    A: "A",
    B: "???",
    C: "??",
    D: "???",
    E: "??",
    F: "???",
    G: "???",
    H: "H",
    I: "I",
    J: "???",
    K: "???",
    L: "???",
    M: "M",
    N: "??",
    O: "O",
    P: "???",
    Q: "???",
    R: "??",
    S: "??",
    T: "T",
    U: "U",
    V: "V",
    W: "W",
    X: "X",
    Y: "Y",
    Z: "??",
    0: "0",
    1: "1",
    2: "2",
    3: "??",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    "?": "???",
    ";": "???",
  },
  We = {
    a: "????",
    b: "????",
    c: "????",
    d: "????",
    e: "????",
    f: "????",
    g: "????",
    h: "????",
    i: "????",
    j: "????",
    k: "????",
    l: "????",
    m: "????",
    n: "????",
    o: "????",
    p: "????",
    q: "????",
    r: "????",
    s: "????",
    t: "????",
    u: "????",
    v: "????",
    w: "????",
    x: "????",
    y: "????",
    z: "????",
    A: "????",
    B: "????",
    C: "????",
    D: "????",
    E: "????",
    F: "????",
    G: "????",
    H: "????",
    I: "????",
    J: "????",
    K: "????",
    L: "????",
    M: "????",
    N: "????",
    O: "????",
    P: "????",
    Q: "????",
    R: "????",
    S: "????",
    T: "????",
    U: "????",
    V: "????",
    W: "????",
    X: "????",
    Y: "????",
    Z: "????",
    0: "????",
    1: "????",
    2: "????",
    3: "????",
    4: "????",
    5: "????",
    6: "????",
    7: "????",
    8: "????",
    9: "????",
  },
  Xe = {
    a: "????",
    b: "????",
    c: "????",
    d: "????",
    e: "????",
    f: "????",
    g: "????",
    h: "????",
    i: "????",
    j: "????",
    k: "????",
    l: "????",
    m: "????",
    n: "????",
    o: "????",
    p: "????",
    q: "????",
    r: "????",
    s: "????",
    t: "????",
    u: "????",
    v: "????",
    w: "????",
    x: "????",
    y: "????",
    z: "????",
    A: "????",
    B: "????",
    C: "????",
    D: "????",
    E: "????",
    F: "????",
    G: "????",
    H: "????",
    I: "????",
    J: "????",
    K: "????",
    L: "????",
    M: "????",
    N: "????",
    O: "????",
    P: "????",
    Q: "????",
    R: "????",
    S: "????",
    T: "????",
    U: "????",
    V: "????",
    W: "????",
    X: "????",
    Y: "????",
    Z: "????",
  },
  Je = {
    a: "????",
    b: "????",
    c: "????",
    d: "????",
    e: "????",
    f: "????",
    g: "????",
    h: "????",
    i: "????",
    j: "????",
    k: "????",
    l: "????",
    m: "????",
    n: "????",
    o: "????",
    p: "????",
    q: "????",
    r: "????",
    s: "????",
    t: "????",
    u: "????",
    v: "????",
    w: "????",
    x: "????",
    y: "????",
    z: "????",
    A: "????",
    B: "????",
    C: "????",
    D: "????",
    E: "????",
    F: "????",
    G: "????",
    H: "????",
    I: "????",
    J: "????",
    K: "????",
    L: "????",
    M: "????",
    N: "????",
    O: "????",
    P: "????",
    Q: "????",
    R: "????",
    S: "????",
    T: "????",
    U: "????",
    V: "????",
    W: "????",
    X: "????",
    Y: "????",
    Z: "????",
    0: "????",
    1: "????",
    2: "????",
    3: "????",
    4: "????",
    5: "????",
    6: "????",
    7: "????",
    8: "????",
    9: "????",
  },
  Ye = {
    a: "????",
    b: "????",
    c: "????",
    d: "????",
    e: "????",
    f: "????",
    g: "????",
    h: "????",
    i: "????",
    j: "????",
    k: "????",
    l: "????",
    m: "????",
    n: "????",
    o: "????",
    p: "????",
    q: "????",
    r: "????",
    s: "????",
    t: "????",
    u: "????",
    v: "????",
    w: "????",
    x: "????",
    y: "????",
    z: "????",
    A: "????",
    B: "????",
    C: "????",
    D: "????",
    E: "????",
    F: "????",
    G: "????",
    H: "????",
    I: "????",
    J: "????",
    K: "????",
    L: "????",
    M: "????",
    N: "????",
    O: "????",
    P: "????",
    Q: "????",
    R: "????",
    S: "????",
    T: "????",
    U: "????",
    V: "????",
    W: "????",
    X: "????",
    Y: "????",
    Z: "????",
  },
  Ze = {
    a: "????",
    b: "????",
    c: "????",
    d: "????",
    e: "???",
    f: "????",
    g: "???",
    h: "????",
    i: "????",
    j: "????",
    k: "????",
    l: "????",
    m: "????",
    n: "????",
    o: "???",
    p: "????",
    q: "????",
    r: "????",
    s: "????",
    t: "????",
    u: "????",
    v: "????",
    w: "????",
    x: "????",
    y: "????",
    z: "????",
    A: "????",
    B: "???",
    C: "????",
    D: "????",
    E: "???",
    F: "???",
    G: "????",
    H: "???",
    I: "???",
    J: "????",
    K: "????",
    L: "???",
    M: "???",
    N: "????",
    O: "????",
    P: "????",
    Q: "????",
    R: "???",
    S: "????",
    T: "????",
    U: "????",
    V: "????",
    W: "????",
    X: "????",
    Y: "????",
    Z: "????",
  },
  Ge = {
    a: "????",
    b: "????",
    c: "????",
    d: "????",
    e: "????",
    f: "????",
    g: "????",
    h: "????",
    i: "????",
    j: "????",
    k: "????",
    l: "????",
    m: "????",
    n: "????",
    o: "????",
    p: "????",
    q: "????",
    r: "????",
    s: "????",
    t: "????",
    u: "????",
    v: "????",
    w: "????",
    x: "????",
    y: "????",
    z: "????",
    A: "????",
    B: "????",
    C: "????",
    D: "????",
    E: "????",
    F: "????",
    G: "????",
    H: "????",
    I: "????",
    J: "????",
    K: "????",
    L: "????",
    M: "????",
    N: "????",
    O: "????",
    P: "????",
    Q: "????",
    R: "????",
    S: "????",
    T: "????",
    U: "????",
    V: "????",
    W: "????",
    X: "????",
    Y: "????",
    Z: "????",
    1: "????",
    2: "????",
    3: "????",
    4: "????",
    5: "????",
    6: "????",
    7: "????",
    8: "????",
    9: "????",
    0: "????",
    "!": "???",
    "?": "???",
  },
  Ke = {
    a: "????",
    b: "????",
    c: "????",
    d: "????",
    e: "????",
    f: "????",
    g: "????",
    h: "????",
    i: "????",
    j: "????",
    k: "????",
    l: "????",
    m: "????",
    n: "????",
    o: "????",
    p: "????",
    q: "????",
    r: "????",
    s: "????",
    t: "????",
    u: "????",
    v: "????",
    w: "????",
    x: "????",
    y: "????",
    z: "????",
    A: "????",
    B: "????",
    C: "???",
    D: "????",
    E: "????",
    F: "????",
    G: "????",
    H: "???",
    I: "???",
    J: "????",
    K: "????",
    L: "????",
    M: "????",
    N: "????",
    O: "????",
    P: "????",
    Q: "????",
    R: "???",
    S: "????",
    T: "????",
    U: "????",
    V: "????",
    W: "????",
    X: "????",
    Y: "????",
    Z: "???",
  },
  Qe = {
    a: "????",
    b: "????",
    c: "????",
    d: "????",
    e: "????",
    f: "????",
    g: "????",
    h: "????",
    i: "????",
    j: "????",
    k: "????",
    l: "????",
    m: "????",
    n: "????",
    o: "????",
    p: "????",
    q: "????",
    r: "????",
    s: "????",
    t: "????",
    u: "????",
    v: "????",
    w: "????",
    x: "????",
    y: "????",
    z: "????",
    A: "????",
    B: "????",
    C: "????",
    D: "????",
    E: "????",
    F: "????",
    G: "????",
    H: "????",
    I: "????",
    J: "????",
    K: "????",
    L: "????",
    M: "????",
    N: "????",
    O: "????",
    P: "????",
    Q: "????",
    R: "????",
    S: "????",
    T: "????",
    U: "????",
    V: "????",
    W: "????",
    X: "????",
    Y: "????",
    Z: "????",
    1: "???",
    2: "????",
    3: "????",
    4: "????",
    5: "????",
    6: "????",
    7: "????",
    8: "????",
    9: "????",
    0: "????",
    "?": "???",
  },
  $e = {
    a: "????",
    b: "????",
    c: "????",
    d: "????",
    e: "????",
    f: "????",
    g: "????",
    h: "????",
    i: "????",
    j: "????",
    k: "????",
    l: "????",
    m: "????",
    n: "????",
    o: "????",
    p: "????",
    q: "????",
    r: "????",
    s: "????",
    t: "????",
    u: "????",
    v: "????",
    w: "????",
    x: "????",
    y: "????",
    z: "????",
    A: "????",
    B: "????",
    C: "????",
    D: "????",
    E: "????",
    F: "????",
    G: "????",
    H: "????",
    I: "????",
    J: "????",
    K: "????",
    L: "????",
    M: "????",
    N: "????",
    O: "????",
    P: "????",
    Q: "????",
    R: "????",
    S: "????",
    T: "????",
    U: "????",
    V: "????",
    W: "????",
    X: "????",
    Y: "????",
    Z: "????",
    ".": "???",
  },
  et = {
    a: "????",
    b: "????",
    c: "????",
    d: "????",
    e: "????",
    f: "????",
    g: "????",
    h: "????",
    i: "????",
    j: "????",
    k: "????",
    l: "????",
    m: "????",
    n: "????",
    o: "????",
    p: "????",
    q: "????",
    r: "????",
    s: "????",
    t: "????",
    u: "????",
    v: "????",
    w: "????",
    x: "????",
    y: "????",
    z: "????",
    A: "????",
    B: "????",
    C: "????",
    D: "????",
    E: "????",
    F: "????",
    G: "????",
    H: "????",
    I: "????",
    J: "????",
    K: "????",
    L: "????",
    M: "????",
    N: "????",
    O: "????",
    P: "????",
    Q: "????",
    R: "????",
    S: "????",
    T: "????",
    U: "????",
    V: "????",
    W: "????",
    X: "????",
    Y: "????",
    Z: "????",
  },
  tt = {
    a: "????",
    b: "????",
    c: "????",
    d: "????",
    e: "????",
    f: "????",
    g: "????",
    h: "????",
    i: "????",
    j: "????",
    k: "????",
    l: "????",
    m: "????",
    n: "????",
    o: "????",
    p: "????",
    q: "????",
    r: "????",
    s: "????",
    t: "????",
    u: "????",
    v: "????",
    w: "????",
    x: "????",
    y: "????",
    z: "????",
    A: "????",
    B: "????",
    C: "????",
    D: "????",
    E: "????",
    F: "????",
    G: "????",
    H: "????",
    I: "????",
    J: "????",
    K: "????",
    L: "????",
    M: "????",
    N: "????",
    O: "????",
    P: "????",
    Q: "????",
    R: "????",
    S: "????",
    T: "????",
    U: "????",
    V: "????",
    W: "????",
    X: "????",
    Y: "????",
    Z: "????",
    1: "????",
    2: "????",
    3: "????",
    4: "????",
    5: "????",
    6: "????",
    7: "????",
    8: "????",
    9: "????",
    0: "????",
    "!": "???",
    "?": "???",
    ".": "???",
  },
  nt = {
    a: "???",
    b: "???",
    c: "???",
    d: "???",
    e: "???",
    f: "???",
    g: "???",
    h: "???",
    i: "???",
    j: "???",
    k: "???",
    l: "???",
    m: "???",
    n: "???",
    o: "???",
    p: "???",
    q: "???",
    r: "???",
    s: "???",
    t: "???",
    u: "???",
    v: "???",
    w: "???",
    x: "???",
    y: "???",
    z: "???",
    A: "???",
    B: "???",
    C: "???",
    D: "???",
    E: "???",
    F: "???",
    G: "???",
    H: "???",
    I: "???",
    J: "???",
    K: "???",
    L: "???",
    M: "???",
    N: "???",
    O: "???",
    P: "???",
    Q: "???",
    R: "???",
    S: "???",
    T: "???",
    U: "???",
    V: "???",
    W: "???",
    X: "???",
    Y: "???",
    Z: "???",
    1: "???",
    2: "???",
    3: "???",
    4: "???",
    5: "???",
    6: "???",
    7: "???",
    8: "???",
    9: "???",
    0: "???",
  },
  rt = {
    a: "????",
    b: "????",
    c: "????",
    d: "????",
    e: "????",
    f: "????",
    g: "????",
    h: "????",
    i: "????",
    j: "????",
    k: "????",
    l: "????",
    m: "????",
    n: "????",
    o: "????",
    p: "????",
    q: "????",
    r: "????",
    s: "????",
    t: "????",
    u: "????",
    v: "????",
    w: "????",
    x: "????",
    y: "????",
    z: "????",
    1: "???",
    2: "???",
    3: "???",
    4: "???",
    5: "???",
    6: "???",
    7: "???",
    8: "???",
    9: "???",
    0: "???",
  };
(a = this),
  (b = function () {
    return (
      (n = {
        134: function (t, e, n) {
          "use strict";
          n.d(e, {
            default: function () {
              return r;
            },
          });
          var e = n(279),
            i = n.n(e),
            e = n(370),
            a = n.n(e),
            e = n(817),
            o = n.n(e);
          function c(t) {
            return (c =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  })(t);
          }
          function u(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r);
            }
          }
          var l = (function () {
            function e(t) {
              !(function (t) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this),
                this.resolveOptions(t),
                this.initSelection();
            }
            var t = e,
              n = [
                {
                  key: "resolveOptions",
                  value: function () {
                    var t =
                      0 < arguments.length && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    (this.action = t.action),
                      (this.container = t.container),
                      (this.emitter = t.emitter),
                      (this.target = t.target),
                      (this.text = t.text),
                      (this.trigger = t.trigger),
                      (this.selectedText = "");
                  },
                },
                {
                  key: "initSelection",
                  value: function () {
                    this.text
                      ? this.selectFake()
                      : this.target && this.selectTarget();
                  },
                },
                {
                  key: "createFakeElement",
                  value: function () {
                    var t =
                      "rtl" === document.documentElement.getAttribute("dir");
                    return (
                      (this.fakeElem = document.createElement("textarea")),
                      (this.fakeElem.style.fontSize = "12pt"),
                      (this.fakeElem.style.border = "0"),
                      (this.fakeElem.style.padding = "0"),
                      (this.fakeElem.style.margin = "0"),
                      (this.fakeElem.style.position = "absolute"),
                      (this.fakeElem.style[t ? "right" : "left"] = "-9999px"),
                      (t =
                        window.pageYOffset ||
                        document.documentElement.scrollTop),
                      (this.fakeElem.style.top = "".concat(t, "px")),
                      this.fakeElem.setAttribute("readonly", ""),
                      (this.fakeElem.value = this.text),
                      this.fakeElem
                    );
                  },
                },
                {
                  key: "selectFake",
                  value: function () {
                    var t = this,
                      e = this.createFakeElement();
                    (this.fakeHandlerCallback = function () {
                      return t.removeFake();
                    }),
                      (this.fakeHandler =
                        this.container.addEventListener(
                          "click",
                          this.fakeHandlerCallback
                        ) || !0),
                      this.container.appendChild(e),
                      (this.selectedText = o()(e)),
                      this.copyText(),
                      this.removeFake();
                  },
                },
                {
                  key: "removeFake",
                  value: function () {
                    this.fakeHandler &&
                      (this.container.removeEventListener(
                        "click",
                        this.fakeHandlerCallback
                      ),
                      (this.fakeHandler = null),
                      (this.fakeHandlerCallback = null)),
                      this.fakeElem &&
                        (this.container.removeChild(this.fakeElem),
                        (this.fakeElem = null));
                  },
                },
                {
                  key: "selectTarget",
                  value: function () {
                    (this.selectedText = o()(this.target)), this.copyText();
                  },
                },
                {
                  key: "copyText",
                  value: function () {
                    var e;
                    try {
                      e = document.execCommand(this.action);
                    } catch (t) {
                      e = !1;
                    }
                    this.handleResult(e);
                  },
                },
                {
                  key: "handleResult",
                  value: function (t) {
                    this.emitter.emit(t ? "success" : "error", {
                      action: this.action,
                      text: this.selectedText,
                      trigger: this.trigger,
                      clearSelection: this.clearSelection.bind(this),
                    });
                  },
                },
                {
                  key: "clearSelection",
                  value: function () {
                    this.trigger && this.trigger.focus(),
                      document.activeElement.blur(),
                      window.getSelection().removeAllRanges();
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    this.removeFake();
                  },
                },
                {
                  key: "action",
                  set: function () {
                    if (
                      ((this._action =
                        0 < arguments.length && void 0 !== arguments[0]
                          ? arguments[0]
                          : "copy"),
                      "copy" !== this._action && "cut" !== this._action)
                    )
                      throw new Error(
                        'Invalid "action" value, use either "copy" or "cut"'
                      );
                  },
                  get: function () {
                    return this._action;
                  },
                },
                {
                  key: "target",
                  set: function (t) {
                    if (void 0 !== t) {
                      if (!t || "object" !== c(t) || 1 !== t.nodeType)
                        throw new Error(
                          'Invalid "target" value, use a valid Element'
                        );
                      if ("copy" === this.action && t.hasAttribute("disabled"))
                        throw new Error(
                          'Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute'
                        );
                      if (
                        "cut" === this.action &&
                        (t.hasAttribute("readonly") ||
                          t.hasAttribute("disabled"))
                      )
                        throw new Error(
                          'Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes'
                        );
                      this._target = t;
                    }
                  },
                  get: function () {
                    return this._target;
                  },
                },
              ];
            return u(t.prototype, n), e;
          })();
          function s(t) {
            return (s =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  })(t);
          }
          function f(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r);
            }
          }
          function h(t, e) {
            return (h =
              Object.setPrototypeOf ||
              function (t, e) {
                return (t.__proto__ = e), t;
              })(t, e);
          }
          function p(t) {
            return (p = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                })(t);
          }
          function y(t, e) {
            if (((t = "data-clipboard-".concat(t)), e.hasAttribute(t)))
              return e.getAttribute(t);
          }
          var r = (function () {
            !(function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                e && h(t, e);
            })(o, i());
            var t,
              e,
              n,
              r = (function (n) {
                var r = (function () {
                  if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                  if (Reflect.construct.sham) return !1;
                  if ("function" == typeof Proxy) return !0;
                  try {
                    return (
                      Date.prototype.toString.call(
                        Reflect.construct(Date, [], function () {})
                      ),
                      !0
                    );
                  } catch (t) {
                    return !1;
                  }
                })();
                return function () {
                  var e = p(n),
                    t = r
                      ? ((t = p(this).constructor),
                        Reflect.construct(e, arguments, t))
                      : e.apply(this, arguments),
                    e = this;
                  return !t || ("object" !== s(t) && "function" != typeof t)
                    ? (function () {
                        if (void 0 !== e) return e;
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called"
                        );
                      })()
                    : t;
                };
              })(o);
            function o(t, e) {
              var n;
              return (
                (function (t) {
                  if (!(t instanceof o))
                    throw new TypeError("Cannot call a class as a function");
                })(this),
                (n = r.call(this)).resolveOptions(e),
                n.listenClick(t),
                n
              );
            }
            return (
              (n = [
                {
                  key: "isSupported",
                  value: function () {
                    var t =
                        "string" ==
                        typeof (t =
                          0 < arguments.length && void 0 !== arguments[0]
                            ? arguments[0]
                            : ["copy", "cut"])
                          ? [t]
                          : t,
                      e = !!document.queryCommandSupported;
                    return (
                      t.forEach(function (t) {
                        e = e && !!document.queryCommandSupported(t);
                      }),
                      e
                    );
                  },
                },
              ]),
              (e = [
                {
                  key: "resolveOptions",
                  value: function () {
                    var t =
                      0 < arguments.length && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    (this.action =
                      "function" == typeof t.action
                        ? t.action
                        : this.defaultAction),
                      (this.target =
                        "function" == typeof t.target
                          ? t.target
                          : this.defaultTarget),
                      (this.text =
                        "function" == typeof t.text
                          ? t.text
                          : this.defaultText),
                      (this.container =
                        "object" === s(t.container)
                          ? t.container
                          : document.body);
                  },
                },
                {
                  key: "listenClick",
                  value: function (t) {
                    var e = this;
                    this.listener = a()(t, "click", function (t) {
                      return e.onClick(t);
                    });
                  },
                },
                {
                  key: "onClick",
                  value: function (t) {
                    (t = t.delegateTarget || t.currentTarget),
                      this.clipboardAction && (this.clipboardAction = null),
                      (this.clipboardAction = new l({
                        action: this.action(t),
                        target: this.target(t),
                        text: this.text(t),
                        container: this.container,
                        trigger: t,
                        emitter: this,
                      }));
                  },
                },
                {
                  key: "defaultAction",
                  value: function (t) {
                    return y("action", t);
                  },
                },
                {
                  key: "defaultTarget",
                  value: function (t) {
                    if ((t = y("target", t))) return document.querySelector(t);
                  },
                },
                {
                  key: "defaultText",
                  value: function (t) {
                    return y("text", t);
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    this.listener.destroy(),
                      this.clipboardAction &&
                        (this.clipboardAction.destroy(),
                        (this.clipboardAction = null));
                  },
                },
              ]),
              f((t = o).prototype, e),
              f(t, n),
              o
            );
          })();
        },
        828: function (t) {
          var e;
          "undefined" == typeof Element ||
            Element.prototype.matches ||
            ((e = Element.prototype).matches =
              e.matchesSelector ||
              e.mozMatchesSelector ||
              e.msMatchesSelector ||
              e.oMatchesSelector ||
              e.webkitMatchesSelector),
            (t.exports = function (t, e) {
              for (; t && 9 !== t.nodeType; ) {
                if ("function" == typeof t.matches && t.matches(e)) return t;
                t = t.parentNode;
              }
            });
        },
        438: function (t, e, n) {
          var a = n(828);
          function i(t, e, n, r, o) {
            var i = function (e, n, t, r) {
              return function (t) {
                (t.delegateTarget = a(t.target, n)),
                  t.delegateTarget && r.call(e, t);
              };
            }.apply(this, arguments);
            return (
              t.addEventListener(n, i, o),
              {
                destroy: function () {
                  t.removeEventListener(n, i, o);
                },
              }
            );
          }
          t.exports = function (t, e, n, r, o) {
            return "function" == typeof t.addEventListener
              ? i.apply(null, arguments)
              : "function" == typeof n
              ? i.bind(null, document).apply(null, arguments)
              : ("string" == typeof t && (t = document.querySelectorAll(t)),
                Array.prototype.map.call(t, function (t) {
                  return i(t, e, n, r, o);
                }));
          };
        },
        879: function (t, n) {
          (n.node = function (t) {
            return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType;
          }),
            (n.nodeList = function (t) {
              var e = Object.prototype.toString.call(t);
              return (
                void 0 !== t &&
                ("[object NodeList]" === e ||
                  "[object HTMLCollection]" === e) &&
                "length" in t &&
                (0 === t.length || n.node(t[0]))
              );
            }),
            (n.string = function (t) {
              return "string" == typeof t || t instanceof String;
            }),
            (n.fn = function (t) {
              return "[object Function]" === Object.prototype.toString.call(t);
            });
        },
        370: function (t, e, n) {
          var l = n(879),
            s = n(438);
          t.exports = function (t, e, n) {
            if (!t && !e && !n) throw new Error("Missing required arguments");
            if (!l.string(e))
              throw new TypeError("Second argument must be a String");
            if (!l.fn(n))
              throw new TypeError("Third argument must be a Function");
            if (l.node(t))
              return (
                (a = t).addEventListener((c = e), (u = n)),
                {
                  destroy: function () {
                    a.removeEventListener(c, u);
                  },
                }
              );
            if (l.nodeList(t))
              return (
                (r = t),
                (o = e),
                (i = n),
                Array.prototype.forEach.call(r, function (t) {
                  t.addEventListener(o, i);
                }),
                {
                  destroy: function () {
                    Array.prototype.forEach.call(r, function (t) {
                      t.removeEventListener(o, i);
                    });
                  },
                }
              );
            if (l.string(t)) return s(document.body, t, e, n);
            throw new TypeError(
              "First argument must be a String, HTMLElement, HTMLCollection, or NodeList"
            );
            var r, o, i, a, c, u;
          };
        },
        817: function (t) {
          t.exports = function (t) {
            var e,
              n =
                "SELECT" === t.nodeName
                  ? (t.focus(), t.value)
                  : "INPUT" === t.nodeName || "TEXTAREA" === t.nodeName
                  ? ((e = t.hasAttribute("readonly")) ||
                      t.setAttribute("readonly", ""),
                    t.select(),
                    t.setSelectionRange(0, t.value.length),
                    e || t.removeAttribute("readonly"),
                    t.value)
                  : (t.hasAttribute("contenteditable") && t.focus(),
                    (n = window.getSelection()),
                    (e = document.createRange()).selectNodeContents(t),
                    n.removeAllRanges(),
                    n.addRange(e),
                    n.toString());
            return n;
          };
        },
        279: function (t) {
          function e() {}
          (e.prototype = {
            on: function (t, e, n) {
              var r = this.e || (this.e = {});
              return (r[t] || (r[t] = [])).push({ fn: e, ctx: n }), this;
            },
            once: function (t, e, n) {
              var r = this;
              function o() {
                r.off(t, o), e.apply(n, arguments);
              }
              return (o._ = e), this.on(t, o, n);
            },
            emit: function (t) {
              for (
                var e = [].slice.call(arguments, 1),
                  n = ((this.e || (this.e = {}))[t] || []).slice(),
                  r = 0,
                  o = n.length;
                r < o;
                r++
              )
                n[r].fn.apply(n[r].ctx, e);
              return this;
            },
            off: function (t, e) {
              var n = this.e || (this.e = {}),
                r = n[t],
                o = [];
              if (r && e)
                for (var i = 0, a = r.length; i < a; i++)
                  r[i].fn !== e && r[i].fn._ !== e && o.push(r[i]);
              return o.length ? (n[t] = o) : delete n[t], this;
            },
          }),
            (t.exports = e),
            (t.exports.TinyEmitter = e);
        },
      }),
      (o = {}),
      (r.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return r.d(e, { a: e }), e;
      }),
      (r.d = function (t, e) {
        for (var n in e)
          r.o(e, n) &&
            !r.o(t, n) &&
            Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
      }),
      (r.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      r(134).default
    );
    function r(t) {
      if (o[t]) return o[t].exports;
      var e = (o[t] = { exports: {} });
      return n[t](e, e.exports, r), e.exports;
    }
    var n, o;
  }),
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = b())
    : "function" == typeof define && define.amd
    ? define([], b)
    : "object" == typeof exports
    ? (exports.ClipboardJS = b())
    : (a.ClipboardJS = b()),
  (a = this),
  (b = function () {
    "use strict";
    function c(a, b, c) {
      var d = new XMLHttpRequest();
      d.open("GET", a),
        (d.responseType = "blob"),
        (d.onload = function () {
          g(d.response, b, c);
        }),
        (d.onerror = function () {
          console.error("could not download file");
        }),
        d.send();
    }
    function d(a) {
      var b = new XMLHttpRequest();
      b.open("HEAD", a, !1);
      try {
        b.send();
      } catch (a) {}
      return 200 <= b.status && b.status <= 299;
    }
    function e(a) {
      try {
        a.dispatchEvent(new MouseEvent("click"));
      } catch (c) {
        var b = document.createEvent("MouseEvents");
        b.initMouseEvent(
          "click",
          !0,
          !0,
          window,
          0,
          0,
          0,
          80,
          20,
          !1,
          !1,
          !1,
          !1,
          0,
          null
        ),
          a.dispatchEvent(b);
      }
    }
    var f =
        "object" == typeof window && window.window === window
          ? window
          : "object" == typeof self && self.self === self
          ? self
          : "object" == typeof global && global.global === global
          ? global
          : void 0,
      a =
        f.navigator &&
        /Macintosh/.test(navigator.userAgent) &&
        /AppleWebKit/.test(navigator.userAgent) &&
        !/Safari/.test(navigator.userAgent),
      g =
        f.saveAs ||
        ("object" != typeof window || window !== f
          ? function () {}
          : "download" in HTMLAnchorElement.prototype && !a
          ? function (b, g, h) {
              var i = f.URL || f.webkitURL,
                j = document.createElement("a");
              (g = g || b.name || "download"),
                (j.download = g),
                (j.rel = "noopener"),
                "string" == typeof b
                  ? ((j.href = b),
                    j.origin === location.origin
                      ? e(j)
                      : d(j.href)
                      ? c(b, g, h)
                      : e(j, (j.target = "_blank")))
                  : ((j.href = i.createObjectURL(b)),
                    setTimeout(function () {
                      i.revokeObjectURL(j.href);
                    }, 4e4),
                    setTimeout(function () {
                      e(j);
                    }, 0));
            }
          : "msSaveOrOpenBlob" in navigator
          ? function (f, g, h) {
              var i;
              (g = g || f.name || "download"),
                "string" != typeof f
                  ? navigator.msSaveOrOpenBlob(
                      (function (a, b) {
                        return (
                          void 0 === b
                            ? (b = { autoBom: !1 })
                            : "object" != typeof b &&
                              (console.warn(
                                "Deprecated: Expected third argument to be a object"
                              ),
                              (b = { autoBom: !b })),
                          b.autoBom &&
                          /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(
                            a.type
                          )
                            ? new Blob(["\ufeff", a], { type: a.type })
                            : a
                        );
                      })(f, h),
                      g
                    )
                  : d(f)
                  ? c(f, g, h)
                  : (((i = document.createElement("a")).href = f),
                    (i.target = "_blank"),
                    setTimeout(function () {
                      e(i);
                    }));
            }
          : function (b, h, i, g) {
              if (
                ((g = g || open("", "_blank")) &&
                  (g.document.title = g.document.body.innerText =
                    "downloading..."),
                "string" == typeof b)
              )
                return c(b, h, i);
              var k,
                l,
                m,
                h = "application/octet-stream" === b.type,
                i = /constructor/i.test(f.HTMLElement) || f.safari,
                j = /CriOS\/[\d]+/.test(navigator.userAgent);
              (j || (h && i) || a) && "undefined" != typeof FileReader
                ? (((k = new FileReader()).onloadend = function () {
                    var a = k.result,
                      a = j
                        ? a
                        : a.replace(/^data:[^;]*;/, "data:attachment/file;");
                    g ? (g.location.href = a) : (location = a), (g = null);
                  }),
                  k.readAsDataURL(b))
                : ((l = f.URL || f.webkitURL),
                  (m = l.createObjectURL(b)),
                  g ? (g.location = m) : (location.href = m),
                  (g = null),
                  setTimeout(function () {
                    l.revokeObjectURL(m);
                  }, 4e4));
            });
    (f.saveAs = g.saveAs = g),
      "undefined" != typeof module && (module.exports = g);
  }),
  "function" == typeof define && define.amd
    ? define([], b)
    : "undefined" != typeof exports
    ? b()
    : (b(), (a.FileSaver = {})),
  document.addEventListener("DOMContentLoaded", function () {
    var ne,
      re = document.getElementById("content"),
      $ = '<img src="/img/copy.svg" class="copy" alt="Copy to Clipboard">';
    if (null != re) {
      function _() {
        var _ = re.value;
        "" == _ && (_ = re.placeholder),
          (document.getElementById("output").innerHTML =
            "<h3>" + smallcaps + "</h3><p>" + xe(_, qe, !0) + $ + "</p>"),
          (document.getElementById("output").innerHTML +=
            "<h3>" + superscript + "</h3><p>" + xe(_, De, !0) + $ + "</p>");
      }
      function ee() {
        var _ = re.value;
        "" == _ && (_ = re.placeholder),
          (document.getElementById("output").innerHTML =
            "<h3>" + script + "</h3><p>" + xe(_, Ze, !1) + $ + "</p>"),
          (document.getElementById("output").innerHTML +=
            "<h3>" + script_bold + "</h3><p>" + xe(_, Ge, !1) + $ + "</p>"),
          (document.getElementById("output").innerHTML +=
            "<h3>" + fraktur + "</h3><p>" + xe(_, Ke, !1) + $ + "</p>"),
          (document.getElementById("output").innerHTML +=
            "<h3>" + fraktur_bold + "</h3><p>" + xe(_, Qe, !1) + $ + "</p>"),
          (document.getElementById("output").innerHTML +=
            "<h3>" + circled + "</h3><p>" + xe(_, nt, !1) + $ + "</p>"),
          (document.getElementById("output").innerHTML +=
            "<h3>" +
            circled_inverted +
            "</h3><p>" +
            xe(_, rt, !0) +
            $ +
            "</p>"),
          (document.getElementById("output").innerHTML +=
            "<h3>" + squared + "</h3><p>" + xe(_, $e, !1) + $ + "</p>"),
          (document.getElementById("output").innerHTML +=
            "<h3>" +
            squared_inverted +
            "</h3><p>" +
            xe(_, et, !1) +
            $ +
            "</p>"),
          (document.getElementById("output").innerHTML +=
            "<h3>" + caps + "</h3><p>" + xe(_, qe, !1) + $ + "</p>"),
          (document.getElementById("output").innerHTML +=
            "<h3>" + full + "</h3><p>" + xe(_, ze, !1) + $ + "</p>"),
          (document.getElementById("output").innerHTML +=
            "<h3>" + mono + "</h3><p>" + xe(_, tt, !1) + $ + "</p>"),
          (document.getElementById("output").innerHTML +=
            "<h3>" + sans + "</h3><p>" + xe(_, We, !1) + $ + "</p>"),
          (document.getElementById("output").innerHTML +=
            "<h3>" + sans_italic + "</h3><p>" + xe(_, Xe, !1) + $ + "</p>"),
          (document.getElementById("output").innerHTML +=
            "<h3>" + sans_bold + "</h3><p>" + xe(_, Je, !1) + $ + "</p>"),
          (document.getElementById("output").innerHTML +=
            "<h3>" +
            sans_bold_italic +
            "</h3><p>" +
            xe(_, Ye, !1) +
            $ +
            "</p>");
      }
      function te() {
        var _ = re.value;
        "" == _ && (_ = re.placeholder),
          (document.getElementById("output").innerHTML =
            "<p>" + xe(_, nt, !1) + $ + "</p>"),
          (document.getElementById("output").innerHTML +=
            "<p>" + xe(_, rt, !0) + $ + "</p>");
      }
      function oe() {
        var _ = re.value;
        "" == _ && (_ = re.placeholder),
          (document.getElementById("output").innerHTML =
            "<p>" + xe(_, ze, !1) + "</p>");
      }
      function ie() {
        var _ = re.value;
        "" == _ && (_ = re.placeholder),
          (document.getElementById("output").innerHTML =
            "<p>" + xe(_, Fe, !1) + "</p>");
      }
      function ae() {
        var _ = re.value;
        "" == _ && (_ = re.placeholder),
          (document.getElementById("output").innerHTML =
            "<p>" + xe(_, Pe, !1) + "</p>");
      }
      function ce() {
        var _ = re.value;
        "" == _ && (_ = re.placeholder),
          (document.getElementById("output").innerHTML =
            "<p>" + Ae(_, "??") + "</p>");
      }
      function ue() {
        var _ = re.value;
        "" == _ && (_ = re.placeholder),
          (document.getElementById("output").innerHTML =
            "<p>" +
            (function (a) {
              for (var _ = [], $ = [], ee = [], i = 768; i <= 789; i++)
                _.push(String.fromCharCode(i));
              for (i = 790; i <= 819; i++)
                794 != i && 795 != i && ee.push(String.fromCharCode(i));
              for (
                _.push(String.fromCharCode(794)),
                  _.push(String.fromCharCode(795)),
                  i = 820;
                i <= 824;
                i++
              )
                $.push(String.fromCharCode(i));
              for (i = 825; i <= 828; i++) ee.push(String.fromCharCode(i));
              for (i = 829; i <= 836; i++) _.push(String.fromCharCode(i));
              _.push(String.fromCharCode(836)),
                ee.push(String.fromCharCode(837)),
                _.push(String.fromCharCode(838)),
                ee.push(String.fromCharCode(839)),
                ee.push(String.fromCharCode(840)),
                ee.push(String.fromCharCode(841)),
                _.push(String.fromCharCode(842)),
                _.push(String.fromCharCode(843)),
                _.push(String.fromCharCode(844)),
                ee.push(String.fromCharCode(845)),
                ee.push(String.fromCharCode(846)),
                _.push(String.fromCharCode(848)),
                _.push(String.fromCharCode(849)),
                _.push(String.fromCharCode(850)),
                ee.push(String.fromCharCode(851)),
                ee.push(String.fromCharCode(852)),
                ee.push(String.fromCharCode(853)),
                ee.push(String.fromCharCode(854)),
                _.push(String.fromCharCode(855)),
                _.push(String.fromCharCode(856)),
                ee.push(String.fromCharCode(857)),
                ee.push(String.fromCharCode(858)),
                _.push(String.fromCharCode(859)),
                ee.push(String.fromCharCode(860)),
                _.push(String.fromCharCode(861)),
                _.push(String.fromCharCode(861)),
                ee.push(String.fromCharCode(863)),
                _.push(String.fromCharCode(864)),
                _.push(String.fromCharCode(865));
              for (var b = "", c = 0; c < a.length; c++) {
                var d = a.charAt(c);
                if (!/\s/.test(d)) {
                  d += $[Math.floor(Math.random() * $.length)];
                  for (
                    var te = _.length - 1, ne = 0, re = 10 - 10 * Math.random();
                    ne < re;
                    ne++
                  )
                    d += _[Math.floor(Math.random() * te)];
                  for (
                    var oe = ee.length - 1,
                      ne = 0,
                      re = 10 - 10 * Math.random();
                    ne < re;
                    ne++
                  )
                    d += ee[Math.floor(Math.random() * oe)];
                }
                b += d;
              }
              return (b = b.replace(/\n/g, "<br>"));
            })(_) +
            "</p>");
      }
      function le() {
        var _ = (_ = "" == (_ = re.value) ? re.placeholder : _)
          .split("")
          .reverse()
          .join("");
        document.getElementById("output").innerHTML =
          "<p>" + xe(_, Ne, !1) + "</p>";
      }
      function de() {
        var _ = (_ = "" == (_ = re.value) ? re.placeholder : _)
          .split("")
          .reverse()
          .join("");
        document.getElementById("output").innerHTML =
          "<p>" + xe(_, Ve, !1) + "</p>";
      }
      function se() {
        var _ = re.value;
        "" == _ && (_ = re.placeholder),
          (document.getElementById("output").innerHTML =
            "<p>" + Ae(_, "??") + "</p>");
      }
      function pe() {
        var _ = re.value;
        "" == _ && (_ = re.placeholder),
          (document.getElementById("output").innerHTML =
            "<p>" +
            _.split("").reverse().join("").replace(/\n/g, "<br>") +
            "</p>");
      }
      function fe(_) {
        var $ = re,
          ee = "translated";
        _ && (($ = ne), (ee = "content"));
        var te = $.value;
        "" == te && (te = $.placeholder),
          (document.getElementById(ee).value = (function (_, $) {
            var ee = {
              a: ".-",
              b: "-...",
              c: "-.-.",
              d: "-..",
              e: ".",
              f: "..-.",
              g: "--.",
              h: "....",
              i: "..",
              j: ".---",
              k: "-.-",
              l: ".-..",
              m: "--",
              n: "-.",
              o: "---",
              p: ".--.",
              q: "--.-",
              r: ".-.",
              s: "...",
              t: "-",
              u: "..-",
              v: "...-",
              w: ".--",
              x: "-..-",
              y: "-.--",
              z: "--..",
              1: ".----",
              2: "..---",
              3: "...--",
              4: "....-",
              5: ".....",
              6: "-....",
              7: "--...",
              8: "---..",
              9: "----.",
              0: "-----",
              ".": ".-.-.-",
              ",": "--..--",
              "?": "..--..",
              "'": ".----.",
              "/": "-..-.",
              "(": "-.--.",
              ")": "-.--.-",
              "&": ".-...",
              ":": "---...",
              ";": "-.-.-.",
              "=": "-...-",
              "+": ".-.-.",
              "-": "-....-",
              _: "..--.-",
              '"': ".-..-.",
              $: "...-..-",
              "!": "-.-.--",
              "@": ".--.-.",
              " ": "/",
            };
            if ($) {
              var k,
                te = {};
              for (k in ee) ee.hasOwnProperty(k) && (te[ee[k]] = k);
              return (
                (ee = te),
                Se(
                  (_ = (_ = _.replace(/\_/g, "-")).replace(/\|/g, "/"))
                    .split(" ")
                    .filter(function (v) {
                      return ee.hasOwnProperty(v.toLowerCase());
                    })
                    .map(function (v) {
                      return ee[v.toLowerCase()];
                    })
                    .join("")
                )
              );
            }
            return _.split("")
              .filter(function (v) {
                return ee.hasOwnProperty(v.toLowerCase());
              })
              .map(function (v) {
                return ee[v.toLowerCase()].toUpperCase();
              })
              .join(" ")
              .replace(/,\/,/g, "/");
          })(te, _)),
          _ && Oe(re);
      }
      function he(_) {
        var $ = re,
          ee = "translated";
        _ && (($ = ne), (ee = "content"));
        var te = $.value;
        "" == te && (te = $.placeholder),
          _
            ? ((document.getElementById(ee).value = Ue(te)), Oe(re))
            : (document.getElementById(ee).value = Re(te));
      }
      function me() {
        var _ = re.value;
        "" == _ && (_ = re.placeholder),
          (document.getElementById("output").innerHTML =
            "<p>" + Be(_).replace(/\n/g, "<br>") + "</p>");
      }
      function ve() {
        var _ = re.value;
        "" == _ && (_ = re.placeholder),
          (document.getElementById("output").innerHTML =
            "<p>" + Se(_).replace(/\n/g, "<br>") + "</p>");
      }
      document.getElementById("upper") &&
        document
          .getElementById("upper")
          .addEventListener("click", function (e) {
            return (
              e.preventDefault(),
              (re.value = re.value.toUpperCase()),
              (re.placeholder = re.placeholder.toUpperCase()),
              Me(re),
              He("Convert", "Upper"),
              _e(),
              !1
            );
          }),
        document.getElementById("lower") &&
          document
            .getElementById("lower")
            .addEventListener("click", function (e) {
              return (
                e.preventDefault(),
                (re.value = re.value.toLowerCase()),
                (re.placeholder = re.placeholder.toLowerCase()),
                Me(re),
                He("Convert", "Lower"),
                _e(),
                !1
              );
            }),
        document.getElementById("capitalized") &&
          document
            .getElementById("capitalized")
            .addEventListener("click", function (e) {
              return (
                e.preventDefault(),
                (re.value = Te(re.value.toLowerCase())),
                (re.placeholder = Te(re.placeholder.toLowerCase())),
                Me(re),
                He("Convert", "Capitalized"),
                _e(),
                !1
              );
            }),
        document.getElementById("sentence") &&
          document
            .getElementById("sentence")
            .addEventListener("click", function (e) {
              return (
                e.preventDefault(),
                (re.value = Se(re.value)),
                (re.placeholder = Se(re.placeholder)),
                Me(re),
                He("Convert", "Sentence"),
                _e(),
                !1
              );
            }),
        document.getElementById("alternating") &&
          document
            .getElementById("alternating")
            .addEventListener("click", function (e) {
              return (
                e.preventDefault(),
                (re.value = ke(re.value)),
                (re.placeholder = ke(re.placeholder)),
                Me(re),
                He("Convert", "Alternating"),
                _e(),
                !1
              );
            }),
        document.getElementById("inverse") &&
          document
            .getElementById("inverse")
            .addEventListener("click", function (e) {
              return (
                e.preventDefault(),
                (re.value = Ie(re.value)),
                (re.placeholder = Ie(re.placeholder)),
                Me(re),
                He("Convert", "Inverse"),
                _e(),
                !1
              );
            }),
        document.getElementById("title") &&
          document
            .getElementById("title")
            .addEventListener("click", function (e) {
              return (
                e.preventDefault(),
                (re.value = Be(re.value)),
                (re.placeholder = Be(re.placeholder)),
                Me(re),
                He("Convert", "Title"),
                _e(),
                !1
              );
            }),
        document.getElementById("clear") &&
          document
            .getElementById("clear")
            .addEventListener("click", function (e) {
              return (
                e.preventDefault(),
                (re.value = ""),
                (re.placeholder = Se(re.placeholder.toLowerCase())),
                Oe(re),
                He("Clear", "Clear"),
                _e(),
                !1
              );
            }),
        document.getElementById("smalltext") &&
          (_(),
          re.addEventListener("input", function (e) {
            _(), _e();
          }),
          re.addEventListener("propertychange", function (e) {
            _(), _e();
          })),
        document.getElementById("unicode") &&
          (ee(),
          re.addEventListener("input", function (e) {
            ee(), _e();
          }),
          re.addEventListener("propertychange", function (e) {
            ee(), _e();
          })),
        document.getElementById("bubble") &&
          (te(),
          re.addEventListener("input", function (e) {
            te(), _e();
          }),
          re.addEventListener("propertychange", function (e) {
            te(), _e();
          })),
        document.getElementById("widetext") &&
          (oe(),
          re.addEventListener("input", function (e) {
            oe(), _e();
          }),
          re.addEventListener("propertychange", function (e) {
            oe(), _e();
          })),
        document.getElementById("boldtext") &&
          (ie(),
          re.addEventListener("input", function (e) {
            ie(), _e();
          }),
          re.addEventListener("propertychange", function (e) {
            ie(), _e();
          })),
        document.getElementById("italictext") &&
          (ae(),
          re.addEventListener("input", function (e) {
            ae(), _e();
          }),
          re.addEventListener("propertychange", function (e) {
            ae(), _e();
          })),
        document.getElementById("underlinetext") &&
          (ce(),
          re.addEventListener("input", function (e) {
            ce(), _e();
          }),
          re.addEventListener("propertychange", function (e) {
            ce(), _e();
          })),
        document.getElementById("glitchtext") &&
          (ue(),
          re.addEventListener("input", function (e) {
            ue(), _e();
          }),
          re.addEventListener("propertychange", function (e) {
            ue(), _e();
          })),
        document.getElementById("upsidedown") &&
          (le(),
          re.addEventListener("input", function (e) {
            le(), _e();
          }),
          re.addEventListener("propertychange", function (e) {
            le(), _e();
          })),
        document.getElementById("mirror") &&
          (de(),
          re.addEventListener("input", function (e) {
            de(), _e();
          }),
          re.addEventListener("propertychange", function (e) {
            de(), _e();
          })),
        document.getElementById("strikethrough") &&
          (se(),
          re.addEventListener("input", function (e) {
            se(), _e();
          }),
          re.addEventListener("propertychange", function (e) {
            se(), _e();
          })),
        document.getElementById("backwards") &&
          (pe(),
          re.addEventListener("input", function (e) {
            pe(), _e();
          }),
          re.addEventListener("propertychange", function (e) {
            pe(), _e();
          })),
        document.getElementById("morse") &&
          ((ne = document.getElementById("translated")),
          fe(!1),
          re.addEventListener("input", function (e) {
            fe(!1), _e();
          }),
          re.addEventListener("propertychange", function (e) {
            fe(!1), _e();
          }),
          ne.addEventListener("input", function (e) {
            fe(!0), _e();
          }),
          ne.addEventListener("propertychange", function (e) {
            fe(!0), _e();
          }),
          ("AudioContext" in window || "webkitAudioContext" in window) &&
            document
              .getElementById("playmorse")
              .addEventListener("click", function (e) {
                !(function (_) {
                  var $ = new (window.AudioContext ||
                      window.webkitAudioContext)(),
                    t = $.currentTime,
                    ee = $.createOscillator();
                  (ee.type = "sine"), (ee.frequency.value = 600);
                  var te = $.createGain();
                  te.gain.setValueAtTime(0, t),
                    _.split("").forEach(function (_) {
                      switch (_) {
                        case ".":
                          te.gain.setValueAtTime(1, t),
                            (t += 0.08),
                            te.gain.setValueAtTime(0, t),
                            (t += 0.08);
                          break;
                        case "-":
                          te.gain.setValueAtTime(1, t),
                            (t += 0.24),
                            te.gain.setValueAtTime(0, t),
                            (t += 0.08);
                          break;
                        case " ":
                        case "/":
                          t += 0.56;
                      }
                    }),
                    ee.connect(te),
                    te.connect($.destination),
                    ee.start();
                })(document.getElementById("translated").value),
                  _e();
              })),
        document.getElementById("binary") &&
          ((ne = document.getElementById("translated")),
          he(!1),
          re.addEventListener("input", function (e) {
            he(!1), _e();
          }),
          re.addEventListener("propertychange", function (e) {
            he(!1), _e();
          }),
          ne.addEventListener("input", function (e) {
            he(!0), _e();
          }),
          ne.addEventListener("propertychange", function (e) {
            he(!0), _e();
          })),
        document.getElementById("titlecase") &&
          (me(),
          re.addEventListener("input", function (e) {
            me(), _e();
          }),
          re.addEventListener("propertychange", function (e) {
            me(), _e();
          })),
        document.getElementById("sentencecase") &&
          (ve(),
          re.addEventListener("input", function (e) {
            ve(), _e();
          }),
          re.addEventListener("propertychange", function (e) {
            ve(), _e();
          })),
        re.addEventListener("focus", function () {
          Oe(re);
        }),
        re.addEventListener("blur", function () {
          Oe(re);
        }),
        re.addEventListener("input", function () {
          Oe(re);
        }),
        re.addEventListener("propertychange", function () {
          Oe(re);
        }),
        Oe(re);
      var ge = new ClipboardJS("#copy", {
        text: function (_) {
          return document.querySelectorAll(
            _.getAttribute("data-clipboard-target")
          )[0].innerText;
        },
      });
      ge.on("success", function (e) {
        je(copied, "success"), He("Copied", "Copied"), _e(), e.clearSelection();
      }),
        ge.on("error", function (e) {
          je(manual_copy, "info"), He("Copied", "Manual"), _e();
        });
      ge = new ClipboardJS(".copy", {
        text: function (_) {
          return _.parentNode.innerText;
        },
      });
      ge.on("success", function (e) {
        je(copied, "success"), He("Copied", "Copied"), _e(), e.clearSelection();
      }),
        ge.on("error", function (e) {
          je(manual_copy, "info"), He("Copied", "Manual"), _e();
        });
      try {
        new Blob();
        var ye = document.getElementById("download");
        ye &&
          ((ye.style.display = "inline-block"),
          ye.addEventListener("click", function (e) {
            var _;
            return (
              0 == re.length
                ? je(no_text, "error")
                : ((_ = (
                    "innerText" === ye.getAttribute("data-download-type")
                      ? document.getElementById(
                          ye.getAttribute("data-download-target").slice(1)
                        ).innerText
                      : document.getElementById(
                          ye.getAttribute("data-download-target").slice(1)
                        ).value
                  ).replace(/\n/g, "\r\n")),
                  (_ = new Blob([_], { type: "text/plain;charset=utf-8" })),
                  saveAs(_, file_name),
                  je(downloaded, "success"),
                  He("Download", "Download"),
                  _e()),
              !1
            );
          }));
      } catch (e) {}
      for (
        var Ee = document.querySelectorAll(".share"), i = 0;
        i < Ee.length;
        i++
      )
        Ee[i].addEventListener("click", function (_) {
          var $, ee, te, ne;
          return (
            _.preventDefault(),
            ($ = this.href),
            (ee = 520),
            (te = 320),
            (ne = screen.width / 2 - ee / 2),
            (_ = screen.height / 2 - te / 2),
            window.open(
              $,
              "",
              "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=" +
                ee +
                ",height=" +
                te +
                ",top=" +
                _ +
                ",left=" +
                ne
            ),
            !1
          );
        });
    }
    var be = document.getElementById("menu");
    be.classList.add("js");
    var we = window.location.pathname.split("/")[1];
    function Ce() {
      for (var _ = be.children, i = 0; i < _.length; i++) {
        var $ = _[i].childNodes[0];
        (("" == we && 0 == i) ||
          ("" != we &&
            -1 < $.getAttribute("href").indexOf("/" + we + "/") &&
            -1 < !$.getAttribute("href").indexOf("onlinenotepad"))) &&
          $.classList.add("active"),
          _[i].classList.remove("overflowed"),
          _[i].classList.contains("more") && _[i].parentNode.removeChild(_[i]);
      }
      var ee,
        te = document.getElementById("container").clientWidth,
        ne = te - 60,
        re = !1,
        oe = "";
      if (te < be.scrollWidth)
        for (_ = be.children, i = 0; i < _.length; i++) {
          var ie = _[i].clientWidth;
          !re && 0 <= ne - ie
            ? (ne -= ie)
            : ((re = !0),
              _[i].classList.add("overflowed"),
              (oe +=
                "<li>" +
                _[i].innerHTML.replace("<br>", " ").replace("&nbsp;", " ") +
                "</li>"));
        }
      re &&
        ((be.innerHTML +=
          '<li class="more"><a href="#">More<br>Tools</a><ul>' +
          oe +
          "</ul></li>"),
        (ee = document.querySelectorAll("#menu .more ul")[0]),
        document
          .querySelectorAll("#menu .more > a")[0]
          .addEventListener("click", function (e) {
            return (
              e.preventDefault(), ee.parentNode.classList.toggle("open"), !1
            );
          }));
    }
    Ce();
    var Le = window.innerWidth;
    window.onresize = function (_) {
      window.innerWidth != Le && Ce();
    };
  }),
  "serviceWorker" in navigator && navigator.serviceWorker.register("/sw.js");
