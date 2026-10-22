/**
 * Hệ Thống Trắc Nghiệm Mạng Máy Tính - PTIT (Đề Thi Giữa Kỳ & Nâng Cao Theo Chương)
 * Hỗ trợ 290 câu hỏi (55 câu Đề gốc + 235 câu Đề nâng cao 5 chương & thực hành mạng)
 */

const state = {
  allQuestions: [],
  filteredQuestions: [],
  groupFilter: 'all',     // 'all' | 'de_goc' | 'de_nangcao' | 'saved' | 'wrong'
  chapterFilter: 'all',   // 'all' | 'goc_1' | 'goc_2' | 'ch1' | 'ch2' | 'ch3' | 'ch4' | 'ch5' | 'practice'
  categoryFilter: 'all',  // 'all' | specific category name
  searchQuery: '',
  mode: 'study',          // 'study' | 'exam'
  viewType: 'paged',      // 'paged' | 'list'
  currentIndex: 0,
  userAnswers: {},        // { [qId]: originalOptionIndex }
  flaggedQuestions: new Set(),
  examSubmitted: false,
  examDurationMinutes: 40,
  timeRemainingSeconds: 40 * 60,
  timerInterval: null,
  isDark: false,
  shuffleQuestions: false,
  shuffledQuestionsList: null,
  optionsPermutation: {}  // { [qId]: [originalIdx0, originalIdx1, originalIdx2, originalIdx3] }
};

let dom = {};

function initDom() {
  dom = {
    themeToggle: document.getElementById('themeToggle'),
    groupSelect: document.getElementById('groupSelect'),
    chapterSelect: document.getElementById('chapterSelect'),
    categoryFilter: document.getElementById('categoryFilter'),
    searchInput: document.getElementById('searchInput'),
    modeStudyBtn: document.getElementById('modeStudyBtn'),
    modeExamBtn: document.getElementById('modeExamBtn'),
    viewPagedBtn: document.getElementById('viewPagedBtn'),
    viewListBtn: document.getElementById('viewListBtn'),
    shuffleToggle: document.getElementById('shuffleToggle'),
    resetBtn: document.getElementById('resetBtn'),

    timerContainer: document.getElementById('timerContainer'),
    timerText: document.getElementById('timerText'),
    progressText: document.getElementById('progressText'),
    progressBar: document.getElementById('progressBar'),
    scoreBadge: document.getElementById('scoreBadge'),

    mainQuizContainer: document.getElementById('mainQuizContainer'),
    paletteContainer: document.getElementById('paletteContainer'),
    summaryModal: document.getElementById('summaryModal'),
    modalContent: document.getElementById('modalContent'),
    submitExamBtn: document.getElementById('submitExamBtn'),

    pagedControls: document.getElementById('pagedControls'),
    prevBtn: document.getElementById('prevBtn'),
    flagBtn: document.getElementById('flagBtn'),
    nextBtn: document.getElementById('nextBtn')
  };
}

// Fisher-Yates (Knuth) Shuffle algorithm
function fisherYatesShuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Generate options permutation for a question
function getOptionsPermutation(q) {
  if (!state.shuffleQuestions) {
    return [0, 1, 2, 3];
  }
  if (!state.optionsPermutation[q.id]) {
    state.optionsPermutation[q.id] = fisherYatesShuffle([0, 1, 2, 3]);
  }
  return state.optionsPermutation[q.id];
}

// Lấy nhãn badge chương / đề thi ngắn gọn, đẹp mắt (chuẩn theo phong cách giao diện gốc)
function getChapterBadge(q) {
  if (q.chapter_code === 'goc_1' || q.exam === 1) {
    return '<span class="px-2.5 py-1 text-xs font-semibold rounded-md bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300">Đề 1: Lý Thuyết MMT</span>';
  }
  if (q.chapter_code === 'goc_2' || q.exam === 2) {
    return '<span class="px-2.5 py-1 text-xs font-semibold rounded-md bg-cyan-100 text-cyan-800 dark:bg-cyan-900/40 dark:text-cyan-300">Đề 2: Công Cụ & Lệnh Mạng</span>';
  }
  if (q.chapter_code === 'ch1') {
    return '<span class="px-2.5 py-1 text-xs font-semibold rounded-md bg-cyan-100 text-cyan-800 dark:bg-cyan-900/40 dark:text-cyan-300">Chương 1: Tổng Quan</span>';
  }
  if (q.chapter_code === 'ch2') {
    return '<span class="px-2.5 py-1 text-xs font-semibold rounded-md bg-cyan-100 text-cyan-800 dark:bg-cyan-900/40 dark:text-cyan-300">Chương 2: Tầng Ứng Dụng</span>';
  }
  if (q.chapter_code === 'ch3') {
    return '<span class="px-2.5 py-1 text-xs font-semibold rounded-md bg-cyan-100 text-cyan-800 dark:bg-cyan-900/40 dark:text-cyan-300">Chương 3: Tầng Giao Vận</span>';
  }
  if (q.chapter_code === 'ch4') {
    return '<span class="px-2.5 py-1 text-xs font-semibold rounded-md bg-cyan-100 text-cyan-800 dark:bg-cyan-900/40 dark:text-cyan-300">Chương 4: Tầng Mạng</span>';
  }
  if (q.chapter_code === 'ch5') {
    return '<span class="px-2.5 py-1 text-xs font-semibold rounded-md bg-cyan-100 text-cyan-800 dark:bg-cyan-900/40 dark:text-cyan-300">Chương 5: Tầng Liên Kết</span>';
  }
  if (q.chapter_code === 'practice') {
    return '<span class="px-2.5 py-1 text-xs font-semibold rounded-md bg-cyan-100 text-cyan-800 dark:bg-cyan-900/40 dark:text-cyan-300">Thực Hành & Lệnh Mạng</span>';
  }
  return '<span class="px-2.5 py-1 text-xs font-semibold rounded-md bg-cyan-100 text-cyan-800 dark:bg-cyan-900/40 dark:text-cyan-300">MMT PTIT</span>';
}
async function loadAllQuestions() {
  let loadedQuestions = [];

  // 1. Kiểm tra bundle offline (window.MMT_QUESTIONS_BUNDLE)
  if (window.MMT_QUESTIONS_BUNDLE) {
    const b = window.MMT_QUESTIONS_BUNDLE;
    if (b.de_goc) {
      Object.keys(b.de_goc).forEach(k => {
        const arr = b.de_goc[k] || [];
        arr.forEach(q => {
          q.exam_type = 'goc';
          if (!q.chapter_title) {
            q.chapter_title = q.exam === 1 ? 'Đề 1: Lý Thuyết MMT Tổng Hợp' : 'Đề 2: Công Cụ & Lệnh Mạng';
          }
          if (!q.chapter_code) {
            q.chapter_code = q.exam === 1 ? 'goc_1' : 'goc_2';
          }
          loadedQuestions.push(q);
        });
      });
    }
    if (b.de_nangcao) {
      const codeMap = {
        'chuong_1_tong_quan': 'ch1',
        'chuong_2_tang_ung_dung': 'ch2',
        'chuong_3_tang_giao_van': 'ch3',
        'chuong_4_tang_mang': 'ch4',
        'chuong_5_tang_lien_ket': 'ch5',
        'cong_cu_thuc_hanh_mang': 'practice'
      };
      Object.keys(b.de_nangcao).forEach(k => {
        const arr = b.de_nangcao[k] || [];
        arr.forEach(q => {
          q.exam_type = 'nang_cao';
          q.chapter_code = codeMap[k] || 'ch' + (q.chapter || 1);
          loadedQuestions.push(q);
        });
      });
    }
  }

  // 2. Nếu bundle chưa có hoặc chạy qua Web Server, thử fetch thêm từ file JSON
  if (loadedQuestions.length === 0) {
    try {
      const fetchList = [
        { url: 'src/de_goc/de_1.json', type: 'goc', code: 'goc_1', title: 'Đề 1: Lý Thuyết MMT Tổng Hợp' },
        { url: 'src/de_goc/de_2.json', type: 'goc', code: 'goc_2', title: 'Đề 2: Công Cụ & Lệnh Mạng' },
        { url: 'src/de_nangcao/chuong_1_tong_quan.json', type: 'nang_cao', code: 'ch1' },
        { url: 'src/de_nangcao/chuong_2_tang_ung_dung.json', type: 'nang_cao', code: 'ch2' },
        { url: 'src/de_nangcao/chuong_3_tang_giao_van.json', type: 'nang_cao', code: 'ch3' },
        { url: 'src/de_nangcao/chuong_4_tang_mang.json', type: 'nang_cao', code: 'ch4' },
        { url: 'src/de_nangcao/chuong_5_tang_lien_ket.json', type: 'nang_cao', code: 'ch5' },
        { url: 'src/de_nangcao/cong_cu_thuc_hanh_mang.json', type: 'nang_cao', code: 'practice' }
      ];

      for (const item of fetchList) {
        try {
          const res = await fetch(item.url);
          if (res.ok) {
            const data = await res.json();
            data.forEach(q => {
              q.exam_type = item.type;
              q.chapter_code = item.code;
              if (item.title && !q.chapter_title) q.chapter_title = item.title;
              loadedQuestions.push(q);
            });
          }
        } catch (e) {
          console.warn('Could not fetch ' + item.url, e);
        }
      }
    } catch (err) {
      console.error('Fetch error:', err);
    }
  }

  state.allQuestions = loadedQuestions;
  console.log(`Loaded total ${state.allQuestions.length} questions into system.`);
}

document.addEventListener('DOMContentLoaded', async () => {
  initDom();
  loadSavedTheme();
  await loadAllQuestions();
  loadSavedState();
  populateChapterFilter();
  populateCategoryFilter();
  applyFilters();
  bindEvents();
  renderApp();
});

// Cập nhật danh sách Học phần / Chương dựa theo Nhóm đề được chọn
function populateChapterFilter() {
  const group = state.groupFilter;
  const currentChapter = state.chapterFilter;

  const chapterOptions = [
    { value: 'all', label: 'Tất cả học phần / chương' },
    { value: 'goc_1', group: 'de_goc', label: '📋 Đề 1 (Gốc): Lý Thuyết MMT Tổng Hợp (30 câu)' },
    { value: 'goc_2', group: 'de_goc', label: '🛠️ Đề 2 (Gốc): Công Cụ & Lệnh Mạng (25 câu)' },
    { value: 'ch1', group: 'de_nangcao', label: '📖 Chương 1 (Nâng cao): Tổng Quan Mạng & Internet (35 câu)' },
    { value: 'ch2', group: 'de_nangcao', label: '🌐 Chương 2 (Nâng cao): Tầng Ứng Dụng (35 câu)' },
    { value: 'ch3', group: 'de_nangcao', label: '⚡ Chương 3 (Nâng cao): Tầng Giao Vận (35 câu)' },
    { value: 'ch4', group: 'de_nangcao', label: '🔀 Chương 4 (Nâng cao): Tầng Mạng (40 câu)' },
    { value: 'ch5', group: 'de_nangcao', label: '🔗 Chương 5 (Nâng cao): Tầng Liên Kết & LAN (35 câu)' },
    { value: 'practice', group: 'de_nangcao', label: '💻 Chuyên đề Thực Hành & Công Cụ Mạng (55 câu)' }
  ];

  dom.chapterSelect.innerHTML = '';

  const filteredChapters = chapterOptions.filter(ch => {
    if (ch.value === 'all') return true;
    if (group === 'de_goc') return ch.group === 'de_goc';
    if (group === 'de_nangcao') return ch.group === 'de_nangcao';
    return true; // group === 'all' | 'saved' | 'wrong'
  });

  filteredChapters.forEach(ch => {
    const opt = document.createElement('option');
    opt.value = ch.value;
    opt.textContent = ch.label;
    if (ch.value === currentChapter) opt.selected = true;
    dom.chapterSelect.appendChild(opt);
  });

  // Nếu chapter trước đó không còn hợp lệ trong nhóm mới, đặt lại về 'all'
  if (!filteredChapters.some(c => c.value === state.chapterFilter)) {
    state.chapterFilter = 'all';
    dom.chapterSelect.value = 'all';
  }
}

// Cập nhật danh sách Chuyên đề kiến thức dựa theo Nhóm và Chương đang chọn
function populateCategoryFilter() {
  let relevantQuestions = state.allQuestions;

  // Thu hẹp theo nhóm
  if (state.groupFilter === 'de_goc') {
    relevantQuestions = relevantQuestions.filter(q => q.exam_type === 'goc');
  } else if (state.groupFilter === 'de_nangcao') {
    relevantQuestions = relevantQuestions.filter(q => q.exam_type === 'nang_cao');
  }

  // Thu hẹp theo chương
  if (state.chapterFilter !== 'all') {
    relevantQuestions = relevantQuestions.filter(q => q.chapter_code === state.chapterFilter);
  }

  const categories = Array.from(new Set(relevantQuestions.map(q => q.category).filter(Boolean))).sort();

  dom.categoryFilter.innerHTML = `<option value="all">Tất cả chuyên đề (${relevantQuestions.length} câu)</option>`;

  categories.forEach(cat => {
    const count = relevantQuestions.filter(q => q.category === cat).length;
    const opt = document.createElement('option');
    opt.value = cat;
    opt.textContent = `${cat} (${count})`;
    if (cat === state.categoryFilter) opt.selected = true;
    dom.categoryFilter.appendChild(opt);
  });

  if (!categories.includes(state.categoryFilter)) {
    state.categoryFilter = 'all';
    dom.categoryFilter.value = 'all';
  }
}

function loadSavedTheme() {
  const savedTheme = localStorage.getItem('mmt_quiz_theme');
  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    state.isDark = true;
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    state.isDark = false;
    document.documentElement.removeAttribute('data-theme');
  }
  updateThemeIcon();
}

function toggleTheme() {
  state.isDark = !state.isDark;
  if (state.isDark) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('mmt_quiz_theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('mmt_quiz_theme', 'light');
  }
  updateThemeIcon();
}

function updateThemeIcon() {
  if (!dom.themeToggle) return;
  dom.themeToggle.innerHTML = state.isDark
    ? `<svg class="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"/></svg>`
    : `<svg class="w-5 h-5 text-slate-700" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/></svg>`;
}

function loadSavedState() {
  try {
    const saved = localStorage.getItem('mmt_quiz_answers');
    if (saved) state.userAnswers = JSON.parse(saved);

    const flagged = localStorage.getItem('mmt_quiz_flagged');
    if (flagged) state.flaggedQuestions = new Set(JSON.parse(flagged));
  } catch (e) {
    console.error('Failed to load state', e);
  }
}

function saveState() {
  try {
    localStorage.setItem('mmt_quiz_answers', JSON.stringify(state.userAnswers));
    localStorage.setItem('mmt_quiz_flagged', JSON.stringify(Array.from(state.flaggedQuestions)));
  } catch (e) {
    console.error('Failed to save state', e);
  }
}

let scrollAnimationId = null;

// Cuộn mượt đến ngay trước box câu hỏi "Câu XX", không bị trôi ngược lên phần chọn bộ đề
function scrollToQuestion(smooth = true) {
  if (scrollAnimationId) {
    cancelAnimationFrame(scrollAnimationId);
  }

  scrollAnimationId = requestAnimationFrame(() => {
    scrollAnimationId = null;
    const currentQ = state.filteredQuestions[state.currentIndex];
    const card = (currentQ ? document.getElementById(`q-card-${currentQ.id}`) : null)
                 || dom.mainQuizContainer.firstElementChild
                 || dom.mainQuizContainer;
    if (!card) return;

    const header = document.querySelector('header');
    const headerHeight = header ? header.offsetHeight : 64;

    // Lấy vị trí đỉnh của box câu hỏi so với toàn bộ trang
    const rect = card.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || 0;

    // Cuộn dừng lại ngay trước box câu hỏi (cách mép dưới header 12px), đảm bảo nhìn trọn vẹn Câu XX và tiêu đề câu hỏi
    const targetY = Math.max(0, Math.round(rect.top + scrollTop - headerHeight - 12));

    window.scrollTo({
      top: targetY,
      behavior: smooth ? 'smooth' : 'auto'
    });
  });
}

function bindEvents() {
  dom.themeToggle.addEventListener('click', toggleTheme);

  // Thay đổi Mục / Bộ đề
  dom.groupSelect.addEventListener('change', (e) => {
    state.groupFilter = e.target.value;
    state.chapterFilter = 'all';
    state.categoryFilter = 'all';
    state.currentIndex = 0;
    populateChapterFilter();
    populateCategoryFilter();
    applyFilters();
    if (state.mode === 'exam') startExam();
    renderApp();
  });

  // Thay đổi Học phần / Chương
  dom.chapterSelect.addEventListener('change', (e) => {
    state.chapterFilter = e.target.value;
    state.categoryFilter = 'all';
    state.currentIndex = 0;
    populateCategoryFilter();
    applyFilters();
    if (state.mode === 'exam') startExam();
    renderApp();
  });

  // Thay đổi Chuyên đề kiến thức
  dom.categoryFilter.addEventListener('change', (e) => {
    state.categoryFilter = e.target.value;
    state.currentIndex = 0;
    applyFilters();
    renderApp();
  });

  // Tìm kiếm câu hỏi
  dom.searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value.trim().toLowerCase();
    state.currentIndex = 0;
    applyFilters();
    renderApp();
  });

  dom.modeStudyBtn.addEventListener('click', () => setMode('study'));
  dom.modeExamBtn.addEventListener('click', () => setMode('exam'));
  dom.viewPagedBtn.addEventListener('click', () => setViewType('paged'));
  dom.viewListBtn.addEventListener('click', () => setViewType('list'));

  // Nút đảo câu hỏi và đáp án (Fisher-Yates)
  dom.shuffleToggle.addEventListener('click', () => {
    state.shuffleQuestions = !state.shuffleQuestions;
    dom.shuffleToggle.classList.toggle('bg-blue-600', state.shuffleQuestions);
    dom.shuffleToggle.classList.toggle('text-white', state.shuffleQuestions);
    dom.shuffleToggle.title = state.shuffleQuestions
      ? 'Đang BẬT đảo ngẫu nhiên câu hỏi & đáp án (nhấn để tắt)'
      : 'Đang TẮT đảo ngẫu nhiên (nhấn để bật)';

    // Reset lại bảng hoán vị để tạo xáo trộn mới
    state.optionsPermutation = {};
    state.shuffledQuestionsList = null;

    applyFilters();
    renderApp();
  });

  // Nút reset làm lại từ đầu
  dom.resetBtn.addEventListener('click', () => {
    if (confirm('Bạn có chắc muốn làm lại từ đầu và xóa toàn bộ câu trả lời hiện tại?')) {
      state.userAnswers = {};
      state.flaggedQuestions.clear();
      state.examSubmitted = false;
      saveState();
      if (state.mode === 'exam') startExam();
      renderApp();
    }
  });

  dom.prevBtn.addEventListener('click', () => {
    if (state.currentIndex > 0) {
      state.currentIndex--;
      renderApp();
      scrollToQuestion();
    }
  });

  if (dom.flagBtn) {
    dom.flagBtn.addEventListener('click', () => {
      const currentQ = state.filteredQuestions[state.currentIndex];
      if (!currentQ) return;
      toggleQuestionFlag(currentQ.id);
    });
  }

  dom.nextBtn.addEventListener('click', () => {
    if (state.currentIndex < state.filteredQuestions.length - 1) {
      state.currentIndex++;
      renderApp();
      scrollToQuestion();
    }
  });

  dom.submitExamBtn.addEventListener('click', () => {
    const total = state.filteredQuestions.length;
    const answered = state.filteredQuestions.filter(q => state.userAnswers[q.id] !== undefined).length;
    if (answered < total) {
      if (!confirm(`Bạn mới trả lời ${answered}/${total} câu hỏi. Bạn có chắc chắn muốn nộp bài ngay bây giờ?`)) {
        return;
      }
    }
    submitExam();
  });

  // Phím tắt bàn phím
  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;
    if (state.viewType === 'paged') {
      if (e.key === 'ArrowLeft') dom.prevBtn.click();
      if (e.key === 'ArrowRight') dom.nextBtn.click();
      if (['1', '2', '3', '4'].includes(e.key)) {
        const currentQ = state.filteredQuestions[state.currentIndex];
        if (currentQ) {
          const perm = getOptionsPermutation(currentQ);
          const visualIdx = parseInt(e.key) - 1;
          const origOptIndex = perm[visualIdx];
          selectOption(currentQ.id, origOptIndex);
        }
      }
    }
  });
}

function setMode(newMode) {
  if (state.mode === newMode) return;
  state.mode = newMode;
  if (newMode === 'exam') {
    dom.modeExamBtn.className = 'px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-lg bg-red-600 text-white shadow-sm transition';
    dom.modeStudyBtn.className = 'px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-lg bg-transparent text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition';
    dom.submitExamBtn.classList.remove('hidden');
    dom.timerContainer.classList.remove('hidden');
    startExam();
  } else {
    dom.modeStudyBtn.className = 'px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-lg bg-blue-600 text-white shadow-sm transition';
    dom.modeExamBtn.className = 'px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-lg bg-transparent text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition';
    dom.submitExamBtn.classList.add('hidden');
    dom.timerContainer.classList.add('hidden');
    clearInterval(state.timerInterval);
    state.examSubmitted = false;
  }
  renderApp();
}

function setViewType(type) {
  state.viewType = type;
  if (type === 'paged') {
    dom.viewPagedBtn.className = 'px-2.5 py-1 text-xs font-semibold rounded-md bg-white dark:bg-slate-600 text-slate-900 dark:text-white shadow-sm';
    dom.viewListBtn.className = 'px-2.5 py-1 text-xs font-medium rounded-md text-slate-600 dark:text-slate-400 hover:text-slate-900';
    dom.pagedControls.classList.remove('hidden');
    renderApp();
    scrollToQuestion(false);
  } else {
    dom.viewListBtn.className = 'px-2.5 py-1 text-xs font-semibold rounded-md bg-white dark:bg-slate-600 text-slate-900 dark:text-white shadow-sm';
    dom.viewPagedBtn.className = 'px-2.5 py-1 text-xs font-medium rounded-md text-slate-600 dark:text-slate-400 hover:text-slate-900';
    dom.pagedControls.classList.add('hidden');
    renderApp();
  }
}

function startExam() {
  clearInterval(state.timerInterval);
  state.examSubmitted = false;
  const count = state.filteredQuestions.length;
  // Mỗi câu khoảng 1 phút thi, tối thiểu 10 phút, tối đa 60 phút
  state.examDurationMinutes = Math.min(60, Math.max(10, Math.ceil(count * 1.0)));
  state.timeRemainingSeconds = state.examDurationMinutes * 60;
  updateTimerDisplay();

  state.timerInterval = setInterval(() => {
    state.timeRemainingSeconds--;
    updateTimerDisplay();
    if (state.timeRemainingSeconds <= 0) {
      clearInterval(state.timerInterval);
      alert('Đã hết thời gian làm bài! Hệ thống đang tự động nộp bài.');
      submitExam();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const mins = Math.floor(state.timeRemainingSeconds / 60);
  const secs = state.timeRemainingSeconds % 60;
  dom.timerText.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  if (state.timeRemainingSeconds <= 300) {
    dom.timerText.classList.add('text-red-300', 'animate-pulse');
  } else {
    dom.timerText.classList.remove('text-red-300', 'animate-pulse');
  }
}

function submitExam() {
  clearInterval(state.timerInterval);
  state.examSubmitted = true;
  renderApp();
  showExamSummaryModal();
}

function applyFilters() {
  let list = [...state.allQuestions];

  // 1. Lọc theo Mục / Bộ đề
  if (state.groupFilter === 'de_goc') {
    list = list.filter(q => q.exam_type === 'goc');
  } else if (state.groupFilter === 'de_nangcao') {
    list = list.filter(q => q.exam_type === 'nang_cao');
  } else if (state.groupFilter === 'saved') {
    list = list.filter(q => state.flaggedQuestions.has(q.id));
  } else if (state.groupFilter === 'wrong') {
    list = list.filter(q => state.userAnswers[q.id] !== undefined && state.userAnswers[q.id] !== q.correct);
  }

  // 2. Lọc theo Học phần / Chương
  if (state.chapterFilter !== 'all') {
    list = list.filter(q => q.chapter_code === state.chapterFilter);
  }

  // 3. Lọc theo Chuyên đề kiến thức
  if (state.categoryFilter !== 'all') {
    list = list.filter(q => q.category === state.categoryFilter);
  }

  // 4. Tìm kiếm từ khóa
  if (state.searchQuery) {
    const qText = state.searchQuery;
    list = list.filter(q =>
      (q.question && q.question.toLowerCase().includes(qText)) ||
      (q.options && q.options.some(opt => opt.toLowerCase().includes(qText))) ||
      (q.category && q.category.toLowerCase().includes(qText)) ||
      (q.explanation && q.explanation.toLowerCase().includes(qText))
    );
  }

  // 5. Đảo câu hỏi bằng Fisher-Yates shuffle chuẩn xác
  if (state.shuffleQuestions) {
    if (!state.shuffledQuestionsList) {
      state.shuffledQuestionsList = fisherYatesShuffle(list);
    }
    list = state.shuffledQuestionsList;
  } else {
    state.shuffledQuestionsList = null;
  }

  state.filteredQuestions = list;
  if (state.currentIndex >= list.length) {
    state.currentIndex = Math.max(0, list.length - 1);
  }
}

// Xử lý chọn đáp án (đã khắc phục lỗi chọn lại đáp án khi đã có kết quả trong Study mode)
function selectOption(questionId, origOptIndex) {
  // 1. Trong chế độ Thi thử sau khi đã nộp bài: Khóa hoàn toàn
  if (state.mode === 'exam' && state.examSubmitted) return;

  // 2. Trong chế độ Luyện tập: Nếu câu này ĐÃ ĐƯỢC CHỌN TRƯỚC ĐÓ, không cho click đổi sang đáp án khác
  // để tránh việc nhìn thấy đáp án đúng màu xanh rồi bấm lại ăn điểm gian lận
  if (state.mode === 'study' && state.userAnswers[questionId] !== undefined) {
    return;
  }

  // Lưu đáp án (lưu theo chỉ số gốc 0..3 của câu hỏi)
  state.userAnswers[questionId] = origOptIndex;
  saveState();
  renderApp();
}

// Cho phép người dùng làm lại câu này trong chế độ Luyện tập nếu muốn thử sức lại
function retryQuestion(questionId) {
  delete state.userAnswers[questionId];
  saveState();
  renderApp();
}

function renderApp() {
  renderProgress();
  renderPalette();
  if (state.viewType === 'paged') {
    renderPagedView();
  } else {
    renderListView();
  }
}

function renderProgress() {
  const total = state.filteredQuestions.length;
  const answered = state.filteredQuestions.filter(q => state.userAnswers[q.id] !== undefined).length;
  const percent = total > 0 ? Math.round((answered / total) * 100) : 0;

  dom.progressText.textContent = `${answered} / ${total} câu đã làm (${percent}%)`;
  dom.progressBar.style.width = `${percent}%`;

  if (dom.pagedIndicator) {
    dom.pagedIndicator.textContent = total > 0 ? `Câu ${state.currentIndex + 1} / ${total}` : '0 / 0';
  }

  if (state.mode === 'study' || state.examSubmitted) {
    let correct = 0;
    state.filteredQuestions.forEach(q => {
      if (state.userAnswers[q.id] === q.correct) correct++;
    });
    const score10 = total > 0 ? ((correct / total) * 10).toFixed(1) : '0.0';
    dom.scoreBadge.classList.remove('hidden');
    dom.scoreBadge.textContent = `Điểm: ${score10}/10 (${correct}/${total} câu đúng)`;
  } else {
    dom.scoreBadge.classList.add('hidden');
  }
}

function renderPalette() {
  dom.paletteContainer.innerHTML = '';
  if (state.filteredQuestions.length === 0) {
    dom.paletteContainer.innerHTML = '<p class="text-xs text-slate-500 col-span-5 text-center py-2">Không có câu hỏi phù hợp.</p>';
    return;
  }

  state.filteredQuestions.forEach((q, idx) => {
    const btn = document.createElement('button');
    btn.className = 'palette-btn';
    btn.textContent = idx + 1;

    const isAnswered = state.userAnswers[q.id] !== undefined;
    const isFlagged = state.flaggedQuestions.has(q.id);
    const isActive = state.viewType === 'paged' && state.currentIndex === idx;

    if (isActive) btn.classList.add('active');
    if (isFlagged) btn.classList.add('marked');

    if (isAnswered) {
      if (state.mode === 'study' || state.examSubmitted) {
        if (state.userAnswers[q.id] === q.correct) {
          btn.classList.add('correct-eval');
        } else {
          btn.classList.add('wrong-eval');
        }
      } else {
        btn.classList.add('answered');
      }
    }

    btn.addEventListener('click', () => {
      state.currentIndex = idx;
      if (state.viewType === 'list') {
        const targetCard = document.getElementById(`q-card-${q.id}`);
        if (targetCard) targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        renderApp();
        scrollToQuestion();
      }
    });

    dom.paletteContainer.appendChild(btn);
  });
}

function renderPagedView() {
  if (state.filteredQuestions.length === 0) {
    dom.mainQuizContainer.innerHTML = `
      <div class="bg-white dark:bg-slate-800 rounded-2xl p-10 text-center border border-slate-200 dark:border-slate-700 shadow-sm">
        <div class="w-16 h-16 bg-blue-50 dark:bg-blue-950/40 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        </div>
        <h3 class="text-lg font-bold text-slate-800 dark:text-slate-100 mb-1">Không tìm thấy câu hỏi phù hợp</h3>
        <p class="text-slate-500 dark:text-slate-400 text-sm max-w-sm mx-auto">Vui lòng điều chỉnh lại bộ lọc hoặc từ khóa tìm kiếm.</p>
        <button onclick="resetFilter()" class="mt-4 px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-700 transition shadow-sm">
          Đặt lại bộ lọc về mặc định
        </button>
      </div>
    `;
    dom.pagedControls.classList.add('hidden');
    return;
  }

  dom.pagedControls.classList.remove('hidden');
  const q = state.filteredQuestions[state.currentIndex];
  dom.mainQuizContainer.innerHTML = createQuestionCardHtml(q, state.currentIndex);

  dom.prevBtn.disabled = state.currentIndex === 0;
  dom.nextBtn.disabled = state.currentIndex === state.filteredQuestions.length - 1;

  if (dom.flagBtn) {
    const isFlagged = state.flaggedQuestions.has(q.id);
    if (isFlagged) {
      dom.flagBtn.className = 'px-4 py-2 rounded-xl border border-amber-300 bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 font-semibold text-sm transition flex items-center shadow-xs';
      dom.flagBtn.innerHTML = `<svg class="w-4 h-4 mr-1.5 text-amber-500 fill-current" fill="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/></svg> ★ Đã đánh dấu`;
    } else {
      dom.flagBtn.className = 'px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 font-medium text-sm transition flex items-center text-slate-700 dark:text-slate-300';
      dom.flagBtn.innerHTML = `<svg class="w-4 h-4 mr-1.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/></svg> ☆ Đánh dấu xem lại`;
    }
  }
}

function renderListView() {
  if (state.filteredQuestions.length === 0) {
    dom.mainQuizContainer.innerHTML = `
      <div class="bg-white dark:bg-slate-800 rounded-2xl p-10 text-center border border-slate-200 dark:border-slate-700 shadow-sm">
        <p class="text-slate-500 dark:text-slate-400 text-base">Không tìm thấy câu hỏi nào phù hợp với bộ lọc!</p>
      </div>
    `;
    return;
  }

  dom.mainQuizContainer.innerHTML = state.filteredQuestions.map((q, idx) => createQuestionCardHtml(q, idx)).join('');
}

// Tạo HTML cho thẻ câu hỏi theo chuẩn giao diện sạch đẹp, tinh gọn (1 hàng duy nhất)
function createQuestionCardHtml(q, displayIdx) {
  const selectedOrigIdx = state.userAnswers[q.id];
  const isAnswered = selectedOrigIdx !== undefined;
  const isStudy = state.mode === 'study';
  const showFeedback = isStudy || state.examSubmitted;
  const isFlagged = state.flaggedQuestions.has(q.id);
  const isList = state.viewType === 'list';

  const letters = ['A', 'B', 'C', 'D'];
  const perm = getOptionsPermutation(q);

  const optionsHtml = perm.map((origOptIdx, visualIdx) => {
    const optText = q.options[origOptIdx];
    let optionClass = 'option-label';
    let checkIcon = '';

    const isThisSelected = selectedOrigIdx === origOptIdx;
    const isThisCorrect = origOptIdx === q.correct;

    if (showFeedback && isAnswered) {
      if (isThisCorrect) {
        optionClass += ' correct';
        checkIcon = `<span class="ml-auto text-green-600 dark:text-green-400 font-bold text-xs flex items-center shrink-0 pl-2"><svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg> Đáp án đúng</span>`;
      } else if (isThisSelected) {
        optionClass += ' incorrect';
        checkIcon = `<span class="ml-auto text-red-600 dark:text-red-400 font-bold text-xs flex items-center shrink-0 pl-2"><svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/></svg> Lựa chọn của bạn</span>`;
      }
    } else if (isThisSelected) {
      optionClass += ' selected';
    }

    const disabledAttr = (isStudy && isAnswered) || (state.mode === 'exam' && state.examSubmitted) ? 'style="cursor: default;"' : '';

    return `
      <div class="${optionClass} mb-2.5" ${disabledAttr} onclick="selectOption(${q.id}, ${origOptIdx})">
        <div class="w-7 h-7 rounded-full border border-slate-300 dark:border-slate-600 flex items-center justify-center font-bold text-xs mr-3 shrink-0 ${isThisSelected ? 'bg-blue-600 text-white border-blue-600' : 'bg-slate-50 dark:bg-slate-700 text-slate-700 dark:text-slate-300'}">
          ${letters[visualIdx]}
        </div>
        <div class="flex-1 text-slate-800 dark:text-slate-200 text-sm md:text-base leading-relaxed">
          ${optText}
        </div>
        ${checkIcon}
      </div>
    `;
  }).join('');

  let explanationHtml = '';
  if (showFeedback && isAnswered) {
    const isCorrect = selectedOrigIdx === q.correct;
    const visualCorrectIdx = perm.indexOf(q.correct);
    const correctLetter = visualCorrectIdx >= 0 ? letters[visualCorrectIdx] : letters[q.correct];

    explanationHtml = `
      <div class="mt-4 p-4 rounded-xl border ${isCorrect ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200' : 'bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800 text-red-900 dark:text-red-200'} fade-in">
        <div class="flex items-center font-bold mb-1.5">
          ${isCorrect
            ? '<svg class="w-5 h-5 text-emerald-600 dark:text-emerald-400 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg> Chính xác!'
            : '<svg class="w-5 h-5 text-red-600 dark:text-red-400 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/></svg> Chưa chính xác!'
          }
          <span class="ml-2 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-300">
            Đáp án đúng: ${correctLetter}
          </span>
        </div>
        <p class="text-sm leading-relaxed mt-2">
          <strong class="font-semibold">Giải thích chi tiết:</strong> ${q.explanation}
          ${isStudy ? `
            <button onclick="retryQuestion(${q.id})" class="inline-flex items-center text-xs text-blue-600 dark:text-blue-400 hover:underline font-semibold ml-2">
              <svg class="w-3 h-3 mr-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg> Làm lại câu này
            </button>
          ` : ''}
        </p>
      </div>
    `;
  }

  const examBadge = getChapterBadge(q);

  return `
    <div id="q-card-${q.id}" class="bg-white dark:bg-slate-800 rounded-2xl p-5 md:p-7 border border-slate-200 dark:border-slate-700 shadow-sm mb-6 fade-in">
      <div class="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-100 dark:border-slate-700/60">
        <div class="flex items-center gap-2 flex-wrap">
          <span class="px-3 py-1 rounded-lg bg-blue-600 text-white font-bold text-sm">Câu ${displayIdx + 1}</span>
          ${examBadge}
          <span class="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">${q.category || 'Tổng hợp'}</span>
        </div>
        ${isList ? `
          <button onclick="toggleQuestionFlag(${q.id})" class="text-xs font-semibold flex items-center px-2.5 py-1 rounded-md border ${isFlagged ? 'border-amber-300 bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300' : 'border-slate-200 dark:border-slate-700 text-slate-500'}">
            ${isFlagged ? '★ Đã lưu' : '☆ Đánh dấu'}
          </button>
        ` : ''}
      </div>

      <!-- Nội dung câu hỏi -->
      <h3 class="text-base md:text-lg font-semibold text-slate-900 dark:text-white mb-5 leading-snack">
        ${q.question}
      </h3>

      <!-- Danh sách đáp án -->
      <div class="options-container space-y-1">
        ${optionsHtml}
      </div>

      <!-- Giải thích chi tiết -->
      ${explanationHtml}
    </div>
  `;
}

function toggleQuestionFlag(id) {
  if (state.flaggedQuestions.has(id)) {
    state.flaggedQuestions.delete(id);
  } else {
    state.flaggedQuestions.add(id);
  }
  saveState();
  renderApp();
}

function resetFilter() {
  dom.groupSelect.value = 'all';
  state.groupFilter = 'all';
  state.chapterFilter = 'all';
  state.categoryFilter = 'all';
  dom.searchInput.value = '';
  state.searchQuery = '';
  state.currentIndex = 0;
  populateChapterFilter();
  populateCategoryFilter();
  applyFilters();
  renderApp();
}

function showExamSummaryModal() {
  const total = state.filteredQuestions.length;
  let correct = 0;
  let wrong = 0;
  let unattempted = 0;

  state.filteredQuestions.forEach(q => {
    const ans = state.userAnswers[q.id];
    if (ans === undefined) unattempted++;
    else if (ans === q.correct) correct++;
    else wrong++;
  });

  const score10 = total > 0 ? ((correct / total) * 10).toFixed(2) : '0.00';
  const percent = total > 0 ? Math.round((correct / total) * 100) : 0;

  dom.modalContent.innerHTML = `
    <div class="text-center mb-6">
      <div class="inline-flex items-center justify-center w-20 h-20 rounded-full ${percent >= 80 ? 'bg-green-100 text-green-600 dark:bg-green-950 dark:text-green-400' : percent >= 50 ? 'bg-amber-100 text-amber-600 dark:bg-amber-950 dark:text-amber-400' : 'bg-red-100 text-red-600 dark:bg-red-950 dark:text-red-400'} mb-3">
        <span class="text-3xl font-extrabold">${score10}</span>
      </div>
      <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-1">${percent >= 80 ? 'Xuất Sắc! 🎉' : percent >= 50 ? 'Đạt Yêu Cầu 👍' : 'Cần Ôn Luyện Thêm 📚'}</h2>
      <p class="text-sm text-slate-500 dark:text-slate-400">Bạn đã hoàn thành bài kiểm tra trắc nghiệm Mạng Máy Tính</p>
    </div>

    <div class="grid grid-cols-3 gap-3 mb-6">
      <div class="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-800 text-center">
        <div class="text-xl font-bold text-emerald-600 dark:text-emerald-400">${correct}</div>
        <div class="text-xs text-slate-500 font-medium">Câu đúng</div>
      </div>
      <div class="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-100 dark:border-rose-800 text-center">
        <div class="text-xl font-bold text-rose-600 dark:text-rose-400">${wrong}</div>
        <div class="text-xs text-slate-500 font-medium">Câu sai</div>
      </div>
      <div class="p-3 rounded-xl bg-slate-100 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-700 text-center">
        <div class="text-xl font-bold text-slate-600 dark:text-slate-300">${unattempted}</div>
        <div class="text-xs text-slate-500 font-medium">Chưa làm</div>
      </div>
    </div>

    <div class="flex flex-col sm:flex-row gap-3">
      <button onclick="closeModal(); filterWrongOnly()" class="flex-1 px-4 py-2.5 rounded-xl bg-rose-600 text-white font-semibold text-sm hover:bg-rose-700 transition shadow-sm">
        Xem & Luyện lại câu sai (${wrong})
      </button>
      <button onclick="closeModal(); setViewType('list')" class="flex-1 px-4 py-2.5 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition shadow-sm">
        Xem toàn bộ lời giải chi tiết
      </button>
    </div>
  `;

  dom.summaryModal.classList.remove('hidden');
}

function closeModal() {
  dom.summaryModal.classList.add('hidden');
}

function filterWrongOnly() {
  state.groupFilter = 'wrong';
  dom.groupSelect.value = 'wrong';
  state.chapterFilter = 'all';
  state.categoryFilter = 'all';
  state.currentIndex = 0;
  populateChapterFilter();
  populateCategoryFilter();
  applyFilters();
  renderApp();
}
