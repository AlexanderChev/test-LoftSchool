(function() {
    var checkbox = document.querySelectorAll('input[type="checkbox"]');
    var box = document.querySelectorAll('.box');
    var blockHidden = 0;
    var ctr = document.querySelector('.container');
     ctr.onclick = function (evt) {
       var target = evt.target;
       if (!target.checked) return;
       target.parentNode.style.backgroundColor = 'green';
        blockHidden++;
        if(blockHidden === box.length) {
            setTimeout(alert('complete'), 3000);
        }

       var delay =  setTimeout(function() {
          target.parentNode.style.visibility = "hidden";           
       }, 1000); 
        
       
     };

})();