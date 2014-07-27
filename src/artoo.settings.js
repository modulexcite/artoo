;(function(undefined) {
  'use strict';

  /**
   * artoo settings
   * ===============
   *
   * artoo default settings that user may override.
   */

  // Defaults
  artoo.settings = {

    // Root settings
    autoInit: true,
    autoExec: true,
    chromeExtension: false,
    debug: false,
    env: 'dev',
    eval: null,
    reload: false,
    scriptUrl: null,

    // Methods settings
    cache: {
      delimiter: '%'
    },
    dependencies: [],
    instructions: {
      autoRecord: true
    },
    jquery: {
      version: '2.1.1',
      force: false
    },
    log: {
      beeping: false,
      enabled: true,
      level: 'verbose'
    },
    store: {
      engine: 'local'
    }
  };

  // Setting utility
  artoo.loadSettings = function(ns) {
    artoo.settings = artoo.helpers.extend(ns, artoo.settings);
  };
}).call(this);
