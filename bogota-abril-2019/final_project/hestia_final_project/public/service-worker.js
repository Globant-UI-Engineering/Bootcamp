"use strict";

importScripts('sw-toolbox.js');

self.toolbox.options.cache={
    name: "hestia-cache"
};

self.toolbox.precache(['index.html']);

self.toolbox.router.any('/*', self.toolbox.fastest);

self.toolbox.router.default = self.toolbox.networkfirst;