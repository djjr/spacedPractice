// catalog-engine.js
// Shared engine for catalog/search apps.
// Before loading this script, define window.catalogDataFiles = ['deck1', 'deck2', ...]

(function () {
  const dataFiles = window.catalogDataFiles || [];

  let allQuestions = [];
  let currentTag = 'all';
  let searchQuery = '';

  async function loadAllFlashcards() {
    const promises = dataFiles.map(fileName => {
      // strip any accidental .js suffix before adding it back
      const base = fileName.replace(/\.js$/, '');
      return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = `decks/${base}.js`;

        script.onload = () => {
          if (window.flashcardData) {
            const questions = window.flashcardData.map(card => ({
              ...card,
              source: base
            }));
            delete window.flashcardData;
            resolve(questions);
          } else {
            resolve([]);
          }
        };

        script.onerror = () => {
          console.warn(`Failed to load decks/${base}.js`);
          resolve([]);
        };

        document.head.appendChild(script);
      });
    });

    const results = await Promise.all(promises);
    allQuestions = results.flat();
    initializeApp();
  }

  function initializeApp() {
    generateTagButtons();
    renderQuestions();
    setupEventListeners();
  }

  function generateTagButtons() {
    const tagSet = new Set();
    allQuestions.forEach(q => {
      if (q.tags && Array.isArray(q.tags)) {
        q.tags.forEach(tag => tagSet.add(tag));
      }
    });

    const sortedTags = Array.from(tagSet).sort();
    const container = document.getElementById('tagButtons');

    sortedTags.forEach(tag => {
      const btn = document.createElement('button');
      btn.className = 'tag-btn';
      btn.setAttribute('data-tag', tag);
      btn.textContent = tag;
      btn.onclick = () => filterByTag(tag);
      container.appendChild(btn);
    });
  }

  function filterByTag(tag) {
    currentTag = tag;
    document.querySelectorAll('.tag-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-tag="${tag}"]`).classList.add('active');
    renderQuestions();
  }

  function handleSearch(query) {
    searchQuery = query.toLowerCase().trim();
    renderQuestions();
  }

  function getFilteredQuestions() {
    let filtered = allQuestions;

    if (currentTag !== 'all') {
      filtered = filtered.filter(q => q.tags && q.tags.includes(currentTag));
    }

    if (searchQuery) {
      filtered = filtered.filter(q =>
        q.question.toLowerCase().includes(searchQuery) ||
        q.answer.toLowerCase().includes(searchQuery)
      );
    }

    return filtered;
  }

  function renderQuestions() {
    const filtered = getFilteredQuestions();
    const questionsList = document.getElementById('questionsList');
    const questionCount = document.getElementById('questionCount');

    questionCount.textContent = `${filtered.length} question${filtered.length !== 1 ? 's' : ''}`;

    if (filtered.length === 0) {
      questionsList.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">🔍</div>
          <div class="empty-state-text">No questions found</div>
        </div>`;
      return;
    }

    questionsList.innerHTML = filtered.map((q, index) => `
      <div class="question-card" data-index="${index}">
        <div class="question-header" onclick="toggleQuestion(${index})">
          <div class="question-text">${q.question}</div>
          <div class="expand-icon">▼</div>
        </div>
        <div class="answer-section">
          <div class="answer-content">
            <div class="answer-text">${q.answer}</div>
            <div class="source-badge">${q.source}</div>
          </div>
        </div>
      </div>`).join('');
  }

  // Exposed globally because it's called from inline onclick handlers in rendered HTML
  window.toggleQuestion = function (index) {
    const card = document.querySelector(`[data-index="${index}"]`);
    const answerSection = card.querySelector('.answer-section');

    if (card.classList.contains('expanded')) {
      card.classList.remove('expanded');
      answerSection.style.maxHeight = '0';
    } else {
      card.classList.add('expanded');
      answerSection.style.maxHeight = answerSection.scrollHeight + 'px';
    }
  };

  function setupEventListeners() {
    document.getElementById('searchInput').addEventListener('input', e => {
      handleSearch(e.target.value);
    });
    document.querySelector('[data-tag="all"]').onclick = () => filterByTag('all');
  }

  loadAllFlashcards();
})();
