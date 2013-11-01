$(function() {
    var FeedbackApp = Backbone.View.extend({
        el: $("h2"),

        events: {
            "click": "openFeedbackDialog"
        },

        openFeedbackDialog: function() {
            var source   = $("#feedback-template").html();
            var template = Handlebars.compile(source);

            $("#feedback-dialog").html(template({
                window_location_href: window.location.href,
                document_location: $(this)[0].el.outerText
            }));

            var formView = new FormView();

            $("#feedback-dialog").dialog({
                title: "Feedback",
                draggable: false
            });
        }
    });

    var FormView = Backbone.View.extend({
        el : '#feedback-form',

        events: {
            "submit": "submit",
        },

        initialize: function() {
            console.log("initialize");
        },

        submit: function(e) {
            e.preventDefault();
            console.log("submit");
        }
    });

    var feedbackApp = new FeedbackApp;
});
