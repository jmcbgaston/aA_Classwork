const View = require('./ttt-view.js');
const Game = require('../tictactoe_node/game.js');

  $(() => {
    // debugger
    const $el = $('.ttt')
    const ng = new Game();
    const view = new View(ng, $el);
    window.Game = ng;
    window.View = view;
  });
