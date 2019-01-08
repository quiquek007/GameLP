/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_loading_loading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/loading/loading */ "./src/components/loading/loading.js");
/* harmony import */ var _components_controls_keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/controls/keyboard */ "./src/components/controls/keyboard.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);




const loading = new _components_loading_loading__WEBPACK_IMPORTED_MODULE_0__["default"]();
const controls = new _components_controls_keyboard__WEBPACK_IMPORTED_MODULE_1__["default"](loading);
loading.initLoading(controls);
controls.initControls();


/***/ }),

/***/ "./src/components/battle/audio/lose.mp3":
/*!**********************************************!*\
  !*** ./src/components/battle/audio/lose.mp3 ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/components/battle/audio/lose.mp3";

/***/ }),

/***/ "./src/components/battle/audio/win.mp3":
/*!*********************************************!*\
  !*** ./src/components/battle/audio/win.mp3 ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/components/battle/audio/win.mp3";

/***/ }),

/***/ "./src/components/battle/battle.css":
/*!******************************************!*\
  !*** ./src/components/battle/battle.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/battle/battle.js":
/*!*****************************************!*\
  !*** ./src/components/battle/battle.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _spells_spells__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../spells/spells */ "./src/components/spells/spells.js");
/* harmony import */ var _modal_dialog_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modal-dialog/modal */ "./src/components/modal-dialog/modal.js");
/* harmony import */ var _img_battle_message_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/battle-message.png */ "./src/components/battle/img/battle-message.png");
/* harmony import */ var _img_battle_message_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_battle_message_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _character_person__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../character/person */ "./src/components/character/person.js");
/* harmony import */ var _screens_game_scene_scene__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../screens/game-scene/scene */ "./src/screens/game-scene/scene.js");
/* harmony import */ var _battle_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./battle.css */ "./src/components/battle/battle.css");
/* harmony import */ var _battle_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_battle_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tasks_task__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tasks/task */ "./src/components/tasks/task.js");
/* harmony import */ var _screens_score_score__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../screens/score/score */ "./src/screens/score/score.js");
/* harmony import */ var _spell_animation_animation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../spell-animation/animation */ "./src/components/spell-animation/animation.js");
/* harmony import */ var _spell_animation_sounds_sounds__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../spell-animation/sounds/sounds */ "./src/components/spell-animation/sounds/sounds.js");
/* harmony import */ var _audio_win_mp3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./audio/win.mp3 */ "./src/components/battle/audio/win.mp3");
/* harmony import */ var _audio_win_mp3__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_audio_win_mp3__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _audio_lose_mp3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./audio/lose.mp3 */ "./src/components/battle/audio/lose.mp3");
/* harmony import */ var _audio_lose_mp3__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_audio_lose_mp3__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _tasks_listening_voices_voices__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../tasks/listening/voices/voices */ "./src/components/tasks/listening/voices/voices.js");














class Battle {
  constructor(player, enemy) {
    this.player = player;
    this.enemy = enemy;
    this.turn = 'player';
    this.state = 'loaded';
    this.choosenSpell = 'fire';
    this.controls = undefined;
    this.spellItems = [];
    this.curentCursor = 0;
  }

  initBattle() {
    const delayBeforeMessage = 2500;
    const delayBeforeShowSpells = 4500;
    this.setHP(this.player.hp, this.enemy.hp);
    setTimeout(() => { this.showBattleMessage('Fight'); }, delayBeforeMessage);
    setTimeout(() => { this.checkTurn(this.turn, this.state); }, delayBeforeShowSpells);
  }

  removeSpellContainer() {
    const delay = 750;
    const spellContainer = document.getElementById('spell-container');
    spellContainer.classList.add('-hide');
    setTimeout(() => {
      spellContainer.remove();
      this.checkTurn(this.turn, this.state);
    }, delay);
  }

  offerSpells() {
    const container = document.getElementById('spell-space');
    const spellContainer = document.createElement('div');
    const innerInfo = document.createElement('div');
    const animationDelay = 250;

    spellContainer.setAttribute('class', 'spell-container -hide');
    spellContainer.setAttribute('id', 'spell-container');
    innerInfo.setAttribute('class', 'inner-info');
    innerInfo.innerText = 'Choose Your Spell';
    for (let i = 0, len = _spells_spells__WEBPACK_IMPORTED_MODULE_0__["default"].length; i < len; i++) {
      const spell = document.createElement('div');
      spell.setAttribute('class', 'spell');
      spell.innerText = _spells_spells__WEBPACK_IMPORTED_MODULE_0__["default"][i].name;
      spell.style.backgroundImage = `url('${_spells_spells__WEBPACK_IMPORTED_MODULE_0__["default"][i].srcToImage}')`;
      spell.addEventListener('click', () => {
        this.choosenSpell = _spells_spells__WEBPACK_IMPORTED_MODULE_0__["default"][i].name;
        this.state = 'chosen spell';
        this.removeSpellContainer();
      });
      this.spellItems.push(spell);
      spellContainer.appendChild(spell);
    }
    spellContainer.children[0].classList.add('-selected');
    spellContainer.appendChild(innerInfo);
    container.appendChild(spellContainer);

    setTimeout(() => { spellContainer.classList.remove('-hide'); }, animationDelay);
  }

  checkTurn(turn, state) {
    if (turn === 'player') {
      if (state === 'loaded') {
        this.offerSpells();
      }
      if (state === 'chosen spell') {
        this.spellItems = [];
        this.curentCursor = 0;
        const modal = new _modal_dialog_modal__WEBPACK_IMPORTED_MODULE_1__["default"](this);
        this.controls.controller = modal;
        modal.controls = this.controls;
        modal.showAllTasks();
      }
    }
  }

  removeModal() {
    const modal = document.getElementById('modal');
    const delay = 300;
    modal.classList.add('-hide');
    setTimeout(() => { modal.remove(); }, delay);
  }

  initDeath(entity) {
    if (entity.role === 'player') {
      const player = document.getElementById('player');
      const playground = document.getElementById('playground');
      const score = new _screens_score_score__WEBPACK_IMPORTED_MODULE_7__["default"]();

      this.controls.controller = score;
      score.controls = this.controls;
      score.writeRecord(this.player.name, this.player.score);
      score.init();
      playground.classList.add('-player-dead');
      player.classList.add('-dead');
    }
    if (entity.role === 'monster') {
      const monster = new _character_person__WEBPACK_IMPORTED_MODULE_3__["default"]();
      const scene = new _screens_game_scene_scene__WEBPACK_IMPORTED_MODULE_4__["default"](this.player, monster);
      const enemy = document.getElementById('enemy');
      const delayBeforeNewScene = 2000;

      enemy.classList.add('-dead');
      this.showBattleMessage('Next enemy!');
      this.controls.controller = scene;
      scene.controls = this.controls;
      this.destroyPlayground();
      setTimeout(() => { scene.initScene(); }, delayBeforeNewScene);
    }
  }

  destroyPlayground() {
    const animationDelay = 2000;
    const playground = document.getElementById('playground');
    playground.classList.add('-hide');
    setTimeout(() => { playground.remove(); }, animationDelay);
  }

  damageEntity(entity, damage) {
    if ((entity.hp - damage) <= 0) {
      entity.hp = 0;
    } else entity.hp -= damage;
  }

  setScore(entity) {
    const winPoints = 5;
    const scoreElem = document.getElementById('score-value');
    entity.score += winPoints;
    scoreElem.innerText = entity.score;
  }

  playSound(sound) {
    if (navigator.userAgent.indexOf('Chrome') !== -1) {
      const audio = new Howl({
        src: [sound],
        volume: 1,
      });
      audio.play();
    } else {
      const audio = new Audio(sound);
      audio.play();
    }
  }

  checkAlive(entity) {
    if (entity.hp <= 0) {
      this.initDeath(entity);
    } else {
      this.state = 'loaded';
      this.checkTurn(this.turn, this.state);
    }
  }

  compareDecisions(userDecision, predefinedDecision) {
    const durationAnimation = 4000;
    const attackBeginning = 2500;
    const damage = 34;

    this.removeModal();
    if (userDecision === predefinedDecision) {
      this.playSound(_audio_win_mp3__WEBPACK_IMPORTED_MODULE_10___default.a);
      this.setScore(this.player);
      this.showBattleMessage('You attack');
      setTimeout(() => {
        const animation = new _spell_animation_animation__WEBPACK_IMPORTED_MODULE_8__["default"](this.choosenSpell, document.getElementById('enemy'));
        animation.play();
        this.damageEntity(this.enemy, damage);
        this.setHP(this.player.hp, this.enemy.hp);
      }, attackBeginning);
      setTimeout(() => { this.checkAlive(this.enemy); }, durationAnimation);
    } else {
      this.playSound(_audio_lose_mp3__WEBPACK_IMPORTED_MODULE_11___default.a);
      this.showBattleMessage('Enemy attack');
      setTimeout(() => {
        const animation = new _spell_animation_animation__WEBPACK_IMPORTED_MODULE_8__["default"](this.choosenSpell, document.getElementById('player'));
        animation.play();
        this.damageEntity(this.player, damage);
        this.setHP(this.player.hp, this.enemy.hp);
      }, attackBeginning);
      setTimeout(() => { this.checkAlive(this.player); }, durationAnimation);
    }
  }

  setHP(playerHealth, enemyHealth) {
    const playerHealthContainer = document.getElementById('player-hp');
    const enemyHealthContainer = document.getElementById('enemy-hp');

    if (playerHealth >= 1) {
      playerHealthContainer.style.width = `${playerHealth}%`;
      playerHealthContainer.innerText = playerHealth;
    } else {
      playerHealthContainer.style.width = '0%';
      playerHealthContainer.innerText = 'Dead';
    }
    if (enemyHealth >= 1) {
      enemyHealthContainer.style.width = `${enemyHealth}%`;
      enemyHealthContainer.innerText = enemyHealth;
    } else {
      enemyHealthContainer.style.width = '0%';
      enemyHealthContainer.innerText = 'Dead';
    }
  }

  showBattleMessage(message) {
    const text = document.createElement('div');
    const delayBeforeShowing = 100;
    const delaybeforehiding = 1600;
    const removingDelay = 2300;

    text.setAttribute('class', 'battle-message -hide');
    text.innerText = message;
    document.body.appendChild(text);

    setTimeout(() => { text.classList.remove('-hide'); }, delayBeforeShowing);
    setTimeout(() => { text.classList.add('-hide'); }, delaybeforehiding);
    setTimeout(() => { text.remove(); }, removingDelay);
  }

  // pick needed spell with keyboard
  reselectSpell(rest = 0) {
    this.spellItems[this.curentCursor].classList.remove('-selected');
    this.curentCursor += rest;
    if (this.curentCursor >= this.spellItems.length) this.curentCursor = 0;
    if (this.curentCursor <= -1) this.curentCursor = this.spellItems.length - 1;
    this.spellItems[this.curentCursor].classList.add('-selected');
  }

  checkUserAction(action) {
    if (action === 'arrow-right') {
      if (this.turn === 'player' && this.state === 'loaded') {
        this.reselectSpell(1);
      }
    }

    if (action === 'arrow-left') {
      if (this.turn === 'player' && this.state === 'loaded') {
        this.reselectSpell(-1);
      }
    }

    if (action === 'arrow-down') {
      if (this.turn === 'player' && this.state === 'loaded') {
        this.reselectSpell(2);
      }
    }

    if (action === 'arrow-up') {
      if (this.turn === 'player' && this.state === 'loaded') {
        this.reselectSpell(-2);
      }
    }

    if (action === 'enter') {
      if (this.turn === 'player' && this.state === 'loaded') {
        this.choosenSpell = _spells_spells__WEBPACK_IMPORTED_MODULE_0__["default"][this.curentCursor].name;
        this.state = 'chosen spell';
        this.removeSpellContainer();
      }
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Battle);


/***/ }),

/***/ "./src/components/battle/img/battle-message.png":
/*!******************************************************!*\
  !*** ./src/components/battle/img/battle-message.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/components/battle/img/battle-message.png";

/***/ }),

/***/ "./src/components/character/characters.js":
/*!************************************************!*\
  !*** ./src/components/character/characters.js ***!
  \************************************************/
/*! exports provided: males, females, monsters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "males", function() { return males; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "females", function() { return females; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monsters", function() { return monsters; });
/* harmony import */ var _img_female_female1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/female/female1.png */ "./src/components/character/img/female/female1.png");
/* harmony import */ var _img_female_female1_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_img_female_female1_png__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _img_female_female2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/female/female2.png */ "./src/components/character/img/female/female2.png");
/* harmony import */ var _img_female_female2_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_female_female2_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _img_female_female3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/female/female3.png */ "./src/components/character/img/female/female3.png");
/* harmony import */ var _img_female_female3_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_female_female3_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _img_male_male1_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/male/male1.png */ "./src/components/character/img/male/male1.png");
/* harmony import */ var _img_male_male1_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_male_male1_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _img_male_male2_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/male/male2.png */ "./src/components/character/img/male/male2.png");
/* harmony import */ var _img_male_male2_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_male_male2_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _img_male_male3_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/male/male3.png */ "./src/components/character/img/male/male3.png");
/* harmony import */ var _img_male_male3_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_img_male_male3_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _img_monstrers_Golem_1_Head_Head_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/monstrers/Golem_1/Head/Head.png */ "./src/components/character/img/monstrers/Golem_1/Head/Head.png");
/* harmony import */ var _img_monstrers_Golem_1_Head_Head_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_img_monstrers_Golem_1_Head_Head_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _img_monstrers_Golem_2_Head_Head_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/monstrers/Golem_2/Head/Head.png */ "./src/components/character/img/monstrers/Golem_2/Head/Head.png");
/* harmony import */ var _img_monstrers_Golem_2_Head_Head_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_img_monstrers_Golem_2_Head_Head_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _img_monstrers_Golem_3_Head_Head_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/monstrers/Golem_3/Head/Head.png */ "./src/components/character/img/monstrers/Golem_3/Head/Head.png");
/* harmony import */ var _img_monstrers_Golem_3_Head_Head_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_img_monstrers_Golem_3_Head_Head_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _img_monstrers_Orc_Head_Head_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/monstrers/Orc/Head/Head.png */ "./src/components/character/img/monstrers/Orc/Head/Head.png");
/* harmony import */ var _img_monstrers_Orc_Head_Head_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_img_monstrers_Orc_Head_Head_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _img_monstrers_Golem_1_Body_Body_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./img/monstrers/Golem_1/Body/Body.png */ "./src/components/character/img/monstrers/Golem_1/Body/Body.png");
/* harmony import */ var _img_monstrers_Golem_1_Body_Body_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_img_monstrers_Golem_1_Body_Body_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _img_monstrers_Golem_2_Body_Body_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./img/monstrers/Golem_2/Body/Body.png */ "./src/components/character/img/monstrers/Golem_2/Body/Body.png");
/* harmony import */ var _img_monstrers_Golem_2_Body_Body_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_img_monstrers_Golem_2_Body_Body_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _img_monstrers_Golem_3_Body_Body_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./img/monstrers/Golem_3/Body/Body.png */ "./src/components/character/img/monstrers/Golem_3/Body/Body.png");
/* harmony import */ var _img_monstrers_Golem_3_Body_Body_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_img_monstrers_Golem_3_Body_Body_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _img_monstrers_Orc_Body_Body_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./img/monstrers/Orc/Body/Body.png */ "./src/components/character/img/monstrers/Orc/Body/Body.png");
/* harmony import */ var _img_monstrers_Orc_Body_Body_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_img_monstrers_Orc_Body_Body_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _img_monstrers_Golem_1_Legs_Legs_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./img/monstrers/Golem_1/Legs/Legs.png */ "./src/components/character/img/monstrers/Golem_1/Legs/Legs.png");
/* harmony import */ var _img_monstrers_Golem_1_Legs_Legs_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_img_monstrers_Golem_1_Legs_Legs_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _img_monstrers_Golem_2_Legs_Legs_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./img/monstrers/Golem_2/Legs/Legs.png */ "./src/components/character/img/monstrers/Golem_2/Legs/Legs.png");
/* harmony import */ var _img_monstrers_Golem_2_Legs_Legs_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_img_monstrers_Golem_2_Legs_Legs_png__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _img_monstrers_Golem_3_Legs_Legs_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./img/monstrers/Golem_3/Legs/Legs.png */ "./src/components/character/img/monstrers/Golem_3/Legs/Legs.png");
/* harmony import */ var _img_monstrers_Golem_3_Legs_Legs_png__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_img_monstrers_Golem_3_Legs_Legs_png__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _img_monstrers_Orc_Legs_Legs_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./img/monstrers/Orc/Legs/Legs.png */ "./src/components/character/img/monstrers/Orc/Legs/Legs.png");
/* harmony import */ var _img_monstrers_Orc_Legs_Legs_png__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_img_monstrers_Orc_Legs_Legs_png__WEBPACK_IMPORTED_MODULE_17__);



















const males = [_img_male_male1_png__WEBPACK_IMPORTED_MODULE_3___default.a, _img_male_male2_png__WEBPACK_IMPORTED_MODULE_4___default.a, _img_male_male3_png__WEBPACK_IMPORTED_MODULE_5___default.a];
const females = [_img_female_female1_png__WEBPACK_IMPORTED_MODULE_0___default.a, _img_female_female2_png__WEBPACK_IMPORTED_MODULE_1___default.a, _img_female_female3_png__WEBPACK_IMPORTED_MODULE_2___default.a];
const monster1 = [_img_monstrers_Golem_1_Head_Head_png__WEBPACK_IMPORTED_MODULE_6___default.a, _img_monstrers_Golem_1_Body_Body_png__WEBPACK_IMPORTED_MODULE_10___default.a, _img_monstrers_Golem_1_Legs_Legs_png__WEBPACK_IMPORTED_MODULE_14___default.a];
const monster2 = [_img_monstrers_Golem_2_Head_Head_png__WEBPACK_IMPORTED_MODULE_7___default.a, _img_monstrers_Golem_2_Body_Body_png__WEBPACK_IMPORTED_MODULE_11___default.a, _img_monstrers_Golem_2_Legs_Legs_png__WEBPACK_IMPORTED_MODULE_15___default.a];
const monster3 = [_img_monstrers_Golem_3_Head_Head_png__WEBPACK_IMPORTED_MODULE_8___default.a, _img_monstrers_Golem_3_Body_Body_png__WEBPACK_IMPORTED_MODULE_12___default.a, _img_monstrers_Golem_3_Legs_Legs_png__WEBPACK_IMPORTED_MODULE_16___default.a];
const monster4 = [_img_monstrers_Orc_Head_Head_png__WEBPACK_IMPORTED_MODULE_9___default.a, _img_monstrers_Orc_Body_Body_png__WEBPACK_IMPORTED_MODULE_13___default.a, _img_monstrers_Orc_Legs_Legs_png__WEBPACK_IMPORTED_MODULE_17___default.a];
const monsters = [monster1, monster2, monster3, monster4];




/***/ }),

/***/ "./src/components/character/img/female/female1.png":
/*!*********************************************************!*\
  !*** ./src/components/character/img/female/female1.png ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/components/character/img/female/female1.png";

/***/ }),

/***/ "./src/components/character/img/female/female2.png":
/*!*********************************************************!*\
  !*** ./src/components/character/img/female/female2.png ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/components/character/img/female/female2.png";

/***/ }),

/***/ "./src/components/character/img/female/female3.png":
/*!*********************************************************!*\
  !*** ./src/components/character/img/female/female3.png ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/components/character/img/female/female3.png";

/***/ }),

/***/ "./src/components/character/img/male/male1.png":
/*!*****************************************************!*\
  !*** ./src/components/character/img/male/male1.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/components/character/img/male/male1.png";

/***/ }),

/***/ "./src/components/character/img/male/male2.png":
/*!*****************************************************!*\
  !*** ./src/components/character/img/male/male2.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/components/character/img/male/male2.png";

/***/ }),

/***/ "./src/components/character/img/male/male3.png":
/*!*****************************************************!*\
  !*** ./src/components/character/img/male/male3.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/components/character/img/male/male3.png";

/***/ }),

/***/ "./src/components/character/img/monstrers/Golem_1/Body/Body.png":
/*!**********************************************************************!*\
  !*** ./src/components/character/img/monstrers/Golem_1/Body/Body.png ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/components/character/img/monstrers/Golem_1/Body/Body.png";

/***/ }),

/***/ "./src/components/character/img/monstrers/Golem_1/Head/Head.png":
/*!**********************************************************************!*\
  !*** ./src/components/character/img/monstrers/Golem_1/Head/Head.png ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/components/character/img/monstrers/Golem_1/Head/Head.png";

/***/ }),

/***/ "./src/components/character/img/monstrers/Golem_1/Legs/Legs.png":
/*!**********************************************************************!*\
  !*** ./src/components/character/img/monstrers/Golem_1/Legs/Legs.png ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/components/character/img/monstrers/Golem_1/Legs/Legs.png";

/***/ }),

/***/ "./src/components/character/img/monstrers/Golem_2/Body/Body.png":
/*!**********************************************************************!*\
  !*** ./src/components/character/img/monstrers/Golem_2/Body/Body.png ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/components/character/img/monstrers/Golem_2/Body/Body.png";

/***/ }),

/***/ "./src/components/character/img/monstrers/Golem_2/Head/Head.png":
/*!**********************************************************************!*\
  !*** ./src/components/character/img/monstrers/Golem_2/Head/Head.png ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/components/character/img/monstrers/Golem_2/Head/Head.png";

/***/ }),

/***/ "./src/components/character/img/monstrers/Golem_2/Legs/Legs.png":
/*!**********************************************************************!*\
  !*** ./src/components/character/img/monstrers/Golem_2/Legs/Legs.png ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/components/character/img/monstrers/Golem_2/Legs/Legs.png";

/***/ }),

/***/ "./src/components/character/img/monstrers/Golem_3/Body/Body.png":
/*!**********************************************************************!*\
  !*** ./src/components/character/img/monstrers/Golem_3/Body/Body.png ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/components/character/img/monstrers/Golem_3/Body/Body.png";

/***/ }),

/***/ "./src/components/character/img/monstrers/Golem_3/Head/Head.png":
/*!**********************************************************************!*\
  !*** ./src/components/character/img/monstrers/Golem_3/Head/Head.png ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/components/character/img/monstrers/Golem_3/Head/Head.png";

/***/ }),

/***/ "./src/components/character/img/monstrers/Golem_3/Legs/Legs.png":
/*!**********************************************************************!*\
  !*** ./src/components/character/img/monstrers/Golem_3/Legs/Legs.png ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/components/character/img/monstrers/Golem_3/Legs/Legs.png";

/***/ }),

/***/ "./src/components/character/img/monstrers/Orc/Body/Body.png":
/*!******************************************************************!*\
  !*** ./src/components/character/img/monstrers/Orc/Body/Body.png ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/components/character/img/monstrers/Orc/Body/Body.png";

/***/ }),

/***/ "./src/components/character/img/monstrers/Orc/Head/Head.png":
/*!******************************************************************!*\
  !*** ./src/components/character/img/monstrers/Orc/Head/Head.png ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/components/character/img/monstrers/Orc/Head/Head.png";

/***/ }),

/***/ "./src/components/character/img/monstrers/Orc/Legs/Legs.png":
/*!******************************************************************!*\
  !*** ./src/components/character/img/monstrers/Orc/Legs/Legs.png ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/components/character/img/monstrers/Orc/Legs/Legs.png";

/***/ }),

/***/ "./src/components/character/names.js":
/*!*******************************************!*\
  !*** ./src/components/character/names.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const adjectives = [
  'noisy', 'dark',
  'old', 'slow',
  'crooked', 'wet',
  'messy', 'bad',
  'wide', 'foolhardy',
];
const gists = [
  'Ogre', 'Gnome',
  'Goblin', 'Monster',
  'Foe', 'Enemy',
  'Perpetrator',
  'Betrayer', 'murder',
];
const names = [
  'Noah', 'Liam',
  'William', 'Mason',
  'James', 'Benjamin',
  'Jacob', 'Michael',
  'Elijah', 'Ethan',
  'Donald', 'Douglas',
];

/* harmony default export */ __webpack_exports__["default"] = ({ adjectives, gists, names });


/***/ }),

/***/ "./src/components/character/person.js":
/*!********************************************!*\
  !*** ./src/components/character/person.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _character_characters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../character/characters */ "./src/components/character/characters.js");
/* harmony import */ var _character_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../character/names */ "./src/components/character/names.js");



class Person {
  constructor(entity = {}) {
    this.hp = 100;
    this.body = entity.src || this.createPartOfBody(_character_characters__WEBPACK_IMPORTED_MODULE_0__["monsters"], 1);
    this.gender = entity.gender || 'male';
    this.name = entity.name || this.createName(_character_names__WEBPACK_IMPORTED_MODULE_1__["default"].adjectives, _character_names__WEBPACK_IMPORTED_MODULE_1__["default"].gists, _character_names__WEBPACK_IMPORTED_MODULE_1__["default"].names);
    this.legs = entity.src || this.createPartOfBody(_character_characters__WEBPACK_IMPORTED_MODULE_0__["monsters"], 2);
    this.head = entity.src || this.createPartOfBody(_character_characters__WEBPACK_IMPORTED_MODULE_0__["monsters"], 0);
    this.role = entity.src ? 'player' : 'monster';
    this.score = 0;
  }

  createPartOfBody(list, part) {
    const options = list.length;
    const rndValue = this.getRandomInt(0, options);

    return list[rndValue][part];
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  createName(adjectives, gists, names) {
    const wholeName = [];
    let count = adjectives.length;
    let rndValue = this.getRandomInt(0, count);

    wholeName[0] = adjectives[rndValue];
    count = gists.length;
    rndValue = this.getRandomInt(0, count);
    wholeName[1] = gists[rndValue];
    count = names.length;
    rndValue = this.getRandomInt(0, count);
    wholeName[2] = names[rndValue];

    return wholeName.join(' ');
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Person);


/***/ }),

/***/ "./src/components/controls/keyboard.js":
/*!*********************************************!*\
  !*** ./src/components/controls/keyboard.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Controls {
  constructor(controller) {
    this.controller = controller;
    this.controlhandle = null;
  }

  initControls() {
    const controlHandle = (event) => {
      // KeyboardEvent doesn't work in chrome, but still working in firefox
      if (event.keyCode === KeyboardEvent.DOM_VK_RETURN
        || event.keyCode === 13) this.controller.checkUserAction('enter'); //ENTER keyCode = 13
      if (event.keyCode === KeyboardEvent.DOM_VK_LEFT
        || event.keyCode === 37) this.controller.checkUserAction('arrow-left'); //Arrow Left keyCode = 37
      if (event.keyCode === KeyboardEvent.DOM_VK_RIGHT
        || event.keyCode === 39) this.controller.checkUserAction('arrow-right'); //Arrow Right keyCode = 39
      if (event.keyCode === KeyboardEvent.DOM_VK_UP
        || event.keyCode === 38) this.controller.checkUserAction('arrow-up'); //Arrow Up keyCode = 38
      if (event.keyCode === KeyboardEvent.DOM_VK_DOWN
        || event.keyCode === 40) this.controller.checkUserAction('arrow-down'); //Arrow Down keyCode = 40
      if (event.keyCode === KeyboardEvent.DOM_VK_ESCAPE
        || event.keyCode === 27) this.controller.checkUserAction('esc'); //ESC keyCode = 27
      if (event.keyCode === KeyboardEvent.DOM_VK_SPACE
        || event.keyCode === 32) this.controller.checkUserAction('space'); //SPACE keyCode = 32
    };
    document.addEventListener('keyup', controlHandle);
    this.controlhandle = controlHandle;
  }

  disiableControls() {
    document.removeEventListener('keyup', this.controlhandle);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Controls);


/***/ }),

/***/ "./src/components/loading/img/logo.png":
/*!*********************************************!*\
  !*** ./src/components/loading/img/logo.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/components/loading/img/logo.png";

/***/ }),

/***/ "./src/components/loading/loading.js":
/*!*******************************************!*\
  !*** ./src/components/loading/loading.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/logo.png */ "./src/components/loading/img/logo.png");
/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_img_logo_png__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/components/loading/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _screens_customisation_customisator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../screens/customisation/customisator */ "./src/screens/customisation/customisator.js");




class Loading {
  constructor() {
    this.loadingScreen = null;
    this.loadingCircle = null;
    this.greetings = null;
    this.loaded = false;
    this.controls = null;
  }

  initLoading(controls) {
    const innerCircle = document.createElement('div');

    this.controls = controls;
    this.loadingScreen = document.createElement('section');
    this.loadingCircle = document.createElement('div');
    this.loadingScreen.setAttribute('class', 'waiting');
    this.loadingCircle.setAttribute('class', 'circle');
    innerCircle.setAttribute('class', 'circle');
    innerCircle.innerText = 'Loading...';
    this.loadingCircle.appendChild(innerCircle);
    this.loadingScreen.appendChild(this.loadingCircle);
    document.body.appendChild(this.loadingScreen);

    window.onload = this.initStateLoaded.bind(this);
  }


  initStateLoaded() {
    const delay = 1000;
    const container = document.createElement('div');
    const btnEnter = document.createElement('div');
    const logo = document.createElement('img');

    this.loadingCircle.classList.add('-hide');
    this.loadingScreen.classList.add('-loaded');
    this.greetings = container;
    setTimeout(() => {
      this.loadingScreen.classList.add('-hide');
      container.setAttribute('class', 'entry-screen');
      btnEnter.setAttribute('class', 'btn-enter');
      btnEnter.innerText = 'Press Enter';
      btnEnter.addEventListener('click', () => { this.checkUserAction('enter'); });
      logo.setAttribute('class', 'logo -hide');
      logo.setAttribute('src', _img_logo_png__WEBPACK_IMPORTED_MODULE_0___default.a);
      container.appendChild(logo);
      container.appendChild(btnEnter);
      document.body.appendChild(container);
    }, delay);
    setTimeout(() => {
      this.loaded = true;
      logo.classList.remove('-hide');
    }, delay + 500);
  }

  checkUserAction(action) {
    if (this.loaded === true) {
      if (action === 'enter') {
        const customisator = new _screens_customisation_customisator__WEBPACK_IMPORTED_MODULE_2__["default"](this.controls);
        this.controls.controller = customisator;
        customisator.initScene();
        this.destroy();
      }
    }
  }

  destroy() {
    const delay = 100;
    this.greetings.classList.add('-hide');
    setTimeout(() => {
      this.loadingScreen.remove();
      this.greetings.remove();
    }, delay);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Loading);


/***/ }),

/***/ "./src/components/loading/style.css":
/*!******************************************!*\
  !*** ./src/components/loading/style.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/modal-dialog/img/diploma.svg":
/*!*****************************************************!*\
  !*** ./src/components/modal-dialog/img/diploma.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/components/modal-dialog/img/diploma.svg";

/***/ }),

/***/ "./src/components/modal-dialog/modal.css":
/*!***********************************************!*\
  !*** ./src/components/modal-dialog/modal.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/modal-dialog/modal.js":
/*!**********************************************!*\
  !*** ./src/components/modal-dialog/modal.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.template */ "./src/components/modal-dialog/modal.template.js");
/* harmony import */ var _modal_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.css */ "./src/components/modal-dialog/modal.css");
/* harmony import */ var _modal_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modal_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _img_diploma_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/diploma.svg */ "./src/components/modal-dialog/img/diploma.svg");
/* harmony import */ var _img_diploma_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_diploma_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tasks_tasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tasks/tasks */ "./src/components/tasks/tasks.js");





class Modal {
  constructor(battle) {
    this.battle = battle;
    this.controls = undefined;
    this.currentRow = 0;
    this.currentColumn = 0;
    this.window = null;
    this.arrTasks = [[], []];
  }

  showAllTasks() {
    const window = document.createElement('section');
    window.setAttribute('class', 'modal -hide');
    window.setAttribute('id', 'modal');
    window.innerHTML = _modal_template__WEBPACK_IMPORTED_MODULE_0__["default"];
    this.window = window;

    for (let i = 0, len = _tasks_tasks__WEBPACK_IMPORTED_MODULE_3__["default"].length; i < len; i++) {
      const item = document.createElement('div');
      const nameTask = new _tasks_tasks__WEBPACK_IMPORTED_MODULE_3__["default"][i]().name;
      if (i === 0) item.setAttribute('class', 'item -selected');
      else item.setAttribute('class', 'item');
      item.innerText = nameTask;
      item.addEventListener('click', () => this.loadTask(i));
      window.appendChild(item);
      this.arrTasks[Math.floor(i / 4)].push(item);
    }

    document.body.appendChild(window);
    const btnClose = document.getElementById('btn-close');
    btnClose.addEventListener('click', () => this.clickBtnClose());
    setTimeout(() => { window.classList.remove('-hide'); }, 100);
  }

  clickBtnClose() {
    this.returnControls();
    this.removeWindowTasks(this.window);
    this.battle.state = 'loaded';
    this.battle.checkTurn(this.battle.turn, this.battle.state);
  }

  loadTask(num) {
    const task = new _tasks_tasks__WEBPACK_IMPORTED_MODULE_3__["default"][num](this.battle);
    this.battle.state = 'solving task';
    this.controls.controller = task;
    task.controls = this.controls;
    task.init();
  }

  returnControls() {
    this.controls.controller = this.battle;
    this.controls = this.battle;
  }

  removeWindowTasks(window) {
    const delay = 500;
    window.classList.add('-hide');
    setTimeout(() => { window.remove(); }, delay);
  }

  // pick task with help keyboard
  reselectTask(row = 0, column = 0) {
    this.arrTasks[this.currentRow][this.currentColumn].classList.remove('-selected');
    this.currentColumn += column;
    if (this.currentColumn >= this.arrTasks[this.currentRow].length) this.currentColumn = 0;
    if (this.currentColumn <= -1) this.currentColumn = this.arrTasks[this.currentRow].length - 1;
    this.currentRow += row;
    if (this.currentRow >= this.arrTasks.length) this.currentRow = 0;
    if (this.currentRow <= -1) this.currentRow = this.arrTasks.length - 1;
    this.arrTasks[this.currentRow][this.currentColumn].classList.add('-selected');
  }

  checkUserAction(action) {
    if (action === 'arrow-right') this.reselectTask(0, 1);
    if (action === 'arrow-left') this.reselectTask(0, -1);
    if (action === 'arrow-down') this.reselectTask(1);
    if (action === 'arrow-up') this.reselectTask(-1);
    if (action === 'enter') {
      if (this.battle.state !== 'solving task') {
        const numOfTask = (this.currentRow * 4) + this.currentColumn;
        this.loadTask(numOfTask);
      }
    }
    if (action === 'esc') this.clickBtnClose();
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Modal);


/***/ }),

/***/ "./src/components/modal-dialog/modal.template.js":
/*!*******************************************************!*\
  !*** ./src/components/modal-dialog/modal.template.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (`
<div class="btn-close" id="btn-close">X</div>
`);


/***/ }),

/***/ "./src/components/spell-animation/animation.css":
/*!******************************************************!*\
  !*** ./src/components/spell-animation/animation.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/spell-animation/animation.js":
/*!*****************************************************!*\
  !*** ./src/components/spell-animation/animation.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _animations_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animations/animations */ "./src/components/spell-animation/animations/animations.js");
/* harmony import */ var _sounds_sounds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sounds/sounds */ "./src/components/spell-animation/sounds/sounds.js");
/* harmony import */ var _animation_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animation.css */ "./src/components/spell-animation/animation.css");
/* harmony import */ var _animation_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_animation_css__WEBPACK_IMPORTED_MODULE_2__);




class Animation {
  constructor(typeAnimation, target, duration) {
    this.type = typeAnimation;
    this.target = target;
    this.duration = duration || 2500;
  }

  play() {
    const animationObj = _animations_animations__WEBPACK_IMPORTED_MODULE_0__["default"][this.type];
    const animation = document.createElement('img');
    const sound = new Audio(_sounds_sounds__WEBPACK_IMPORTED_MODULE_1__["default"][this.type]);
    sound.play();

    animation.setAttribute('class', `animation ${this.type}`);
    animation.setAttribute('src', animationObj);
    this.target.appendChild(animation);
    this.target.classList.remove('-moving');
    this.target.classList.add('-pain');

    setTimeout(() => {
      this.remove(animation);
      this.target.classList.remove('-pain');
      this.target.classList.add('-moving');
    }, this.duration);
  }

  remove(animation) {
    animation.remove();
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Animation);


/***/ }),

/***/ "./src/components/spell-animation/animations/animations.js":
/*!*****************************************************************!*\
  !*** ./src/components/spell-animation/animations/animations.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _thunder_gif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./thunder.gif */ "./src/components/spell-animation/animations/thunder.gif");
/* harmony import */ var _thunder_gif__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_thunder_gif__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _water_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./water.gif */ "./src/components/spell-animation/animations/water.gif");
/* harmony import */ var _water_gif__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_water_gif__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fire_gif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fire.gif */ "./src/components/spell-animation/animations/fire.gif");
/* harmony import */ var _fire_gif__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fire_gif__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _explosion_gif__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./explosion.gif */ "./src/components/spell-animation/animations/explosion.gif");
/* harmony import */ var _explosion_gif__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_explosion_gif__WEBPACK_IMPORTED_MODULE_3__);





/* harmony default export */ __webpack_exports__["default"] = ({
  thunder: (_thunder_gif__WEBPACK_IMPORTED_MODULE_0___default()),
  water: (_water_gif__WEBPACK_IMPORTED_MODULE_1___default()),
  fire: (_fire_gif__WEBPACK_IMPORTED_MODULE_2___default()),
  explosion: (_explosion_gif__WEBPACK_IMPORTED_MODULE_3___default()),
});


/***/ }),

/***/ "./src/components/spell-animation/animations/explosion.gif":
/*!*****************************************************************!*\
  !*** ./src/components/spell-animation/animations/explosion.gif ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/components/spell-animation/animations/explosion.gif";

/***/ }),

/***/ "./src/components/spell-animation/animations/fire.gif":
/*!************************************************************!*\
  !*** ./src/components/spell-animation/animations/fire.gif ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/components/spell-animation/animations/fire.gif";

/***/ }),

/***/ "./src/components/spell-animation/animations/thunder.gif":
/*!***************************************************************!*\
  !*** ./src/components/spell-animation/animations/thunder.gif ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/components/spell-animation/animations/thunder.gif";

/***/ }),

/***/ "./src/components/spell-animation/animations/water.gif":
/*!*************************************************************!*\
  !*** ./src/components/spell-animation/animations/water.gif ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/components/spell-animation/animations/water.gif";

/***/ }),

/***/ "./src/components/spell-animation/sounds/explosion.mp3":
/*!*************************************************************!*\
  !*** ./src/components/spell-animation/sounds/explosion.mp3 ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/components/spell-animation/sounds/explosion.mp3";

/***/ }),

/***/ "./src/components/spell-animation/sounds/fire.mp3":
/*!********************************************************!*\
  !*** ./src/components/spell-animation/sounds/fire.mp3 ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/components/spell-animation/sounds/fire.mp3";

/***/ }),

/***/ "./src/components/spell-animation/sounds/sounds.js":
/*!*********************************************************!*\
  !*** ./src/components/spell-animation/sounds/sounds.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _thunder_mp3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./thunder.mp3 */ "./src/components/spell-animation/sounds/thunder.mp3");
/* harmony import */ var _thunder_mp3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_thunder_mp3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _water_mp3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./water.mp3 */ "./src/components/spell-animation/sounds/water.mp3");
/* harmony import */ var _water_mp3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_water_mp3__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fire_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fire.mp3 */ "./src/components/spell-animation/sounds/fire.mp3");
/* harmony import */ var _fire_mp3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fire_mp3__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _explosion_mp3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./explosion.mp3 */ "./src/components/spell-animation/sounds/explosion.mp3");
/* harmony import */ var _explosion_mp3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_explosion_mp3__WEBPACK_IMPORTED_MODULE_3__);





/* harmony default export */ __webpack_exports__["default"] = ({
  thunder: (_thunder_mp3__WEBPACK_IMPORTED_MODULE_0___default()),
  water: (_water_mp3__WEBPACK_IMPORTED_MODULE_1___default()),
  fire: (_fire_mp3__WEBPACK_IMPORTED_MODULE_2___default()),
  explosion: (_explosion_mp3__WEBPACK_IMPORTED_MODULE_3___default()),
});


/***/ }),

/***/ "./src/components/spell-animation/sounds/thunder.mp3":
/*!***********************************************************!*\
  !*** ./src/components/spell-animation/sounds/thunder.mp3 ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/components/spell-animation/sounds/thunder.mp3";

/***/ }),

/***/ "./src/components/spell-animation/sounds/water.mp3":
/*!*********************************************************!*\
  !*** ./src/components/spell-animation/sounds/water.mp3 ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/components/spell-animation/sounds/water.mp3";

/***/ }),

/***/ "./src/components/spells/explosion/explosion.js":
/*!******************************************************!*\
  !*** ./src/components/spells/explosion/explosion.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_green_fire_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/green-fire.jpg */ "./src/components/spells/explosion/img/green-fire.jpg");
/* harmony import */ var _img_green_fire_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_img_green_fire_jpg__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ __webpack_exports__["default"] = ({
  srcToImage: _img_green_fire_jpg__WEBPACK_IMPORTED_MODULE_0___default.a,
  name: 'explosion',
});


/***/ }),

/***/ "./src/components/spells/explosion/img/green-fire.jpg":
/*!************************************************************!*\
  !*** ./src/components/spells/explosion/img/green-fire.jpg ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/components/spells/explosion/img/green-fire.jpg";

/***/ }),

/***/ "./src/components/spells/fire/fire.js":
/*!********************************************!*\
  !*** ./src/components/spells/fire/fire.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_fire_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/fire.jpg */ "./src/components/spells/fire/img/fire.jpg");
/* harmony import */ var _img_fire_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_img_fire_jpg__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ __webpack_exports__["default"] = ({
  srcToImage: _img_fire_jpg__WEBPACK_IMPORTED_MODULE_0___default.a,
  name: 'fire',
});


/***/ }),

/***/ "./src/components/spells/fire/img/fire.jpg":
/*!*************************************************!*\
  !*** ./src/components/spells/fire/img/fire.jpg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/components/spells/fire/img/fire.jpg";

/***/ }),

/***/ "./src/components/spells/spells.js":
/*!*****************************************!*\
  !*** ./src/components/spells/spells.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fire_fire__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fire/fire */ "./src/components/spells/fire/fire.js");
/* harmony import */ var _explosion_explosion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./explosion/explosion */ "./src/components/spells/explosion/explosion.js");
/* harmony import */ var _thunder_thunder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./thunder/thunder */ "./src/components/spells/thunder/thunder.js");
/* harmony import */ var _water_water__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./water/water */ "./src/components/spells/water/water.js");





/* harmony default export */ __webpack_exports__["default"] = ([_fire_fire__WEBPACK_IMPORTED_MODULE_0__["default"], _explosion_explosion__WEBPACK_IMPORTED_MODULE_1__["default"], _water_water__WEBPACK_IMPORTED_MODULE_3__["default"], _thunder_thunder__WEBPACK_IMPORTED_MODULE_2__["default"]]);


/***/ }),

/***/ "./src/components/spells/thunder/img/thunder.jpg":
/*!*******************************************************!*\
  !*** ./src/components/spells/thunder/img/thunder.jpg ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/components/spells/thunder/img/thunder.jpg";

/***/ }),

/***/ "./src/components/spells/thunder/thunder.js":
/*!**************************************************!*\
  !*** ./src/components/spells/thunder/thunder.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_thunder_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/thunder.jpg */ "./src/components/spells/thunder/img/thunder.jpg");
/* harmony import */ var _img_thunder_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_img_thunder_jpg__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ __webpack_exports__["default"] = ({
  srcToImage: _img_thunder_jpg__WEBPACK_IMPORTED_MODULE_0___default.a,
  name: 'thunder',
});


/***/ }),

/***/ "./src/components/spells/water/img/water.png":
/*!***************************************************!*\
  !*** ./src/components/spells/water/img/water.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/components/spells/water/img/water.png";

/***/ }),

/***/ "./src/components/spells/water/water.js":
/*!**********************************************!*\
  !*** ./src/components/spells/water/water.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_water_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/water.png */ "./src/components/spells/water/img/water.png");
/* harmony import */ var _img_water_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_img_water_png__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ __webpack_exports__["default"] = ({
  srcToImage: _img_water_png__WEBPACK_IMPORTED_MODULE_0___default.a,
  name: 'water',
});


/***/ }),

/***/ "./src/components/tasks/comparing/comparing.js":
/*!*****************************************************!*\
  !*** ./src/components/tasks/comparing/comparing.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _comparing_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comparing.template */ "./src/components/tasks/comparing/comparing.template.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../task */ "./src/components/tasks/task.js");



class Comparing extends _task__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(battle) {
    super(battle);
    this.name = 'Compare';
    this.answerEl = undefined;
  }

  init() {
    const modal = document.getElementById('modal');
    modal.innerHTML = _comparing_template__WEBPACK_IMPORTED_MODULE_0__["default"];

    const expression = document.getElementById('expression');
    const answer = document.getElementById('answer');
    const btnDone = document.getElementById('btn-done');
    const min = 0;
    const max = 25;
    const firstArg = this.getRandomIdx(min, max);
    const secondArg = this.getRandomIdx(min, max);

    this.predefinedAnswer = this.getSign(firstArg, secondArg);
    expression.innerText = `${firstArg} sign ${secondArg}`;
    answer.focus();
    btnDone.addEventListener('click', () => this.sendResults(this.getValue(answer)));
    this.answerEl = answer;
  }

  sendResults(value) {
    this.returnControls();
    this.showMessage(this.predefinedAnswer);
    this.userAnswer = value;
    this.battle.compareDecisions(this.userAnswer, this.predefinedAnswer);
  }

  getSign(firstNum, secondNum) {
    if (firstNum === secondNum) return '=';
    if (firstNum > secondNum) return '>';
    return '<';
  }

  getValue(elem) {
    return elem.value.trim().toLowerCase();
  }

  checkUserAction(action) {
    if (action === 'enter') {
      this.sendResults(this.getValue(this.answerEl));
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Comparing);


/***/ }),

/***/ "./src/components/tasks/comparing/comparing.template.js":
/*!**************************************************************!*\
  !*** ./src/components/tasks/comparing/comparing.template.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (`
<p>Compare numbers</p>
<p>Compare number and write a sign(<>=)</p>
<p id="expression"></p>
<input id="answer" type="text" autocomplete="off" placeholder="Your answer">
<p class="btn-done" id="btn-done">It's done</p>
`);


/***/ }),

/***/ "./src/components/tasks/eng-to-ru/dictionary.js":
/*!******************************************************!*\
  !*** ./src/components/tasks/eng-to-ru/dictionary.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([
  { cat: ['котик', 'кот', 'кошка', 'котэ'] },
  { dog: ['собака', 'собачка', 'пёс'] },
  { apple: ['яблоко', 'яблочко'] },
  { drink: ['пить', 'выпивать', 'запивать'] },
  { one: ['единица', 'один'] },
  { two: ['два', 'двойка'] },
  { three: ['три', 'тройка'] },
  { four: ['четыре', 'четвёрка', 'четверка'] },
  { five: ['пять', 'пятёрка', 'пятерка'] },
  { six: ['шесть', 'шестёрка', 'шестерка'] },
  { seven: ['семь', 'семёрка', 'семерка'] },
  { eight: ['восемь', 'восьмёрка', 'восьмерка'] },
  { nine: ['девять', 'девятка'] },
  { zero: ['ноль', 'нуль', 'нолик'] },
  { duck: ['утка', 'утёнок'] },
  { pig: ['свинья', 'свинка', 'хрюша', 'хрюшка'] },
  { bird: ['птица', 'птичка'] },
  { job: ['работа'] },
]);


/***/ }),

/***/ "./src/components/tasks/eng-to-ru/translation.js":
/*!*******************************************************!*\
  !*** ./src/components/tasks/eng-to-ru/translation.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _translation_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./translation.template */ "./src/components/tasks/eng-to-ru/translation.template.js");
/* harmony import */ var _dictionary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dictionary */ "./src/components/tasks/eng-to-ru/dictionary.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../task */ "./src/components/tasks/task.js");




class WordsTranslation extends _task__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor(battle) {
    super(battle);
    this.name = 'ENG-RUS';
    this.word = '';
    this.arrAnswers = [];
    this.answerEl = undefined;
  }

  init() {
    const modal = document.getElementById('modal');
    modal.innerHTML = _translation_template__WEBPACK_IMPORTED_MODULE_0__["default"];

    const expression = document.getElementById('expression');
    const answer = document.getElementById('answer');
    const btnDone = document.getElementById('btn-done');
    const idx = this.getRandomIdx(0, _dictionary__WEBPACK_IMPORTED_MODULE_1__["default"].length);

    this.word = String(Object.keys(_dictionary__WEBPACK_IMPORTED_MODULE_1__["default"][idx]));
    this.arrAnswers = _dictionary__WEBPACK_IMPORTED_MODULE_1__["default"][idx][this.word];
    this.predefinedAnswer = true;
    expression.innerText = this.word;
    answer.focus();
    btnDone.addEventListener('click', () => this.sendResults(this.getValue(answer)));
    this.answerEl = answer;
  }

  sendResults(value) {
    this.returnControls();
    this.showMessage(this.arrAnswers);
    if (this.arrAnswers.includes(value)) {
      this.userAnswer = true;
    }
    this.battle.compareDecisions(this.userAnswer, this.predefinedAnswer);
  }

  getValue(elem) {
    return elem.value.trim().toLowerCase();
  }

  checkUserAction(action) {
    if (action === 'enter') {
      this.sendResults(this.getValue(this.answerEl));
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (WordsTranslation);


/***/ }),

/***/ "./src/components/tasks/eng-to-ru/translation.template.js":
/*!****************************************************************!*\
  !*** ./src/components/tasks/eng-to-ru/translation.template.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (`
<p>Translation ENG to RUS</p>
<p>Translate this word:</p>
<p id="expression"></p>
<input id="answer" type="text" autocomplete="off" placeholder="Your answer">
<p class="btn-done" id="btn-done">It's done</p>
`);


/***/ }),

/***/ "./src/components/tasks/listening/img/microphone.svg":
/*!***********************************************************!*\
  !*** ./src/components/tasks/listening/img/microphone.svg ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/components/tasks/listening/img/microphone.svg";

/***/ }),

/***/ "./src/components/tasks/listening/listening.css":
/*!******************************************************!*\
  !*** ./src/components/tasks/listening/listening.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/tasks/listening/listening.js":
/*!*****************************************************!*\
  !*** ./src/components/tasks/listening/listening.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_microphone_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/microphone.svg */ "./src/components/tasks/listening/img/microphone.svg");
/* harmony import */ var _img_microphone_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_img_microphone_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _listening_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listening.css */ "./src/components/tasks/listening/listening.css");
/* harmony import */ var _listening_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_listening_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _listening_template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listening.template */ "./src/components/tasks/listening/listening.template.js");
/* harmony import */ var _voices_voices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./voices/voices */ "./src/components/tasks/listening/voices/voices.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../task */ "./src/components/tasks/task.js");






class Listening extends _task__WEBPACK_IMPORTED_MODULE_4__["default"] {
  constructor(battle) {
    super(battle);
    this.name = 'Listening';
    this.answerEl = undefined;
    this.soundWord = undefined;
  }

  init() {
    const modal = document.getElementById('modal');
    modal.innerHTML = _listening_template__WEBPACK_IMPORTED_MODULE_2__["default"];

    const btnVoice = document.getElementById('btn-voice');
    const answer = document.getElementById('answer');
    const btnDone = document.getElementById('btn-done');
    const voiceIdx = this.getRandomIdx(0, _voices_voices__WEBPACK_IMPORTED_MODULE_3__["default"].length);

    // check browser
    if (navigator.userAgent.indexOf('Chrome') !== -1) {
      this.soundWord = new Howl({
        src: [String(_voices_voices__WEBPACK_IMPORTED_MODULE_3__["default"][voiceIdx].voice)],
        volume: 1,
      });
    } else this.soundWord = new Audio(String(_voices_voices__WEBPACK_IMPORTED_MODULE_3__["default"][voiceIdx].voice));
    this.soundWord.play();
    this.predefinedAnswer = _voices_voices__WEBPACK_IMPORTED_MODULE_3__["default"][voiceIdx].word;
    btnDone.addEventListener('click', () => this.sendResults(this.getValue(answer)));
    btnVoice.addEventListener('click', () => {
      this.soundWord.play();
    });
    this.answerEl = answer;
    answer.focus();
  }

  sendResults(value) {
    this.returnControls();
    this.userAnswer = value;
    this.showMessage(this.predefinedAnswer);
    this.battle.compareDecisions(this.userAnswer, this.predefinedAnswer);
  }

  getValue(elem) {
    return elem.value.trim().toLowerCase();
  }

  checkUserAction(action) {
    if (action === 'enter') {
      this.sendResults(this.getValue(this.answerEl));
    }
    if (action === 'space') {
      this.soundWord.play();
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Listening);


/***/ }),

/***/ "./src/components/tasks/listening/listening.template.js":
/*!**************************************************************!*\
  !*** ./src/components/tasks/listening/listening.template.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (`
<p>Listerning</p>
<p>Listen the voice and write a word in the field.</p>
<div class="btn-voice" id="btn-voice"></div>
<input id="answer" type="text" autocomplete="off" placeholder="Your answer">
<p class="btn-done" id="btn-done">It's done</p>
`);


/***/ }),

/***/ "./src/components/tasks/listening/voices/apple.mp3":
/*!*********************************************************!*\
  !*** ./src/components/tasks/listening/voices/apple.mp3 ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/components/tasks/listening/voices/apple.mp3";

/***/ }),

/***/ "./src/components/tasks/listening/voices/bird.mp3":
/*!********************************************************!*\
  !*** ./src/components/tasks/listening/voices/bird.mp3 ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/components/tasks/listening/voices/bird.mp3";

/***/ }),

/***/ "./src/components/tasks/listening/voices/black.mp3":
/*!*********************************************************!*\
  !*** ./src/components/tasks/listening/voices/black.mp3 ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/components/tasks/listening/voices/black.mp3";

/***/ }),

/***/ "./src/components/tasks/listening/voices/cat.mp3":
/*!*******************************************************!*\
  !*** ./src/components/tasks/listening/voices/cat.mp3 ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/components/tasks/listening/voices/cat.mp3";

/***/ }),

/***/ "./src/components/tasks/listening/voices/country.mp3":
/*!***********************************************************!*\
  !*** ./src/components/tasks/listening/voices/country.mp3 ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/components/tasks/listening/voices/country.mp3";

/***/ }),

/***/ "./src/components/tasks/listening/voices/dog.mp3":
/*!*******************************************************!*\
  !*** ./src/components/tasks/listening/voices/dog.mp3 ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/components/tasks/listening/voices/dog.mp3";

/***/ }),

/***/ "./src/components/tasks/listening/voices/snow.mp3":
/*!********************************************************!*\
  !*** ./src/components/tasks/listening/voices/snow.mp3 ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/components/tasks/listening/voices/snow.mp3";

/***/ }),

/***/ "./src/components/tasks/listening/voices/voices.js":
/*!*********************************************************!*\
  !*** ./src/components/tasks/listening/voices/voices.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bird_mp3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bird.mp3 */ "./src/components/tasks/listening/voices/bird.mp3");
/* harmony import */ var _bird_mp3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_bird_mp3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apple_mp3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apple.mp3 */ "./src/components/tasks/listening/voices/apple.mp3");
/* harmony import */ var _apple_mp3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apple_mp3__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _black_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./black.mp3 */ "./src/components/tasks/listening/voices/black.mp3");
/* harmony import */ var _black_mp3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_black_mp3__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _cat_mp3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cat.mp3 */ "./src/components/tasks/listening/voices/cat.mp3");
/* harmony import */ var _cat_mp3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_cat_mp3__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _country_mp3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./country.mp3 */ "./src/components/tasks/listening/voices/country.mp3");
/* harmony import */ var _country_mp3__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_country_mp3__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _dog_mp3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dog.mp3 */ "./src/components/tasks/listening/voices/dog.mp3");
/* harmony import */ var _dog_mp3__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_dog_mp3__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _snow_mp3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./snow.mp3 */ "./src/components/tasks/listening/voices/snow.mp3");
/* harmony import */ var _snow_mp3__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_snow_mp3__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _white_mp3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./white.mp3 */ "./src/components/tasks/listening/voices/white.mp3");
/* harmony import */ var _white_mp3__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_white_mp3__WEBPACK_IMPORTED_MODULE_7__);









/* harmony default export */ __webpack_exports__["default"] = ([
  { word: 'bird', voice: _bird_mp3__WEBPACK_IMPORTED_MODULE_0___default.a },
  { word: 'apple', voice: _apple_mp3__WEBPACK_IMPORTED_MODULE_1___default.a },
  { word: 'black', voice: _black_mp3__WEBPACK_IMPORTED_MODULE_2___default.a },
  { word: 'cat', voice: _cat_mp3__WEBPACK_IMPORTED_MODULE_3___default.a },
  { word: 'country', voice: _country_mp3__WEBPACK_IMPORTED_MODULE_4___default.a },
  { word: 'dog', voice: _dog_mp3__WEBPACK_IMPORTED_MODULE_5___default.a },
  { word: 'snow', voice: _snow_mp3__WEBPACK_IMPORTED_MODULE_6___default.a },
  { word: 'white', voice: _white_mp3__WEBPACK_IMPORTED_MODULE_7___default.a },
]);


/***/ }),

/***/ "./src/components/tasks/listening/voices/white.mp3":
/*!*********************************************************!*\
  !*** ./src/components/tasks/listening/voices/white.mp3 ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/components/tasks/listening/voices/white.mp3";

/***/ }),

/***/ "./src/components/tasks/math/math.css":
/*!********************************************!*\
  !*** ./src/components/tasks/math/math.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/tasks/math/math.js":
/*!*******************************************!*\
  !*** ./src/components/tasks/math/math.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _math_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math.template */ "./src/components/tasks/math/math.template.js");
/* harmony import */ var _math_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math.css */ "./src/components/tasks/math/math.css");
/* harmony import */ var _math_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_math_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../task */ "./src/components/tasks/task.js");




class SimpleMathTask extends _task__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor(battle) {
    super(battle);
    this.name = 'Math';
    this.answerEl = undefined;
  }

  init() {
    const min = 5;
    const max = 25;
    const firstArg = this.getRandomIdx(min + 10, max + 10);
    const secondArg = this.getRandomIdx(min - 5, max - 5);
    const sign = this.getSign();
    const modal = document.getElementById('modal');
    modal.innerHTML = _math_template__WEBPACK_IMPORTED_MODULE_0__["default"];

    const expression = document.getElementById('expression');
    const answer = document.getElementById('answer');
    const btnDone = document.getElementById('btn-done');

    this.predefinedAnswer = this.getResult(firstArg, secondArg, sign);
    expression.innerText = `${firstArg} ${sign} ${secondArg} = ??`;
    btnDone.addEventListener('click', () => this.sendResults(this.getValue(answer)));
    this.answerEl = answer;
    answer.focus();
  }

  sendResults(value) {
    if (isNaN(value)) this.showMessage('Incorrect value');
    else {
      this.returnControls();
      this.userAnswer = value;
      this.showMessage(this.predefinedAnswer);
      this.battle.compareDecisions(this.userAnswer, this.predefinedAnswer);
    }
  }

  getResult(firstArgument, secondArgument, sign) {
    if (sign === '+') return (firstArgument + secondArgument);
    if (sign === '-') return (firstArgument - secondArgument);
  }

  getSign() {
    const idx = this.getRandomIdx(0, 2);
    if (idx === 0) return '+';
    if (idx === 1) return '-';
  }

  getValue(elem) {
    return parseFloat(elem.value);
  }

  checkUserAction(action) {
    if (action === 'enter') {
      this.sendResults(this.getValue(this.answerEl));
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (SimpleMathTask);


/***/ }),

/***/ "./src/components/tasks/math/math.template.js":
/*!****************************************************!*\
  !*** ./src/components/tasks/math/math.template.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (`
<p>Math</p>
<p>Solve the expression:</p>
<p id="expression"></p>
<input id="answer" type="text" autocomplete="off" placeholder="Your answer">
<p class="btn-done" id="btn-done">It's done</p>
`);


/***/ }),

/***/ "./src/components/tasks/picture/picture.css":
/*!**************************************************!*\
  !*** ./src/components/tasks/picture/picture.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/tasks/picture/picture.js":
/*!*************************************************!*\
  !*** ./src/components/tasks/picture/picture.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _picture_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./picture.template */ "./src/components/tasks/picture/picture.template.js");
/* harmony import */ var _pictures_images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pictures/images */ "./src/components/tasks/picture/pictures/images.js");
/* harmony import */ var _picture_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./picture.css */ "./src/components/tasks/picture/picture.css");
/* harmony import */ var _picture_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_picture_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../task */ "./src/components/tasks/task.js");
/* harmony import */ var _eng_to_ru_dictionary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../eng-to-ru/dictionary */ "./src/components/tasks/eng-to-ru/dictionary.js");






class PicturesTask extends _task__WEBPACK_IMPORTED_MODULE_3__["default"] {
  constructor(battle) {
    super(battle);
    this.name = 'Picture';
    this.answerEl = undefined;
    this.arrAnswers = [];
  }

  init() {
    const modal = document.getElementById('modal');
    modal.innerHTML = _picture_template__WEBPACK_IMPORTED_MODULE_0__["default"];

    const picture = document.getElementById('picture');
    const answer = document.getElementById('answer');
    const btnDone = document.getElementById('btn-done');
    const imageIdx = this.getRandomIdx(0, _pictures_images__WEBPACK_IMPORTED_MODULE_1__["default"].length);

    this.arrAnswers = _pictures_images__WEBPACK_IMPORTED_MODULE_1__["default"][imageIdx].words;
    this.predefinedAnswer = true;
    picture.setAttribute('src', _pictures_images__WEBPACK_IMPORTED_MODULE_1__["default"][imageIdx].src);
    btnDone.addEventListener('click', () => this.sendResults(this.getValue(answer)));
    this.answerEl = answer;
    answer.focus();
  }

  sendResults(value) {
    this.returnControls();
    if (this.arrAnswers.includes(value)) {
      this.userAnswer = true;
    }
    this.showMessage(this.arrAnswers);
    this.battle.compareDecisions(this.userAnswer, this.predefinedAnswer);
  }

  getValue(elem) {
    return elem.value.trim().toLowerCase();
  }

  checkUserAction(action) {
    if (action === 'enter') {
      this.sendResults(this.getValue(this.answerEl));
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (PicturesTask);


/***/ }),

/***/ "./src/components/tasks/picture/picture.template.js":
/*!**********************************************************!*\
  !*** ./src/components/tasks/picture/picture.template.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (`
<p>Captions</p>
<p>What is drawn on the picture?</p>
<img class="picture" id="picture" src="">
<input id="answer" type="text" autocomplete="off" placeholder="Your answer">
<p class="btn-done" id="btn-done">It's done</p>
`);


/***/ }),

/***/ "./src/components/tasks/picture/pictures/car.jpg":
/*!*******************************************************!*\
  !*** ./src/components/tasks/picture/pictures/car.jpg ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/components/tasks/picture/pictures/car.jpg";

/***/ }),

/***/ "./src/components/tasks/picture/pictures/cat.jpg":
/*!*******************************************************!*\
  !*** ./src/components/tasks/picture/pictures/cat.jpg ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/components/tasks/picture/pictures/cat.jpg";

/***/ }),

/***/ "./src/components/tasks/picture/pictures/dog.jpg":
/*!*******************************************************!*\
  !*** ./src/components/tasks/picture/pictures/dog.jpg ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/components/tasks/picture/pictures/dog.jpg";

/***/ }),

/***/ "./src/components/tasks/picture/pictures/fish.jpg":
/*!********************************************************!*\
  !*** ./src/components/tasks/picture/pictures/fish.jpg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/components/tasks/picture/pictures/fish.jpg";

/***/ }),

/***/ "./src/components/tasks/picture/pictures/images.js":
/*!*********************************************************!*\
  !*** ./src/components/tasks/picture/pictures/images.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dog_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dog.jpg */ "./src/components/tasks/picture/pictures/dog.jpg");
/* harmony import */ var _dog_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dog_jpg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _cat_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cat.jpg */ "./src/components/tasks/picture/pictures/cat.jpg");
/* harmony import */ var _cat_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_cat_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _car_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./car.jpg */ "./src/components/tasks/picture/pictures/car.jpg");
/* harmony import */ var _car_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_car_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fish_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fish.jpg */ "./src/components/tasks/picture/pictures/fish.jpg");
/* harmony import */ var _fish_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fish_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _leon_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./leon.jpg */ "./src/components/tasks/picture/pictures/leon.jpg");
/* harmony import */ var _leon_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_leon_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _panda_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./panda.jpg */ "./src/components/tasks/picture/pictures/panda.jpg");
/* harmony import */ var _panda_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_panda_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tiger_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tiger.jpg */ "./src/components/tasks/picture/pictures/tiger.jpg");
/* harmony import */ var _tiger_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_tiger_jpg__WEBPACK_IMPORTED_MODULE_6__);








/* harmony default export */ __webpack_exports__["default"] = ([
  { words: ['dog', 'a dog', 'the dog'], src: _dog_jpg__WEBPACK_IMPORTED_MODULE_0___default.a },
  { words: ['cat', 'a cat', 'the cat'], src: _cat_jpg__WEBPACK_IMPORTED_MODULE_1___default.a },
  { words: ['car', 'a car', 'the car'], src: _car_jpg__WEBPACK_IMPORTED_MODULE_2___default.a },
  { words: ['fish', 'a fish', 'the fish'], src: _fish_jpg__WEBPACK_IMPORTED_MODULE_3___default.a },
  { words: ['leon', 'a leon', 'the leon'], src: _leon_jpg__WEBPACK_IMPORTED_MODULE_4___default.a },
  { words: ['panda', 'a panda', 'the panda'], src: _panda_jpg__WEBPACK_IMPORTED_MODULE_5___default.a },
  { words: ['tiger', 'a tiger', 'the tiger'], src: _tiger_jpg__WEBPACK_IMPORTED_MODULE_6___default.a },
]);


/***/ }),

/***/ "./src/components/tasks/picture/pictures/leon.jpg":
/*!********************************************************!*\
  !*** ./src/components/tasks/picture/pictures/leon.jpg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/components/tasks/picture/pictures/leon.jpg";

/***/ }),

/***/ "./src/components/tasks/picture/pictures/panda.jpg":
/*!*********************************************************!*\
  !*** ./src/components/tasks/picture/pictures/panda.jpg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/components/tasks/picture/pictures/panda.jpg";

/***/ }),

/***/ "./src/components/tasks/picture/pictures/tiger.jpg":
/*!*********************************************************!*\
  !*** ./src/components/tasks/picture/pictures/tiger.jpg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/components/tasks/picture/pictures/tiger.jpg";

/***/ }),

/***/ "./src/components/tasks/plural/plural.js":
/*!***********************************************!*\
  !*** ./src/components/tasks/plural/plural.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _plural_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plural.template */ "./src/components/tasks/plural/plural.template.js");
/* harmony import */ var _words__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./words */ "./src/components/tasks/plural/words.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../task */ "./src/components/tasks/task.js");




class Plural extends _task__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor(battle) {
    super(battle);
    this.name = 'Plural';
    this.answerEl = undefined;
  }

  init() {
    const modal = document.getElementById('modal');
    modal.innerHTML = _plural_template__WEBPACK_IMPORTED_MODULE_0__["default"];

    const expression = document.getElementById('expression');
    const answer = document.getElementById('answer');
    const btnDone = document.getElementById('btn-done');
    const wordIdx = this.getRandomIdx(0, _words__WEBPACK_IMPORTED_MODULE_1__["default"].length);

    this.predefinedAnswer = _words__WEBPACK_IMPORTED_MODULE_1__["default"][wordIdx].answer;
    expression.innerText = _words__WEBPACK_IMPORTED_MODULE_1__["default"][wordIdx].word;
    btnDone.addEventListener('click', () => this.sendResults(this.getValue(answer)));
    this.answerEl = answer;
    answer.focus();
  }

  sendResults(value) {
    this.returnControls();
    this.userAnswer = value;
    this.showMessage(this.predefinedAnswer);
    this.battle.compareDecisions(this.userAnswer, this.predefinedAnswer);
  }

  getValue(elem) {
    return elem.value.trim().toLowerCase();
  }

  checkUserAction(action) {
    if (action === 'enter') {
      this.sendResults(this.getValue(this.answerEl));
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Plural);


/***/ }),

/***/ "./src/components/tasks/plural/plural.template.js":
/*!********************************************************!*\
  !*** ./src/components/tasks/plural/plural.template.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (`
<p>Множестенное число</p>
<p>Напиши слово во множественном числе:</p>
<p id="expression"></p>
<input id="answer" type="text" autocomplete="off" placeholder="Your answer">
<p class="btn-done" id="btn-done">It's done</p>
`);


/***/ }),

/***/ "./src/components/tasks/plural/words.js":
/*!**********************************************!*\
  !*** ./src/components/tasks/plural/words.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([
  { word: 'высокий', answer: 'высокие' },
  { word: 'одинокий', answer: 'одинокие' },
  { word: 'смешной', answer: 'смешные' },
  { word: 'красивая', answer: 'красивые' },
  { word: 'быстрая', answer: 'быстрые' },
  { word: 'успешная', answer: 'успешные' },
  { word: 'умная', answer: 'умные' },
  { word: 'низкий', answer: 'низкие' },
  { word: 'маленький', answer: 'маленькие' },
]);


/***/ }),

/***/ "./src/components/tasks/ru-to-eng/dictionary.js":
/*!******************************************************!*\
  !*** ./src/components/tasks/ru-to-eng/dictionary.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([
  { 'работа': ['work', 'job', 'a work', 'a job', 'the work', 'the job'] },
  { 'кот': ['cat', 'a cat', 'the cat'] },
  { 'один': ['one'] },
  { 'два': ['two'] },
  { 'три': ['three'] },
  { 'четыре': ['four'] },
  { 'пять': ['five'] },
  { 'шесть': ['six'] },
  { 'семь': ['seven'] },
  { 'восемь': ['eight'] },
  { 'девять': ['nine'] },
  { 'ноль': ['zero'] },
  { 'яблоко': ['an apple', 'apple', 'the apple'] },
]);


/***/ }),

/***/ "./src/components/tasks/ru-to-eng/translation.js":
/*!*******************************************************!*\
  !*** ./src/components/tasks/ru-to-eng/translation.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _translation_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./translation.template */ "./src/components/tasks/ru-to-eng/translation.template.js");
/* harmony import */ var _dictionary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dictionary */ "./src/components/tasks/ru-to-eng/dictionary.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../task */ "./src/components/tasks/task.js");




class WordsTranslation extends _task__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor(battle) {
    super(battle);
    this.name = 'RUS-ENG';
    this.word = '';
    this.arrAnswers = [];
    this.answerEl = undefined;
  }

  init() {
    const modal = document.getElementById('modal');
    modal.innerHTML = _translation_template__WEBPACK_IMPORTED_MODULE_0__["default"];

    const expression = document.getElementById('expression');
    const answer = document.getElementById('answer');
    const btnDone = document.getElementById('btn-done');
    const idx = this.getRandomIdx(0, _dictionary__WEBPACK_IMPORTED_MODULE_1__["default"].length);

    this.word = String(Object.keys(_dictionary__WEBPACK_IMPORTED_MODULE_1__["default"][idx]));
    this.arrAnswers = _dictionary__WEBPACK_IMPORTED_MODULE_1__["default"][idx][this.word];
    this.predefinedAnswer = true;
    expression.innerText = this.word;
    answer.focus();
    btnDone.addEventListener('click', () => this.sendResults(this.getValue(answer)));
    this.answerEl = answer;
  }

  sendResults(value) {
    if (this.arrAnswers.includes(value)) {
      this.userAnswer = true;
    }
    this.returnControls();
    this.showMessage(this.arrAnswers);
    this.battle.compareDecisions(this.userAnswer, this.predefinedAnswer);
  }

  getValue(elem) {
    return elem.value.trim().toLowerCase();
  }

  checkUserAction(action) {
    if (action === 'enter') {
      this.sendResults(this.getValue(this.answerEl));
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (WordsTranslation);


/***/ }),

/***/ "./src/components/tasks/ru-to-eng/translation.template.js":
/*!****************************************************************!*\
  !*** ./src/components/tasks/ru-to-eng/translation.template.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (`
<p>Translation RUS TO ENG</p>
<p>Translate this word:</p>
<p id="expression"></p>
<input id="answer" type="text" autocomplete="off" placeholder="Your answer">
<p class="btn-done" id="btn-done">It's done</p>
`);


/***/ }),

/***/ "./src/components/tasks/sequence/sequence.js":
/*!***************************************************!*\
  !*** ./src/components/tasks/sequence/sequence.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sequence_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sequence.template */ "./src/components/tasks/sequence/sequence.template.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../task */ "./src/components/tasks/task.js");



class Sequence extends _task__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(battle) {
    super(battle);
    this.name = 'Sequence';
    this.answerEl = undefined;
  }

  init() {
    const modal = document.getElementById('modal');
    modal.innerHTML = _sequence_template__WEBPACK_IMPORTED_MODULE_0__["default"];

    const expression = document.getElementById('expression');
    const answer = document.getElementById('answer');
    const btnDone = document.getElementById('btn-done');
    const sequence = this.getSequence();

    this.predefinedAnswer = String(sequence[sequence.length - 1]);
    sequence.splice(-1, 1);
    expression.innerText = `${sequence.join(' ')} => `;
    answer.focus();
    btnDone.addEventListener('click', () => this.sendResults(this.getValue(answer)));
    this.answerEl = answer;
  }

  sendResults(value) {
    this.returnControls();
    this.showMessage(this.predefinedAnswer);
    this.userAnswer = value;
    this.battle.compareDecisions(this.userAnswer, this.predefinedAnswer);
  }

  getSequence() {
    const arr = [];
    const min = 0;
    const max = 25;
    const step = this.getRandomIdx(-5, 5);
    const firstNum = this.getRandomIdx(min, max);
    for (let i = 0; i < 4; i++) {
      arr.push(i * step + firstNum);
    }
    return arr;
  }

  getValue(elem) {
    return elem.value.trim().toLowerCase();
  }

  checkUserAction(action) {
    if (action === 'enter') {
      this.sendResults(this.getValue(this.answerEl));
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Sequence);


/***/ }),

/***/ "./src/components/tasks/sequence/sequence.template.js":
/*!************************************************************!*\
  !*** ./src/components/tasks/sequence/sequence.template.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (`
<p>Sequence</p>
<p>Continue the sequence:</p>
<p id="expression"></p>
<input id="answer" type="text" autocomplete="off" placeholder="Your answer">
<p class="btn-done" id="btn-done">It's done</p>
`);


/***/ }),

/***/ "./src/components/tasks/task.js":
/*!**************************************!*\
  !*** ./src/components/tasks/task.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Task {
  constructor(battle) {
    this.battle = battle;
    this.userAnswer = null;
    this.predefinedAnswer = null;
    this.controls = null;
  }

  showMessage(text) {
    const messageElement = document.createElement('div');
    const span = document.createElement('span');
    const showDelay = 50;
    const hideDelay = 2000;
    const removeDelay = 2400;

    messageElement.setAttribute('class', 'message -hide');
    span.innerText = text;
    messageElement.appendChild(span);
    document.body.appendChild(messageElement);
    setTimeout(() => { messageElement.classList.remove('-hide'); }, showDelay);
    setTimeout(() => { messageElement.classList.add('-hide'); }, hideDelay);
    setTimeout(() => { messageElement.remove(); }, removeDelay);
  }

  getRandomIdx(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  returnControls() {
    this.controls.controller = this.battle;
    this.controls = this.battle;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Task);


/***/ }),

/***/ "./src/components/tasks/tasks.js":
/*!***************************************!*\
  !*** ./src/components/tasks/tasks.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _math_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math/math */ "./src/components/tasks/math/math.js");
/* harmony import */ var _eng_to_ru_translation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eng-to-ru/translation */ "./src/components/tasks/eng-to-ru/translation.js");
/* harmony import */ var _ru_to_eng_translation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ru-to-eng/translation */ "./src/components/tasks/ru-to-eng/translation.js");
/* harmony import */ var _listening_listening__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listening/listening */ "./src/components/tasks/listening/listening.js");
/* harmony import */ var _picture_picture__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./picture/picture */ "./src/components/tasks/picture/picture.js");
/* harmony import */ var _plural_plural__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./plural/plural */ "./src/components/tasks/plural/plural.js");
/* harmony import */ var _comparing_comparing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comparing/comparing */ "./src/components/tasks/comparing/comparing.js");
/* harmony import */ var _sequence_sequence__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sequence/sequence */ "./src/components/tasks/sequence/sequence.js");









const tasks = [
  _math_math__WEBPACK_IMPORTED_MODULE_0__["default"], _eng_to_ru_translation__WEBPACK_IMPORTED_MODULE_1__["default"], _ru_to_eng_translation__WEBPACK_IMPORTED_MODULE_2__["default"], _listening_listening__WEBPACK_IMPORTED_MODULE_3__["default"],
  _picture_picture__WEBPACK_IMPORTED_MODULE_4__["default"], _plural_plural__WEBPACK_IMPORTED_MODULE_5__["default"], _comparing_comparing__WEBPACK_IMPORTED_MODULE_6__["default"], _sequence_sequence__WEBPACK_IMPORTED_MODULE_7__["default"],
];

/* harmony default export */ __webpack_exports__["default"] = (tasks);


/***/ }),

/***/ "./src/screens/customisation/customisator.js":
/*!***************************************************!*\
  !*** ./src/screens/customisation/customisator.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/screens/customisation/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_character_characters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/character/characters */ "./src/components/character/characters.js");
/* harmony import */ var _customisator_template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customisator.template */ "./src/screens/customisation/customisator.template.js");
/* harmony import */ var _components_character_person__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/character/person */ "./src/components/character/person.js");
/* harmony import */ var _game_scene_scene__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../game-scene/scene */ "./src/screens/game-scene/scene.js");






class Customisator {
  constructor(controls) {
    this.selectedGender = 'male';
    this.orderArr = [];
    this.focusOn = 0;
    this.previewEl = null;
    this.chosenPerson = 0;
    this.inputEl = null;
    this.controls = controls;
  }

  initScene() {
    document.body.innerHTML = _customisator_template__WEBPACK_IMPORTED_MODULE_2__["default"];

    const container = document.getElementById('customaser');
    const input = document.getElementById('input');
    const btnPickMales = document.getElementById('pick-males');
    const btnPickFemales = document.getElementById('pick-females');
    const btnViewLeft = document.getElementById('view-left');
    const preview = document.getElementById('preview');
    const btnViewRight = document.getElementById('view-right');
    const btnStart = document.getElementById('start');
    const focusDelay = 1000;
    const animationDelay = 100;

    input.addEventListener('click', () => { this.reSelect(0); });
    this.inputEl = input;
    btnPickMales.addEventListener('click', () => {
      this.reSelect(1);
      if (this.selectedGender !== 'male') this.changeGender('male', this.previewEl);
    });
    btnPickFemales.addEventListener('click', () => {
      this.reSelect(2);
      if (this.selectedGender !== 'female') this.changeGender('female', this.previewEl);
    });
    btnViewLeft.addEventListener('click', () => {
      this.reSelect(3);
      this.changeCharacter(-1);
    });
    preview.setAttribute('src', _components_character_characters__WEBPACK_IMPORTED_MODULE_1__["males"][this.chosenPerson]);
    this.previewEl = preview;
    btnViewRight.addEventListener('click', () => {
      this.reSelect(4);
      this.changeCharacter(1);
    });
    btnStart.addEventListener('click', () => {
      this.reSelect(5);
      if (this.inputEl.value.length < 1) this.showMessage('Write your name, please.');
      else this.initNextStage();
    });
    this.orderArr = [input, btnPickMales, btnPickFemales, btnViewLeft, btnViewRight, btnStart];
    setTimeout(() => { container.classList.remove('-hide'); }, animationDelay);
    setTimeout(() => { input.focus(); }, focusDelay);
  }

  // pick character with help keyboard
  reSelect(order, remainder = 0) {
    this.orderArr[this.focusOn].blur();
    this.orderArr[this.focusOn].classList.remove('-selected');
    this.focusOn = order;
    this.focusOn += remainder;
    if (this.focusOn === this.orderArr.length) this.focusOn = 0;
    if (this.focusOn === -1) this.focusOn = this.orderArr.length - 1;
    this.orderArr[this.focusOn].classList.add('-selected');
    this.orderArr[this.focusOn].focus();
  }

  initNextStage() {
    const player = {
      src: _components_character_characters__WEBPACK_IMPORTED_MODULE_1__[`${this.selectedGender}s`][this.chosenPerson],
      name: this.inputEl.value,
      gender: this.selectedGender,
    };
    const person = new _components_character_person__WEBPACK_IMPORTED_MODULE_3__["default"](player);
    const enemy = new _components_character_person__WEBPACK_IMPORTED_MODULE_3__["default"]();
    const delay = 200;
    const scene = new _game_scene_scene__WEBPACK_IMPORTED_MODULE_4__["default"](person, enemy);

    this.controls.controller = scene;
    scene.controls = this.controls;
    this.destroy();
    setTimeout(() => { scene.initScene(); }, delay);
  }

  changeGender(gender, previewEl) {
    if (gender === 'male') {
      this.selectedGender = gender;
      previewEl.setAttribute('src', _components_character_characters__WEBPACK_IMPORTED_MODULE_1__["males"][this.chosenPerson]);
      this.orderArr[this.focusOn].classList.add('-chosen');
      this.orderArr[2].classList.remove('-chosen');
    } else if (gender === 'female') {
      this.selectedGender = 'female';
      previewEl.setAttribute('src', _components_character_characters__WEBPACK_IMPORTED_MODULE_1__["females"][this.chosenPerson]);
      this.orderArr[this.focusOn].classList.add('-chosen');
      this.orderArr[1].classList.remove('-chosen');
    }
    this.chosenPerson = 0;
  }

  showMessage(text) {
    const messageElement = document.createElement('div');
    const span = document.createElement('span');
    const showDelay = 50;
    const hideDelay = 2000;
    const removeDelay = 2400;

    messageElement.setAttribute('class', 'message -hide');
    span.innerText = text;
    messageElement.appendChild(span);
    document.body.appendChild(messageElement);

    setTimeout(() => { messageElement.classList.remove('-hide'); }, showDelay);
    setTimeout(() => { messageElement.classList.add('-hide'); }, hideDelay);
    setTimeout(() => { messageElement.remove(); }, removeDelay);
  }

  changeCharacter(remainder) {
    this.chosenPerson += remainder;
    if (this.chosenPerson > _components_character_characters__WEBPACK_IMPORTED_MODULE_1__[`${this.selectedGender}s`].length - 1) this.chosenPerson = 0;
    else if (this.chosenPerson < 0) this.chosenPerson = _components_character_characters__WEBPACK_IMPORTED_MODULE_1__[`${this.selectedGender}s`].length - 1;
    this.previewEl.setAttribute('src', _components_character_characters__WEBPACK_IMPORTED_MODULE_1__[`${this.selectedGender}s`][this.chosenPerson]);
  }

  checkUserAction(action) {
    if (action === 'arrow-down' || action === 'arrow-right') {
      this.reSelect(this.focusOn, 1);
    }

    if (action === 'arrow-left' || action === 'arrow-up') {
      this.reSelect(this.focusOn, -1);
    }

    if (action === 'enter') {
      if (this.focusOn === 1) {
        if (this.selectedGender !== 'male') {
          this.changeGender('male', this.previewEl);
        }
      }

      if (this.focusOn === 2) {
        if (this.selectedGender !== 'female') {
          this.changeGender('female', this.previewEl);
        }
      }

      // cursor on arrow left
      if (this.focusOn === 3) {
        this.changeCharacter(-1);
      }

      // cursor on arrow right
      if (this.focusOn === 4) {
        this.changeCharacter(1);
      }

      // cursor on btn start
      if (this.focusOn === 5) {
        if (this.inputEl.value.length < 1) this.showMessage('Write your name, please.');
        else this.initNextStage();
      }

      if (this.focusOn === 0) this.checkUserAction('arrow-down');
    }
  }

  destroy() {
    const container = document.getElementById('customaser');
    const delay = 500;

    container.classList.add('-hide');
    setTimeout(() => { container.remove(); }, delay);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Customisator);


/***/ }),

/***/ "./src/screens/customisation/customisator.template.js":
/*!************************************************************!*\
  !*** ./src/screens/customisation/customisator.template.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (`
<section class="customaser -hide" id="customaser">
  <p class="title">Choose your hero.</p>
  <section class="view-section">
    <p class="login">
        Your Name:
        <input type="text" id="input" autocomplete="off" placeholder="What is your name?">
    </p>
    <div class="choosing-gender">
      <div class="gender-btn -chosen" id="pick-males">Male</div>
      <div class="gender-btn" id="pick-females">Famale</div>
    </div>    
    <div class="view-character">
      <div id="view-left">\<</div>
      <img src="" alt="player" id="preview">
      <div id="view-right">\></div>
    </div>
    <div class="btn-start" id="start">Start</div>
  </section>
</section>
`);


/***/ }),

/***/ "./src/screens/customisation/style.css":
/*!*********************************************!*\
  !*** ./src/screens/customisation/style.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/screens/game-scene/img/backgrounds/bg1.jpg":
/*!********************************************************!*\
  !*** ./src/screens/game-scene/img/backgrounds/bg1.jpg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/screens/game-scene/img/backgrounds/bg1.jpg";

/***/ }),

/***/ "./src/screens/game-scene/img/backgrounds/bg2.jpg":
/*!********************************************************!*\
  !*** ./src/screens/game-scene/img/backgrounds/bg2.jpg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/screens/game-scene/img/backgrounds/bg2.jpg";

/***/ }),

/***/ "./src/screens/game-scene/img/backgrounds/bg3.jpg":
/*!********************************************************!*\
  !*** ./src/screens/game-scene/img/backgrounds/bg3.jpg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/screens/game-scene/img/backgrounds/bg3.jpg";

/***/ }),

/***/ "./src/screens/game-scene/img/backgrounds/bg4.jpg":
/*!********************************************************!*\
  !*** ./src/screens/game-scene/img/backgrounds/bg4.jpg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/screens/game-scene/img/backgrounds/bg4.jpg";

/***/ }),

/***/ "./src/screens/game-scene/img/backgrounds/bg5.jpg":
/*!********************************************************!*\
  !*** ./src/screens/game-scene/img/backgrounds/bg5.jpg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/screens/game-scene/img/backgrounds/bg5.jpg";

/***/ }),

/***/ "./src/screens/game-scene/scene.css":
/*!******************************************!*\
  !*** ./src/screens/game-scene/scene.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/screens/game-scene/scene.js":
/*!*****************************************!*\
  !*** ./src/screens/game-scene/scene.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scene_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scene.css */ "./src/screens/game-scene/scene.css");
/* harmony import */ var _scene_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scene_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scene_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scene.template */ "./src/screens/game-scene/scene.template.js");
/* harmony import */ var _img_backgrounds_bg1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/backgrounds/bg1.jpg */ "./src/screens/game-scene/img/backgrounds/bg1.jpg");
/* harmony import */ var _img_backgrounds_bg1_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_backgrounds_bg1_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _img_backgrounds_bg2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/backgrounds/bg2.jpg */ "./src/screens/game-scene/img/backgrounds/bg2.jpg");
/* harmony import */ var _img_backgrounds_bg2_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_backgrounds_bg2_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _img_backgrounds_bg3_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/backgrounds/bg3.jpg */ "./src/screens/game-scene/img/backgrounds/bg3.jpg");
/* harmony import */ var _img_backgrounds_bg3_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_backgrounds_bg3_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _img_backgrounds_bg4_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/backgrounds/bg4.jpg */ "./src/screens/game-scene/img/backgrounds/bg4.jpg");
/* harmony import */ var _img_backgrounds_bg4_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_img_backgrounds_bg4_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _img_backgrounds_bg5_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/backgrounds/bg5.jpg */ "./src/screens/game-scene/img/backgrounds/bg5.jpg");
/* harmony import */ var _img_backgrounds_bg5_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_img_backgrounds_bg5_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_battle_battle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/battle/battle */ "./src/components/battle/battle.js");









const backgrounds = [_img_backgrounds_bg1_jpg__WEBPACK_IMPORTED_MODULE_2___default.a, _img_backgrounds_bg2_jpg__WEBPACK_IMPORTED_MODULE_3___default.a, _img_backgrounds_bg3_jpg__WEBPACK_IMPORTED_MODULE_4___default.a, _img_backgrounds_bg4_jpg__WEBPACK_IMPORTED_MODULE_5___default.a, _img_backgrounds_bg5_jpg__WEBPACK_IMPORTED_MODULE_6___default.a];

class Scene {
  constructor(player, enemy) {
    this.player = player;
    this.enemy = enemy;
    this.controls = undefined;
  }

  initScene() {
    document.body.innerHTML = _scene_template__WEBPACK_IMPORTED_MODULE_1__["default"];

    const container = document.getElementById('playground');
    const background = document.getElementById('background');
    const player = this.addPlayer(this.player);
    const enemy = this.addEnemy(this.enemy);
    const removeDelay = 500;
    const showDelay = 2000;
    const movingDelay = 2500;
    const battle = new _components_battle_battle__WEBPACK_IMPORTED_MODULE_7__["default"](this.player, this.enemy);

    this.controls.controller = battle;
    battle.controls = this.controls;
    battle.initBattle();
    background.setAttribute('src', backgrounds[this.player.getRandomInt(0, backgrounds.length)]);
    this.addNames(this.player.name, this.enemy.name);
    this.addScore(this.player.score);

    setTimeout(() => { container.classList.remove('-hide'); }, removeDelay);
    setTimeout(() => { player.classList.remove('-hide'); }, showDelay);
    setTimeout(() => { enemy.classList.remove('-hide'); }, showDelay);
    setTimeout(() => {
      enemy.classList.add('-moving');
      player.classList.add('-moving');
    }, movingDelay);
  }

  addScore(score) {
    const scoreContainer = document.getElementById('score-value');
    scoreContainer.innerText = score;
  }

  addNames(playerName, enemyName) {
    const playerNameContainer = document.getElementById('player-name');
    const enemyNameContainer = document.getElementById('enemy-name');
    playerNameContainer.innerText = playerName;
    enemyNameContainer.innerText = enemyName;
  }

  addPlayer(entity) {
    const container = document.getElementById('player');
    const view = document.createElement('img');

    view.setAttribute('src', entity.body);
    view.setAttribute('class', 'player-body');
    container.classList.add('-hide');
    container.appendChild(view);

    return container;
  }

  addEnemy(entity) {
    const container = document.getElementById('enemy');
    const head = document.createElement('img');
    const body = document.createElement('img');
    const legs = document.createElement('img');

    head.setAttribute('src', entity.head);
    head.setAttribute('class', 'head');
    body.setAttribute('src', entity.body);
    body.setAttribute('class', 'body');
    legs.setAttribute('src', entity.legs);
    legs.setAttribute('class', 'legs');
    container.classList.add('-hide');
    container.appendChild(head);
    container.appendChild(body);
    container.appendChild(legs);

    return container;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Scene);


/***/ }),

/***/ "./src/screens/game-scene/scene.template.js":
/*!**************************************************!*\
  !*** ./src/screens/game-scene/scene.template.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (`
<section class="playground -hide" id="playground">
    <img src="" alt="" class="background" id="background">
    <section class="stats">
        <div class="name-and-hpbar">
            <p class="name" id="player-name"></p>
            <div class="hpbar">
                <div class="hp" id="player-hp"></div>
            </div>
        </div>
        <div class="score">
            <span class="text">Score</span>
            <span class="value" id="score-value"></span>
        </div>
        <div class="name-and-hpbar">
            <p class="name" id="enemy-name"></p>
            <div class="hpbar">
                <div class="hp" id="enemy-hp"></div>
            </div>
        </div>
    </section> 
    <section class="battleground">
        <div class="character" id="player"></div>
        <div class="spell-space" id="spell-space"></div>
        <div class="character" id="enemy"></div>
    </section>   
</section>
`);


/***/ }),

/***/ "./src/screens/score/img/like.svg":
/*!****************************************!*\
  !*** ./src/screens/score/img/like.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/screens/score/img/like.svg";

/***/ }),

/***/ "./src/screens/score/score.css":
/*!*************************************!*\
  !*** ./src/screens/score/score.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/screens/score/score.js":
/*!************************************!*\
  !*** ./src/screens/score/score.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _customisation_customisator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../customisation/customisator */ "./src/screens/customisation/customisator.js");
/* harmony import */ var _score_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./score.template */ "./src/screens/score/score.template.js");
/* harmony import */ var _score_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./score.css */ "./src/screens/score/score.css");
/* harmony import */ var _score_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_score_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _img_like_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/like.svg */ "./src/screens/score/img/like.svg");
/* harmony import */ var _img_like_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_like_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_loading_loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/loading/loading */ "./src/components/loading/loading.js");






class Score {
  constructor() {
    this.controls = null;
  }

  init() {
    const container = document.createElement('div');
    container.setAttribute('class', 'score-component -hide');
    container.innerHTML = _score_template__WEBPACK_IMPORTED_MODULE_1__["default"];
    document.body.appendChild(container);

    const btnNewGame = document.getElementById('btn-new-game');
    const delay = 100;

    btnNewGame.addEventListener('click', () => { this.startNewGame(); });
    if (!this.isStorageExist()) this.addStorage();
    this.padScoreList();

    setTimeout(() => { container.classList.remove('-hide'); }, delay);
  }

  getStorage() {
    return JSON.parse(localStorage.getItem('rssGame'));
  }

  padScoreList() {
    const scoreTable = document.getElementById('score-table');
    const scorePlayers = this.getStorage();
    const maxResult = 5;

    for (let i = 0, leni = scorePlayers.length; i < leni; i++) {
      for (let j = 0, lenj = scorePlayers.length - 1; j < lenj; j++) {
        if (scorePlayers[j].score < scorePlayers[j + 1].score) {
          const max = scorePlayers[j];
          scorePlayers[j] = scorePlayers[j + 1];
          scorePlayers[j + 1] = max;
        }
      }
    }

    for (let i = 0, len = scorePlayers.length; (i < len) && (i < maxResult); i++) {
      const li = document.createElement('li');
      li.innerHTML = `<span>${scorePlayers[i].name}</span><span>${scorePlayers[i].score}</span>`;
      scoreTable.appendChild(li);
    }
  }

  startNewGame() {
    const customiser = new _customisation_customisator__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.controls.controller = customiser;
    customiser.controls = this.controls;
    customiser.initScene();
  }

  removeStorage() {
    localStorage.removeItem('rssGame');
  }

  addStorage() {
    const arr = JSON.stringify([]);
    localStorage.setItem('rssGame', arr);
  }

  isStorageExist() {
    const obj = this.getStorage();
    return obj !== null;
  }

  writeRecord(name, score) {
    let storageArr = this.getStorage();
    if (storageArr) {
      storageArr.push({ name, score });
      localStorage.setItem('rssGame', JSON.stringify(storageArr));
    } else {
      this.addStorage();
      storageArr = this.getStorage();
      storageArr.push({ name, score });
      localStorage.setItem('rssGame', JSON.stringify(storageArr));
    }
  }

  checkUserAction(action) {
    if (action === 'enter') this.startNewGame();
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Score);


/***/ }),

/***/ "./src/screens/score/score.template.js":
/*!*********************************************!*\
  !*** ./src/screens/score/score.template.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (`
<p class="title">Score top 5</p>
<ol class="score-table" id="score-table"></ol>
<div class="btn-new-game" id="btn-new-game">Start new game</div>
`);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=main.js.map