
/// モーダルウィンドウ制御 ///

// ギャラリーサイトモーダルウィンドウ
// モーダルウィンドウ開
ninja.addEventListener('click', function () {
    ninja_modal.classList.toggle('open');
    body0.classList.toggle('open');
});

// モーダルウィンドウ閉
back_button.addEventListener('click', function () {
    ninja_modal.classList.toggle('open');
    body0.classList.toggle('open');
});


// 世界七不思議モーダルウィンドウ
// モーダルウィンドウ開
Seven_Wonders.addEventListener('click', function () {
    Seven_Wonders_modal.classList.toggle('open');
    body0.classList.toggle('open');
});

// モーダルウィンドウ閉
back_button2.addEventListener('click', function () {
    Seven_Wonders_modal.classList.toggle('open');
    body0.classList.toggle('open');
});

