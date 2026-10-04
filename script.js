/* ===== МААЛЫМАТТАР =====
   ЭСКЕРТҮҮ: Арабча тексттер кеңири белгилүү зикир/дубалар. Жарыялоодун алдында
   ишенимдүү булак (Хисну-л-муслим, Куран) же дин адиси менен текшерип алыңыз.
   Көбүрөөк зикир кошуу үчүн массивдерге жаңы объект кошуңуз. */

const DHIKRS = [
  { id: "subhan", ar: "سُبْحَانَ اللَّهِ", read: "Субхааналлах", mean: "Аллах бардык кемчиликтен таза." },
  { id: "hamd", ar: "الْحَمْدُ لِلَّهِ", read: "Алхамдулиллах", mean: "Бардык мактоо Аллахка таандык." },
  { id: "akbar", ar: "اللَّهُ أَكْبَرُ", read: "Аллаху акбар", mean: "Аллах эң улуу." },
  { id: "tawhid", ar: "لَا إِلَهَ إِلَّا اللَّهُ", read: "Лаа илааха иллаллах", mean: "Аллахтан башка кудай жок." },
  { id: "istighfar", ar: "أَسْتَغْفِرُ اللَّهَ", read: "Астагфируллах", mean: "Аллахтан кечирим сурайм." }
];

const MORNING = [
  { ar: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
    read: "Бисмиллахиллази лаа язурру маъасмихи шай'ун фил-арды ва лаа фис-самаи ва хувас-самиъул-алийм",
    mean: "Аллахтын аты менен, Анын ысымы менен жерде да, асманда да эч нерсе зыян бере албайт. Ал угуучу, билүүчү.", times: 3 },
  { ar: "حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ",
    read: "Хасбиййаллаху лаа илааха илла хува, алайхи таваккалту ва хува раббул-арш иль-азийм",
    mean: "Мага Аллах жетиштүү. Андан башка кудай жок. Ага таянам, Ал улуу Арштын Ээси.", times: 7 },
  { ar: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ", read: "Субхааналлахи ва бихамдихи",
    mean: "Аллах кемчиликтен таза, Ага мактоолор болсун.", times: 33 }
];

const EVENING = [
  { ar: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",
    read: "Аъуузу бикалимаатиллаахит-таммаати мин шарри маа халак",
    mean: "Аллахтын жеткилең сөздөрү менен Анын жараткандарынын жамандыгынан сыйынам.", times: 3 },
  { ar: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
    read: "Бисмиллахиллази лаа язурру маъасмихи шай'ун фил-арды ва лаа фис-самаи ва хувас-самиъул-алийм",
    mean: "Аллахтын аты менен, Анын ысымы менен эч нерсе зыян бере албайт. Ал угуучу, билүүчү.", times: 3 },
  { ar: "أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ", read: "Астагфируллаха ва атубу илайх",
    mean: "Аллахтан кечирим сурайм жана Ага тообо кылам.", times: 33 }
];

const DUAS = [
  { title: "Тамактан мурун", ar: "بِسْمِ اللَّهِ", read: "Бисмиллах", mean: "Аллахтын аты менен." },
  { title: "Тамактан кийин", ar: "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِينَ",
    read: "Алхамдулиллахиллази атъамана ва сакона ва жаъалана муслимийн",
    mean: "Бизди тамактандырып, сугарган жана мусулман кылган Аллахка мактоолор болсун." },
  { title: "Үйдөн чыкканда", ar: "بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
    read: "Бисмиллахи таваккалту аляллах, лаа хавла ва лаа куввата илла биллах",
    mean: "Аллахтын аты менен, Аллахка таяндым. Аллахтан башка күч-кубат жок." },
  { title: "Үйгө киргенде", ar: "بِسْمِ اللَّهِ وَلَجْنَا وَبِسْمِ اللَّهِ خَرَجْنَا وَعَلَى اللَّهِ رَبِّنَا تَوَكَّلْنَا",
    read: "Бисмиллахи уаладжна, ва бисмиллахи харажна, ва аляллахи роббина таваккальна",
    mean: "Аллахтын аты менен кирдик, Аллахтын аты менен чыктык, Раббибиз Аллахка таяндык." },
  { title: "Уктаар алдында", ar: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا", read: "Биисмика Аллахумма амууту ва ахя",
    mean: "Оо Аллах, Сенин атың менен өлөм жана тирилем." },
  { title: "Ойгонгондо", ar: "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ",
    read: "Алхамдулиллахиллази ахяана баъда маа аматана ва илайхин-нушуур",
    mean: "Бизди өлтүргөндөн кийин тирилткен Аллахка мактоолор болсун. Кайра тирилүү Ага." },
  { title: "Сапарга чыкканда", ar: "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ",
    read: "Субхааналлази саххора лана хаза ва маа кунна лаху мукринийн, ва инна иля роббина лямункалибун",
    mean: "Муну бизге баш ийдирген Аллах таза. Биз аны өзүбүз башкара албайт элек. Биз Раббибизге кайтабыз." }
];

/* ===== АБАЛ ===== */
const KEY = "tasbihState";
let state = { count: 0, target: 33, dhikr: "subhan", dark: false };
const $ = (s) => document.querySelector(s);
const CIRC = 339.3;

/* ===== САКТОО / ЖҮКТӨӨ ===== */
function saveProgress() {
  try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {}
}
function loadProgress() {
  try {
    const s = JSON.parse(localStorage.getItem(KEY));
    if (s) state = { ...state, ...s };
  } catch (e) {}
}

/* ===== UI ЖАҢЫРТУУ ===== */
function render() {
  $("#counter").textContent = state.count;
  $("#goalText").textContent = state.target;
  const p = Math.min((state.count % state.target) / state.target, 1);
  const full = state.count > 0 && state.count % state.target === 0;
  $("#ringFg").style.strokeDashoffset = CIRC * (1 - (full ? 1 : p));
  document.querySelectorAll(".chip").forEach((c) =>
    c.classList.toggle("active", +c.dataset.target === state.target));
  const d = DHIKRS.find((x) => x.id === state.dhikr) || DHIKRS[0];
  $("#currentArabic").textContent = d.ar;
  $("#currentRead").textContent = d.read;
  document.documentElement.dataset.theme = state.dark ? "dark" : "light";
}

/* ===== ЭСЕПТӨӨЧҮ ===== */
function incrementCounter(e) {
  state.count++;
  ripple(e);
  const btn = $("#countBtn");
  btn.classList.add("pop");
  setTimeout(() => btn.classList.remove("pop"), 120);
  if (state.count % 33 === 0 && [33, 66, 99].includes(state.count)) {
    showCompletionMessage(state.count);
  } else if (state.count % state.target === 0) {
    showCompletionMessage(state.target);
  } else {
    vibrate(15);
  }
  render();
  saveProgress();
}

function resetCounter() {
  state.count = 0;
  render();
  saveProgress();
}

function setTarget(n) {
  state.target = n;
  render();
  saveProgress();
}

function selectDhikr(id) {
  state.dhikr = id;
  saveProgress();
  render();
  goTo("tasbih");
}

function showCompletionMessage(n) {
  vibrate(n === 99 ? [100, 60, 100, 60, 200] : [80, 40, 80]);
  const ring = $("#ring");
  ring.classList.remove("done"); void ring.offsetWidth; ring.classList.add("done");
  toast(`${n} зикир аяктады ✓`);
  if (n === 99) confetti();
}

/* ===== ЖАРДАМЧЫЛАР ===== */
function vibrate(p) {
  try { if (navigator.vibrate) navigator.vibrate(p); } catch (e) {}
}
function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toast.id);
  toast.id = setTimeout(() => t.classList.remove("show"), 2200);
}
function ripple(e) {
  const btn = $("#countBtn");
  const r = btn.getBoundingClientRect();
  const size = r.width / 3;
  const x = e && e.clientX ? e.clientX - r.left : r.width / 2;
  const y = e && e.clientY ? e.clientY - r.top : r.height / 2;
  const s = document.createElement("span");
  s.className = "ripple";
  s.style.cssText = `width:${size}px;height:${size}px;left:${x - size / 2}px;top:${y - size / 2}px`;
  btn.appendChild(s);
  setTimeout(() => s.remove(), 600);
}
function confetti() {
  const colors = ["#c9a24b", "#1b5e46", "#ffffff", "#e6c875"];
  for (let i = 0; i < 28; i++) {
    const c = document.createElement("i");
    c.className = "confetti";
    c.style.left = Math.random() * 100 + "vw";
    c.style.background = colors[i % colors.length];
    c.style.animationDelay = Math.random() * 0.4 + "s";
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 2400);
  }
}

/* ===== КАРТАЛАРДЫ ЧЫГАРУУ ===== */
function cardHTML(i, opts) {
  return `<article class="card">
    ${opts.title ? `<h3>${opts.title}</h3>` : ""}
    ${i.times ? `<span class="badge">${i.times} жолу</span>` : ""}
    <p class="arabic" lang="ar" dir="rtl">${i.ar}</p>
    <p class="read">${i.read}</p>
    <p class="meaning">${i.mean}</p>
    ${opts.btn || ""}
  </article>`;
}
function renderLists() {
  $("#dhikrList").innerHTML = DHIKRS.map((d) => cardHTML(d, {
    btn: `<button class="btn-solid" data-dhikr="${d.id}" aria-label="${d.read} менен баштоо">Ушул зикир менен баштоо</button>`
  })).join("");
  $("#morningList").innerHTML = MORNING.map((d) => cardHTML(d, {})).join("");
  $("#eveningList").innerHTML = EVENING.map((d) => cardHTML(d, {})).join("");
  $("#duaList").innerHTML = DUAS.map((d) => cardHTML(d, { title: d.title })).join("");
}

/* ===== НАВИГАЦИЯ ===== */
function goTo(page) {
  document.querySelectorAll(".page").forEach((p) => p.classList.toggle("active", p.id === page));
  document.querySelectorAll(".bottom-nav button").forEach((b) =>
    b.classList.toggle("active", b.dataset.page === page));
  window.scrollTo(0, 0);
}

/* ===== ИШТЕТҮҮ ===== */
loadProgress();
renderLists();
render();

$("#countBtn").addEventListener("click", incrementCounter);
document.querySelectorAll(".chip").forEach((c) =>
  c.addEventListener("click", () => setTarget(+c.dataset.target)));
document.querySelectorAll(".bottom-nav button").forEach((b) =>
  b.addEventListener("click", () => goTo(b.dataset.page)));
$("#dhikrList").addEventListener("click", (e) => {
  const b = e.target.closest("[data-dhikr]");
  if (b) selectDhikr(b.dataset.dhikr);
});
$("#resetBtn").addEventListener("click", () => ($("#modal").hidden = false));
$("#cancelReset").addEventListener("click", () => ($("#modal").hidden = true));
$("#confirmReset").addEventListener("click", () => { resetCounter(); $("#modal").hidden = true; });
$("#themeToggle").addEventListener("click", () => { state.dark = !state.dark; render(); saveProgress(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") $("#modal").hidden = true; });
