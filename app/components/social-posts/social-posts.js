"use strict";

const socialPosts = {
    template: `
    <button id="new-btn" class="border">New Post</button>
    <post-form on-submit="$ctrl.onSubmit(newPost);"></post-form>
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