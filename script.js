/**
 * Nebula Coding Academy. Level/step flow, Syrius tips, simulated Python,
 * Python basics and FTC robotics, hints, reset, level complete modal.
 */

(function () {
  'use strict';

  // --- Course structure: levels with steps (each level has track: 'python' | 'java') ---
  const LEVELS = [
    {
      id: 'python-basics',
      track: 'python',
      title: 'Level 1: Python Basics',
      steps: [
        {
          id: 'welcome',
          title: 'Welcome: Your First Program',
          tip: 'In Python we use print() to show text. Type the line in the mission and click Run My Code.',
          hint: 'Try: print("Hello, Nebula!")',
          instructions: '<p>Use <code>print()</code> to show a message. Type <code>print("Hello, Nebula!")</code> in the editor and click <strong>Run My Code</strong>.</p>',
        },
        {
          id: 'variables',
          title: 'Variables and Strings',
          tip: 'Store text in a variable, then print it. Our simulator supports name = "value" and print(name).',
          hint: 'Create a variable: name = "Syrius" then print(name)',
          instructions: '<p>Store your name in a variable: <code>name = "YourName"</code>. Then <code>print(name)</code> to see it in the output.</p>',
        },
        {
          id: 'multiple-prints',
          title: 'Multiple Prints',
          tip: 'Each print() sends one line. Use several prints to build a short story or intro.',
          hint: 'Write 3–4 print statements, one per line.',
          instructions: '<p>Write several <code>print()</code> statements—one per line—to introduce yourself: name, mission, and a short message.</p>',
        },
        {
          id: 'numbers',
          title: 'Numbers and Math',
          tip: 'Our simulator can evaluate simple math. Try print(2 + 3) or print(10 - 4).',
          hint: 'Use print(5 + 5) or print(3 * 4)',
          instructions: '<p>Python can do math. Try <code>print(2 + 3)</code> or <code>print(10 - 4)</code>. Our simulator supports basic arithmetic in print().</p>',
        },
        {
          id: 'comments',
          title: 'Comments',
          tip: 'Lines starting with # are ignored. Use them to explain your code.',
          hint: 'Add a line like # This is my first program',
          instructions: '<p>Comments start with <code>#</code>. They are ignored when the code runs. Add a comment above your print to explain what it does.</p>',
        },
      ],
    },
    {
      id: 'advanced-python',
      track: 'python',
      title: 'Level 2: Advanced Python',
      steps: [
        {
          id: 'loops',
          title: 'Loops: for and range()',
          tip: 'Use for i in range(5): to repeat 5 times. Indent the code inside the loop with 4 spaces.',
          hint: 'for i in range(3): then print(i) on the next line, indented.',
          instructions: '<p><strong>Loops</strong> repeat code. Write <code>for i in range(3):</code> on one line, then on the next line (indented with 4 spaces) write <code>print(i)</code>. Run to see 0, 1, 2.</p>',
        },
        {
          id: 'range-two-args',
          title: 'range() with Start and End',
          tip: 'range(2, 5) gives 2, 3, 4 (start at 2, stop before 5).',
          hint: 'for n in range(2, 6): then print(n) indented.',
          instructions: '<p><code>range(2, 5)</code> counts from 2 up to (but not including) 5: 2, 3, 4. Try <code>for n in range(2, 6):</code> then indented <code>print(n)</code> to see 2, 3, 4, 5.</p>',
        },
        {
          id: 'functions',
          title: 'Functions',
          tip: 'Define a function with def name(): and indent the body. Call it with name().',
          hint: 'def greet(): then print("Hi") indented. On a new line call greet()',
          instructions: '<p>Define a <strong>function</strong> with <code>def greet():</code> and indent the next line: <code>print("Hi")</code>. Then on a new line (no indent) call <code>greet()</code> to run it.</p>',
        },
        {
          id: 'lists',
          title: 'Lists',
          tip: 'Lists hold multiple values: items = [1, 2, 3]. Use print(items[0]) for the first item.',
          hint: 'items = ["a", "b", "c"] then print(items[1])',
          instructions: '<p>A <strong>list</strong> is <code>items = [1, 2, 3]</code>. The first item is <code>items[0]</code>, the second is <code>items[1]</code>. Try <code>items = ["apple", "banana", "cherry"]</code> then <code>print(items[1])</code>.</p>',
        },
        {
          id: 'list-indexing',
          title: 'List Indexing',
          tip: 'Index 0 is the first element. Use a loop to print each item: for x in range(3): print(items[x]).',
          hint: 'items = [10, 20, 30] then for i in range(3): print(items[i]) indented.',
          instructions: '<p>Use a loop to print every element. <code>items = [10, 20, 30]</code> then <code>for i in range(3):</code> and indented <code>print(items[i])</code>. You should see 10, 20, 30.</p>',
        },
        {
          id: 'conditionals',
          title: 'Conditionals: if',
          tip: 'Use if condition: and indent the body. Try if x > 0: then print("positive") indented.',
          hint: 'x = 5 then if x > 0: then print("positive") indented.',
          instructions: '<p><strong>if</strong> runs code only when a condition is true. Set <code>x = 5</code>, then <code>if x > 0:</code> and on the next line (indented) <code>print("positive")</code>. Run it!</p>',
        },
        {
          id: 'conditionals-else',
          title: 'if and else',
          tip: 'else: runs when the if condition is false. Indent the else block too.',
          hint: 'x = -1 then if x > 0: print("pos") else: print("not pos") with correct indentation.',
          instructions: '<p>Add <code>else:</code> after an if block to run code when the condition is false. Try <code>x = -1</code>, then <code>if x > 0:</code> with indented <code>print("positive")</code>, then <code>else:</code> with indented <code>print("not positive")</code>.</p>',
        },
      ],
    },
    {
      id: 'python-next',
      track: 'python',
      title: 'Level 3: Python Next Steps',
      steps: [
        {
          id: 'loop-over-list',
          title: 'Loop Through a List',
          tip: 'Use the length of the list in range(). len([1,2,3]) is 3, but our simulator uses range(len) manually.',
          hint: 'items = [5, 10, 15] then for i in range(3): print(items[i]) indented.',
          instructions: '<p>To do something for each item, loop with <code>for i in range(3):</code> (use the list length) and use <code>items[i]</code> inside. Try <code>items = ["red", "green", "blue"]</code> then loop and print each.</p>',
        },
        {
          id: 'functions-twice',
          title: 'Calling Functions More Than Once',
          tip: 'Define a function once, then call it as many times as you want.',
          hint: 'def say_hi(): print("Hi") indented. Then say_hi() and say_hi() on separate lines.',
          instructions: '<p>Define <code>def say_hi():</code> with <code>print("Hi")</code> indented. Then call <code>say_hi()</code> twice on two lines. You should see "Hi" printed twice.</p>',
        },
        {
          id: 'combine-loop-if',
          title: 'Combine a Loop and if',
          tip: 'Inside a for loop, use if to do something only for certain values.',
          hint: 'for i in range(5): then if i % 2 == 0: print(i) (both indented).',
          instructions: '<p>Put an <code>if</code> inside a loop. Try <code>for i in range(5):</code> then indented <code>if i % 2 == 0:</code> then indented <code>print(i)</code>. (Our simulator supports <code>%</code> for remainder.) You\'ll print 0, 2, 4.</p>',
        },
        {
          id: 'practice-challenge',
          title: 'Practice Challenge',
          tip: 'Use a loop to print the numbers 1 through 5. Hint: range(1, 6) gives 1, 2, 3, 4, 5.',
          hint: 'for n in range(1, 6): print(n) indented.',
          instructions: '<p><strong>Challenge:</strong> Print the numbers 1, 2, 3, 4, 5 using a single <code>for</code> loop and <code>range(1, 6)</code>. Then add an if to print only the even numbers (2 and 4).</p>',
        },
      ],
    },
    {
      id: 'java-basics',
      track: 'java',
      title: 'Level 1: Java Basics',
      steps: [
        {
          id: 'java-hello',
          title: 'Your First Java Program',
          tip: 'In Java we use System.out.println() to print. Our simulator supports this style.',
          hint: 'Try: System.out.println("Hello, Nebula!");',
          instructions: '<p>In Java we use <code>System.out.println("message");</code> to print. Type that in the editor and click <strong>Run My Code</strong>. Our simulator understands Java-style print.</p>',
        },
        {
          id: 'java-variables',
          title: 'Variables in Java',
          tip: 'Java uses types: String name = "Syrius"; then System.out.println(name);',
          hint: 'String team = "Nebula"; then System.out.println(team);',
          instructions: '<p>In Java you declare a variable with its type: <code>String name = "YourName";</code> then <code>System.out.println(name);</code> to print it.</p>',
        },
        {
          id: 'java-numbers',
          title: 'Numbers and Math',
          tip: 'int x = 5 + 3; System.out.println(x); Our simulator supports basic Java expressions.',
          hint: 'int sum = 10 + 20; then System.out.println(sum);',
          instructions: '<p>Use <code>int sum = 10 + 20;</code> then <code>System.out.println(sum);</code> to see 30. Java uses <code>int</code> for whole numbers.</p>',
        },
      ],
    },
    {
      id: 'ftc-robotics',
      track: 'java',
      title: 'Level 2: FTC Robotics',
      steps: [
        {
          id: 'ftc-intro',
          title: 'What is FTC?',
          tip: 'FTC = First Tech Challenge. You program robots that compete in games. Code controls motors and sensors.',
          hint: 'FTC robots use code to move motors and read sensors.',
          instructions: '<p><strong>First Tech Challenge (FTC)</strong> is a robotics competition. Teams build and program robots to complete tasks. You write code (often in Java or blocks) to control <strong>motors</strong>, read <strong>sensors</strong>, and make decisions.</p><p>Use the editor to print your team name or robot name—just like naming your mission in Python!</p>',
        },
        {
          id: 'ftc-drivetrain',
          title: 'Drivetrain Basics',
          tip: 'The drivetrain is the wheels and motors that move the robot. Code tells each motor how fast and which direction.',
          hint: 'In real FTC code you set motor power (e.g. 0.5 = half speed).',
          instructions: '<p>The <strong>drivetrain</strong> moves your robot. In FTC you set <strong>motor power</strong> (e.g. 0.0 to 1.0) to go forward, backward, or turn.</p><p>Simulate a simple "start" command: print that your drivetrain is enabled.</p>',
        },
        {
          id: 'ftc-sensors',
          title: 'Sensors',
          tip: 'Sensors give the robot information: distance, color, touch. Your code reads sensor values and decides what to do.',
          hint: 'Example: if distance_sensor < 10 then stop or turn.',
          instructions: '<p>Robots use <strong>sensors</strong> (distance, color, touch) to understand the world. Your code reads values and makes decisions—e.g. "if distance &lt; 10 cm, stop."</p><p>Print simulated sensor readings to practice output.</p>',
        },
        {
          id: 'ftc-autonomous',
          title: 'Autonomous vs TeleOp',
          tip: 'Autonomous = robot runs on its own for 30 seconds. TeleOp = drivers control it with gamepads.',
          hint: 'Autonomous code runs first; then drivers take over.',
          instructions: '<p><strong>Autonomous</strong>: the robot runs a pre-programmed routine (no driver). <strong>TeleOp</strong>: drivers use gamepads to control it.</p><p>Print a simple "phase" message as if your program is switching from auto to teleop.</p>',
        },
        {
          id: 'ftc-strategy',
          title: 'Strategy and Scoring',
          tip: 'FTC games have scoring elements. Your code and driver strategy decide when to pick up, place, or defend.',
          hint: 'Plan: score high-value elements first, then defend or cycle.',
          instructions: '<p>Each FTC game has <strong>scoring</strong> rules. Good code + strategy = consistent scoring. Practice by printing a simple game plan (e.g. "1. Grab element 2. Place in goal 3. Park").</p>',
        },
      ],
    },
    {
      id: 'virtual-robot',
      track: 'java',
      title: 'Level 3: Virtual Robot',
      steps: [
        {
          id: 'robot-intro',
          type: 'robot',
          title: 'Meet Your Virtual Robot',
          tip: 'Write Java FTC–style code! Use driveForward(1.0) to go forward 1 second, then run your code.',
          hint: 'Try: driveForward(1.0); then tap Run.',
          instructions: '<p>This is your <strong>virtual FTC robot</strong>. You control it with Java-like commands:</p><p><code>driveForward(1.0);</code> — drive forward for 1 second<br><code>driveBackward(0.5);</code> — drive backward<br><code>turn(90);</code> — turn 90 degrees<br><code>sleep(500);</code> — wait 500 ms</p><p>Write one command and click <strong>Run My Code</strong> to see the robot move!</p>',
          defaultCode: 'driveForward(1.0);\n',
        },
        {
          id: 'robot-forward-back',
          type: 'robot',
          title: 'Forward and Backward',
          tip: 'Chain commands: driveForward then driveBackward. Each number is seconds.',
          hint: 'driveForward(1.0); then driveBackward(1.0);',
          instructions: '<p>Make the robot drive <strong>forward</strong> for 1 second, then <strong>backward</strong> for 1 second. Use two lines:</p><p><code>driveForward(1.0);</code><br><code>driveBackward(1.0);</code></p>',
          defaultCode: 'driveForward(1.0);\ndriveBackward(1.0);\n',
        },
        {
          id: 'robot-turn',
          type: 'robot',
          title: 'Turning',
          tip: 'turn(90) turns 90 degrees. Positive = right, negative = left.',
          hint: 'driveForward(1.0); turn(90); driveForward(1.0);',
          instructions: '<p>Use <code>turn(90);</code> to turn 90 degrees to the right. Try: drive forward, turn 90°, then drive forward again to make an L-shape.</p>',
          defaultCode: 'driveForward(1.0);\nturn(90);\ndriveForward(1.0);\n',
        },
        {
          id: 'robot-square',
          type: 'robot',
          title: 'Drive a Square',
          tip: 'Forward, turn 90, repeat four times to make a square.',
          hint: 'Four pairs: driveForward(0.8); turn(90);',
          instructions: '<p>Program the robot to drive a <strong>square</strong>: go forward, turn 90°, repeat four times. Use about 0.8 seconds per side.</p>',
          defaultCode: 'driveForward(0.8);\nturn(90);\ndriveForward(0.8);\nturn(90);\ndriveForward(0.8);\nturn(90);\ndriveForward(0.8);\nturn(90);\n',
        },
        {
          id: 'robot-sleep',
          type: 'robot',
          title: 'Pause with sleep()',
          tip: 'sleep(500) pauses for 500 milliseconds. Use it between moves.',
          hint: 'driveForward(1.0); sleep(500); driveBackward(1.0);',
          instructions: '<p>In FTC we use <code>sleep(500);</code> to wait 500 ms. Add a pause between forward and backward so the robot stops briefly in the middle.</p>',
          defaultCode: 'driveForward(1.0);\nsleep(500);\ndriveBackward(1.0);\n',
        },
        {
          id: 'robot-challenge',
          type: 'robot',
          title: 'Robot Challenge',
          tip: 'Combine everything: drive a pattern, use turns and sleep.',
          hint: 'Try a triangle: forward, turn 120, repeat 3 times.',
          instructions: '<p><strong>Challenge:</strong> Drive any pattern you like! Use <code>driveForward</code>, <code>turn</code>, and <code>sleep</code>. Try a triangle (turn 120° three times) or your own path.</p>',
          defaultCode: 'driveForward(0.6);\nturn(120);\ndriveForward(0.6);\nturn(120);\ndriveForward(0.6);\nturn(120);\n',
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
  let $robotArenaWrap, $editorPanel, $outputPanel, $editorLabel;
  let robotCtx = null;
  let robotAnimationId = null;

  let currentTrack = 'python'; // 'python' | 'java'
  let currentLevelIndex = 0;
  let currentStepIndex = 0;
  let completedSteps = new Set(); // "levelId-stepId"

  // --- Virtual Robot: Java FTC–like API ---
  const ROBOT_ARENA_W = 640;
  const ROBOT_ARENA_H = 280;
  const ROBOT_SPEED = 120;   // px per second
  const ROBOT_TURN_SPEED = 90; // degrees per second when turning
  let robotState = { x: ROBOT_ARENA_W / 2, y: ROBOT_ARENA_H / 2, angle: -Math.PI / 2 };
  let robotCommands = [];

  function parseRobotCode(code) {
    const commands = [];
    const normalized = (code || '').replace(/[\r\n]+/g, ' ').replace(/\s+/g, ' ').trim();
    const parts = normalized.split(';').map((s) => s.trim()).filter(Boolean);
    for (const part of parts) {
      const fwd = part.match(/driveForward\s*\(\s*([\d.]+)\s*\)/i);
      if (fwd) { commands.push({ type: 'forward', value: parseFloat(fwd[1]) }); continue; }
      const bwd = part.match(/driveBackward\s*\(\s*([\d.]+)\s*\)/i);
      if (bwd) { commands.push({ type: 'backward', value: parseFloat(bwd[1]) }); continue; }
      const turn = part.match(/turn\s*\(\s*(-?[\d.]+)\s*\)/i);
      if (turn) { commands.push({ type: 'turn', value: parseFloat(turn[1]) }); continue; }
      const sleep = part.match(/sleep\s*\(\s*(\d+)\s*\)/i);
      if (sleep) { commands.push({ type: 'sleep', value: parseInt(sleep[1], 10) }); continue; }
    }
    return commands;
  }

  function drawRobot(ctx, x, y, angle) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    const chassisW = 28;
    const chassisL = 38;
    const r = 5;
    ctx.fillStyle = 'rgba(0, 0, 0, 0.35)';
    roundRect(ctx, -chassisL/2 + 3, -chassisW/2 + 3, chassisL, chassisW, r);
    ctx.fill();
    ctx.fillStyle = 'rgba(35, 38, 48, 0.98)';
    ctx.fillRect(-chassisL/2, chassisW/2 - 2, chassisL, 4);
    ctx.fill();
    const topGrad = ctx.createLinearGradient(-chassisL/2, 0, chassisL/2, 0);
    topGrad.addColorStop(0, 'rgba(70, 72, 90, 0.98)');
    topGrad.addColorStop(0.5, 'rgba(120, 125, 145, 0.98)');
    topGrad.addColorStop(1, 'rgba(70, 72, 90, 0.98)');
    ctx.fillStyle = topGrad;
    roundRect(ctx, -chassisL/2, -chassisW/2, chassisL, chassisW, r);
    ctx.fill();
    ctx.strokeStyle = 'rgba(90, 95, 110, 0.9)';
    ctx.stroke();
    ctx.fillStyle = '#2a8a5c';
    ctx.fillRect(chassisL/2 - 6, -chassisW/2 + 2, 5, chassisW - 4);
    ctx.fillStyle = '#3dd98a';
    ctx.fillRect(chassisL/2 - 5, -chassisW/2 + 4, 3, chassisW - 8);
    ctx.fillStyle = 'rgba(30, 30, 38, 0.95)';
    roundRect(ctx, -chassisL/2 + 6, -chassisW/2 + 6, 10, 10, 3);
    ctx.fill();
    roundRect(ctx, chassisL/2 - 16, -chassisW/2 + 6, 10, 10, 3);
    ctx.fill();
    roundRect(ctx, -chassisL/2 + 6, chassisW/2 - 16, 10, 10, 3);
    ctx.fill();
    roundRect(ctx, chassisL/2 - 16, chassisW/2 - 16, 10, 10, 3);
    ctx.fill();
    ctx.fillStyle = 'rgba(80, 82, 95, 0.9)';
    ctx.beginPath();
    ctx.arc(-chassisL/2 + 11, -chassisW/2 + 11, 5, 0, Math.PI * 2);
    ctx.arc(chassisL/2 - 11, -chassisW/2 + 11, 5, 0, Math.PI * 2);
    ctx.arc(-chassisL/2 + 11, chassisW/2 - 11, 5, 0, Math.PI * 2);
    ctx.arc(chassisL/2 - 11, chassisW/2 - 11, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = 'rgba(50, 52, 60, 0.9)';
    ctx.stroke();
    ctx.restore();
  }
  function roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
  }

  function drawArena(ctx) {
    ctx.fillStyle = '#1a1428';
    ctx.fillRect(0, 0, ROBOT_ARENA_W, ROBOT_ARENA_H);
    ctx.strokeStyle = 'rgba(160, 120, 220, 0.3)';
    ctx.lineWidth = 1;
    ctx.strokeRect(1, 1, ROBOT_ARENA_W - 2, ROBOT_ARENA_H - 2);
    const cx = ROBOT_ARENA_W / 2;
    const cy = ROBOT_ARENA_H / 2;
    ctx.beginPath();
    ctx.moveTo(cx - 30, cy);
    ctx.lineTo(cx + 30, cy);
    ctx.moveTo(cx, cy - 30);
    ctx.lineTo(cx, cy + 30);
    ctx.stroke();
  }

  function resetRobotArena() {
    if (robotAnimationId != null) {
      cancelAnimationFrame(robotAnimationId);
      robotAnimationId = null;
    }
    robotState = { x: ROBOT_ARENA_W / 2, y: ROBOT_ARENA_H / 2, angle: -Math.PI / 2 };
    if (!robotCtx) return;
    drawArena(robotCtx);
    drawRobot(robotCtx, robotState.x, robotState.y, robotState.angle);
  }

  function runRobotAnimation(commands, onDone) {
    if (!robotCtx) return;
    robotState = { x: ROBOT_ARENA_W / 2, y: ROBOT_ARENA_H / 2, angle: -Math.PI / 2 };
    if (robotAnimationId != null) cancelAnimationFrame(robotAnimationId);
    robotAnimationId = null;
    drawArena(robotCtx);
    drawRobot(robotCtx, robotState.x, robotState.y, robotState.angle);

    let cmdIndex = 0;
    let waitUntil = 0;
    let turnRemaining = 0;
    let driveRemaining = 0;
    let driveSign = 1;

    const EPS = 0.0001;
    function tick(timestamp) {
      const dt = 0.016; // ~60fps

      while (cmdIndex < commands.length && waitUntil <= timestamp && Math.abs(turnRemaining) < EPS && driveRemaining < EPS) {
        const cmd = commands[cmdIndex++];
        if (cmd.type === 'sleep') {
          waitUntil = timestamp + cmd.value;
          break;
        }
        if (cmd.type === 'forward') { driveRemaining = cmd.value; driveSign = 1; break; }
        if (cmd.type === 'backward') { driveRemaining = cmd.value; driveSign = -1; break; }
        if (cmd.type === 'turn') { turnRemaining = (cmd.value * Math.PI) / 180; break; }
      }

      if (waitUntil > timestamp) {
        robotAnimationId = requestAnimationFrame(tick);
        drawArena(robotCtx);
        drawRobot(robotCtx, robotState.x, robotState.y, robotState.angle);
        return;
      }

      if (Math.abs(turnRemaining) >= EPS) {
        const da = Math.min(dt * (Math.PI / 2), Math.abs(turnRemaining)) * (turnRemaining > 0 ? 1 : -1);
        robotState.angle += da;
        turnRemaining -= da;
      } else if (driveRemaining >= EPS) {
        const dist = ROBOT_SPEED * dt * driveSign;
        robotState.x += Math.cos(robotState.angle) * dist;
        robotState.y += Math.sin(robotState.angle) * dist;
        driveRemaining -= dt;
        if (driveRemaining < 0) driveRemaining = 0;
      }

      drawArena(robotCtx);
      drawRobot(robotCtx, robotState.x, robotState.y, robotState.angle);

      if (cmdIndex < commands.length || waitUntil > timestamp || Math.abs(turnRemaining) >= EPS || driveRemaining >= EPS) {
        robotAnimationId = requestAnimationFrame(tick);
      } else {
        robotAnimationId = null;
        if (onDone) onDone();
      }
    }
    requestAnimationFrame(tick);
  }

  // --- Simulated Python: print, assignment, lists, for/range, def, if ---
  function runSimulatedPython(code) {
    const rawLines = code.split(/\r?\n/);
    const vars = Object.create(null);
    const output = [];
    const funcs = Object.create(null);

    function getIndent(s) {
      const m = s.match(/^(\s*)/);
      return m ? m[1].length : 0;
    }
    function evalExpr(expr) {
      const e = expr.trim();
      const q = e.match(/^["'](.+)["']$/);
      if (q) return q[1];
      if (/^\w+$/.test(e) && e in vars) return vars[e];
      if (/^\w+\[\d+\]$/.test(e)) {
        const [name, idx] = e.split('[');
        const i = parseInt(idx, 10);
        if (Array.isArray(vars[name])) return vars[name][i];
      }
      if (/^[\d\s+\-*%/().]+$/.test(e)) {
        try { return Function('"use strict"; return (' + e + ')')(); }
        catch (_) { return e; }
      }
      return e;
    }
    function parseList(s) {
      const out = [];
      let rest = s.trim();
      if (!rest.startsWith('[') || !rest.endsWith(']')) return null;
      rest = rest.slice(1, -1).trim();
      if (!rest) return out;
      const parts = [];
      let depth = 0, start = 0;
      for (let i = 0; i < rest.length; i++) {
        if (rest[i] === '[') depth++;
        else if (rest[i] === ']') depth--;
        else if ((rest[i] === ',' && depth === 0) || i === rest.length - 1) {
          const end = i === rest.length - 1 ? i + 1 : i;
          parts.push(rest.slice(start, end).trim());
          start = i + 1;
        }
      }
      for (const p of parts) {
        const q = p.match(/^["'](.+)["']$/);
        if (q) out.push(q[1]);
        else if (/^\d+$/.test(p)) out.push(parseInt(p, 10));
        else out.push(evalExpr(p));
      }
      return out;
    }
    function resolvePrintArg(arg) {
      const a = arg.trim();
      const q = a.match(/^["'](.+)["']$/);
      if (q) return String(q[1]);
      const idxMatch = a.match(/^(\w+)\[(\w+)\]$/);
      if (idxMatch) {
        const [, name, idxStr] = idxMatch;
        const idx = /^\d+$/.test(idxStr) ? parseInt(idxStr, 10) : (idxStr in vars ? vars[idxStr] : -1);
        if (name in vars && Array.isArray(vars[name]) && idx >= 0 && idx < vars[name].length)
          return String(vars[name][idx]);
      }
      if (/^\w+$/.test(a) && a in vars) return String(vars[a]);
      if (/^[\d\s+\-*%/().a-zA-Z_]+$/.test(a)) {
        try {
          const code = a.replace(/\b([a-zA-Z_]\w*)\b/g, (m) => (m in vars ? (typeof vars[m] === 'number' ? vars[m] : JSON.stringify(vars[m])) : m));
          return String(Function('"use strict"; return (' + code + ')')());
        } catch (_) { return a; }
      }
      return a;
    }
    function runLine(line, _vars) {
      const l = line.trim();
      if (!l || l.startsWith('#')) return;
      const assignMatch = l.match(/^(\w+)\s*=\s*(.+)$/);
      if (assignMatch) {
        const [, name, value] = assignMatch;
        const v = value.trim();
        if (v.startsWith('[')) {
          const arr = parseList(v);
          if (arr) _vars[name] = arr;
          return;
        }
        const strMatch = v.match(/^["'](.+)["']$/);
        if (strMatch) { _vars[name] = strMatch[1]; return; }
        _vars[name] = evalExpr(v);
        return;
      }
      const printMatch = l.match(/^print\s*\(\s*(.+)\s*\)\s*$/);
      if (printMatch) {
        output.push(resolvePrintArg(printMatch[1]));
        return;
      }
    }

    let i = 0;
    while (i < rawLines.length) {
      const line = rawLines[i];
      const trimmed = line.trim();
      const indent = getIndent(line);
      if (!trimmed || trimmed.startsWith('#')) { i++; continue; }

      const forMatch = trimmed.match(/^for\s+(\w+)\s+in\s+range\s*\(\s*(\d+)\s*(?:,\s*(\d+))?\s*\)\s*:\s*$/);
      if (forMatch) {
        const [, loopVar, aStr, bStr] = forMatch;
        const a = parseInt(aStr, 10);
        const b = bStr != null ? parseInt(bStr, 10) : a;
        const start = bStr != null ? a : 0;
        const count = bStr != null ? b - a : a;
        const blockIndent = indent + (line.match(/\s+/)?.[0]?.length || 4);
        const bodyLines = [];
        i++;
        while (i < rawLines.length && getIndent(rawLines[i]) >= blockIndent) {
          bodyLines.push(rawLines[i]);
          i++;
        }
        for (let k = 0; k < count; k++) {
          vars[loopVar] = start + k;
          bodyLines.forEach((ln) => runLine(ln, vars));
        }
        continue;
      }

      const defMatch = trimmed.match(/^def\s+(\w+)\s*\(\s*\)\s*:\s*$/);
      if (defMatch) {
        const [, fnName] = defMatch;
        const blockIndent = indent + (line.match(/\s+/)?.[0]?.length || 4);
        const bodyLines = [];
        i++;
        while (i < rawLines.length && getIndent(rawLines[i]) >= blockIndent) {
          bodyLines.push(rawLines[i]);
          i++;
        }
        funcs[fnName] = bodyLines;
        continue;
      }

      const callMatch = trimmed.match(/^(\w+)\s*\(\s*\)\s*$/);
      if (callMatch && callMatch[1] in funcs) {
        funcs[callMatch[1]].forEach((ln) => runLine(ln, vars));
        i++;
        continue;
      }

      const ifMatch = trimmed.match(/^if\s+(.+)\s*:\s*$/);
      if (ifMatch) {
        const cond = ifMatch[1].trim();
        let ok = false;
        try {
          const condCode = cond.replace(/\b(\w+)\b/g, (m) => (m in vars ? (typeof vars[m] === 'number' ? vars[m] : JSON.stringify(vars[m])) : m));
          ok = Function('"use strict"; return (' + condCode + ')')();
        } catch (_) {}
        const blockIndent = indent + (line.match(/\s+/)?.[0]?.length || 4);
        const bodyLines = [];
        i++;
        while (i < rawLines.length && getIndent(rawLines[i]) >= blockIndent) {
          bodyLines.push(rawLines[i]);
          i++;
        }
        if (ok) bodyLines.forEach((ln) => runLine(ln, vars));
        else {
          const nextLine = rawLines[i];
          if (nextLine && getIndent(nextLine) === indent && nextLine.trim().match(/^else\s*:\s*$/)) {
            i++;
            const elseBody = [];
            while (i < rawLines.length && getIndent(rawLines[i]) >= blockIndent) {
              elseBody.push(rawLines[i]);
              i++;
            }
            elseBody.forEach((ln) => runLine(ln, vars));
          }
        }
        continue;
      }

      const assignMatch = trimmed.match(/^(\w+)\s*=\s*(.+)$/);
      if (assignMatch) {
        const [, name, value] = assignMatch;
        const v = value.trim();
        if (v.startsWith('[')) {
          const arr = parseList(v);
          if (arr) vars[name] = arr;
          i++; continue;
        }
        const strMatch = v.match(/^["'](.+)["']$/);
        if (strMatch) { vars[name] = strMatch[1]; i++; continue; }
        vars[name] = evalExpr(v);
        i++; continue;
      }

      const printMatch = trimmed.match(/^print\s*\(\s*(.+)\s*\)\s*$/);
      if (printMatch) {
        output.push(resolvePrintArg(printMatch[1]));
        i++; continue;
      }
      i++;
    }
    return output.join('\n');
  }

  // --- Simulated Java: System.out.println, int, String ---
  function runSimulatedJava(code) {
    const lines = code.split(/\r?\n/).map((l) => l.trim());
    const vars = Object.create(null);
    const output = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (!line || line.startsWith('//') || line.startsWith('/*')) continue;

      const printlnMatch = line.match(/System\.out\.println\s*\(\s*(.+)\s*\)\s*;/);
      if (printlnMatch) {
        const arg = printlnMatch[1].trim();
        let out;
        const q = arg.match(/^["'](.+)["']$/);
        if (q) out = q[1];
        else if (/^\w+$/.test(arg) && arg in vars) out = String(vars[arg]);
        else if (/^[\d\s+\-*/().]+$/.test(arg)) {
          try { out = String(Function('"use strict"; return (' + arg + ')')()); }
          catch (_) { out = arg; }
        } else out = arg;
        output.push(out);
        continue;
      }

      const intMatch = line.match(/int\s+(\w+)\s*=\s*(.+)\s*;/);
      if (intMatch) {
        const [, name, value] = intMatch;
        try { vars[name] = String(Function('"use strict"; return (' + value.trim() + ')')()); }
        catch (_) { vars[name] = value.trim(); }
        continue;
      }
      const strMatch = line.match(/String\s+(\w+)\s*=\s*(.+)\s*;/);
      if (strMatch) {
        const [, name, value] = strMatch;
        const q = value.trim().match(/^["'](.+)["']$/);
        vars[name] = q ? q[1] : value.trim();
        continue;
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

  function isStepUnlocked(levelIndex, stepIndex) {
    return true;
  }

  function getLevelsForTrack(track) {
    return LEVELS.filter((l) => l.track === track);
  }

  function completedLevelCount(track) {
    const levels = track ? getLevelsForTrack(track) : LEVELS;
    let n = 0;
    levels.forEach((level) => {
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

    if (viewId === 'track-select') { /* nothing */ }
    if (viewId === 'level-map') renderLevelMap();
    if (viewId === 'lesson-view') renderStep();
  }

  function renderLevelMap() {
    let levelsForTrack = getLevelsForTrack(currentTrack);
    if (levelsForTrack.length === 0) {
      currentTrack = 'python';
      levelsForTrack = getLevelsForTrack(currentTrack);
    }
    const totalLevels = levelsForTrack.length;
    const completed = completedLevelCount(currentTrack);
    const $summary = document.getElementById('level-progress-summary');
    if ($summary) $summary.textContent = completed + '/' + totalLevels;
    const $trackName = document.getElementById('track-name');
    if ($trackName) $trackName.textContent = currentTrack === 'python' ? 'Python' : 'Java';

    const $list = document.getElementById('level-map-list');
    if (!$list) return;

    $list.innerHTML = levelsForTrack.map((level) => {
      const lIdx = LEVELS.indexOf(level);
      const stepCount = level.steps.length;
      const doneCount = level.steps.filter((s) => isStepComplete(level.id, s.id)).length;
      const allDone = doneCount === stepCount;

      const stepsHtml = level.steps.map((step, sIdx) => {
        const done = isStepComplete(level.id, step.id);
        const unlocked = isStepUnlocked(lIdx, sIdx);
        const linkClass = [done ? 'completed' : '', unlocked ? '' : 'locked'].filter(Boolean).join(' ');
        return `
          <li>
            <a href="#" class="step-link ${linkClass}" data-level="${lIdx}" data-step="${sIdx}" ${unlocked ? '' : 'aria-disabled="true"'}>
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
        if (a.classList.contains('locked')) return;
        currentLevelIndex = parseInt(a.dataset.level, 10);
        currentStepIndex = parseInt(a.dataset.step, 10);
        showView('lesson-view');
      });
    });
  }

  /** Navigate to first incomplete step in current track. */
  function goToFirstIncompleteStep() {
    const levelsForTrack = getLevelsForTrack(currentTrack);
    for (let i = 0; i < levelsForTrack.length; i++) {
      const level = levelsForTrack[i];
      const lIdx = LEVELS.indexOf(level);
      for (let sIdx = 0; sIdx < level.steps.length; sIdx++) {
        if (!isStepComplete(level.id, level.steps[sIdx].id) && isStepUnlocked(lIdx, sIdx)) {
          currentLevelIndex = lIdx;
          currentStepIndex = sIdx;
          showView('lesson-view');
          return;
        }
      }
    }
    showView('level-map');
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
    const isRobot = step.type === 'robot';

    document.getElementById('lesson-title')?.remove();
    $stepLabel.textContent = 'Step ' + stepNum + ' of ' + totalSteps;
    $levelBadge.textContent = level.title.replace(/^Level \d+: /, '');
    $lessonInstructions.innerHTML = step.instructions;
    $lessonTip.textContent = step.tip;

    if ($robotArenaWrap) $robotArenaWrap.style.display = isRobot ? 'block' : 'none';
    if ($editorPanel) $editorPanel.classList.toggle('robot-mode', isRobot);
    if ($outputPanel) $outputPanel.classList.toggle('robot-mode', isRobot);
    if ($editorLabel) $editorLabel.textContent = isRobot ? '🤖 Java FTC–style Editor' : (level.track === 'java' ? '☕ Java Editor' : '🐍 Python Editor');

    const saved = loadCodeForStep(level.id, step.id);
    const defaultCode = step.defaultCode != null ? step.defaultCode : '';
    $codeEditor.value = saved != null ? saved : defaultCode;
    $codeEditor.placeholder = isRobot ? 'driveForward(1.0);\nturn(90);' : '# Write your code here...';

    $outputConsole.textContent = isRobot ? 'Run your code to see the robot move!' : 'Click "Run My Code" when ready!';
    $outputConsole.classList.remove('error', 'running');

    $nextStepBtn.dataset.levelIndex = String(currentLevelIndex);
    $nextStepBtn.dataset.stepIndex = String(currentStepIndex);

    const $trackPill = document.getElementById('track-pill');
    if ($trackPill) $trackPill.textContent = currentTrack === 'python' ? 'Python' : 'Java';

    if (isRobot) {
      const canvas = document.getElementById('robot-arena');
      if (canvas && !robotCtx) robotCtx = canvas.getContext('2d');
      resetRobotArena();
    }
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

    if (step.type === 'robot') {
      $outputConsole.textContent = '🤖 Running robot...';
      $outputConsole.classList.add('running');
      $outputConsole.classList.remove('error');
      const commands = parseRobotCode(code);
      if (commands.length === 0) {
        $outputConsole.textContent = 'No valid commands. Try: driveForward(1.0); or turn(90);';
        $outputConsole.classList.remove('running');
        return;
      }
      runRobotAnimation(commands, () => {
        $outputConsole.textContent = '✅ Done! Robot finished the sequence.';
        $outputConsole.classList.remove('running');
      });
      return;
    }

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
    if (curr.step.type === 'robot') {
      resetRobotArena();
      $outputConsole.textContent = 'Run your code to see the robot move!';
    } else {
      $outputConsole.textContent = 'Click "Run My Code" when ready!';
    }
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
    const levelsForTrack = getLevelsForTrack(currentTrack);
    const idx = levelsForTrack.findIndex((l) => l === LEVELS[currentLevelIndex]);
    if (idx >= 0 && idx + 1 < levelsForTrack.length) {
      currentLevelIndex = LEVELS.indexOf(levelsForTrack[idx + 1]);
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
    $robotArenaWrap = document.getElementById('robot-arena-wrap');
    $editorPanel = document.getElementById('editor-panel');
    $outputPanel = document.getElementById('output-panel');
    $editorLabel = document.getElementById('editor-label');
    const robotCanvas = document.getElementById('robot-arena');
    if (robotCanvas) robotCtx = robotCanvas.getContext('2d');

    loadProgress();

    setTimeout(hideLoading, 2800);

    document.querySelectorAll('[data-nav]').forEach((el) => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        const viewId = el.getAttribute('data-nav');
        const scrollId = el.getAttribute('data-scroll');
        if (el.hasAttribute('data-track')) {
          currentTrack = el.getAttribute('data-track');
        }
        if (viewId === 'level-map' && el.hasAttribute('data-linear')) {
          goToFirstIncompleteStep();
        } else if (viewId) {
          showView(viewId);
          if (scrollId) {
            requestAnimationFrame(() => {
              const target = document.getElementById(scrollId);
              if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
          }
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

    document.querySelectorAll('.faq-q').forEach((btn) => {
      btn.addEventListener('click', () => {
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', !expanded);
        const targetId = btn.getAttribute('aria-controls');
        const target = targetId ? document.getElementById(targetId) : null;
        if (target) target.classList.toggle('open', !expanded);
      });
    });

    showView('landing');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
