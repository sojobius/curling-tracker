'use strict';
const angular = require('angular');
import {UtilService} from './util.service';

export default angular.module('curljsApp.util', [])
  .factory('Util', UtilService)
  .name;
