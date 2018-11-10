"use strict";

const socialPosts = {
    template: `
    <button id="new-btn" class="border">New Post</button>
    <post-form></post-form>
    <section class="post-container border">
    <post post="$ctrl.post" ng-repeat="item in $ctrl.post""></post> 
    </section>
    `,
    controller: [function () {
        const vm = this;
        vm.post = [
            {
                subject: "Cat",
                body: "Cats are really stupid."
            },
            {
                subject: "Dog",
                body: "Dogs are really awesome."
            }];
    }]
}

angular
    .module("App")
    .component("socialPosts", socialPosts);