
'use strict';

// Modules
var validator                      = require('validator');
var _s                             = require('underscore.string');
var remove_image_content_directory = require('../functions/remove_image_content_directory.js');

function route_api_search (config, raneto) {
  return function (req, res) {

    // Skip if Search not present
    if (!req.query.search) { return res.json(); }

    var searchQuery    = validator.toString(validator.escape(_s.stripTags(req.query.search))).trim();
    var searchResults  = raneto.doSearch(searchQuery);
    var pageListSearch = remove_image_content_directory(config, raneto.getPages(''));

    // TODO: Move to Raneto Core
    // Loop through Results and Extract Category
    searchResults.forEach(function (result) {
      result.category = null;
      var split = result.slug.split('/');
      if (split.length > 1) {
        result.category = split[0];
      }
    });

    return res.json({
      config        : config,
      search        : searchQuery,
      searchResults : searchResults,
      loggedIn      : (config.authentication ? req.session.loggedIn : false)
   });
  };
}

// Exports
module.exports = route_api_search;
