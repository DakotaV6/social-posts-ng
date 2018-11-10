"use strict";

const post = {
    template: `
    <p>{{ $ctrl.post.subject }}<p>
    <p>{{ $ctrl.post.body }}<p>
    `,
    bindings: {post: "<"},
    controller: [function() {

    }]
}

angular
.module("App")
.component("post", post);