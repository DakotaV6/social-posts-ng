"use strict";

const postForm = {
    template: `
    <form ng-submit="$ctrl.onSubmit({newPost: $ctrl.post});" class="border">
    <label for="post-title">Title</label>
    <input type="text" name="post-title" ng-model="$ctrl.post.subject" placeholder="Post title" class="border">
    <label for="post-body">Post Content</label>
    <textarea name="post-body" ng-model="$ctrl.post.body" class="border"></textarea>
    <button id="add-btn" class="border">Add Post</button>
    `,
    bindings: {
        onSubmit: `&`
    }
}

angular
.module("App")
.component("postForm", postForm);