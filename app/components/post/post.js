"use strict";

const post = {
    template: `
    <section class="post">
    <p class="post-subject">{{ $ctrl.item.subject }}<p>
    <p>{{ $ctrl.item.body }}<p>
    </section>
    `,
    bindings: {post: "<", item: "<"}
}

angular
.module("App")
.component("post", post);