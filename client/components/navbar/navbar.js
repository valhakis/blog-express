'use strict';

import './navbar.scss';

class NavbarDirective {
   constructor() {
      this.template = require('./navbar.html');
   }
   link() {
      var $navbar = $("#navbar");
      var navs = $navbar.find('.nav');

      var clicked = () => {
         $("#navbar-wrap").collapse('hide');
      };

      for (var i=0; i<navs.length; i++) {
         var $nav = $(navs[i]);
         var items = $nav.find('li');
         for (var j=0; j<items.length; j++) {
            var $item = $(items[i]);
            var $link = $item.find('a');
            $link.click(clicked);
         }
      }
   }
}

import angular from 'angular';

export default angular
   .module('app.navbar', [])
   .directive('navbar', () => new NavbarDirective())
   .name;
