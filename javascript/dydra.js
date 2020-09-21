/**
 * Dydra.com Software Development Kit (SDK) for JavaScript.
 *
 * This is free and unencumbered software released into the public domain.
 *
 * @see http://docs.dydra.com/sdk/javascript
 */

var Dydra = (function($) {
  /**
   * Constructs a Dydra client session.
   *
   * @param {Object} config
   */
  var Session = function(config) {
    if (config === undefined) {
      config = {};
    }

    this.baseURL = "http://" + (config.host || DYDRA_URI) + "/";     // original URI: dydra.com

    /**
     * Returns a SPARQL client for a repository.
     */
    this.open = function(repositoryName, options) {
      return new Repository(this, repositoryName,
        $.extend({}, config, options));
    };

    /**
     * Executes a SPARQL query on a repository.
     *
     * @param {String} repositoryName
     * @param {String} queryText
     * @param {Object} options
     */
    this.query = function(repositoryName, queryText, options) {
      this.open(repositoryName, options).query(queryText, options);
    };
  };

  /**
   * Constructs a Dydra repository reference.
   *
   * @param [Session} session
   * @param {String} name
   * @param {Object} config
   */
  var Repository = function(session, name, config) {
    if (config === undefined) {
      config = {};
    }

    var getEndpointURL = function(suffix) {
      var url = session.baseURL + name + "/" + suffix;
      if (config.token) {
        url += '?auth_token=' + config.token;
      }
      return url;
    };

    this.session = session;
    this.name = name;

    /* global SPARQL */
    this.sparql = new SPARQL.Client(getEndpointURL("sparql"));
    this.store  = new SPARQL.Store(getEndpointURL("service"));

    this.query = function(queryText, options) {
      this.sparql.query(queryText, options);
    };

    this.update = function(queryText, options) {
      this.sparql.update(queryText, options);
    };
  };

  /**
   * Constructs a Dydra view reference.
   *
   * @param [Session} session
   * @param {String} name
   * @param {Object} config
   */
  var View = function(session, name, config) {
    if (config === undefined) {
      config = {};
    }

    // TODO
  };

  return {
    Session: Session,
    Repository: Repository,
    View: View
  };
})(jQuery);

if (typeof exports !== 'undefined') {
  module.exports = Dydra;
}
else {
  window.Dydra = Dydra;
}
