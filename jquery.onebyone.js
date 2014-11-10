(function( $ ){
  $.fn.onebyone = function(delay, repeat, delayAfterRepeat){
    return this.each( function(){
      /* Initialize unspecified parameters */
      if(!delay) delay = 150;
      if(!delayAfterRepeat) delayAfterRepeat = 3000;
      /* Initialize local variables */
      var text = $.trim( $(this).html() ),
          position = -1,
          self = this;
      /* This function keeps adding more char to container */
      var showText = function() {
        if(position == -1) {
          $(self).html('');
        } else if(position == text.length) {
          position = -1;
          if(repeat) setTimeout(showText, delayAfterRepeat);
          return;
        } else {
          $(self).append(text[position]);
        }
        position++;
        setTimeout(showText, delay);
      }
      /* Start the process */
      $(this).html('').show();
      setTimeout(showText, delay);
    });
  }
}(jQuery));
