(function() {
    'use strict';
    setTimeout(function(){
        document.querySelector('[aria-label="VERIFICATION"]').parentNode.removeChild(document.querySelector('[aria-label="VERIFICATION"]'));
        document.querySelector("#app-mount > div:first-of-type").children[0].children[1].children[0].style = "";
    }, 5000);
})();
