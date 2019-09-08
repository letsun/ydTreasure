$(function () {
    
    // 点击提交
    $('#submit-btn').on('click',function () {
        var name = $('#name').val();
        var mobile = $('#mobile').val();
        var address = $('#address').val();
        var reg = /^1[0-9]{10}$/;

        if ($.trim(name) == '') {
            common.alert({
                mask: true,
                content: '姓名不能为空',
            })

            return;
        }

        if (!reg.test()) {
            common.alert({
                mask: true,
                content: '手机号不能为空',
            })

            return;
        }

        if ($.trim(address) == '') {
            common.alert({
                mask: true,
                content: '地址不能为空',
            })

            return;
        }
    })
});