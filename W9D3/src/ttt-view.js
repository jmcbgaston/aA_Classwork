class View {
  constructor(game, $el) {
    // Call View's setupBoard method in your constructor and place the new <ul> inside your container $el; check that this is drawing a grid.
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }
  
  bindEvents() {   
    // debugger
    let that = this;
    // when click on li, access Game.playMove(pos)
    // get pos by li data, save into variable
    // on event of click, within cell, add text "X" or "O"
    this.$el.on("click", "li", function(event) {
      // debugger
      // let $li = $(event.target);
      // let pos = $li.data("pos")
      let pos = $(event.target).data("pos")
      that.game.playMove(pos);
      $(event.target).addClass("click");

    })
  }
  // $(".bucket-list").on("click", "li", function(event) {
  //   // debugger
  //   //event.currentTarget === bucket-list;
  //   //event.target === is the li we actually clicked on 
  //   // $(event.target).css("font-size", 65);
  //   $(event.target).toggleClass("complete");
  // })

  makeMove($square) {
    
  }

  setupBoard(n=3) {
    let $ul = $("<ul></ul>");

    for(let i = 0; i < n; i++) { // row
      for(let j = 0; j < n; j++) { // col
        var $li = $("<li></li>");
        $li.data("pos", [i, j]);
        $li.data("type", "click");
        $ul.append($li);
        //add type click
      }
    }
    this.$el.append($ul);
   
    $ul.addClass("board");
  }
}

module.exports = View;


