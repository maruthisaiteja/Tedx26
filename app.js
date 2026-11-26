// TEDxVardhaman Web Application Logic

// 1. PRESENT YEAR (2026) HEADLINE SPEAKERS DATA
const presentSpeakers = [
  {
    id: 'ashneer-grover',
    name: 'Ashneer Grover',
    role: 'Founder, Third Unicorn & Former MD, BharatPe',
    talkTitle: 'The Unfiltered Truth: Building Without The Illusion',
    domain: 'FinTech & High Growth Ventures',
    category: 'Entrepreneurship',
    badge: 'Keynote Speaker',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
    summary: 'An unapologetic exploration of genuine unit economics, raw entrepreneurial fortitude, and dismantling vanity metrics in modern hyper-funded ecosystems.',
    quote: '"If your business model cannot survive on organic unit profitability, no venture check in the world will save your balance sheet."',
    highlights: [
      'Built BharatPe into a leading Indian fintech with zero-MDR UPI QR interoperability',
      'Author of bestselling book Doglapan, chronicling Indian venture capital dynamics',
      'Founded Third Unicorn and pioneer of high-engagement sports tech and creator platforms'
    ],
    timeSlot: '03:15 PM - 03:45 PM • Kalam Convention Hall'
  },
  {
    id: 'peyush-bansal',
    name: 'Peyush Bansal',
    role: 'Founder & CEO, Lenskart',
    talkTitle: 'Scale with Vision: Transforming Omnichannel Retail Through Tech',
    domain: 'Omnichannel Retail & Robotics',
    category: 'DeepTech',
    badge: 'Keynote Speaker',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80',
    summary: 'How extreme customer obsession, robotic micro-fulfillment centers, and vertical integration enable a homegrown brand to build global scale across Southeast Asia and the Middle East.',
    quote: '"Technology is not an auxiliary department in modern retail. Technology IS the retail experience."',
    highlights: [
      'Pioneered India\'s automated optical manufacturing with high-precision robotic grinding',
      'Expanded Lenskart to over 2,000 omnichannel stores globally',
      'Long-standing investor and mentor on Shark Tank India supporting student and hardware innovations'
    ],
    timeSlot: '02:30 PM - 03:00 PM • Kalam Convention Hall'
  },
  {
    id: 'ghazal-alagh',
    name: 'Ghazal Alagh',
    role: 'Co-Founder & Chief Innovation Officer, Honasa Consumer (Mamaearth)',
    talkTitle: 'The Purpose Driven Brand: Building for 100 Million Homes',
    domain: 'D2C & Consumer Product Innovation',
    category: 'Entrepreneurship',
    badge: 'Distinguished Keynote',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80',
    summary: 'From a mother\'s personal quest for toxin-free baby products to piloting India\'s fastest D2C unicorn onto the national stock exchanges (NSE/BSE).',
    quote: '"When consumer trust is your core design constraint, product virality stops being a marketing expense."',
    highlights: [
      'Co-founded Mamaearth and scaled Honasa into a publicly listed multi-brand powerhouse',
      'Champion of women founders and ESG-driven sustainable cosmetic manufacturing',
      'Prominent judge and startup mentor on Shark Tank India Season 1'
    ],
    timeSlot: '02:00 PM - 02:25 PM • Kalam Convention Hall'
  },
  {
    id: 'aman-gupta',
    name: 'Aman Gupta',
    role: 'Co-Founder & CMO, boAt Lifestyle',
    talkTitle: 'Audacity Over Convention: Winning the Gen-Z Audio Frontier',
    domain: 'Consumer Tech & Community Branding',
    category: 'Consumer Tech',
    badge: 'Featured Speaker',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80',
    summary: 'The story of how a homegrown brand outmaneuvered multinational consumer electronics giants by speaking the authentic visual and cultural language of modern Indian youth.',
    quote: '"Do not sell products to consumers. Build an identity that people feel proud wearing around their necks."',
    highlights: [
      'Captured undisputed market leadership in wearable audio and smartwatch segments in India',
      'Spearheaded Make-in-India domestic electronics assembly initiatives',
      'Renowned for viral product marketing and grassroots college ambassador programs'
    ],
    timeSlot: '11:30 AM - 12:00 PM • Kalam Convention Hall'
  },
  {
    id: 'kunal-shah',
    name: 'Kunal Shah',
    role: 'Founder, CRED & FreeCharge',
    talkTitle: 'Delta 4 Theory: Unlocking High Trust Consumer Ecosystems',
    domain: 'Behavioral Economics & Fintech',
    category: 'Fintech',
    badge: 'Thought Leader',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80',
    summary: 'An analytical dissection of human behavioral psychology, asymmetric upside, and why products that deliver a Delta 4 efficiency delta generate irreversible behavioral locks.',
    quote: '"If your product moves customer efficiency from state A to state B by four units, human nature will never allow them to go back."',
    highlights: [
      'Pioneered Indian mobile recharge with FreeCharge (acquired by Snapdeal)',
      'Built CRED into India\'s premier platform for creditworthy citizens with 13M+ members',
      'Prolific angel investor with over 200 seed investments across tech, space, and AI'
    ],
    timeSlot: '10:45 AM - 11:15 AM • Kalam Convention Hall'
  },
  {
    id: 'dr-tessy-thomas',
    name: 'Dr. Tessy Thomas',
    role: 'Distinguished Scientist & Former Director General, DRDO',
    talkTitle: 'Precision Engineering Under Relentless Constraints',
    domain: 'Aerospace & Strategic Systems',
    category: 'DeepTech',
    badge: 'Inaugural Address',
    image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=400&auto=format&fit=crop&q=80',
    summary: 'Insights from four decades at the cutting edge of missile guidance systems, navigation telemetry, and breaking technological glass ceilings in national strategic defense.',
    quote: '"Engineering is not just science applied to materials. It is discipline applied to human imagination."',
    highlights: [
      'Celebrated nationwide as the "Missile Woman of India" for guiding the Agni-IV & V missile projects',
      'First woman scientist in India to lead a strategic ballistic missile program',
      'Recipient of the Lal Bahadur Shastri National Award for scientific excellence'
    ],
    timeSlot: '09:45 AM - 10:15 AM • Kalam Convention Hall'
  }
];

// 2. PAST SPEAKERS ARCHIVE DATA (AT VARDHAMAN COLLEGE OF ENGINEERING)
// 2. AUTHENTIC PAST SPEAKERS ARCHIVE DATA (TEDxVCE AT VARDHAMAN COLLEGE OF ENGINEERING)
const pastSpeakers = [
  {
    id: 'dr-jayaprakash-narayan',
    name: 'Dr. Jayaprakash Narayan (JP)',
    role: 'Founder of Lok Satta Movement, Former IAS Officer & Physician',
    editionYear: 'Featured VCE',
    dateVisited: 'Vardhaman Auditorium, TEDxVCE',
    talkTitle: 'Rebuilding Democratic Governance and the Power of Youth',
    domain: 'Public Policy & Democratic Governance',
    category: 'Governance',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&auto=format&fit=crop&q=80',
    shortBio: 'Former IAS officer, physician, anti-corruption crusader, and architect of systemic electoral and administrative reforms in India.',
    visitSummary: 'Dr. Jayaprakash Narayan graced the TEDxVCE stage at Vardhaman College of Engineering, delivering a historic lecture on ethical leadership, systemic institutional reforms, and the indispensable duty of technical youth in national nation-building.',
    workImpact: 'Spearheaded Right to Information (RTI) advocacy, local government empowerment reforms, judicial accountability measures, and served as Member of the National Advisory Council.',
    talkTakeaways: [
      'Democracy atrophies when technical minds remain cynical bystanders; politics is the foundational tool for societal scale',
      'Engineering excellence without moral accountability creates brittle systems—students must champion public integrity',
      'Praised Vardhaman College of Engineering for cultivating socially conscious engineers and grassroots innovators'
    ],
    videoArchived: true
  },
  {
    id: 'bhagwat-das',
    name: 'Bhagwat Das Brahmachari (Bhakt Bhagwat)',
    role: 'World\'s Youngest TEDx Speaker & Child Philosopher',
    editionYear: 'Historic VCE',
    dateVisited: 'Vardhaman Stage, TEDxVCE',
    talkTitle: 'The Art of Living with Joy & Boundless Curiosity',
    domain: 'Philosophy, Mind & Early Wisdom',
    category: 'Arts',
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&auto=format&fit=crop&q=80',
    shortBio: 'Recognized globally as one of the world\'s youngest TEDx speakers in history, captivating audiences at just 5 years and 6 months old.',
    visitSummary: 'Bhagwat Das created international history right on the TEDxVCE stage at Vardhaman College of Engineering. At the tender age of 5.5 years, his profound clarity and disarming innocence left 1,200 attendees and international viewers in awe.',
    workImpact: 'Traveled across prominent academic forums and cultural institutions across India and abroad, inspiring millions through his viral TEDx talk delivered at Vardhaman College.',
    talkTakeaways: [
      'Complex adult anxieties stem from forgetting the elemental joy of selfless learning and unfiltered curiosity',
      'True wisdom does not inflate ego; it simplifies life into kindness, focus, and devotion to duty',
      'Received a unanimous standing ovation from the entire Vardhaman faculty and student council'
    ],
    videoArchived: true
  },
  {
    id: 'shams-aalam',
    name: 'Mohammad Shams Aalam Shaikh',
    role: 'World-Ranked Para-Swimmer, Limca Record Holder & Advocate',
    editionYear: 'Featured VCE',
    dateVisited: 'Vardhaman Auditorium, TEDxVCE',
    talkTitle: 'Diving Past the Impossible: The Architecture of Adaptive Will',
    domain: 'Sports, Adaptive Resilience & Inclusion',
    category: 'Resilience',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80',
    shortBio: 'Former national karate champion who triumphed over paraplegia to become a world-ranked international para-swimming champion.',
    visitSummary: 'Shams Aalam electrified the TEDxVCE audience at Vardhaman College of Engineering with his raw narrative of overcoming a spinal tumor at age 24, conquering open seas, and holding the Limca record for longest open-water sea swimming by a para-athlete.',
    workImpact: 'International medalist at the World Para Swimming World Series, Limca Book of Records holder, recipient of national awards for disability empowerment, and global speaker on universal design.',
    talkTakeaways: [
      'A wheelchair is merely physical apparatus; the human spirit remains unbounded when purpose is clear',
      'Challenged Vardhaman engineering students to pioneer affordable biomedical assistive devices and wheelchair-friendly campus tech',
      'Reminded attendees that accessibility is a fundamental human right, not a charitable afterthought'
    ],
    videoArchived: true
  },
  {
    id: 'niharika-sood',
    name: 'Niharika Sood',
    role: 'Miss Universe Telangana 2024, Model, Creator & Entrepreneur',
    editionYear: 'Featured VCE',
    dateVisited: 'Vardhaman Auditorium, TEDxVCE',
    talkTitle: 'Beyond the Code: Reclaiming Authenticity in the Age of Conformity',
    domain: 'Creative Entrepreneurship & Fashion',
    category: 'Entrepreneurship',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
    shortBio: 'Miss Universe Telangana 2024 who transitioned from a rigorous software engineering background into high-fashion entrepreneurship and digital lifestyle branding.',
    visitSummary: 'Niharika Sood took the stage at Vardhaman College of Engineering to speak candidly about shedding societal expectations, breaking out of corporate placement peer-pressure, and using engineering problem-solving to build sustainable creator brands.',
    workImpact: 'Titleholder of Miss Universe Telangana 2024, prominent lifestyle and fashion entrepreneur, and advocate for young women venturing into non-traditional creative careers.',
    talkTakeaways: [
      'Engineering teaches systematic problem decomposition, which becomes an unfair advantage in creative industries',
      'The fear of peer judgment is the single biggest bottleneck preventing young engineers from exploring unconventional arts',
      'Encouraged Vardhaman student creators to launch interdisciplinary campus media and fashion cells'
    ],
    videoArchived: true
  },
  {
    id: 'harika-narayan',
    name: 'Harika Narayan',
    role: 'Renowned Indian Playback Singer (Tollywood / Telugu Cinema)',
    editionYear: 'Featured VCE',
    dateVisited: 'Vardhaman Auditorium, TEDxVCE',
    talkTitle: 'Finding Resonance: The Unseen Discipline Behind the Microphone',
    domain: 'Music, Performance & Vocal Arts',
    category: 'Arts',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&auto=format&fit=crop&q=80',
    shortBio: 'Celebrated Indian playback vocalist with chart-topping songs in major Telugu motion pictures including Sarkaru Vaari Paata, Acharya, and blockbuster soundtracks.',
    visitSummary: 'Harika Narayan delivered an enchanting TEDxVCE session at Vardhaman College of Engineering, demonstrating live vocal acoustics, breath control under stage stress, and the relentless practice required to establish oneself in competitive music cinema.',
    workImpact: 'Recorded blockbuster playback tracks for leading Tollywood music directors (Thaman S, Mani Sharma), performing in sold-out national and international music concerts.',
    talkTakeaways: [
      'Talent is only the preliminary qualification; handling grueling rejections and vocal modulation under immense pressure defines durability',
      'Artistic expression serves as a vital psychological release valve for students trapped in intensive STEM coursework',
      'Engaged the 1,200-seat Vardhaman auditorium in a spontaneous interactive pitch and acoustic frequency exercise'
    ],
    videoArchived: true
  },
  {
    id: 'shrikant-sinha',
    name: 'Shrikant Sinha',
    role: 'Former CEO, TASK (Telangana Academy for Skill and Knowledge)',
    editionYear: 'Featured VCE',
    dateVisited: 'Vardhaman Auditorium, TEDxVCE',
    talkTitle: 'Success Hacks: Transcending Traditional Educational Boundaries',
    domain: 'Youth Empowerment & Skilling',
    category: 'Wellness',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80',
    shortBio: 'Former CEO of TASK and former Executive Director of NASSCOM Foundation, pioneer in technical education and youth skilling across Telangana.',
    visitSummary: 'Shrikant Sinha addressed Vardhaman College of Engineering students with his renowned talk "Success Hacks", dissecting the growing disparity between textbook memorization and real-world industrial software execution.',
    workImpact: 'Upskilled over 500,000 engineering and polytechnic students across Telangana, facilitated Tier-1 tech placements, and forged deep partnerships with global tech giants.',
    talkTakeaways: [
      'Rote academic memorization is obsolete; curiosity, continuous self-learning, and clear articulation are the supreme differentiators',
      'Never wait for classroom syllabi to update—build public software repositories, contribute to open source, and network boldly',
      'Lauded Vardhaman College for its state-of-the-art incubation labs and active technical student clubs'
    ],
    videoArchived: true
  },
  {
    id: 'ashok-kapatkar',
    name: 'Ashok Kapatkar',
    role: 'Certified Health Educator, Nutritionist & Wellness Coach',
    editionYear: 'Featured VCE',
    dateVisited: 'Vardhaman Auditorium, TEDxVCE',
    talkTitle: 'The Biology of High Performance: Biohacking Student Longevity',
    domain: 'Preventive Health & Metabolic Wellness',
    category: 'Wellness',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80',
    shortBio: 'Globally certified health educator and holistic nutritionist coaching leaders, professionals, and students on reversing metabolic burnout.',
    visitSummary: 'Ashok Kapatkar commanded the TEDxVCE stage at Vardhaman College of Engineering, delivering an eye-opening diagnostic on how chronic sleep deficits, junk food, and poor posture sabotage intellectual cognition in engineering students.',
    workImpact: 'Consultant to leading multinational corporations and sports academies, pioneering evidence-based metabolic restoration and lifestyle disease reversal programs.',
    talkTakeaways: [
      'Cognitive horsepower is directly determined by sleep architecture, cellular hydration, and circadian discipline',
      'Pulling consecutive all-nighters before project deadlines creates long-term neural and metabolic deficits',
      'Conducted a live 3-minute diaphragmatic breathing and postural recalibration routine with the entire auditorium'
    ],
    videoArchived: true
  },
  {
    id: 'rakesh-kurapati',
    name: 'Rakesh Kurapati',
    role: 'Founder & CEO, Fast Tracks Car Care',
    editionYear: 'Featured VCE',
    dateVisited: 'Vardhaman Auditorium, TEDxVCE',
    talkTitle: 'Bootstrapping in Unorganized Terrains: Building Trust in Automotive Services',
    domain: 'Automotive Innovation & Grassroots Startups',
    category: 'Entrepreneurship',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80',
    shortBio: 'Automotive innovator and founder of Fast Tracks Car Care, standardizing and modernizing vehicle detailing and maintenance across Hyderabad.',
    visitSummary: 'Rakesh Kurapati shared his grounded, unglamorous bootstrapping chronicle with Vardhaman undergraduates, explaining how obsessive quality control and radical pricing transparency built a market leader in a traditionally unorganized service sector.',
    workImpact: 'Scaled Fast Tracks Car Care into one of Telangana\'s premier auto detailing and restoration chains, training hundreds of skilled technicians and integrating digital booking systems.',
    talkTakeaways: [
      'High-impact entrepreneurship does not require inventing an app; massive wealth is created by professionalizing fragmented physical services',
      'Customer trust is the only non-depreciating asset in physical business operations',
      'Offered mentorship and incubation opportunities to Vardhaman mechanical and automobile engineering students'
    ],
    videoArchived: true
  }
];

// 3. INITIALIZATION & DOM LOGIC
document.addEventListener('DOMContentLoaded', () => {
  initCountdown();
  renderPresentSpeakers();
  renderPastSpeakers(pastSpeakers);
  initYearFilters();
  initSpeakerSearch();
  initTaglineReveal();
  initFaqAccordion();
  initModals();
  initPassRegistration();
  initMobileNav();
});

// 4. COUNTDOWN TIMER TO DEC 2, 2026, 09:00:00 IST
function initCountdown() {
  const targetDate = new Date('2026-12-02T09:00:00+05:30').getTime();

  function update() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      document.getElementById('countdown-days').innerText = '00';
      document.getElementById('countdown-hours').innerText = '00';
      document.getElementById('countdown-minutes').innerText = '00';
      document.getElementById('countdown-seconds').innerText = '00';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const pad = (n) => String(n).padStart(2, '0');

    document.getElementById('countdown-days').innerText = pad(days);
    document.getElementById('countdown-hours').innerText = pad(hours);
    document.getElementById('countdown-minutes').innerText = pad(minutes);
    document.getElementById('countdown-seconds').innerText = pad(seconds);
  }

  update();
  setInterval(update, 1000);
}

// 5. RENDER PRESENT 2026 SPEAKERS
function renderPresentSpeakers() {
  const container = document.getElementById('present-speakers-container');
  if (!container) return;

  container.innerHTML = presentSpeakers.map(sp => `
    <div class="speaker-card bg-surface-2 border border-surface-5 hover:border-ted-red/40 rounded-2xl p-6 flex flex-col justify-between group">
      <div>
        <div class="flex items-center justify-between mb-4">
          <span class="text-[11px] uppercase tracking-wider font-bold bg-ted-red/15 text-ted-red px-2.5 py-1 rounded-md">
            ${sp.badge}
          </span>
          <span class="text-xs text-textpalette-brownlight font-medium">2026 Edition</span>
        </div>

        <div class="flex items-center gap-4 mb-4">
          <div class="w-16 h-16 rounded-full overflow-hidden border-2 border-ted-red/60 shrink-0 bg-surface-4 shadow-md">
            <img src="${sp.image}" alt="${sp.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy">
          </div>
          <div>
            <h3 class="text-lg font-bold text-textpalette-white leading-tight">${sp.name}</h3>
            <p class="text-xs text-textpalette-beigemuted mt-0.5 line-clamp-2">${sp.role}</p>
          </div>
        </div>

        <div class="bg-surface-3/80 rounded-xl p-3 border border-surface-5/60 mb-4">
          <div class="text-[10px] uppercase font-bold text-ted-red tracking-wider">TED Talk Topic</div>
          <div class="text-sm font-semibold text-textpalette-white mt-1 leading-snug">
            "${sp.talkTitle}"
          </div>
        </div>

        <p class="text-xs text-textpalette-beigemuted leading-relaxed mb-4">
          ${sp.summary}
        </p>
      </div>

      <div>
        <div class="pt-3 border-t border-surface-5 flex items-center justify-between">
          <span class="text-[11px] font-mono text-textpalette-brownlight">${sp.domain}</span>
          <button class="open-present-dossier-btn text-xs font-semibold text-ted-red hover:text-white flex items-center gap-1 transition-colors" data-speaker-id="${sp.id}">
            <span>View Session</span>
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path></svg>
          </button>
        </div>
      </div>
    </div>
  `).join('');

  // Event listener for present speaker modal
  container.querySelectorAll('.open-present-dossier-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const spId = btn.getAttribute('data-speaker-id');
      const speaker = presentSpeakers.find(s => s.id === spId);
      if (speaker) openPresentSpeakerModal(speaker);
    });
  });
}

// 6. RENDER PAST SPEAKERS ARCHIVE
function renderPastSpeakers(list) {
  const container = document.getElementById('past-speakers-container');
  if (!container) return;

  if (list.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-12 text-center text-textpalette-beigemuted">
        <p class="text-sm">No speakers found matching your search.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = list.map(sp => `
    <div class="speaker-card bg-surface-2 border border-surface-5 hover:border-surface-6 rounded-2xl p-6 flex flex-col justify-between group">
      <div>
        <!-- TOP META: EDITION & VISIT DATE -->
        <div class="flex items-center justify-between gap-2 mb-4">
          <span class="text-[11px] font-mono font-semibold bg-surface-4 text-textpalette-beige px-2.5 py-1 rounded-md flex items-center gap-1 whitespace-nowrap shrink-0">
            <span class="w-1.5 h-1.5 rounded-full bg-ted-red"></span>
            <span>TEDxVCE Alumni</span>
          </span>
          <div class="text-[11px] text-textpalette-brownlight flex items-center gap-1 min-w-0">
            <svg class="w-3.5 h-3.5 text-ted-red shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path></svg>
            <span class="truncate">${sp.dateVisited}</span>
          </div>
        </div>

        <!-- SPEAKER AVATAR & NAME -->
        <div class="flex items-center gap-4 mb-4">
          <div class="w-14 h-14 rounded-full overflow-hidden border border-surface-5 shrink-0 bg-surface-4 shadow">
            <img src="${sp.image}" alt="${sp.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy">
          </div>
          <div>
            <h3 class="text-base font-bold text-textpalette-white leading-tight">${sp.name}</h3>
            <p class="text-xs text-textpalette-beigemuted mt-0.5 line-clamp-1">${sp.role}</p>
          </div>
        </div>

        <!-- TALK TITLE & SHORT SUMMARY -->
        <div class="mb-4">
          <div class="text-[11px] uppercase font-bold text-textpalette-brownlight tracking-wider mb-1">Delivered Talk</div>
          <h4 class="text-sm font-semibold text-textpalette-beigelight leading-snug">
            "${sp.talkTitle}"
          </h4>
        </div>

        <p class="text-xs text-textpalette-beigemuted line-clamp-3 leading-relaxed mb-4">
          ${sp.shortBio}
        </p>
      </div>

      <!-- INTERACTIVE BUTTON TO OPEN INFORMATION -->
      <div class="pt-4 border-t border-surface-5 flex flex-wrap items-center justify-between gap-2">
        <span class="text-[11px] font-mono text-textpalette-brownlight">${sp.domain}</span>
        <button class="open-past-dossier-btn bg-surface-3 hover:bg-ted-red hover:text-white text-textpalette-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 shadow-sm whitespace-nowrap shrink-0" data-speaker-id="${sp.id}">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span>Speaker Dossier</span>
        </button>
      </div>
    </div>
  `).join('');

  // Attach click events
  container.querySelectorAll('.open-past-dossier-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const spId = btn.getAttribute('data-speaker-id');
      const speaker = pastSpeakers.find(s => s.id === spId);
      if (speaker) openPastSpeakerModal(speaker);
    });
  });
}

// 7. CATEGORY & EDITION FILTERS LOGIC
function initYearFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('bg-surface-3', 'text-textpalette-white');
        b.classList.add('bg-surface-2', 'text-textpalette-beigemuted');
      });

      btn.classList.remove('bg-surface-2', 'text-textpalette-beigemuted');
      btn.classList.add('bg-surface-3', 'text-textpalette-white');

      const filter = btn.getAttribute('data-filter');
      const searchInput = document.getElementById('speaker-search-input');
      if (searchInput) searchInput.value = '';

      if (filter === 'all') {
        renderPastSpeakers(pastSpeakers);
      } else {
        const filtered = pastSpeakers.filter(sp => 
          sp.category === filter || 
          sp.domain.toLowerCase().includes(filter.toLowerCase()) ||
          (filter === 'Arts' && (sp.category === 'Arts' || sp.category === 'Philosophy')) ||
          (filter === 'Wellness' && (sp.category === 'Wellness' || sp.category === 'Skilling'))
        );
        renderPastSpeakers(filtered);
      }
    });
  });
}

// 8. SPEAKER SEARCH LOGIC
function initSpeakerSearch() {
  const searchInput = document.getElementById('speaker-search-input');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (!query) {
      renderPastSpeakers(pastSpeakers);
      return;
    }

    const filtered = pastSpeakers.filter(sp => 
      sp.name.toLowerCase().includes(query) ||
      sp.role.toLowerCase().includes(query) ||
      sp.domain.toLowerCase().includes(query) ||
      sp.talkTitle.toLowerCase().includes(query) ||
      sp.editionYear.includes(query)
    );

    renderPastSpeakers(filtered);
  });
}

// 9. TAGLINE REVEAL WORD-BY-WORD ANIMATION (B11 COMPLIANT)
function initTaglineReveal() {
  const target = document.getElementById('tagline-reveal-target');
  if (!target) return;

  const words = target.querySelectorAll('.reveal-word');
  if (words.length === 0) return;

  // Use IntersectionObserver on the parent container
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        words.forEach((word, index) => {
          setTimeout(() => {
            word.classList.add('revealed');
          }, index * 45); // 45ms staggered delay on base curve
        });
        observer.unobserve(target);
      }
    });
  }, {
    threshold: 0.35
  });

  observer.observe(target);
}

// 10. FAQ ACCORDION LOGIC
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const toggle = item.querySelector('.faq-toggle');
    const content = item.querySelector('.faq-content');
    const icon = toggle.querySelector('svg');

    toggle.addEventListener('click', () => {
      const isOpen = !content.classList.contains('hidden');

      // Close all others
      faqItems.forEach(other => {
        other.querySelector('.faq-content').classList.add('hidden');
        other.querySelector('.faq-toggle svg').classList.remove('rotate-180');
      });

      if (!isOpen) {
        content.classList.remove('hidden');
        icon.classList.add('rotate-180');
      }
    });
  });
}

// 11. MODAL DIALOG MANAGEMENT
function initModals() {
  const modal = document.getElementById('speaker-modal');
  const card = document.getElementById('modal-card');
  const closeBtn = document.getElementById('close-modal-btn');

  function closeModal() {
    modal.classList.add('opacity-0', 'pointer-events-none');
    card.classList.remove('scale-100');
    card.classList.add('scale-95');
    document.body.classList.remove('overflow-hidden');
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('pointer-events-none')) {
      closeModal();
    }
  });
}

// Open Past Speaker Dossier Modal
function openPastSpeakerModal(speaker) {
  const modal = document.getElementById('speaker-modal');
  const card = document.getElementById('modal-card');
  const content = document.getElementById('modal-content');

  content.innerHTML = `
    <!-- HEADER -->
    <div class="flex flex-col sm:flex-row items-start sm:items-center gap-5 pb-6 border-b border-surface-5">
      <div class="w-20 h-20 rounded-2xl overflow-hidden border-2 border-ted-red shrink-0 shadow-lg bg-surface-4">
        <img src="${speaker.image}" alt="${speaker.name}" class="w-full h-full object-cover">
      </div>
      <div>
        <div class="flex items-center gap-2 mb-1">
          <span class="text-[10px] font-mono font-bold bg-ted-red/20 text-ted-red px-2 py-0.5 rounded">
            Official TEDxVCE Speaker
          </span>
          <span class="text-xs text-textpalette-brownlight">
            Venue: ${speaker.dateVisited}
          </span>
        </div>
        <h3 class="text-2xl font-bold text-textpalette-white leading-tight">${speaker.name}</h3>
        <p class="text-xs text-textpalette-beigemuted mt-0.5">${speaker.role}</p>
      </div>
    </div>

    <!-- BODY -->
    <div class="py-6 space-y-6">
      <!-- TALK DELIVERED AT VARDHAMAN -->
      <div class="bg-surface-3 p-4 rounded-xl border border-surface-5">
        <div class="text-[10px] uppercase font-bold text-ted-red tracking-wider mb-1">Delivered TEDxVCE Talk</div>
        <h4 class="text-base font-semibold text-textpalette-white leading-snug">
          "${speaker.talkTitle}"
        </h4>
        <p class="text-xs text-textpalette-beigemuted mt-2 leading-relaxed">
          ${speaker.visitSummary}
        </p>
      </div>

      <!-- WORK & IMPACT -->
      <div>
        <h5 class="text-xs font-bold uppercase tracking-wider text-textpalette-beige mb-2">Notable Work & Career Impact</h5>
        <p class="text-xs text-textpalette-beigelight leading-relaxed bg-surface-1 p-3.5 rounded-xl border border-surface-5">
          ${speaker.workImpact}
        </p>
      </div>

      <!-- KEY TAKEAWAYS -->
      <div>
        <h5 class="text-xs font-bold uppercase tracking-wider text-textpalette-beige mb-2">Key Takeaways from the Vardhaman Session</h5>
        <ul class="space-y-2">
          ${speaker.talkTakeaways.map(t => `
            <li class="flex items-start gap-2.5 text-xs text-textpalette-beigelight">
              <span class="text-ted-red font-bold mt-0.5">•</span>
              <span>${t}</span>
            </li>
          `).join('')}
        </ul>
      </div>
    </div>

    <!-- FOOTER WITH VERIFIED BADGE -->
    <div class="pt-4 border-t border-surface-5 flex items-center justify-between">
      <div class="flex items-center gap-2 text-[11px] text-textpalette-brownlight">
        <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
        <span>Verified TEDxVCE Archive • Vardhaman College of Engineering</span>
      </div>
      <button onclick="document.getElementById('speaker-modal').classList.add('opacity-0', 'pointer-events-none')" class="bg-surface-3 hover:bg-surface-4 text-xs font-semibold text-textpalette-white px-4 py-2 rounded-lg transition-colors">
        Close Dossier
      </button>
    </div>
  `;

  modal.classList.remove('opacity-0', 'pointer-events-none');
  card.classList.remove('scale-95');
  card.classList.add('scale-100');
  document.body.classList.add('overflow-hidden');
}

// Open Present Speaker Session Modal
function openPresentSpeakerModal(speaker) {
  const modal = document.getElementById('speaker-modal');
  const card = document.getElementById('modal-card');
  const content = document.getElementById('modal-content');

  content.innerHTML = `
    <!-- HEADER -->
    <div class="flex flex-col sm:flex-row items-start sm:items-center gap-5 pb-6 border-b border-surface-5">
      <div class="w-20 h-20 rounded-2xl overflow-hidden border-2 border-ted-red shrink-0 shadow-lg bg-surface-4">
        <img src="${speaker.image}" alt="${speaker.name}" class="w-full h-full object-cover">
      </div>
      <div>
        <div class="flex items-center gap-2 mb-1">
          <span class="text-[10px] font-mono font-bold bg-ted-red text-white px-2 py-0.5 rounded">
            December 2, 2026
          </span>
          <span class="text-xs text-textpalette-brownlight">
            ${speaker.timeSlot}
          </span>
        </div>
        <h3 class="text-2xl font-bold text-textpalette-white leading-tight">${speaker.name}</h3>
        <p class="text-xs text-textpalette-beigemuted mt-0.5">${speaker.role}</p>
      </div>
    </div>

    <!-- BODY -->
    <div class="py-6 space-y-6">
      <!-- UPCOMING 2026 TALK -->
      <div class="bg-surface-3 p-4 rounded-xl border border-ted-red/30 shadow-md">
        <div class="text-[10px] uppercase font-bold text-ted-red tracking-wider mb-1">Upcoming Keynote Session</div>
        <h4 class="text-base font-semibold text-textpalette-white leading-snug">
          "${speaker.talkTitle}"
        </h4>
        <p class="text-xs text-textpalette-beigemuted mt-2 leading-relaxed">
          ${speaker.summary}
        </p>
      </div>

      <!-- QUOTE -->
      <blockquote class="border-l-2 border-ted-red pl-4 py-1 text-xs italic text-textpalette-beigelight">
        ${speaker.quote}
      </blockquote>

      <!-- CAREER HIGHLIGHTS -->
      <div>
        <h5 class="text-xs font-bold uppercase tracking-wider text-textpalette-beige mb-2">Track Record & Achievements</h5>
        <ul class="space-y-2">
          ${speaker.highlights.map(h => `
            <li class="flex items-start gap-2.5 text-xs text-textpalette-beigelight">
              <svg class="w-3.5 h-3.5 text-ted-red shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>${h}</span>
            </li>
          `).join('')}
        </ul>
      </div>
    </div>

    <!-- FOOTER -->
    <div class="pt-4 border-t border-surface-5 flex items-center justify-between">
      <div class="text-[11px] text-textpalette-brownlight">
        Venue: Vardhaman Kalam Auditorium
      </div>
      <button id="modal-reserve-trigger" class="bg-ted-red hover:bg-ted-darkred text-xs font-semibold text-white px-5 py-2 rounded-lg transition-colors shadow-md">
        Reserve Pass for this Talk
      </button>
    </div>
  `;

  modal.classList.remove('opacity-0', 'pointer-events-none');
  card.classList.remove('scale-95');
  card.classList.add('scale-100');
  document.body.classList.add('overflow-hidden');

  const trigger = document.getElementById('modal-reserve-trigger');
  if (trigger) {
    trigger.addEventListener('click', () => {
      modal.classList.add('opacity-0', 'pointer-events-none');
      openPassModal('General Delegate');
    });
  }
}

// 12. PASS REGISTRATION MODAL LOGIC
function initPassRegistration() {
  const passModal = document.getElementById('pass-modal');
  const passCard = document.getElementById('pass-card');
  const openPassBtn = document.getElementById('open-pass-btn');
  const heroReserveBtn = document.getElementById('hero-reserve-btn');
  const mobilePassBtn = document.getElementById('mobile-pass-btn');
  const closePassBtn = document.getElementById('close-pass-btn');
  const downloadClose = document.getElementById('download-pass-close');
  const passForm = document.getElementById('pass-form');

  function openModal(defaultTier = 'General Delegate') {
    const tierSelect = document.getElementById('reg-tier');
    if (tierSelect) tierSelect.value = defaultTier;

    document.getElementById('pass-form-container').classList.remove('hidden');
    document.getElementById('pass-success').classList.add('hidden');

    passModal.classList.remove('opacity-0', 'pointer-events-none');
    passCard.classList.remove('scale-95');
    passCard.classList.add('scale-100');
    document.body.classList.add('overflow-hidden');
  }

  function closeModal() {
    passModal.classList.add('opacity-0', 'pointer-events-none');
    passCard.classList.remove('scale-100');
    passCard.classList.add('scale-95');
    document.body.classList.remove('overflow-hidden');
  }

  // Open triggers
  if (openPassBtn) openPassBtn.addEventListener('click', () => openModal('General Delegate'));
  if (heroReserveBtn) heroReserveBtn.addEventListener('click', () => openModal('General Delegate'));
  if (mobilePassBtn) mobilePassBtn.addEventListener('click', () => {
    toggleMobileMenu(false);
    openModal('General Delegate');
  });

  // Tier buttons on pricing cards
  document.querySelectorAll('.select-tier-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tier = btn.getAttribute('data-tier') || 'General Delegate';
      openModal(tier);
    });
  });

  if (closePassBtn) closePassBtn.addEventListener('click', closeModal);
  if (downloadClose) downloadClose.addEventListener('click', closeModal);

  passModal.addEventListener('click', (e) => {
    if (e.target === passModal) closeModal();
  });

  // Handle form submission
  if (passForm) {
    passForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('reg-name').value.trim();
      const org = document.getElementById('reg-org').value.trim() || 'Vardhaman College of Engineering';
      const tier = document.getElementById('reg-tier').value;

      // Update Confirmation Badge
      document.getElementById('ticket-holder-name').innerText = name;
      document.getElementById('ticket-holder-org').innerText = org;
      document.getElementById('ticket-tier-badge').innerText = tier;
      document.getElementById('ticket-reference-id').innerText = 'ID: TEDX-VCE-' + Math.floor(100000 + Math.random() * 900000);

      // Transition to success state
      document.getElementById('pass-form-container').classList.add('hidden');
      document.getElementById('pass-success').classList.remove('hidden');
      passForm.reset();
    });
  }
}

function openPassModal(tier) {
  const passModal = document.getElementById('pass-modal');
  const passCard = document.getElementById('pass-card');
  const tierSelect = document.getElementById('reg-tier');
  if (tierSelect) tierSelect.value = tier;

  document.getElementById('pass-form-container').classList.remove('hidden');
  document.getElementById('pass-success').classList.add('hidden');

  passModal.classList.remove('opacity-0', 'pointer-events-none');
  passCard.classList.remove('scale-95');
  passCard.classList.add('scale-100');
  document.body.classList.add('overflow-hidden');
}

// 13. MOBILE MENU TOGGLE
function initMobileNav() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const panel = document.getElementById('mobile-menu-panel');
  const links = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !panel) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = !panel.classList.contains('pointer-events-none');
    toggleMobileMenu(!isOpen);
  });

  links.forEach(link => {
    link.addEventListener('click', () => toggleMobileMenu(false));
  });
}

function toggleMobileMenu(open) {
  const panel = document.getElementById('mobile-menu-panel');
  if (!panel) return;

  if (open) {
    panel.classList.remove('opacity-0', 'pointer-events-none');
    panel.classList.add('opacity-100');
    document.body.classList.add('overflow-hidden');
  } else {
    panel.classList.add('opacity-0', 'pointer-events-none');
    panel.classList.remove('opacity-100');
    document.body.classList.remove('overflow-hidden');
  }
}
