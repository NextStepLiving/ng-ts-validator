/**
 * Created by dpavao on 4/28/15.
 */
import angular from 'angular';
import { Core } from './core/core';

export class Main {

    public static run() {
        var core = new Core();

        angular.module('core',[])
            .controller('CoreController', Core);

    }
}