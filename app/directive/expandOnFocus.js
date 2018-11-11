"use strict";

function expandOnFocus() {
    return {
        restrict: "A",
        link: function ($scope, $element, $attrs) {
            $element.on("focus", () => {
                if ($element[0].tagName === "INPUT") {
                    $element.css("height", "70px");
                }
                if ($element[0].tagName === "TEXTAREA") {
                    $element[0].parentElement.style.height = "400px";
                    $element.css("height", "60%");
                }
            });
            $element.on("blur", () => {
                if ($element[0].tagName === "INPUT") {
                    $element.css("height", "auto");
                }
                if ($element[0].tagName === "TEXTAREA") {
                    $element[0].parentElement.style.height = "300px";
                    $element.css("height", "50%");
                }
            });
        }
    }

}

angular
    .module("App")
    .directive("expandOnFocus", expandOnFocus)