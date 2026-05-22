'use strict'


function initMainScripts() {
  console.log('Main scripts are working');

  // FAQ
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const card = question.parentElement;
      card.classList.toggle('open');
    });
  });

  // Mobile menu
  const menuFolded = document.querySelector('#menu-fold');
  const navigation = document.getElementById('navbarNav');

  menuFolded.addEventListener('click', () => {
    navigation.classList.toggle('active');
    menuFolded.classList.toggle('active');
  });


// arrows
const features = document.querySelector('.features');
const featureCount = document.querySelectorAll('.feature').length;
let currentIndex = 0;

document.querySelector('.arrow.left').addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

document.querySelector('.arrow.right').addEventListener('click', () => {
  if (currentIndex < featureCount - 1) {
    currentIndex++;
    updateSlider();
  }
});

function updateSlider() {
  features.style.transform = `translateX(-${currentIndex * 100}%)`;
}

let startX = 0;
let isDragging = false;

features.addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
  isDragging = true;
});

features.addEventListener('touchmove', e => {
  if (!isDragging) return;
});

features.addEventListener('touchend', e => {
  isDragging = false;
  const endX = e.changedTouches[0].clientX;
  const diff = startX - endX;

  if (diff > 50 && currentIndex < featureCount - 1) {
    currentIndex++;
  } else if (diff < -50 && currentIndex > 0) {
    currentIndex--;
  }

  updateSlider();
});

// Country selector with phone code
const countryData = [
  { name: "Afghanistan", flag: "🇦🇫", code: "+93" },
  { name: "Albania", flag: "🇦🇱", code: "+355" },
  { name: "Algeria", flag: "🇩🇿", code: "+213" },
  { name: "Andorra", flag: "🇦🇩", code: "+376" },
  { name: "Angola", flag: "🇦🇴", code: "+244" },
  { name: "Argentina", flag: "🇦🇷", code: "+54" },
  { name: "Armenia", flag: "🇦🇲", code: "+374" },
  { name: "Australia", flag: "🇦🇺", code: "+61" },
  { name: "Austria", flag: "🇦🇹", code: "+43" },
  { name: "Azerbaijan", flag: "🇦🇿", code: "+994" },

  { name: "Bahamas", flag: "🇧🇸", code: "+1-242" },
  { name: "Bahrain", flag: "🇧🇭", code: "+973" },
  { name: "Bangladesh", flag: "🇧🇩", code: "+880" },
  { name: "Barbados", flag: "🇧🇧", code: "+1-246" },
  { name: "Belarus", flag: "🇧🇾", code: "+375" },
  { name: "Belgium", flag: "🇧🇪", code: "+32" },
  { name: "Belize", flag: "🇧🇿", code: "+501" },
  { name: "Benin", flag: "🇧🇯", code: "+229" },
  { name: "Bhutan", flag: "🇧🇹", code: "+975" },
  { name: "Bolivia", flag: "🇧🇴", code: "+591" },
  { name: "Bosnia and Herzegovina", flag: "🇧🇦", code: "+387" },
  { name: "Botswana", flag: "🇧🇼", code: "+267" },
  { name: "Brazil", flag: "🇧🇷", code: "+55" },
  { name: "Brunei", flag: "🇧🇳", code: "+673" },
  { name: "Bulgaria", flag: "🇧🇬", code: "+359" },
  { name: "Burkina Faso", flag: "🇧🇫", code: "+226" },
  { name: "Burundi", flag: "🇧🇮", code: "+257" },

  { name: "Cabo Verde", flag: "🇨🇻", code: "+238" },
  { name: "Cambodia", flag: "🇰🇭", code: "+855" },
  { name: "Cameroon", flag: "🇨🇲", code: "+237" },
  { name: "Canada", flag: "🇨🇦", code: "+1" },
  { name: "Central African Republic", flag: "🇨🇫", code: "+236" },
  { name: "Chad", flag: "🇹🇩", code: "+235" },
  { name: "Chile", flag: "🇨🇱", code: "+56" },
  { name: "China", flag: "🇨🇳", code: "+86" },
  { name: "Colombia", flag: "🇨🇴", code: "+57" },
  { name: "Comoros", flag: "🇰🇲", code: "+269" },
  { name: "Congo (Republic)", flag: "🇨🇬", code: "+242" },
  { name: "Congo (DRC)", flag: "🇨🇩", code: "+243" },
  { name: "Costa Rica", flag: "🇨🇷", code: "+506" },
  { name: "Croatia", flag: "🇭🇷", code: "+385" },
  { name: "Cuba", flag: "🇨🇺", code: "+53" },
  { name: "Cyprus", flag: "🇨🇾", code: "+357" },
  { name: "Czechia", flag: "🇨🇿", code: "+420" },

  { name: "Denmark", flag: "🇩🇰", code: "+45" },
  { name: "Djibouti", flag: "🇩🇯", code: "+253" },
  { name: "Dominica", flag: "🇩🇲", code: "+1-767" },
  { name: "Dominican Republic", flag: "🇩🇴", code: "+1-809" },

  { name: "Ecuador", flag: "🇪🇨", code: "+593" },
  { name: "Egypt", flag: "🇪🇬", code: "+20" },
  { name: "El Salvador", flag: "🇸🇻", code: "+503" },
  { name: "Equatorial Guinea", flag: "🇬🇶", code: "+240" },
  { name: "Eritrea", flag: "🇪🇷", code: "+291" },
  { name: "Estonia", flag: "🇪🇪", code: "+372" },
  { name: "Eswatini", flag: "🇸🇿", code: "+268" },
  { name: "Ethiopia", flag: "🇪🇹", code: "+251" },

  { name: "Fiji", flag: "🇫🇯", code: "+679" },
  { name: "Finland", flag: "🇫🇮", code: "+358" },
  { name: "France", flag: "🇫🇷", code: "+33" },

  { name: "Gabon", flag: "🇬🇦", code: "+241" },
  { name: "Gambia", flag: "🇬🇲", code: "+220" },
  { name: "Georgia", flag: "🇬🇪", code: "+995" },
  { name: "Germany", flag: "🇩🇪", code: "+49" },
  { name: "Ghana", flag: "🇬🇭", code: "+233" },
  { name: "Greece", flag: "🇬🇷", code: "+30" },
  { name: "Grenada", flag: "🇬🇩", code: "+1-473" },
  { name: "Guatemala", flag: "🇬🇹", code: "+502" },
  { name: "Guinea", flag: "🇬🇳", code: "+224" },
  { name: "Guinea-Bissau", flag: "🇬🇼", code: "+245" },
  { name: "Guyana", flag: "🇬🇾", code: "+592" },

  { name: "Haiti", flag: "🇭🇹", code: "+509" },
  { name: "Honduras", flag: "🇭🇳", code: "+504" },
  { name: "Hungary", flag: "🇭🇺", code: "+36" },

  { name: "Iceland", flag: "🇮🇸", code: "+354" },
  { name: "India", flag: "🇮🇳", code: "+91" },
  { name: "Indonesia", flag: "🇮🇩", code: "+62" },
  { name: "Iran", flag: "🇮🇷", code: "+98" },
  { name: "Iraq", flag: "🇮🇶", code: "+964" },
  { name: "Ireland", flag: "🇮🇪", code: "+353" },
  { name: "Israel", flag: "🇮🇱", code: "+972" },
  { name: "Italy", flag: "🇮🇹", code: "+39" },

  { name: "Jamaica", flag: "🇯🇲", code: "+1-876" },
  { name: "Japan", flag: "🇯🇵", code: "+81" },
  { name: "Jordan", flag: "🇯🇴", code: "+962" },

  { name: "Kazakhstan", flag: "🇰🇿", code: "+7" },
  { name: "Kenya", flag: "🇰🇪", code: "+254" },
  { name: "Kuwait", flag: "🇰🇼", code: "+965" },
  { name: "Kyrgyzstan", flag: "🇰🇬", code: "+996" },

  { name: "Laos", flag: "🇱🇦", code: "+856" },
  { name: "Latvia", flag: "🇱🇻", code: "+371" },
  { name: "Lebanon", flag: "🇱🇧", code: "+961" },
  { name: "Lesotho", flag: "🇱🇸", code: "+266" },
  { name: "Liberia", flag: "🇱🇷", code: "+231" },
  { name: "Libya", flag: "🇱🇾", code: "+218" },
  { name: "Liechtenstein", flag: "🇱🇮", code: "+423" },
  { name: "Lithuania", flag: "🇱🇹", code: "+370" },
  { name: "Luxembourg", flag: "🇱🇺", code: "+352" },

  { name: "Madagascar", flag: "🇲🇬", code: "+261" },
  { name: "Malawi", flag: "🇲🇼", code: "+265" },
  { name: "Malaysia", flag: "🇲🇾", code: "+60" },
  { name: "Maldives", flag: "🇲🇻", code: "+960" },
  { name: "Mali", flag: "🇲🇱", code: "+223" },
  { name: "Malta", flag: "🇲🇹", code: "+356" },
  { name: "Mexico", flag: "🇲🇽", code: "+52" },
  { name: "Moldova", flag: "🇲🇩", code: "+373" },
  { name: "Monaco", flag: "🇲🇨", code: "+377" },
  { name: "Mongolia", flag: "🇲🇳", code: "+976" },
  { name: "Montenegro", flag: "🇲🇪", code: "+382" },
  { name: "Morocco", flag: "🇲🇦", code: "+212" },
  { name: "Mozambique", flag: "🇲🇿", code: "+258" },
  { name: "Myanmar", flag: "🇲🇲", code: "+95" },

  { name: "Namibia", flag: "🇳🇦", code: "+264" },
  { name: "Nepal", flag: "🇳🇵", code: "+977" },
  { name: "Netherlands", flag: "🇳🇱", code: "+31" },
  { name: "New Zealand", flag: "🇳🇿", code: "+64" },
  { name: "Nicaragua", flag: "🇳🇮", code: "+505" },
  { name: "Niger", flag: "🇳🇪", code: "+227" },
  { name: "Nigeria", flag: "🇳🇬", code: "+234" },
  { name: "North Korea", flag: "🇰🇵", code: "+850" },
  { name: "North Macedonia", flag: "🇲🇰", code: "+389" },
  { name: "Norway", flag: "🇳🇴", code: "+47" },

  { name: "Oman", flag: "🇴🇲", code: "+968" },

  { name: "Pakistan", flag: "🇵🇰", code: "+92" },
  { name: "Palestine", flag: "🇵🇸", code: "+970" },
  { name: "Panama", flag: "🇵🇦", code: "+507" },
  { name: "Papua New Guinea", flag: "🇵🇬", code: "+675" },
  { name: "Paraguay", flag: "🇵🇾", code: "+595" },
  { name: "Peru", flag: "🇵🇪", code: "+51" },
  { name: "Philippines", flag: "🇵🇭", code: "+63" },
  { name: "Poland", flag: "🇵🇱", code: "+48" },
  { name: "Portugal", flag: "🇵🇹", code: "+351" },

  { name: "Qatar", flag: "🇶🇦", code: "+974" },

  { name: "Romania", flag: "🇷🇴", code: "+40" },
  { name: "Russia", flag: "🇷🇺", code: "+7" },
  { name: "Rwanda", flag: "🇷🇼", code: "+250" },

  { name: "Saint Kitts and Nevis", flag: "🇰🇳", code: "+1-869" },
  { name: "Saint Lucia", flag: "🇱🇨", code: "+1-758" },
  { name: "Saint Vincent and the Grenadines", flag: "🇻🇨", code: "+1-784" },
  { name: "Samoa", flag: "🇼🇸", code: "+685" },
  { name: "San Marino", flag: "🇸🇲", code: "+378" },
  { name: "Sao Tome and Principe", flag: "🇸🇹", code: "+239" },
  { name: "Saudi Arabia", flag: "🇸🇦", code: "+966" },
  { name: "Senegal", flag: "🇸🇳", code: "+221" },
  { name: "Serbia", flag: "🇷🇸", code: "+381" },
  { name: "Seychelles", flag: "🇸🇨", code: "+248" },
  { name: "Sierra Leone", flag: "🇸🇱", code: "+232" },
  { name: "Singapore", flag: "🇸🇬", code: "+65" },
  { name: "Slovakia", flag: "🇸🇰", code: "+421" },
  { name: "Slovenia", flag: "🇸🇮", code: "+386" },
  { name: "Solomon Islands", flag: "🇸🇧", code: "+677" },
  { name: "Somalia", flag: "🇸🇴", code: "+252" },
  { name: "South Africa", flag: "🇿🇦", code: "+27" },
  { name: "South Korea", flag: "🇰🇷", code: "+82" },
  { name: "South Sudan", flag: "🇸🇸", code: "+211" },
  { name: "Spain", flag: "🇪🇸", code: "+34" },
  { name: "Sri Lanka", flag: "🇱🇰", code: "+94" },
  { name: "Sudan", flag: "🇸🇩", code: "+249" },
  { name: "Suriname", flag: "🇸🇷", code: "+597" },
  { name: "Sweden", flag: "🇸🇪", code: "+46" },
  { name: "Switzerland", flag: "🇨🇭", code: "+41" },
  { name: "Syria", flag: "🇸🇾", code: "+963" },

  { name: "Tajikistan", flag: "🇹🇯", code: "+992" },
  { name: "Tanzania", flag: "🇹🇿", code: "+255" },
  { name: "Thailand", flag: "🇹🇭", code: "+66" },
  { name: "Timor-Leste", flag: "🇹🇱", code: "+670" },
  { name: "Togo", flag: "🇹🇬", code: "+228" },
  { name: "Trinidad and Tobago", flag: "🇹🇹", code: "+1-868" },
  { name: "Tunisia", flag: "🇹🇳", code: "+216" },
  { name: "Turkey", flag: "🇹🇷", code: "+90" },
  { name: "Turkmenistan", flag: "🇹🇲", code: "+993" },
  { name: "Tuvalu", flag: "🇹🇻", code: "+688" },

  { name: "Uganda", flag: "🇺🇬", code: "+256" },
  { name: "Ukraine", flag: "🇺🇦", code: "+380" },
  { name: "United Arab Emirates", flag: "🇦🇪", code: "+971" },
  { name: "United Kingdom", flag: "🇬🇧", code: "+44" },
  { name: "United States", flag: "🇺🇸", code: "+1" },
  { name: "Uruguay", flag: "🇺🇾", code: "+598" },
  { name: "Uzbekistan", flag: "🇺🇿", code: "+998" },

  { name: "Vanuatu", flag: "🇻🇺", code: "+678" },
  { name: "Vatican City", flag: "🇻🇦", code: "+379" },
  { name: "Venezuela", flag: "🇻🇪", code: "+58" },
  { name: "Vietnam", flag: "🇻🇳", code: "+84" },

  { name: "Yemen", flag: "🇾🇪", code: "+967" },

  { name: "Zambia", flag: "🇿🇲", code: "+260" },
  { name: "Zimbabwe", flag: "🇿🇼", code: "+263" }
];

const cBox = document.getElementById('countryBox');
const cPanel = document.getElementById('dropdownPanel');
const cList = document.getElementById('countryList');
const cSearch = document.getElementById('countrySearch');
const cFlag = document.getElementById('selectedFlag');
const cName = document.getElementById('selectedName');
const cHidden = document.getElementById('countryValue');
const cCodeHidden = document.getElementById('countryCodeValue');
const phoneDisplay = document.getElementById('phoneCodeDisplay');
const phoneInput = document.getElementById('phone');

function renderCountries(filter = '') {
  const q = filter.toLowerCase();
  const filtered = countryData.filter(c => c.name.toLowerCase().includes(q));
  cList.innerHTML = filtered.map(c => `
    <div class="dropdown-item" data-name="${c.name}" data-flag="${c.flag}" data-code="${c.code}">
      <span class="di-flag">${c.flag}</span>
      <span class="di-name">${c.name}</span>
      <span class="di-code">${c.code}</span>
    </div>
  `).join('');

  cList.querySelectorAll('.dropdown-item').forEach(el => {
    el.addEventListener('click', () => {
      const { name, flag, code } = el.dataset;
      cFlag.textContent = flag;
      cName.textContent = name;
      cHidden.value = name;
      cCodeHidden.value = code;
      phoneDisplay.textContent = code;
      phoneInput.disabled = false;
      phoneInput.placeholder = '555 123 456';
      phoneInput.focus();
      closeCountryDropdown();
    });
  });
}

function openCountryDropdown() {
  cPanel.classList.add('open');
  cBox.classList.add('open');
  cBox.setAttribute('aria-expanded', 'true');
  cSearch.value = '';
  renderCountries();
  setTimeout(() => cSearch.focus(), 50);
}

function closeCountryDropdown() {
  cPanel.classList.remove('open');
  cBox.classList.remove('open');
  cBox.setAttribute('aria-expanded', 'false');
}

cBox.addEventListener('click', () =>
  cPanel.classList.contains('open') ? closeCountryDropdown() : openCountryDropdown()
);
cBox.addEventListener('keydown', e => {
  if (e.key === 'Enter' || e.key === ' ') openCountryDropdown();
});
cSearch.addEventListener('input', () => renderCountries(cSearch.value));
document.addEventListener('click', e => {
  if (!document.getElementById('countryDropdown').contains(e.target)) {
    closeCountryDropdown();
  }
});

renderCountries();

}















