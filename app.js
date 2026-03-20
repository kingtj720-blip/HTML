// HTMLcraft — Application logic

let done = new Set();
let current = -1;

function getLevelLabel(l) {
  return l === 'basics' ? 'basics' : l === 'intermediate' ? 'intermediate' : 'advanced';
}
function getBadgeClass(l) {
  return 'badge-' + l;
}

function openLesson(idx) {
  current = idx;
  document.getElementById('hero').classList.remove('visible');
  const lv = document.getElementById('lesson-view');
  lv.classList.remove('visible');

  setTimeout(() => {
    renderLesson(idx);
    lv.classList.add('visible');
    lv.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 50);

  document.querySelectorAll('.nav-item').forEach((el, i) => {
    el.classList.toggle('active', i === idx);
  });

  if (window.innerWidth <= 900) {
    document.getElementById('sidebar').classList.remove('open');
  }
}

function showHero() {
  current = -1;
  document.getElementById('lesson-view').classList.remove('visible');
  const hero = document.getElementById('hero');
  hero.classList.add('visible');
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
}

function renderLesson(idx) {
  const l = lessons[idx];
  const isDone = done.has(idx);
  const lv = document.getElementById('lesson-view');

  lv.innerHTML = `
    <div class="lesson-header">
      <div class="lesson-meta">
        <span class="level-badge ${getBadgeClass(l.level)}">${getLevelLabel(l.level)}</span>
        <span class="lesson-num-tag">Lesson ${idx + 1} of ${lessons.length}</span>
      </div>
      <h1 class="lesson-title">${l.title}</h1>
      <p class="lesson-intro">${l.intro}</p>
    </div>

    ${l.content}

    <div class="editor-block">
      <div class="editor-topbar">
        <div class="editor-dots">
          <div class="editor-dot dot-r"></div>
          <div class="editor-dot dot-y"></div>
          <div class="editor-dot dot-g"></div>
        </div>
        <span class="editor-label">index.html — live editor</span>
        <button class="run-code-btn" onclick="runPreview()">▶ Run</button>
      </div>
      <div class="editor-tabs">
        <button class="editor-tab active" onclick="switchEditorTab('code', this)">CODE</button>
        <button class="editor-tab" onclick="switchEditorTab('preview', this)">PREVIEW</button>
      </div>
      <div class="editor-body">
        <div class="editor-pane active-pane" id="ep-code">
          <div class="pane-label">CODE</div>
          <textarea class="code-area" id="code-editor" spellcheck="false">${l.code.replace(/</g,'&lt;').replace(/>/g,'&gt;')}</textarea>
        </div>
        <div class="editor-pane" id="ep-preview">
          <div class="pane-label">PREVIEW</div>
          <iframe class="preview-frame" id="preview-frame"></iframe>
        </div>
      </div>
    </div>

    <div class="quiz-block">
      <h3>🧠 Quick Check</h3>
      <div class="quiz-q">${l.quiz.q}</div>
      <div class="quiz-options">
        ${l.quiz.opts.map((o,i) => `<div class="quiz-opt" onclick="answerQuiz(${i}, ${l.quiz.ans}, this)">${String.fromCharCode(65+i)}. ${o}</div>`).join('')}
      </div>
      <div class="quiz-feedback" id="quiz-fb"></div>
    </div>

    <div class="lesson-nav">
      ${idx > 0 ? `<button class="nav-btn" onclick="openLesson(${idx-1})">← Previous</button>` : `<button class="nav-btn" onclick="showHero()">← Home</button>`}
      <button class="mark-done-btn ${isDone ? 'done' : ''}" id="mark-btn" onclick="markDone(${idx})">
        ${isDone ? '✓ Completed' : '○ Mark complete'}
      </button>
      ${idx < lessons.length-1 ? `<button class="nav-btn primary" onclick="openLesson(${idx+1})">Next →</button>` : `<button class="nav-btn primary" onclick="showHero()">🎉 Finish!</button>`}
    </div>
  `;

  setTimeout(runPreview, 80);

  // Wrap tag-tables for horizontal scroll on mobile
  lv.querySelectorAll('.tag-table').forEach(tbl => {
    if (!tbl.parentElement.classList.contains('tag-table-wrap')) {
      const wrap = document.createElement('div');
      wrap.className = 'tag-table-wrap';
      tbl.parentNode.insertBefore(wrap, tbl);
      wrap.appendChild(tbl);
    }
  });

  const ta = document.getElementById('code-editor');
  ta.addEventListener('input', runPreview);
  ta.addEventListener('keydown', e => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const s = ta.selectionStart, en = ta.selectionEnd;
      ta.value = ta.value.substring(0,s) + '  ' + ta.value.substring(en);
      ta.selectionStart = ta.selectionEnd = s + 2;
    }
  });
}

function runPreview() {
  const ta = document.getElementById('code-editor');
  const frame = document.getElementById('preview-frame');
  if (!ta || !frame) return;
  const code = ta.value.replace(/&lt;/g,'<').replace(/&gt;/g,'>');
  const doc = frame.contentDocument || frame.contentWindow.document;
  doc.open(); doc.write(code); doc.close();
}

function answerQuiz(chosen, correct, el) {
  const opts = document.querySelectorAll('.quiz-opt');
  opts.forEach(o => o.style.pointerEvents = 'none');
  opts[correct].classList.add('correct');
  const fb = document.getElementById('quiz-fb');
  if (chosen === correct) {
    el.classList.add('correct');
    fb.textContent = '✓ Correct! Well done.';
    fb.style.color = 'var(--accent3)';
  } else {
    el.classList.add('wrong');
    fb.textContent = '✗ Not quite — the correct answer is highlighted in green.';
    fb.style.color = '#ff8080';
  }
  fb.classList.add('show');
}

function markDone(idx) {
  done.add(idx);
  document.getElementById('mark-btn').textContent = '✓ Completed';
  document.getElementById('mark-btn').classList.add('done');
  const navItem = document.getElementById('nav-' + idx);
  navItem.classList.add('done');
  updateProgress();
}

function updateProgress() {
  const pct = Math.round((done.size / lessons.length) * 100);
  document.getElementById('progress-text').textContent = done.size + ' / ' + lessons.length;
  document.getElementById('progress-bar').style.width = pct + '%';
}

function toggleSidebar() {
  const sb = document.getElementById('sidebar');
  const ov = document.getElementById('sidebar-overlay');
  const isOpen = sb.classList.toggle('open');
  ov.classList.toggle('visible', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebar-overlay').classList.remove('visible');
  document.body.style.overflow = '';
}

function switchEditorTab(tab, btn) {
  document.querySelectorAll('.editor-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('ep-code').classList.toggle('active-pane', tab === 'code');
  document.getElementById('ep-preview').classList.toggle('active-pane', tab === 'preview');
  if (tab === 'preview') runPreview();
}

// Close sidebar on outside click (mobile)
document.addEventListener('click', e => {
  const sb = document.getElementById('sidebar');
  if (window.innerWidth <= 900 && sb.classList.contains('open')) {
    if (!sb.contains(e.target) && !e.target.closest('.hamburger')) {
      closeSidebar();
    }
  }
});
