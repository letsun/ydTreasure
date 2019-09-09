$(function () {

    // 是否有下一页;
    var hasNext = true;
    var page = 1;
    var scrollWra = new BScroll('#content', {
        scrollbar: {
            fade: true
        },
        click: true,
        pullUpLoad: {
            threshold: 0
        }
    });

    // 上滑加载
    scrollWra.on('pullingUp', function () {
        if (!hasNext) {
            return;
        }

        page++;
        var html = '';
        for (var i = 0; i < 10; i++) {
            html += '<a class="record-item" href="javascript:void(0);">';
            html += '<div class="record-top">';
            html += '<div class="time">2019/08/30 18:30:00</div>';
            html += '<div class="state ddkj">等待开奖</div>';
            html += '</div>';
            html += '<div class="record-bottom">';
            html += '<div class="child-list">';
            html += '<div class="child-item">';
            html += '<div class="child-key">活动期数</div>';
            html += '<div class="child-val">20190830010</div>';
            html += '</div>';
            html += '<div class="child-item">';
            html += '<div class="child-key">奖品名称</div>';
            html += '<div class="child-val">鹿龟酒</div>';
            html += '</div>';
            html += '<div class="child-item">';
            html += '<div class="child-key">夺宝码号</div>';
            html += '<div class="child-val">222555</div>';
            html += '</div>';
            html += '</div>';
            html += '</div>';
            html += '</a>';
        }

        $('#record-list').append(html);
        scrollWra.finishPullUp();
        scrollWra.refresh();

        if (page == 6) {
            hasNext = false;
        }
    });
    
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