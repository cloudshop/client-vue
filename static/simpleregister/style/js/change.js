// http: //cloud.eyun.online:9080/verify/api/verify/smscode?phone=1
$(document).ready(function() {
    console.log(localStorage.getItem('token'))
});
$('.get').click(function() {
    var tel = $(".tel").val();
    var p1 = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;
    if (p1.test(tel) == false) {
        alert("请输入正确的手机号")
        $(".tel").val() = "";
    } else {
        var countdown = 60;
        settime('.gets');

        function settime(obj) {
            if (countdown == 0) {
                $(obj).attr("disabled", false);
                $(obj).text("获取验证码");
                countdown = 60;
                return;
            } else {
                $(obj).attr("disabled", true);
                $(obj).text(countdown + " s 重新发送");
                countdown--;
            }
            setTimeout(function() {
                settime(obj)
            }, 1000)
        }
        $.ajax({
            url: 'http://app.grjf365.com/api/verify/api/verify/smscode?phone=' + tel,
            type: 'get',
            callback: 'cb',
            success: function(res) {
                alert('验证码发送成功')
            },
            error: function(error) {

                var a = JSON.parse(error.responseText)
                alert(a.title)
                console.log(error)
            }
        })
    }
})

$('.sure').click(function() {
    var tel = $(".tel").val();
    var yzm = $(".yzm").val();
    var psd = $('.psd').val();
    var urltel = window.location.search;
    var tel2 = urltel.substring(13, 24);
    var p1 = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;
    var datas = { login: tel, password: psd, verifyCode: yzm, recommend: tel2 }
    if (psd == '' || yzm == '' || tel == '') {
        alert('请输入完整信息')
    } else {
        if (p1.test(tel) == false) {
            alert('请输入正确手机号')
        } else {
            $.ajax({
                url: 'http://app.grjf365.com/api/uaa/api/register/app',
                type: 'post',
                headers: {
                    'Content-Type': "application/json"
                },
                contentType: 'application/json',
                data: JSON.stringify(datas),
                success: function(res) {
                    console.log(res)
                    alert('注册成功,更多精彩请下载app体验')
                },
                error: function(error) {
                    console.log(error)
                    var b = JSON.parse(error.responseText)
                    alert(b.title)
                }
            })
        }
    }

})