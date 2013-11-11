$(function() {
    var Comment = Parse.Object.extend("Comment");

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

            var comment = new Comment();
            comment.save({
                // TODO: This should only check the e.target not the whole DOM.
                location_href: $("#feedback-form-location-href").val(),
                document_location: $("#feedback-form-document-location").val(),
                body: $("#feedback-form-comment").val()
            }, {
                success: function(object) {
                    console.log("submitted.");
                }
            });
        }
    });

    var feedbackApp = new FeedbackApp;
});
