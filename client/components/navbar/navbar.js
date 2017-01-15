'use strict';

import './navbar.scss';

const NavbarComponent = {
   template: require('./navbar.html')
};

import angular from 'angular';

export default angular
   .module('app.navbar', [])
   .component('navbar', NavbarComponent)
   .name;
