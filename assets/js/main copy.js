
/// モーダルウィンドウ制御 ///

// スクロールバーの幅の取得
let body0 = document.body;
let clientWidth = body.clientWidth;
let noScrollBarWidth = clientWidth;
let diff = 0;

// モーダルウィンドウ開
ninja.addEventListener('click', function () {
    // スクロールバーの長さ計算
    clientWidth = body0.clientWidth;
    noScrollBarWidth = body.clientWidth;
    diff = noScrollBarWidth - clientWidth;
    if (diff > 0) {
        body0.style['padding-right'] = diff + 'px';
    }

    ninja_modal.classList.toggle('open');
    ninja_modal.classList.add('open2');
    window.setTimeout(function () {
        ninja_modal.classList.remove('open2');
    }, 300);
    body0.classList.toggle('open');

});

// モーダルウィンドウ閉
back_button.addEventListener('click', function () {
    ninja_modal.classList.toggle('open');
    ninja_modal.classList.add('open2');
    body0.style['padding-right'] = '0px';
    window.setTimeout(function () {
        ninja_modal.classList.remove('open2');
        body0.classList.toggle('open');
    }, 300);
});

