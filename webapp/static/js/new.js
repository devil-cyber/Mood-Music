$(function() {
    var INDEX = 0;
    $("#chat-submit").click(function(e) {
        e.preventDefault();
        var msg = $("#chat-input").val();
        if (msg.trim() == '') {
            return false;
        }
        generate_message(msg, 'user');
        var buttons = [{
                name: 'Existing User',
                value: 'existing'
            },
            {
                name: 'New User',
                value: 'new'
            }
        ];
        var value;

        async function GetMusic(tone) {

            if (tone) {
                const ipAPI = `http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=${tone}&api_key=ea8175be11e1fcbc52732ad6fc26549b&format=json&limit=10`

                let x = await fetch(ipAPI);
                let y = await x.json()
                let data = y['tracks']['track']


                for (x in data) {

                    $('.music-1').append(`<span><li><a href="${data[x].url}">${data[x].name}<a/></li></span>`)
                }
            } else {
                $("#loading").innerText = "Loading...."
            }
        }

        $.ajax({
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ msg }),
            dataType: 'json',
            url: '/data',
            beforeSend: function() {
                value = generate_message_3("Writting....", 'self');
                document.getElementById('chat-input').disabled = true

            },
            success: function(data) {
                // console.log(value)
                let d = document.getElementById(value)
                d.style.display = 'none'
                    // console.log("this is " + data[1]);

                // data__ = data__ + data.text
                // console.log("this is" + data__)
                generate_message_2(data[0], 'self');
                document.getElementById('chat-input').disabled = false
                document.getElementById('emotion').innerText = data[1]
                GetMusic(data[1])
            }
        });




    })

    function generate_message(msg, type) {
        INDEX++;
        var str = ""
        str += "<div id='cm-msg-" + INDEX + "' class=\"chat-msg " + type + "\">";
        str += "          <span class=\"msg-avatar\">";
        str += "            <img src=\"https://cdn2.iconfinder.com/data/icons/avatars-99/62/avatar-370-456322-512.png\">";
        str += "          <\/span>";
        str += "          <div class=\"cm-msg-text\">";
        str += msg;
        str += "          <\/div>";
        str += "        <\/div>";

        $(".chat-logs").append(str);
        $("#cm-msg-" + INDEX).hide().fadeIn(300);
        if (type == 'self') {
            $("#chat-input").val('');
        }
        $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight }, 1000);
    }

    function generate_message_2(msg, type) {
        INDEX++;
        var str = ""
        str += "<div id='cm-msg-" + INDEX + "' class=\"chat-msg " + type + "\">";
        str += "          <span class=\"msg-avatar\">";
        str += "            <img src=\"https://cdn.dribbble.com/users/722835/screenshots/4082720/bot_icon.gif\" > ";
        str += "          <\/span>";
        str += "          <div class=\"cm-msg-text\">";
        str += msg;
        str += "          <\/div>";
        str += "        <\/div>";

        $(".chat-logs").append(str);
        $("#cm-msg-" + INDEX).hide().fadeIn(300);
        if (type == 'self') {
            $("#chat-input").val('');
        }
        $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight }, 1000);
    }

    function generate_message_3(msg, type) {
        INDEX++;
        var str = ""
        str += "<div id='hm-msg-" + INDEX + "' class=\"chat-msg " + type + "\">";
        str += "          <span class=\"msg-avatar\">";
        str += "            <img src=\"https://cdn.dribbble.com/users/722835/screenshots/4082720/bot_icon.gif\" > ";
        str += "          <\/span>";
        str += "          <div class=\"cm-msg-text\">";
        str += msg;
        str += "          <\/div>";
        str += "        <\/div>";

        $(".chat-logs").append(str);
        $("#cm-msg-" + INDEX).hide().fadeIn(300);
        if (type == 'self') {
            $("#chat-input").val('');
        }
        $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight }, 1000);
        return "hm-msg-" + INDEX;
    }


    $(document).delegate(".chat-btn", "click", function() {
        var value = $(this).attr("chat-value");
        var name = $(this).html();
        $("#chat-input").attr("disabled", false);
        generate_message(name, 'self');
    })

    $("#chat-circle").click(function() {
        $("#chat-circle").toggle('scale');
        $(".chat-box").toggle('scale');
    })

    $(".chat-box-toggle").click(function() {
        $("#chat-circle").toggle('scale');
        $(".chat-box").toggle('scale');
    })

})