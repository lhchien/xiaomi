;
(function ($) {
    $.TMSearch = function (o) {
        var defaults = {
            container: '.stuck_container',
            form: '.search-form',
            input: '.search-form_input',
            toggle: '.search-form_toggle',
            liveout: '.search-form_liveout',
            out: '#search-results',
            scope: 1,

            handler: 'bat/SearchHandler.php'
        }

        var options = $.extend({}, defaults, o);

        var $form = $(options.form),
            $input = $(options.input, $form),
            $liveout = $(options.liveout, $form),
            $toggle = $(options.toggle),
            $out = $(options.out);

        // Search toggle
        if ($toggle.length > 0) {
            $toggle.click(function () {
                if ($(window).width() > 280) {
                    $(this).parents(options.container).find(options.form).toggleClass('on').slideToggle();
                }
                else {
                    $(this).parents(options.container).find(options.form).toggleClass('on').css("display", "block");
                }

                if (!$(this).parents(options.container).find(options.toggle).hasClass('active')) {
                    $(this).parents(options.container).find(options.form).find('input').val('').focus();
                }
                if ($('.rd-mobilemenu').hasClass('active')) {
                    $('.rd-mobilemenu').removeClass('active');
                    $('.rd-mobilepanel_toggle').removeClass('active');
                }
                $(this).parents(options.container).find(options.toggle).toggleClass('active');
                return false;
            });

            $(document).click(function (e) {
                if ($(window).width() > 280) {
                    if ($toggle.hasClass('active') && e.target.className.indexOf(options.form.substr(1, options.form.length - 1))) {
                        $toggle.removeClass('active');
                        $form.removeClass('on').slideUp();
                    }
                }
                else {
                    if ($toggle.hasClass('active') && e.target.className.indexOf(options.form.substr(1, options.form.length - 1))) {
                        $toggle.removeClass('active');
                        $form.removeClass('on').slideUp();
                    }
                }
            });
        }

        // Live Search
        if ($('html').hasClass('desktop')) {
            $input.on("keyup", function () {
                $.get(
                    options.handler,
                    {
                        s: $(this).val(),
                        liveSearch: "true",
                        dataType: "html"
                    },
                    onSuccess
                );
                function onSuccess(data) {
                    $liveout.html(data);
                }
            });

            $input.on('focusout', function () {
                setTimeout(function () {
                    $liveout.html('');
                }, 300);
            })
        }

        // Frame Search
        if ($out.length > 0) {
            $out.height(0);
            var s = location.search.replace(/^\?.*s=([^&]+)/, '$1'),
                ifr = $('<iframe width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" allowTransparency="true"></iframe>')

            if ($out.length) {
                ifr.attr({src: options.handler + '?s=' + s}).appendTo($out), $input.val(decodeURI(s));
            }

            window._resize = function (h) {
                $out.height(h)
            }
        }
    }

})(jQuery);

$(document).ready(function () {
    $.TMSearch();
});
