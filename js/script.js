'use strict';
(function () {
    var list = document.querySelector('.courses-list');
    var coursesItem = list.querySelectorAll('.courses-list__item');
    var checkbox = list.querySelectorAll('.courses-list__item-checkbox');
    var message = document.querySelector('.message-success');
    var hiddenBlock  = document.querySelector('.courses .container');
    var counter = 0;
     
    list.onclick = function (evt) {
        var target = evt.target;
         
        if (!target.checked) return;
        target.parentNode.parentNode.classList.add('checked');

        var hideItem =  setTimeout(function() {
            target.parentNode.parentNode.style.visibility = 'hidden';
        }, 1000);

        counter++;

        setTimeout(viewMessage, 3000);
      
    };

    function viewMessage() {
        if(counter === coursesItem.length) {
            hiddenBlock.style.visibility = 'hidden';
            message.classList.add('show-message');
       }
    }

})();