const questions = [
    { q: "What does a ribosome do?", a: "Make protein", options: ["Make protein", "Eat sugar", "Protect DNA", "Control heartbeat"] },
    { q: "What does a Nucleus do?", a: "Control the cell", options: ["Make coffee", "Control the cell", "Fly away", "Store waste"] },
    { q: "What does the Golgi body do?", a: "Move around molecules", options: ["Dance", "Move around molecules", "Create noise", "Clean toxins"] },
    { q: "What does a Lysosome do?", a: "Dispose of waste", options: ["Grow the cell", "Create energy", "Dispose of waste", "Make sugar"] },
    { q: "What does the cytoplasm do?", a: "Provide structural support", options: ["Vanish", "Cook food", "Provide structural support", "Control temperature"] },
    { q: "What does the cell membrane do?", a: "Regulates the movement of molecules in and outside the cell", options: ["Make tacos", "Block light", "Store fat", "Regulates the movement of molecules in and outside the cell"] },
    { q: "What does ER stand for?", a: "Endoplasmic reticulum", options: ["Emergency Room", "Extreme Regulation", "Endoplasmic reticulum", "Elastic Reactor"] },
    { q: "What does Smooth ER do?", a: "Makes lipids and the detoxification of things", options: ["Builds protein", "Breaks bones", "Makes lipids and the detoxification of things", "Sends signals"] },
    { q: "What does Rough ER do?", a: "Protein synthesis and Quality control", options: ["Water storage", "Protein synthesis and Quality control", "Movement detection", "Light absorption"] },
    { q: "What does chloroplast do?", a: "Turns the sunlight into energy", options: ["Turns the sunlight into energy", "Stores sugar", "Releases gas", "Creates sound"] },
    { q: "What do chromosomes do?", a: "Determine the traits of an organism", options: ["Kill viruses", "Generate electricity", "Determine the traits of an organism", "Give hugs"] },
    { q: "What does the nucleolus do?", a: "Produces Ribosomes", options: ["Bakes cookies", "Protects cell wall", "Produces Ribosomes", "Absorbs toxins"] },
    { q: "What does the Cilia do?", a: "Aids in movement and sensory receptors", options: ["Create color", "Aids in movement and sensory receptors", "Filter air", "Digest proteins"] },
    { q: "What does the Flagella do?", a: "Also aid in movement", options: ["Hold cell together", "Transport sugar", "Also aid in movement", "Make new cells"] },
    { q: "What does the cell wall do?", a: "It provides protection and structural support", options: ["Deflate the cell", "Create waste", "It provides protection and structural support", "Absorb sunlight"] },
    { q: "Where can ribosomes be found?", a: "Anywhere in the cell and also on rough ER", options: ["Only on smooth ER", "Anywhere in the cell and also on rough ER", "Inside mitochondria", "In the cell wall"] },
    { q: "Why do people stain/wick cells?", a: "To see them better", options: ["To make them colorful", "To cook them", "To see them better", "To feed them"] },
    { q: "What do people usually wick with?", a: "Methylene blue", options: ["Table salt", "Methylene blue", "Sugar water", "Coffee"] },
    { q: "What is active transport?", a: "Moving low to high, requires cellular energy", options: ["Moving low to high, requires cellular energy", "Passive floating", "Creating ATP", "Filtering water"] },
    { q: "What is passive transport?", a: "The movement of substances from high concentration to low concentration", options: ["Running out", "The movement of substances from high concentration to low concentration", "Crawling", "Absorbing heat"] },
    { q: "What is diffusion?", a: "The movement of low concentration to low concentration", options: ["The movement of high to low concentration", "The movement of low concentration to low concentration", "Cellular drinking", "Gas escaping"] },
    { q: "What is facilitated diffusion?", a: "A substance passes through a membrane through the aid of a protein carrier", options: ["Carried by a friend", "A substance passes through a membrane through the aid of a protein carrier", "Stored in ER", "Pulled by a flagella"] },
    { q: "What is a solute?", a: "The minor Component in a solution", options: ["The water", "The minor Component in a solution", "The cell wall", "The gas bubbles"] },
    { q: "What is a solvent?", a: "The substance in which a solute dissolves", options: ["The minor stuff", "The solid bits", "The substance in which a solute dissolves", "The outer layer"] },
    { q: "What is a solution?", a: "A mixture of one or more solutes dissolved in solvent", options: ["A complicated math problem", "Water only", "A mixture of one or more solutes dissolved in solvent", "A bad idea"] },
    { q: "What is phagocytosis?", a: "Cellular eating", options: ["Cellular dancing", "Cellular eating", "Cellular exploding", "Cellular singing"] },
    { q: "What is pinocytosis?", a: "Cellular drinking", options: ["Cellular drinking", "Cellular jogging", "Cellular punching", "Cellular flying"] },
    { q: "What is Endocytosis?", a: "Materials moving into the cell", options: ["Materials moving into the cell", "Materials escaping", "Materials evaporating", "Materials freezing"] },
    { q: "What is exocytosis?", a: "Materials leaving the cell via secretory vesicles", options: ["Materials leaving the cell via secretory vesicles", "Materials entering mitochondria", "Materials being absorbed", "Materials melting"] },
    { q: "What is osmosis?", a: "Diffusion of water through a semi-permeable membrane", options: ["Diffusion of water through a semi-permeable membrane", "Jumping over walls", "Carrying DNA", "Spitting energy"] }
  ];
let player = {
  maxHp: 100,
  hp: 100,
  atk: 10,
  def: 5,
  statPoints: 0,
  lives: 3,
};

let monster = {
  baseHp: 50,
  baseAtk: 5,
  hp: 50,
  atk: 5,
  level: 1,
  name: "Blob",
};

let currentQuestion = 0;

const qEl = document.getElementById("question");
const aEl = document.getElementById("answers");
const rEl = document.getElementById("result");

function updateUI() {
  document.getElementById("player-hp").innerText = player.hp;
  document.getElementById("player-atk").innerText = player.atk;
  document.getElementById("player-def").innerText = player.def;
  document.getElementById("stat-points").innerText = player.statPoints;
  document.getElementById("player-lives").innerText = player.lives;

  document.getElementById("monster-hp").innerText = monster.hp;
  document.getElementById("monster-atk").innerText = monster.atk;
  document.getElementById("monster-level").innerText = monster.level;
  document.getElementById("monster-name").innerText = monster.name;
}

function loadQuestion() {
  if (currentQuestion >= questions.length) {
    qEl.innerText = "Victory! You've answered all questions!";
    aEl.innerHTML = "";
    return;
  }

  rEl.innerText = "";
  const q = questions[currentQuestion];
  qEl.innerText = q.q;
  aEl.innerHTML = "";

  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => handleAnswer(opt, q.a);
    aEl.appendChild(btn);
  });
}

function handleAnswer(selected, correct) {
  if (player.lives <= 0 || player.hp <= 0) return;

  if (selected === correct) {
    const dmg = player.atk + Math.floor(Math.random() * 5);
    monster.hp -= dmg;
    rEl.innerText = `Correct! You dealt ${dmg} damage to ${monster.name}.`;
    currentQuestion++;

    if (monster.hp <= 0) {
      player.statPoints += 2;
      evolveMonster();
    }
  } else {
    player.lives -= 1;

    const dmg = monster.atk - player.def;
    const actual = Math.max(dmg, 0);
    player.hp -= actual;

    rEl.innerText = `Wrong! You lost 1 life.\n${monster.name} attacked you for ${actual} damage.`;

    if (player.lives <= 0 || player.hp <= 0) {
      qEl.innerText = "You failed the quiz and fell in battle.";
      aEl.innerHTML = "";
      return;
    }
  }

  updateUI();
  loadQuestion();
}

function evolveMonster() {
  monster.level += 1;
  monster.baseHp += 30;
  monster.baseAtk += 5;
  monster.hp = monster.baseHp;
  monster.atk = monster.baseAtk;
  monster.name = getMonsterName(monster.level);

  rEl.innerText += `\nYou defeated ${monster.name}'s predecessor! Earned 2 stat points.`;
}

function getMonsterName(level) {
  const names = ["Slime", "Goblin", "Orc", "Troll", "Dragon", "Wraith", "Overlord"];
  return names[Math.min(level - 1, names.length - 1)];
}

function upgradeStat(stat) {
  if (player.statPoints <= 0) return;

  if (stat === "atk") player.atk += 2;
  else if (stat === "def") player.def += 1;
  else if (stat === "hp") {
    player.maxHp += 10;
    player.hp = player.maxHp;
  }

  player.statPoints--;
  updateUI();
}

updateUI();
loadQuestion();
