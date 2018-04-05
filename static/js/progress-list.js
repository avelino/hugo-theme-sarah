'use strict';

//Animate progress-bar
$('.js-progress-list').waypoint({
    handler: function () {
        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr('aria-valuenow') + '%'
            }, 200);
        });
        this.destroy();
    }, offset: '50%'
});
