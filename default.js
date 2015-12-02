(function () {
   var remote = require('remote');
   var BrowserWindow = remote.require('browser-window');

   function init() {
      console.log(BrowserWindow);
      console.log(__dirname);

      document.getElementById("js-new-message").addEventListener("click", function (e) {
        var composeWindow = new BrowserWindow({width: 800, height: 600});
        composeWindow.loadURL('file://' + __dirname + '/compose.html');
        composeWindow.show();
      });
   };

   document.onreadystatechange = function () {
     if (document.readyState == "complete") {
          init();
     }
   };
})();
