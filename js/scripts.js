﻿$(document).ready(function() {
    var t = $(".nav-item");
    function a(a) {
        $(t).each(function(t, a) {
            $(a).hasClass("active") && $(a).removeClass("active")
        }),
        a && $(a).parent().addClass("active")
    }
    a(),
    (new WOW).init();
    var e = $("#aboutmecard")
      , o = $("#aboutme")
      , i = $(o).height();
    $(e).height();
    new WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: i,
        mobile: !0,
        live: !0
    }).init(),
    $(e).css({
        visibility: "hidden",
        "animation-name": "none"
    });
    $("#infosyslogo"),
    new WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: !0,
        live: !0
    }),
    new WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: !0,
        live: !0
    });
    $(document).on("scroll", function() {
        $(document).scrollTop() < $("#aboutme").offset().top && a(),
        $(document).scrollTop() >= $("#aboutme").offset().top - 1 && $(document).scrollTop() < $("#work").offset().top && a($("#aboutme-navlink")),
        $(document).scrollTop() >= $("#work").offset().top - 1 && $(document).scrollTop() < $("#qualifications").offset().top && a($("#work-navlink")),
        $(document).scrollTop() >= $("#qualifications").offset().top - 1 && $(document).scrollTop() < $("#project").offset().top && a($("#qualification-navlink")),
        $(document).scrollTop() >= $("#project").offset().top - 1 && a()
    }, 250),
    $("#contactme-link").click(function() {
        a(this),
        $("html,body").animate({
            scrollTop: $("#contactme").offset().top
        }, 1e3)
    }),
    $("#aboutme-navlink").click(function() {
        a(this),
        $("html,body").animate({
            scrollTop: $("#aboutme").offset().top
        }, 1e3)
    }),
    $("#work-navlink").click(function() {
        a(this),
        $("html,body").animate({
            scrollTop: $("#work").offset().top
        }, 1e3)
    }),
    $("#qualification-navlink").click(function() {
        a(this),
        $("html,body").animate({
            scrollTop: $("#qualifications").offset().top
        }, 1e3)
    }),
    $("#myNameLogo").click(function() {
        a(this),
        $("html,body").animate({
            scrollTop: $("#sectionwelcome").offset().top
        }, 1e3)
    }),
    $("#send").click(function(t) {
        return t.preventDefault(),
        function() {
            var t = $("#form-contact-name")
              , a = $("#form-contact-subject")
              , e = $("#form-contact-message")
              , o = $("#form-contact-email")
              , i = grecaptcha.getResponse();
            if (!$(t).val())
                return !1;
            if (!$(a).val())
                return !1;
            if (!$(o).val())
                return !1;
            if (!$(e).val())
                return !1;
            if (!i)
                return !1;
            document.getElementById("status").innerHTML = "Sending...",
            formData = {
                name: $(t).val(),
                email: $(o).val(),
                subject: $(a).val(),
                message: $(e).val(),
                captcha: i
            },
            $.ajax({
                url: "mail.php",
                type: "POST",
                data: formData,
                success: function(t, a, e) {
                    $("#modalPush").modal("show"),
                    $("#status").text(""),
                    t.code && $("#contact-form").closest("form").find("input, textarea").val(""),
                    $("#modalpush-para").text(t.message)
                },
                error: function(t, a, e) {
                    document.getElementById("status").innerHTML = "",
                    $("#modalError").modal("show"),
                    $("#modalerror-para").text(t)
                }
            })
        }(),
        !1
    }),
    $("input,textarea").attr("touched", 0),
    $("input,textarea").on("focus", function(t) {
        $(this).attr("touched", 1)
    });
    var n = $("#send");
    $("form").on("keyup", function(t) {
        switch (t.target.id) {
        case "form-contact-name":
            +$("#form-contact-name").attr("touched") && ("" == t.target.value ? $("#" + t.target.id).addClass("is-invalid") : $("#" + t.target.id).removeClass("is-invalid").addClass("is-valid"));
            break;
        case "form-contact-email":
            if (+$("#form-contact-email").attr("touched"))
                if ("" == t.target.value)
                    $("#" + t.target.id).addClass("is-invalid"),
                    $(".invalid-feedback")[1].innerHTML = "Email is required";
                else {
                    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(t.target.value) ? $("#" + t.target.id).removeClass("is-invalid").addClass("is-valid") : ($("#" + t.target.id).addClass("is-invalid"),
                    $(".invalid-feedback")[1].innerHTML = "Email format invalid")
                }
            break;
        case "form-contact-subject":
            +$("#form-contact-subject").attr("touched") && ("" == t.target.value ? $("#" + t.target.id).addClass("is-invalid") : $("#" + t.target.id).removeClass("is-invalid").addClass("is-valid"));
            break;
        case "form-contact-message":
            +$("#form-contact-message").attr("touched") && ("" == t.target.value ? $("#" + t.target.id).addClass("is-invalid") : $("#" + t.target.id).removeClass("is-invalid").addClass("is-valid"))
        }
        !$("input,textarea").hasClass("is-invalid") && $("input[touched=1]").length && $("textarea[touched=1]").length && grecaptcha.getResponse().length > 0 ? $(n).attr("disabled", !1) : $(n).attr("disabled", !0)
    }),
    $(n).attr("disabled", !0),
    $("#exampleModalLong").modal("handleUpdate")
}),
function(t) {
    var a, e = t.fn.on;
    t.fn.on = function() {
        var t = Array.apply(null, arguments)
          , o = t[t.length - 1];
        if (isNaN(o) || 1 === o && t.pop())
            return e.apply(this, t);
        var i = t.pop()
          , n = t.pop();
        return t.push(function() {
            var t = this
              , e = arguments;
            clearTimeout(a),
            a = setTimeout(function() {
                n.apply(t, e)
            }, i)
        }),
        e.apply(this, t)
    }
}(this.jQuery || this.Zepto);
var send = $("#send")
  , onloadCallback = function() {
    grecaptcha.render("recaptcha", {
        sitekey: "6LfTCUsUAAAAAHSJpSntpIoq3fmfHe7iJxX-rIca",
        callback: correctCaptcha,
	theme: "dark" 

    })
};
function correctCaptcha(t) {
    !$("input,textarea").hasClass("is-invalid") && $("input[touched=1],textarea[touched=1]").length ? $(send).attr("disabled", !1) : $(send).attr("disabled", !0)
}
