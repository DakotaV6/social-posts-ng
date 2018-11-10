"use strict";

const socialPosts = {
    template: `
    <button id="new-btn" class="border" ng-click="showForm = true; hideAddBtn = true" ng-hide="hideAddBtn">New Post</button>
    <post-form on-submit="$ctrl.onSubmit(newPost);" ng-show="showForm" ng-submit="showForm = false; hideAddBtn = false"></post-form>
    <section class="post-container border">
    <post post="$ctrl.post" ng-repeat="item in $ctrl.post" item="item"></post> 
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
        vm.onSubmit = (newPost) => {
            vm.post.unshift(angular.copy(newPost));
        }
    }]
}

angular
    .module("App")
    .component("socialPosts", socialPosts);