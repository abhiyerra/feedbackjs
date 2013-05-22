$(function() {
    var FeedbackApp = Backbone.View.extend({
        el: $("h2"),

        events: {
            "click": "openFeedbackDialog"
        },

        openFeedbackDialog: function() {
            var source   = $("#entry-template").html();
            var template = Handlebars.compile(source);

            $("#feedback-dialog").html(template({
                window_location_href: window.location.href,
                document_location: $(this)[0].el.outerText
            }));

            $("#feedback-dialog").dialog({
                title: "Feedback",
                draggable: false
            });
        }
    });

    var feedbackApp = new FeedbackApp;
});
