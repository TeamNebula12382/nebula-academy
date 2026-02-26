/**
 * Nebula Coding Academy. Level/step flow, Syrius tips, simulated Python,
 * Python basics and FTC robotics, hints, reset, level complete modal.
 */

(function () {
  'use strict';

  // --- Course structure: levels with steps ---
  const LEVELS = [
    {
      id: 'python-basics',
      title: 'Level 1: Python Basics',
      steps: [
        {
          id: 'welcome',
          title: 'Welcome: Your First Program',
          tip: 'In Python we use print() to show text. Type the line in the mission and click Run My Code.',
          hint: 'Try: print("Hello, Nebula!")',
          instructions: '<p>Use <code>print()</code> to show a message. Type <code>print("Hello, Nebula!")</code> in the editor and click <strong>Run My Code</strong>.</p>',
          starterCode: 'print("Hello, Nebula!")',
        },
        {
          id: 'variables',
          title: 'Variables and Strings',
          tip: 'Store text in a variable, then print it. Our simulator supports name = "value" and print(name).',
          hint: 'Create a variable: name = "Syrius" then print(name)',
          instructions: '<p>Store your name in a variable: <code>name = "YourName"</code>. Then <code>print(name)</code> to see it in the output.</p>',
          starterCode: 'name = "Syrius"\nprint(name)',
        },
        {
          id: 'multiple-prints',
          title: 'Multiple Prints',
          tip: 'Each print() sends one line. Use several prints to build a short story or intro.',
          hint: 'Write 3 or 4 print statements, one per line.',
          instructions: '<p>Write several <code>print()</code> statements, one per line, to introduce yourself: name, mission, and a short message.</p>',
          starterCode: 'print("Name: Syrius")\nprint("Mission: Learn Python")\nprint("Ready to code!")',
        },
        {
          id: 'numbers',
          title: 'Numbers and Math',
          tip: 'Our simulator can evaluate simple math. Try print(2 + 3) or print(10 - 4).',
          hint: 'Use print(5 + 5) or print(3 * 4)',
          instructions: '<p>Python can do math. Try <code>print(2 + 3)</code> or <code>print(10 - 4)</code>. Our simulator supports basic arithmetic in print().</p>',
          starterCode: 'print(2 + 3)\nprint(10 - 4)',
        },
        {
          id: 'comments',
          title: 'Comments',
          tip: 'Lines starting with # are ignored. Use them to explain your code.',
          hint: 'Add a line like # This is my first program',
          instructions: '<p>Comments start with <code>#</code>. They are ignored when the code runs. Add a comment above your print to explain what it does.</p>',
          starterCode: '# Say hello to Nebula\nprint("Hello from the academy!")',
        },
      ],
    },
    {
      id: 'ftc-robotics',
      title: 'Level 2: FTC Robotics',
      steps: [
        {
          id: 'ftc-intro',
          title: 'What is FTC?',
          tip: 'FTC = First Tech Challenge. You program robots that compete in games. Code controls motors and sensors.',
          hint: 'FTC robots use code to move motors and read sensors.',
          instructions: '<p><strong>First Tech Challenge (FTC)</strong> is a robotics competition. Teams build and program robots to complete tasks. You write code (often in Java or blocks) to control <strong>motors</strong>, read <strong>sensors</strong>, and make decisions.</p><p>Use the editor to print your team name or robot name, just like naming your mission in Python.</p>',
          starterCode: 'team = "Nebula Robotics"\nprint("Team:", team)\nprint("Ready for competition!")',
        },
        {
          id: 'ftc-drivetrain',
          title: 'Drivetrain Basics',
          tip: 'The drivetrain is the wheels and motors that move the robot. Code tells each motor how fast and which direction.',
          hint: 'In real FTC code you set motor power (e.g. 0.5 = half speed).',
          instructions: '<p>The <strong>drivetrain</strong> moves your robot. In FTC you set <strong>motor power</strong> (e.g. 0.0 to 1.0) to go forward, backward, or turn.</p><p>Simulate a simple "start" command: print that your drivetrain is enabled.</p>',
          starterCode: 'print("Drivetrain: ENABLED")\nprint("Left motor: 0.5")\nprint("Right motor: 0.5")\nprint("Moving forward!")',
        },
        {
          id: 'ftc-sensors',
          title: 'Sensors',
          tip: 'Sensors give the robot information: distance, color, touch. Your code reads sensor values and decides what to do.',
          hint: 'Example: if distance_sensor < 10 then stop or turn.',
          instructions: '<p>Robots use <strong>sensors</strong> (distance, color, touch) to understand the world. Your code reads values and makes decisions, e.g. "if distance &lt; 10 cm, stop."</p><p>Print simulated sensor readings to practice output.</p>',
          starterCode: 'print("Distance sensor: 25 cm")\nprint("Color: RED")\nprint("Touch: not pressed")',
        },
        {
          id: 'ftc-autonomous',
          title: 'Autonomous vs TeleOp',
          tip: 'Autonomous = robot runs on its own for 30 seconds. TeleOp = drivers control it with gamepads.',
          hint: 'Autonomous code runs first; then drivers take over.',
          instructions: '<p><strong>Autonomous</strong>: the robot runs a pre-programmed routine (no driver). <strong>TeleOp</strong>: drivers use gamepads to control it.</p><p>Print a simple "phase" message as if your program is switching from auto to teleop.</p>',
          starterCode: 'print("Phase: AUTONOMOUS")\nprint("Running routine...")\nprint("Phase: TELEOP")\nprint("Drivers in control!")',
        },
        {
          id: 'ftc-strategy',
          title: 'Strategy and Scoring',
          tip: 'FTC games have scoring elements. Your code and driver strategy decide when to pick up, place, or defend.',
          hint: 'Plan: score high-value elements first, then defend or cycle.',
          instructions: '<p>Each FTC game has <strong>scoring</strong> rules. Good code + strategy = consistent scoring. Practice by printing a simple game plan (e.g. "1. Grab element 2. Place in goal 3. Park").</p>',
          starterCode: 'print("Strategy: Score high first")\nprint("Step 1: Grab element")\nprint("Step 2: Place in goal")\nprint("Step 3: Park in zone")',
        },
      ],
    },
  ];

  const STORAGE_KEY_PROGRESS = 'nebula-academy-progress';
  const STORAGE_KEY_CODE = 'nebula-academy-code';

  let $loadingScreen, $levelMapList, $levelProgressSummary;
  let $lessonInstructions, $lessonTip, $codeEditor, $outputConsole;
  let $runBtn, $resetBtn, $hintBtn, $nextStepBtn, $hintOverlay, $hintText, $hintClose;
  let $stepLabel, $levelBadge, $modal, $modalContinue;

  let currentLevelIndex = 0;
  let currentStepIndex = 0;
  let completedSteps = new Set(); // "levelId-stepId"

  // --- Simulated Python: print, assignment, basic math in print ---
  function runSimulatedPython(code) {
    const lines = code.split(/\r?\n/).map((l) => l.trim());
    const vars = Object.create(null);
    const output = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (!line || line.startsWith('#')) continue;

      const assignMatch = line.match(/^(\w+)\s*=\s*(.+)$/);
      if (assignMatch) {
        const [, name, value] = assignMatch;
        const trimmed = value.trim();
        const strMatch = trimmed.match(/^["'](.+)["']$/);
        if (strMatch) vars[name] = strMatch[1];
        else vars[name] = trimmed;
        continue;
      }

      const printMatch = line.match(/^print\s*\(\s*(.+)\s*\)\s*$/);
      if (printMatch) {
        const arg = printMatch[1].trim();
        let out;
        const q = arg.match(/^["'](.+)["']$/);
        if (q) out = q[1];
        else if (/^\w+$/.test(arg) && arg in vars) out = String(vars[arg]);
        else if (/^[\d\s+\-*/().]+$/.test(arg)) {
          try { out = String(Function('"use strict"; return (' + arg + ')')()); }
          catch (_) { out = arg; }
        } else out = arg;
        output.push(out);
      }
    }

    return output.join('\n');
  }

  // --- Progress ---
  function loadProgress() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_PROGRESS);
      if (raw) completedSteps = new Set(JSON.parse(raw));
    } catch (_) {
      completedSteps = new Set();
    }
  }

  function saveProgress() {
    try {
      localStorage.setItem(STORAGE_KEY_PROGRESS, JSON.stringify([...completedSteps]));
    } catch (_) {}
  }

  function stepKey(levelId, stepId) {
    return levelId + '-' + stepId;
  }

  function markStepComplete(levelId, stepId) {
    completedSteps.add(stepKey(levelId, stepId));
    saveProgress();
  }

  function isStepComplete(levelId, stepId) {
    return completedSteps.has(stepKey(levelId, stepId));
  }

  function completedLevelCount() {
    let n = 0;
    LEVELS.forEach((level) => {
      const total = level.steps.length;
      const done = level.steps.filter((s) => isStepComplete(level.id, s.id)).length;
      if (total > 0 && done === total) n++;
    });
    return n;
  }

  function loadCodeForStep(levelId, stepId) {
    try {
      const data = JSON.parse(localStorage.getItem(STORAGE_KEY_CODE) || '{}');
      const key = stepKey(levelId, stepId);
      return data[key] != null ? data[key] : null;
    } catch (_) {
      return null;
    }
  }

  function saveCodeForStep(levelId, stepId, code) {
    try {
      const data = JSON.parse(localStorage.getItem(STORAGE_KEY_CODE) || '{}');
      data[stepKey(levelId, stepId)] = code;
      localStorage.setItem(STORAGE_KEY_CODE, JSON.stringify(data));
    } catch (_) {}
  }

  // --- Views ---
  function showView(viewId) {
    document.querySelectorAll('.view').forEach((v) => v.classList.remove('active'));
    const target = document.getElementById(viewId);
    if (target) target.classList.add('active');

    if (viewId === 'level-map') renderLevelMap();
    if (viewId === 'lesson-view') renderStep();
  }

  function renderLevelMap() {
    const totalLevels = LEVELS.length;
    const completed = completedLevelCount();
    const $summary = document.getElementById('level-progress-summary');
    if ($summary) $summary.textContent = completed + '/' + totalLevels;

    const $list = document.getElementById('level-map-list');
    if (!$list) return;

    $list.innerHTML = LEVELS.map((level, lIdx) => {
      const stepCount = level.steps.length;
      const doneCount = level.steps.filter((s) => isStepComplete(level.id, s.id)).length;
      const allDone = doneCount === stepCount;

      const stepsHtml = level.steps.map((step, sIdx) => {
        const done = isStepComplete(level.id, step.id);
        return `
          <li>
            <a href="#" class="step-link ${done ? 'completed' : ''}" data-level="${lIdx}" data-step="${sIdx}">
              <span class="step-num">${sIdx + 1}</span>
              <span class="step-title">${escapeHtml(step.title)}</span>
              ${done ? '<span class="step-done">Done</span>' : ''}
            </a>
          </li>
        `;
      }).join('');

      return `
        <div class="level-block">
          <h3>${escapeHtml(level.title)} ${allDone ? '✓' : ''} (${doneCount}/${stepCount} steps)</h3>
          <ul class="level-steps">${stepsHtml}</ul>
        </div>
      `;
    }).join('');

    $list.querySelectorAll('.step-link').forEach((a) => {
      a.addEventListener('click', (e) => {
        e.preventDefault();
        currentLevelIndex = parseInt(a.dataset.level, 10);
        currentStepIndex = parseInt(a.dataset.step, 10);
        showView('lesson-view');
      });
    });
  }

  function getCurrentStep() {
    const level = LEVELS[currentLevelIndex];
    if (!level || !level.steps[currentStepIndex]) return null;
    return { level, step: level.steps[currentStepIndex] };
  }

  function renderStep() {
    const curr = getCurrentStep();
    if (!curr) return;

    const { level, step } = curr;
    const totalSteps = level.steps.length;
    const stepNum = currentStepIndex + 1;

    document.getElementById('lesson-title')?.remove();
    $stepLabel.textContent = 'Step ' + stepNum + ' of ' + totalSteps;
    $levelBadge.textContent = level.title.replace(/^Level \d+: /, '');
    $lessonInstructions.innerHTML = step.instructions;
    $lessonTip.textContent = step.tip;

    const saved = loadCodeForStep(level.id, step.id);
    $codeEditor.value = saved != null ? saved : step.starterCode;

    $outputConsole.textContent = 'Click "Run My Code" when ready!';
    $outputConsole.classList.remove('error', 'running');

    $nextStepBtn.dataset.levelIndex = String(currentLevelIndex);
    $nextStepBtn.dataset.stepIndex = String(currentStepIndex);
  }

  function escapeHtml(s) {
    const div = document.createElement('div');
    div.textContent = s;
    return div.innerHTML;
  }

  // --- Run / Reset ---
  function runCode() {
    const curr = getCurrentStep();
    if (!curr) return;

    const { level, step } = curr;
    const code = $codeEditor.value;
    saveCodeForStep(level.id, step.id, code);

    $outputConsole.textContent = '⚡ Running...';
    $outputConsole.classList.add('running');
    $outputConsole.classList.remove('error');

    requestAnimationFrame(() => {
      try {
        const result = runSimulatedPython(code);
        $outputConsole.textContent = result || '(no output)';
        $outputConsole.classList.remove('running');
      } catch (err) {
        $outputConsole.textContent = 'Error: ' + (err && err.message ? err.message : String(err));
        $outputConsole.classList.remove('running');
        $outputConsole.classList.add('error');
      }
    });
  }

  function resetCode() {
    const curr = getCurrentStep();
    if (!curr) return;
    $codeEditor.value = curr.step.starterCode;
    $outputConsole.textContent = 'Click "Run My Code" when ready!';
    $outputConsole.classList.remove('error', 'running');
  }

  // --- Hint ---
  function showHint() {
    const curr = getCurrentStep();
    if (!curr) return;
    $hintText.textContent = curr.step.hint;
    $hintOverlay.classList.add('active');
  }

  function hideHint() {
    $hintOverlay.classList.remove('active');
  }

  // --- Next step / Level complete ---
  function goNext() {
    const level = LEVELS[currentLevelIndex];
    if (!level) return;

    markStepComplete(level.id, level.steps[currentStepIndex].id);

    if (currentStepIndex < level.steps.length - 1) {
      currentStepIndex++;
      renderStep();
      return;
    }

    // Finished all steps in this level → show level complete modal
    $modal.classList.add('active');
  }

  function closeModalAndContinue() {
    $modal.classList.remove('active');
    const nextLevel = currentLevelIndex + 1;
    if (nextLevel < LEVELS.length) {
      currentLevelIndex = nextLevel;
      currentStepIndex = 0;
      renderStep();
    } else {
      showView('level-map');
      currentLevelIndex = 0;
      currentStepIndex = 0;
    }
  }

  // --- Loading screen ---
  function hideLoading() {
    $loadingScreen.classList.add('hidden');
  }

  // --- Init ---
  function init() {
    $loadingScreen = document.getElementById('loading-screen');
    $levelMapList = document.getElementById('level-map-list');
    $levelProgressSummary = document.getElementById('level-progress-summary');
    $lessonInstructions = document.getElementById('lesson-instructions');
    $lessonTip = document.getElementById('lesson-tip');
    $codeEditor = document.getElementById('code-editor');
    $outputConsole = document.getElementById('output-console');
    $runBtn = document.getElementById('run-btn');
    $resetBtn = document.getElementById('reset-btn');
    $hintBtn = document.getElementById('hint-btn');
    $nextStepBtn = document.getElementById('next-step-btn');
    $hintOverlay = document.getElementById('hint-overlay');
    $hintText = document.getElementById('hint-text');
    $hintClose = document.getElementById('hint-close');
    $stepLabel = document.getElementById('step-label');
    $levelBadge = document.getElementById('level-badge');
    $modal = document.getElementById('level-complete-modal');
    $modalContinue = document.getElementById('modal-continue');

    loadProgress();

    setTimeout(hideLoading, 2800);

    document.querySelectorAll('[data-nav]').forEach((el) => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        const viewId = el.getAttribute('data-nav');
        const scrollId = el.getAttribute('data-scroll');
        showView(viewId);
        if (scrollId) {
          requestAnimationFrame(() => {
            const target = document.getElementById(scrollId);
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          });
        }
      });
    });

    $runBtn.addEventListener('click', runCode);
    $resetBtn.addEventListener('click', resetCode);
    $hintBtn.addEventListener('click', showHint);
    $hintClose.addEventListener('click', hideHint);
    $hintOverlay.addEventListener('click', (e) => { if (e.target === $hintOverlay) hideHint(); });
    $nextStepBtn.addEventListener('click', goNext);
    $modalContinue.addEventListener('click', closeModalAndContinue);
    $modal.querySelector('.modal-backdrop')?.addEventListener('click', closeModalAndContinue);

    $codeEditor.addEventListener('blur', () => {
      const curr = getCurrentStep();
      if (curr) saveCodeForStep(curr.level.id, curr.step.id, $codeEditor.value);
    });

    showView('landing');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
