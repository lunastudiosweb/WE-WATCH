// WE WATCH - js/supabase-client.js
//
// Creates ONE shared Supabase connection called "sb".
// Every other JavaScript file will use "sb" to talk to the database and to login.
// It needs the Supabase library and js/config.js to be loaded before it.

var sb = null;

(function () {
  var configured =
    typeof WEWATCH_CONFIG !== "undefined" &&
    WEWATCH_CONFIG.SUPABASE_URL.indexOf("PASTE_") !== 0 &&
    WEWATCH_CONFIG.SUPABASE_KEY.indexOf("PASTE_") !== 0;

  if (configured && window.supabase) {
    sb = window.supabase.createClient(
      WEWATCH_CONFIG.SUPABASE_URL,
      WEWATCH_CONFIG.SUPABASE_KEY
    );
  }
})();
