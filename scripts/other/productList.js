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
            html += '<a class="product-item" href="javascript:void(0);">';
            html += '<div class="product-issue">';
            html += '第<span>20190830010</span>期';
            html += '</div>';
            html += '<div class="product-num"><span>100</span>份</div>';
            html += '<div class="product-img">';
            html += '<img src="../images/4_4.png" alt="">';
            html += '</div>';
            html += '<div class="product-img-name">洋县黑米</div>';
            html += '<div class="product-bottom">';
            html += '<div class="person-num">1/10</div>';
            html += '<div class="product-btn">立即参加</div>';
            html += '</div>';
            html += '</a>';
        }

        $('#product-list').append(html);
        scrollWra.finishPullUp();
        scrollWra.refresh();

        if (page == 6) {
            hasNext = false;
        }
    });
})