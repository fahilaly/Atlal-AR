// ============================
// Site Data
// ============================
const sites = {
    quba: {
        id: 'quba',
        name: { ar: 'مسجد قباء', en: 'Quba Mosque' },
        era: { ar: 'العهد النبوي', en: 'Prophetic Era' },
        location: { ar: 'المدينة المنورة', en: 'Madinah' },
        desc: { ar: 'أول مسجد بُني في الإسلام، أسسه النبي ﷺ عند وصوله المدينة المنورة.', en: 'The first mosque built in Islam, founded by the Prophet ﷺ upon his arrival in Madinah.' },
        about: {
            ar: 'مسجد قباء هو أول مسجد بُني في الإسلام. أسسه النبي محمد ﷺ عند وصوله إلى المدينة المنورة مهاجراً من مكة المكرمة. ذُكر في القرآن الكريم بأنه المسجد الذي أُسّس على التقوى. عبر تقنية الواقع المعزز، يمكنك مشاهدة إعادة بناء ثلاثية الأبعاد للمسجد كما كان في العهد النبوي بجدرانه البسيطة وأعمدته من جذوع النخل.',
            en: 'Quba Mosque is the first mosque ever built in Islam. It was founded by Prophet Muhammad ﷺ upon his arrival in Madinah after migrating from Makkah. It is mentioned in the Quran as "the mosque founded on piety." Through AR technology, you can see a 3D reconstruction of the mosque as it was during the Prophetic era.'
        },
        narratorDesc: { ar: 'رواية تفاعلية بالذكاء الاصطناعي عن تاريخ أول مسجد في الإسلام', en: 'AI narration about the history of the first mosque in Islam' },
        arCaption: { ar: 'مسجد قباء — إعادة بناء ثلاثية الأبعاد', en: 'Quba Mosque — 3D Reconstruction' },
        arDesc: { ar: 'ما تراه هو إعادة بناء رقمية للمسجد كما كان في العهد النبوي.', en: 'What you see is a digital reconstruction of the mosque as it was during the Prophetic Era.' },
        scannerImg: 'images/quba_modern.png?v=2',
        cardImg: 'images/quba_card.png',
        arImg: 'images/quba_ar.png',
        audioFile: { ar: 'audio/quba_ar.mp3', en: 'audio/quba_en.mp3' },
        mapUrl: 'https://maps.google.com/?q=24.4397,39.6170',
        hotspots: [
            { top: '72%', left: '45%', label: { ar: 'بئر الوضوء', en: 'Ablution Well' } },
            { top: '48%', left: '40%', label: { ar: 'أعمدة جذوع النخل', en: 'Palm Trunk Pillars' } },
            { top: '32%', left: '55%', label: { ar: 'سقف جريد النخل', en: 'Palm Leaf Roof' } }
        ],
        scenes: [
            { icon: 'ri-layout-grid-line', label: { ar: 'الفناء المفتوح', en: 'Open Courtyard' }, cls: 'quba-card-art' },
            { icon: 'ri-hammer-line', label: { ar: 'الجدران الأصلية', en: 'Original Walls' }, cls: 'dark-art' },
            { icon: 'ri-community-line', label: { ar: 'منطقة الصلاة', en: 'Prayer Area' }, cls: 'gold-art' }
        ],
        narrationScript: {
            ar: 'مسجد قباء هو أول مسجد أُسِّس في الإسلام. بناه النبي محمد صلى الله عليه وسلم عند وصوله إلى المدينة المنورة في السنة الأولى للهجرة. كان المسجد بسيطاً، جدرانه من الطوب اللبن وأعمدته من جذوع النخل وسقفه من جريد النخل. ذُكر في القرآن الكريم بأنه المسجد الذي أُسِّس على التقوى من أول يوم. كان النبي يزوره كل سبت ويصلي فيه ركعتين. اليوم يُعد من أهم المعالم الإسلامية في المدينة المنورة.',
            en: 'Quba Mosque is the first mosque ever built in Islam. It was founded by Prophet Muhammad, peace be upon him, upon his arrival in Madinah in the first year of Hijra. The original mosque was simple, with mud brick walls, palm trunk pillars, and a roof made of palm leaves. It is mentioned in the Holy Quran as the mosque that was founded on piety from the first day. The Prophet used to visit it every Saturday and pray two units of prayer there. Today it stands as one of the most important Islamic landmarks in Madinah.'
        },
        distance: { ar: '٢.٣ كم', en: '2.3 km' },
        crowd: 'quiet'
    },
    ain: {
        id: 'ain',
        name: { ar: 'عين زبيدة', en: 'Ain Zubaida' },
        era: { ar: 'العصر العباسي', en: 'Abbasid Era' },
        location: { ar: 'مكة المكرمة', en: 'Makkah' },
        desc: { ar: 'قناة مياه تاريخية بنتها الملكة زبيدة لإيصال المياه لحجاج بيت الله الحرام.', en: 'A historic water canal built by Queen Zubaida to supply water to the pilgrims of Makkah.' },
        about: {
            ar: 'عين زبيدة هي منظومة مائية تاريخية أمرت ببنائها السيدة زبيدة بنت جعفر، زوجة الخليفة العباسي هارون الرشيد، في القرن التاسع الميلادي. تمتد القناة من وادي نعمان إلى مكة المكرمة بطول يزيد عن ٣٥ كيلومتراً عبر الجبال والأودية، لتوفر المياه لحجاج بيت الله الحرام. تُعد من أعظم المشاريع الهندسية في التاريخ الإسلامي.',
            en: 'Ain Zubaida is a historic water system commissioned by Lady Zubaida bint Jaafar, wife of Abbasid Caliph Harun al-Rashid, in the 9th century CE. The canal extends over 35 kilometers from Wadi Nu\'man to Makkah through mountains and valleys, supplying water to pilgrims. It is considered one of the greatest engineering projects in Islamic history.'
        },
        narratorDesc: { ar: 'رواية عن أعظم مشروع مائي في تاريخ مكة المكرمة', en: 'A narration about the greatest water project in the history of Makkah' },
        arCaption: { ar: 'عين زبيدة — إعادة بناء ثلاثية الأبعاد', en: 'Ain Zubaida — 3D Reconstruction' },
        arDesc: { ar: 'ما تراه هو إعادة بناء رقمية لقناة المياه كما كانت في العصر العباسي.', en: 'What you see is a digital reconstruction of the water canal as it was during the Abbasid Era.' },
        scannerImg: 'images/ain_modern.png',
        cardImg: 'images/makkah.png',
        arImg: 'images/ain_old.png',
        audioFile: { ar: 'audio/ain_ar.mp3', en: 'audio/ain_en.mp3' },
        mapUrl: 'https://maps.google.com/?q=21.3891,39.8579',
        hotspots: [
            { top: '55%', left: '35%', label: { ar: 'القنوات الحجرية', en: 'Stone Channels' } },
            { top: '40%', left: '55%', label: { ar: 'الأقواس الحاملة', en: 'Support Arches' } },
            { top: '65%', left: '60%', label: { ar: 'مجرى المياه', en: 'Water Flow' } }
        ],
        scenes: [
            { icon: 'ri-drop-line', label: { ar: 'مجرى المياه', en: 'Water Channel' }, cls: 'ain-card-art' },
            { icon: 'ri-ancient-gate-line', label: { ar: 'الأقواس الحجرية', en: 'Stone Arches' }, cls: 'dark-art' },
            { icon: 'ri-landscape-line', label: { ar: 'منظر الوادي', en: 'Valley View' }, cls: 'gold-art' }
        ],
        narrationScript: {
            ar: 'عين زبيدة، واحدة من أعظم المشاريع الهندسية في التاريخ الإسلامي. أمرت ببنائها السيدة زبيدة بنت جعفر، زوجة الخليفة العباسي هارون الرشيد، في القرن التاسع الميلادي. تمتد القناة لأكثر من خمسة وثلاثين كيلومتراً من وادي نعمان إلى مكة المكرمة عبر الجبال والأودية. كانت تنقل المياه العذبة لحجاج بيت الله الحرام. استخدمت تقنيات هندسية متقدمة تشمل الأقواس الحجرية والأنفاق والقنوات المكشوفة. لا تزال آثارها شاهدة على عظمة الحضارة الإسلامية.',
            en: 'Ain Zubaida, one of the greatest engineering projects in Islamic history. It was commissioned by Lady Zubaida bint Jaafar, wife of Abbasid Caliph Harun al-Rashid, in the ninth century. The canal stretches over thirty-five kilometers from Wadi Numan to Makkah through mountains and valleys. It carried fresh water to the pilgrims of the Holy Mosque. It used advanced engineering techniques including stone arches, tunnels, and open channels. Its remains still stand as a testament to the greatness of Islamic civilization.'
        },
        distance: { ar: '٤٥٠ كم', en: '450 km' },
        crowd: 'quiet'
    }
};

// ============================
// Translations Dictionary
// ============================
const translations = {
    'logo': { ar: 'أطـــلال', en: 'Atlal' },
    'nav-explore': { ar: 'استكشف', en: 'Explore' },
    'nav-passport': { ar: 'جوازي', en: 'Passport' },
    'nav-achievements': { ar: 'الإنجازات', en: 'Achievements' },
    'nav-account': { ar: 'حسابي', en: 'Account' },
    'home-title': { ar: 'اكتشف عبق الماضي', en: 'Discover the Past' },
    'home-subtitle': { ar: 'وجه كاميرتك نحو المعالم التاريخية وشاهدها كما كانت عبر الواقع المعزز', en: 'Point your camera at historical landmarks and see them as they once were through AR' },
    'ar-support-badge': { ar: 'واقع معزز + ذكاء اصطناعي', en: 'AR + AI Powered' },
    'era-prophetic': { ar: 'العهد النبوي', en: 'Prophetic Era' },
    'era-abbasid': { ar: 'العصر العباسي', en: 'Abbasid Era' },
    'location-madinah': { ar: 'المدينة المنورة', en: 'Madinah' },
    'location-makkah': { ar: 'مكة المكرمة', en: 'Makkah' },
    'quba-mosque': { ar: 'مسجد قباء', en: 'Quba Mosque' },
    'quba-mosque-desc': { ar: 'أول مسجد بُني في الإسلام، أسسه النبي ﷺ عند وصوله المدينة المنورة.', en: 'The first mosque built in Islam, founded by the Prophet ﷺ upon his arrival in Madinah.' },
    'ain-zubaida': { ar: 'عين زبيدة', en: 'Ain Zubaida' },
    'ain-info': { ar: 'مكة المكرمة', en: 'Makkah' },
    'ain-distance': { ar: '٤٥٠ كم', en: '450 km' },
    'stamp-quba': { ar: 'مسجد قباء', en: 'Quba Mosque' },
    'stamp-ain': { ar: 'عين زبيدة', en: 'Ain Zubaida' },
    'nearby-title': { ar: 'معالم قريبة منك', en: 'Landmarks Near You' },
    'crowd-quiet': { ar: 'هادئ', en: 'Quiet' },
    'crowd-busy': { ar: 'مزدحم', en: 'Crowded' },
    'gps-active': { ar: 'GPS نشط', en: 'GPS Active' },
    'scan-analyzing': { ar: 'الذكاء الاصطناعي يحلل الموقع...', en: 'AI analyzing location...' },
    'scan-gps-lock': { ar: 'GPS مُثبّت', en: 'GPS Locked' },
    'scan-ai-label': { ar: 'AI + GPS', en: 'AI + GPS' },
    'scan-match': { ar: 'تطابق بنسبة ٩٨٪ عبر الذكاء الاصطناعي', en: '98% AI Match' },
    'open-portal': { ar: 'افتح البوابة الزمنية', en: 'Open Time Portal' },
    'view-details-btn': { ar: 'عرض تفاصيل المعلم', en: 'View Landmark Details' },
    'stamp-passport': { ar: 'ختم الجواز', en: 'Stamp Passport' },
    'stamped': { ar: 'مُوثق', en: 'Stamped' },
    'enter-ar': { ar: 'ادخل البوابة الزمنية (واقع معزز)', en: 'Enter Time Portal (AR Experience)' },
    'status-quiet': { ar: 'هادئ', en: 'Quiet' },
    'status-temp': { ar: '٣٢° مئوية', en: '32°C' },
    'status-points': { ar: '+٥٠ نقطة', en: '+50 Points' },
    'narrator-title': { ar: 'الراوي الذكي', en: 'AI Narrator' },
    'narrator-playing': { ar: 'جاري التشغيل...', en: 'Playing...' },
    'about-title': { ar: 'عن هذا المعلم', en: 'About This Landmark' },
    'archive-title': { ar: 'مشاهد الواقع المعزز', en: 'AR Scenes' },
    'passport-title': { ar: 'الجواز التاريخي', en: 'Historical Passport' },
    'passport-subtitle': { ar: 'وثيقة توثيق إنجازاتك في أطلال', en: 'A document recording your achievements in Atlal' },
    'stamp-year': { ar: '٢٠٢٦ م', en: '2026 AD' },
    'stamp-empty': { ar: 'موقع مفقود', en: 'Missing Site' },
    'sum-sites': { ar: 'مواقع', en: 'Sites' },
    'sum-badges': { ar: 'أوسمة', en: 'Badges' },
    'sum-rank': { ar: 'ترتيبك', en: 'Your Rank' },
    'sum-sites-num': { ar: '٢', en: '2' },
    'sum-badges-num': { ar: '٣', en: '3' },
    'sum-rank-num': { ar: '#١٥٤', en: '#154' },
    'leaderboard-title': { ar: 'لوحة النخبة', en: 'Leaderboard' },
    'leaderboard-subtitle': { ar: 'أكثر الرحالة استكشافاً للتاريخ', en: 'Top historical explorers' },
    'name-sarah': { ar: 'سارة', en: 'Sarah' },
    'name-ahmed': { ar: 'أحمد', en: 'Ahmed' },
    'name-khaled': { ar: 'خالد', en: 'Khaled' },
    'name-noura': { ar: 'نورة ش.', en: 'Noura S.' },
    'name-omar': { ar: 'عمر م.', en: 'Omar M.' },
    'you-label': { ar: 'أنت', en: 'You' },
    'beginner-tag': { ar: 'مبتدئ', en: 'Beginner' },
    'score-noura': { ar: '٣,٦٠٠', en: '3,600' },
    'score-omar': { ar: '٣,٢٠٠', en: '3,200' },
    'score-you': { ar: '١,٢٥٠', en: '1,250' },
    'rank-2': { ar: '٢', en: '2' }, 'rank-1': { ar: '١', en: '1' }, 'rank-3': { ar: '٣', en: '3' },
    'rank-4': { ar: '٤', en: '4' }, 'rank-5': { ar: '٥', en: '5' }, 'rank-154': { ar: '١٥٤', en: '154' },
    'profile-title': { ar: 'الملف الشخصي', en: 'Profile' },
    'profile-wip': { ar: 'قيد التطوير حالياً...', en: 'Under development...' },
    'ar-status': { ar: 'الواقع المعزز نشط', en: 'AR Active' },
    'ar-ai-scanning': { ar: 'الذكاء الاصطناعي يعرض الطبقة التاريخية', en: 'AI rendering historical layer' },
    'ar-hint': { ar: 'استخدم الأسهم للتحرك داخل المعلم التاريخي', en: 'Use arrows to move inside the historical landmark' },
    'portal-text': { ar: 'جاري فتح البوابة الزمنية...', en: 'Opening Time Portal...' },
    'toast-already-stamped': { ar: 'لقد حصلت على ختم هذا الموقع بالفعل.', en: 'You have already stamped this site.' },
    'toast-coming-soon': { ar: 'هذا الموقع قيد الإضافة — ترقبوا!', en: 'This site is coming soon — stay tuned!' },
    'hejaz-train': { ar: 'محطة قطار الحجاز', en: 'Hejaz Railway Station' },
    'hejaz-info': { ar: 'المدينة المنورة', en: 'Madinah' },
    'hejaz-distance': { ar: '٤.٧ كم', en: '4.7 km' },
    'page-title': { ar: 'أطلال | بوابة الزمن', en: 'Atlal | Gateway to Time' },
};

// ============================
// State
// ============================
const appState = {
    view: 'home',
    points: 1250,
    hasStamped: {},
    lang: 'ar',
    arPosition: { x: 0, y: 0 },
    narratorPlaying: false,
    currentSite: 'quba' // tracks which site user is viewing
};

const mainView = document.getElementById('app-view');
const pointsBadge = document.getElementById('user-points');

const templateEls = {};
['home','scanner','details','passport','leaderboard','profile','ar'].forEach(id => {
    templateEls[id] = document.getElementById('tpl-' + id).innerHTML;
});

// ============================
// i18n
// ============================
function t(key) {
    const entry = translations[key];
    if (!entry) return key;
    return entry[appState.lang] || entry['ar'];
}

function st(obj) {
    if (!obj) return '';
    return obj[appState.lang] || obj['ar'] || '';
}

function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const text = t(key);
        if (el.children.length === 0) el.textContent = text;
        else replaceTextContent(el, text);
    });
    document.title = t('page-title');
    if (pointsBadge) {
        pointsBadge.textContent = appState.lang === 'ar'
            ? convertToArabic(appState.points) : appState.points.toLocaleString('en-US');
    }
}

function replaceTextContent(el, text) {
    for (const child of Array.from(el.childNodes)) {
        if (child.nodeType === Node.TEXT_NODE && child.textContent.trim() !== '') {
            child.textContent = ' ' + text + ' ';
            return;
        }
    }
    el.appendChild(document.createTextNode(' ' + text));
}

function setLang(lang) {
    appState.lang = lang;
    const html = document.documentElement;
    html.setAttribute('dir', lang === 'en' ? 'ltr' : 'rtl');
    html.setAttribute('lang', lang);
    document.body.classList.toggle('lang-en', lang === 'en');
    applyTranslations();
    const btn = document.getElementById('lang-toggle');
    if (btn) btn.textContent = lang === 'ar' ? 'EN' : 'ع';
}

window.toggleLang = function () { setLang(appState.lang === 'ar' ? 'en' : 'ar'); };

// ============================
// Site Selection
// ============================
function getSite() { return sites[appState.currentSite]; }

window.selectSite = function(siteId) {
    appState.currentSite = siteId;
};

// ============================
// Dynamic Template Rendering
// ============================
function buildDetailsView() {
    const s = getSite();
    return `<div class="details-page animation-slide-up">
        <div class="details-hero" style="background:url('${s.cardImg}') center/cover, #8E654C;">
            <button class="icon-btn floating-back" onclick="navTo('home')"><i class="ri-arrow-right-line"></i></button>
        </div>
        <div class="details-body">
            <div class="details-head">
                <div>
                    <span class="era-text text-gold">${st(s.era)}</span>
                    <h2>${st(s.name)}</h2>
                </div>
                <button class="action-btn" id="stamp-btn" onclick="doStamp()">
                    <i class="ri-ink-bottle-line"></i><span>${t('stamp-passport')}</span>
                </button>
            </div>
            <button class="primary-btn full-width portal-btn" style="margin-bottom:2rem;" onclick="navTo('ar')">
                <i class="ri-magic-line"></i> <span>${t('enter-ar')}</span>
            </button>
            <div class="stats-row">
                <div class="stat-box"><i class="ri-user-fill"></i><span>${t('status-quiet')}</span></div>
                <div class="stat-box"><i class="ri-sun-cloudy-line"></i><span>${t('status-temp')}</span></div>
                <div class="stat-box"><i class="ri-copper-coin-line text-gold"></i><span>${t('status-points')}</span></div>
            </div>
            <div class="ai-audio-card">
                <div class="audio-avatar" id="narrator-avatar">
                    <i class="ri-robot-2-line"></i><div class="ripple"></div>
                </div>
                <div class="audio-info">
                    <h4>${t('narrator-title')}</h4>
                    <p id="narrator-desc-text">${st(s.narratorDesc)}</p>
                    <div class="audio-bar"><div class="audio-fill" id="audio-fill-bar"></div></div>
                </div>
                <button class="play-btn" id="narrator-play-btn" onclick="toggleNarrator()"><i class="ri-play-fill"></i></button>
            </div>
            <div class="text-block">
                <h3>${t('about-title')}</h3>
                <p>${st(s.about)}</p>
            </div>
            <div class="text-block">
                <h3>${t('archive-title')}</h3>
                <div class="models-scroll">${s.scenes.map(sc => `
                    <div class="model-item">
                        <div class="model-art ${sc.cls}"><i class="${sc.icon}"></i></div>
                        <p>${st(sc.label)}</p>
                    </div>`).join('')}
                </div>
            </div>
        </div>
    </div>`;
}

function buildScannerView() {
    const s = getSite();
    return `<div class="scanner-page animation-fade">
        <div class="camera-backdrop" style="background-image:url('${s.scannerImg}');background-size:cover;background-position:center;"></div>
        <div class="scanner-header">
            <button class="icon-btn" onclick="navTo('home')"><i class="ri-close-line"></i></button>
            <div class="ai-status" id="scan-status">${t('scan-analyzing')}</div>
            <div class="gps-scanner-badge" id="gps-status">
                <i class="ri-gps-line"></i><span>${t('scan-ai-label')}</span>
            </div>
        </div>
        <div class="reticle-container">
            <div class="reticle-box">
                <div class="corner t-l"></div><div class="corner t-r"></div>
                <div class="corner b-l"></div><div class="corner b-r"></div>
                <div class="scan-line"></div>
            </div>
        </div>
        <div class="scanner-footer">
            <div class="result-card hidden" id="scan-result">
                <div class="result-icon" style="background:url('${s.cardImg}') center/cover, #8E654C;"><i class="ri-building-line"></i></div>
                <div class="result-info">
                    <h4>${st(s.name)}</h4>
                    <p>${t('scan-match')}</p>
                </div>
                <button class="primary-btn full-width mt-1 portal-btn" onclick="navTo('ar')">
                    <i class="ri-magic-line"></i> <span>${t('open-portal')}</span>
                </button>
                <button class="primary-btn full-width mt-1 outline-btn" onclick="navTo('details')">
                    <i class="ri-article-line"></i> <span>${t('view-details-btn')}</span>
                </button>
            </div>
        </div>
    </div>`;
}

function buildARView() {
    const s = getSite();
    const hotspotsHTML = s.hotspots.map(h => `
        <div class="ar-hotspot" style="top:${h.top};left:${h.left};">
            <div class="hotspot-ping"></div><div class="hotspot-dot"></div>
            <div class="hotspot-label">${st(h.label)}</div>
        </div>`).join('');
    return `<div class="ar-experience-page animation-fade">
        <div class="ar-camera-feed" style="background-image:url('${s.arImg}');"></div>
        <div class="ar-3d-overlay">
            <div class="ar-structure">
                <div class="ar-wall wall-1"></div><div class="ar-wall wall-2"></div>
                <div class="ar-pillar pillar-1"></div><div class="ar-pillar pillar-2"></div><div class="ar-pillar pillar-3"></div>
            </div>
        </div>
        ${hotspotsHTML}
        <div id="ar-hint-overlay" class="ar-hint-overlay">
            <div class="hint-content">
                <i class="ri-drag-move-line" style="font-size:3rem;margin-bottom:1rem;display:block;opacity:0.8;"></i>
                <p>${t('ar-hint')}</p>
            </div>
        </div>
        <div class="ar-top-bar">
            <button class="icon-btn" onclick="navTo('details')"><i class="ri-arrow-right-line"></i></button>
            <div class="ar-status-pills">
                <div class="ar-pill ar-active-pill"><i class="ri-augmented-reality-line"></i> <span>${t('ar-status')}</span></div>
                <div class="ar-pill ai-pill"><i class="ri-brain-line"></i> <span>${t('ar-ai-scanning')}</span></div>
            </div>
        </div>
        <div class="ar-dpad">
            <button class="ar-move-btn" data-dir="up"><i class="ri-arrow-up-s-line"></i></button>
            <div class="ar-dpad-row">
                <button class="ar-move-btn" data-dir="left"><i class="ri-arrow-left-s-line"></i></button>
                <div class="ar-dpad-center"><i class="ri-drag-move-2-line"></i></div>
                <button class="ar-move-btn" data-dir="right"><i class="ri-arrow-right-s-line"></i></button>
            </div>
            <button class="ar-move-btn" data-dir="down"><i class="ri-arrow-down-s-line"></i></button>
        </div>
        <div class="ar-footer-ui">
            <div class="ar-controls">
                <button class="icon-btn"><i class="ri-volume-up-line"></i></button>
                <button class="capture-btn" onclick="navTo('details')"><i class="ri-article-line"></i></button>
                <button class="icon-btn" onclick="window.open('${s.mapUrl}','_blank')"><i class="ri-map-pin-line"></i></button>
            </div>
            <div class="ar-caption">
                <h4>${st(s.arCaption)}</h4>
                <p>${st(s.arDesc)}</p>
            </div>
        </div>
    </div>`;
}

// ============================
// Portal Transition
// ============================
function showPortalTransition(callback) {
    const portal = document.createElement('div');
    portal.className = 'portal-overlay';
    portal.innerHTML = `
        <div class="portal-vortex">
            <div class="portal-ring ring-1"></div><div class="portal-ring ring-2"></div><div class="portal-ring ring-3"></div>
            <div class="portal-core"></div>
        </div>
        <div class="portal-particles"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>
        <p class="portal-text">${t('portal-text')}</p>`;
    document.body.appendChild(portal);
    requestAnimationFrame(() => portal.classList.add('active'));
    setTimeout(() => {
        portal.classList.add('closing');
        setTimeout(() => { portal.remove(); if (callback) callback(); }, 600);
    }, 2200);
}

// ============================
// Navigation
// ============================
function init() { navTo('home'); }

window.navTo = function (target) {
    if (appState.view === target && mainView.innerHTML !== '') return;
    if (target === 'ar') {
        const bn = document.querySelector('.bottom-nav');
        if (bn) bn.style.display = 'none';
        showPortalTransition(() => renderView(target));
        return;
    }
    mainView.style.opacity = '0';
    setTimeout(() => renderView(target), 150);
};

window.goToSite = function(siteId) {
    appState.currentSite = siteId;
    navTo('details');
};

window.scanSite = function(siteId) {
    appState.currentSite = siteId;
    navTo('scanner');
};

window.showComingSoon = function () { showToast(t('toast-coming-soon')); };

function renderView(target) {
    appState.view = target;
    // Dynamic views
    if (target === 'details') mainView.innerHTML = buildDetailsView();
    else if (target === 'scanner') mainView.innerHTML = buildScannerView();
    else if (target === 'ar') mainView.innerHTML = buildARView();
    else mainView.innerHTML = templateEls[target] || templateEls['home'];

    mainView.style.opacity = '1';
    handleNavUI(target);
    handleViewLogic(target);
    applyTranslations();
}

function handleNavUI(target) {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.target === target) item.classList.add('active');
    });
    const bn = document.querySelector('.bottom-nav');
    bn.style.display = ['scanner','details','ar'].includes(target) ? 'none' : 'block';
}

function handleViewLogic(target) {
    if (target === 'scanner') runARSimulation();
    else if (target === 'ar') setupAROverlay();
}

// ============================
// AI Narrator (Pre-recorded Audio)
// ============================
let narratorInterval = null;
let narratorAudio = null;

function stopNarrator() {
    appState.narratorPlaying = false;
    clearInterval(narratorInterval);
    if (narratorAudio) {
        narratorAudio.pause();
        narratorAudio.currentTime = 0;
        narratorAudio = null;
    }
    const playBtn = document.getElementById('narrator-play-btn');
    const avatar = document.getElementById('narrator-avatar');
    const audioFill = document.getElementById('audio-fill-bar');
    const descText = document.getElementById('narrator-desc-text');
    if (playBtn) playBtn.innerHTML = '<i class="ri-play-fill"></i>';
    if (avatar) avatar.classList.remove('speaking');
    if (audioFill) audioFill.style.width = '0%';
    if (descText) descText.textContent = st(getSite().narratorDesc);
}

window.toggleNarrator = function () {
    const playBtn = document.getElementById('narrator-play-btn');
    const audioFill = document.getElementById('audio-fill-bar');
    const descText = document.getElementById('narrator-desc-text');
    const avatar = document.getElementById('narrator-avatar');
    if (!playBtn || !audioFill) return;

    // If playing, pause
    if (appState.narratorPlaying) {
        if (narratorAudio && !narratorAudio.paused) {
            narratorAudio.pause();
            appState.narratorPlaying = false;
            clearInterval(narratorInterval);
            playBtn.innerHTML = '<i class="ri-play-fill"></i>';
            if (avatar) avatar.classList.remove('speaking');
            return;
        }
        stopNarrator();
        return;
    }

    // If paused mid-play, resume
    if (narratorAudio && narratorAudio.paused && narratorAudio.currentTime > 0) {
        narratorAudio.play();
        appState.narratorPlaying = true;
        playBtn.innerHTML = '<i class="ri-pause-fill"></i>';
        if (avatar) avatar.classList.add('speaking');
        if (descText) descText.textContent = t('narrator-playing');
        startProgressSync(audioFill);
        return;
    }

    // Start fresh
    const s = getSite();
    const audioFile = st(s.audioFile);
    if (!audioFile) return;

    narratorAudio = new Audio(audioFile);
    narratorAudio.volume = 1.0;

    narratorAudio.oncanplaythrough = () => {
        narratorAudio.play();
        appState.narratorPlaying = true;
        playBtn.innerHTML = '<i class="ri-pause-fill"></i>';
        if (avatar) avatar.classList.add('speaking');
        if (descText) descText.textContent = t('narrator-playing');
        startProgressSync(audioFill);
    };

    narratorAudio.onended = () => {
        clearInterval(narratorInterval);
        audioFill.style.width = '100%';
        setTimeout(() => stopNarrator(), 800);
    };

    narratorAudio.onerror = () => {
        console.warn('Audio file failed to load:', audioFile);
        stopNarrator();
    };

    narratorAudio.load();
};

function startProgressSync(audioFill) {
    clearInterval(narratorInterval);
    narratorInterval = setInterval(() => {
        if (!narratorAudio || !appState.narratorPlaying) return;
        const pct = narratorAudio.duration
            ? (narratorAudio.currentTime / narratorAudio.duration) * 100
            : 0;
        audioFill.style.width = Math.min(99, pct) + '%';
    }, 200);
}

// ============================
// AR Overlay with Movement
// ============================
let arMoveInterval = null;

function setupAROverlay() {
    appState.arPosition = { x: 0, y: 0 };
    const hotspots = document.querySelectorAll('.ar-hotspot');
    hotspots.forEach((spot, i) => {
        spot.style.opacity = '0'; spot.style.transform = 'scale(0.5)';
        setTimeout(() => {
            spot.style.transition = 'all 0.5s cubic-bezier(0.175,0.885,0.32,1.275)';
            spot.style.opacity = '1'; spot.style.transform = 'scale(1)';
        }, 800 + i * 400);
    });
    const overlay = document.querySelector('.ar-3d-overlay');
    if (overlay) {
        overlay.style.opacity = '0';
        setTimeout(() => { overlay.style.transition = 'opacity 1.5s ease'; overlay.style.opacity = '1'; }, 500);
    }
    const hint = document.getElementById('ar-hint-overlay');
    if (hint) setTimeout(() => { hint.style.opacity = '0'; setTimeout(() => hint.style.display = 'none', 500); }, 3500);
    setupMovementControls();
}

function setupMovementControls() {
    const feed = document.querySelector('.ar-camera-feed');
    const ov = document.querySelector('.ar-3d-overlay');
    if (!feed) return;
    const speed = 3, max = 150;
    const dirs = { up:[0,speed], down:[0,-speed], left:[speed,0], right:[-speed,0] };
    function apply() {
        const {x,y} = appState.arPosition;
        feed.style.transform = `translate(${x}px,${y}px) scale(1.3)`;
        if (ov) ov.style.transform = `translate(${x*0.5}px,${y*0.5}px)`;
        document.querySelectorAll('.ar-hotspot').forEach(h => {
            h.style.marginLeft = (x*0.3)+'px'; h.style.marginTop = (y*0.3)+'px';
        });
    }
    document.querySelectorAll('.ar-move-btn').forEach(btn => {
        const d = btn.dataset.dir; if (!dirs[d]) return;
        const move = () => {
            const [dx,dy] = dirs[d];
            appState.arPosition.x = Math.max(-max, Math.min(max, appState.arPosition.x+dx));
            appState.arPosition.y = Math.max(-max, Math.min(max, appState.arPosition.y+dy));
            apply();
        };
        btn.addEventListener('mousedown', () => { move(); arMoveInterval=setInterval(move,50); });
        btn.addEventListener('mouseup', () => clearInterval(arMoveInterval));
        btn.addEventListener('mouseleave', () => clearInterval(arMoveInterval));
        btn.addEventListener('touchstart', e => { e.preventDefault(); move(); arMoveInterval=setInterval(move,50); });
        btn.addEventListener('touchend', () => clearInterval(arMoveInterval));
    });
    document.addEventListener('keydown', function kh(e) {
        if (appState.view !== 'ar') { document.removeEventListener('keydown',kh); return; }
        const km = {ArrowUp:'up',ArrowDown:'down',ArrowLeft:'left',ArrowRight:'right',w:'up',s:'down',a:'left',d:'right'};
        const d = km[e.key]; if (!d) return;
        e.preventDefault();
        const [dx,dy] = dirs[d];
        appState.arPosition.x = Math.max(-max, Math.min(max, appState.arPosition.x+dx*5));
        appState.arPosition.y = Math.max(-max, Math.min(max, appState.arPosition.y+dy*5));
        apply();
    });
    let ts=null;
    feed.addEventListener('touchstart', e => { ts={x:e.touches[0].clientX,y:e.touches[0].clientY}; });
    feed.addEventListener('touchmove', e => {
        if (!ts) return; e.preventDefault();
        const dx=(e.touches[0].clientX-ts.x)*0.5, dy=(e.touches[0].clientY-ts.y)*0.5;
        appState.arPosition.x = Math.max(-max, Math.min(max, appState.arPosition.x+dx));
        appState.arPosition.y = Math.max(-max, Math.min(max, appState.arPosition.y+dy));
        ts={x:e.touches[0].clientX,y:e.touches[0].clientY}; apply();
    }, {passive:false});
}

// ============================
// Scanner
// ============================
function runARSimulation() {
    const status = document.getElementById('scan-status');
    const result = document.getElementById('scan-result');
    const line = document.querySelector('.scan-line');
    const gps = document.getElementById('gps-status');
    const s = getSite();
    setTimeout(() => {
        if (gps) { gps.classList.add('locked'); gps.querySelector('span').textContent = t('scan-gps-lock'); }
    }, 1000);
    setTimeout(() => {
        const recText = appState.lang === 'ar' ? 'تم التعرف: ' + s.name.ar : 'Recognized: ' + s.name.en;
        if (status) { status.innerHTML = '<i class="ri-check-line text-gold"></i> ' + recText; status.style.color = 'var(--brand-primary)'; }
        if (line) line.style.display = 'none';
        setTimeout(() => { if (result) result.classList.remove('hidden'); }, 500);
    }, 2500);
}

// ============================
// Actions
// ============================
window.doStamp = function () {
    const sId = appState.currentSite;
    if (appState.hasStamped[sId]) { showToast(t('toast-already-stamped')); return; }
    const btn = document.getElementById('stamp-btn');
    btn.style.background = 'var(--brand-primary)'; btn.style.color = 'white';
    btn.innerHTML = '<i class="ri-checkbox-circle-fill" style="color:var(--brand-gold);"></i> <span>' + t('stamped') + '</span>';
    appState.points += 50;
    appState.hasStamped[sId] = true;
    pointsBadge.textContent = appState.lang === 'ar' ? convertToArabic(appState.points) : appState.points.toLocaleString('en-US');
    const pb = document.querySelector('.points-badge');
    pb.style.transform = 'scale(1.1)'; pb.style.borderColor = 'var(--brand-gold)';
    setTimeout(() => { pb.style.transform = 'scale(1)'; pb.style.borderColor = 'var(--border-color)'; }, 300);
};

// ============================
// Utilities
// ============================
function convertToArabic(n) {
    const a = ['٠','١','٢','٣','٤','٥','٦','٧','٨','٩'];
    return String(n).replace(/[0-9]/g, w => a[+w]);
}

function showToast(msg) {
    const ex = document.querySelector('.custom-toast'); if (ex) ex.remove();
    const t = document.createElement('div'); t.className = 'custom-toast';
    t.innerHTML = `<i class="ri-information-line"></i> <span>${msg}</span>`;
    document.body.appendChild(t);
    setTimeout(() => t.classList.add('show'), 10);
    setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 300); }, 3000);
}

document.addEventListener('DOMContentLoaded', init);
