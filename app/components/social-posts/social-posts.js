"use strict";

const socialPosts = {
    template: `
    <button>New Post</button>
    <post-form></post-form>
    <post ng-repeat="item in $ctrl.post"></post>
    `,
    controller: [function() {

    }]
}

angular
.module("App")
.component("socialPosts", socialPosts);