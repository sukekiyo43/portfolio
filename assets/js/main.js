
// モーダルウィンドウの開閉を制御する関数
function toggleModal(openButton, modal, closeButton) {
    openButton.addEventListener('click', function () {
        modal.classList.toggle('open-m');
        body.classList.toggle('open-m');
        body.style.animation = 'none';
    });

    closeButton.addEventListener('click', function () {
        modal.classList.toggle('open-m');
        body.classList.toggle('open-m');
    });
}

// 各モーダルウィンドウと対応するボタンに対して関数を適用
toggleModal(syouni, syouni_modal, back_button);
toggleModal(Seven_Wonders, Seven_Wonders_modal, back_button2);
toggleModal(yamato, yamato_modal, back_button3);
toggleModal(lips, lips_modal, back_button4);
toggleModal(ryokan, ryokan_modal, back_button5);
toggleModal(portfolio, portfolio_modal, back_button6);


// フッターコピーライトの年を取得し挿入
let date = new Date();
let year = date.getFullYear();
let element = document.querySelector(".year");
element.innerHTML = year;


// フォーム送信後、googleフォーム送信後の画面への遷移を防ぎ、サンキューおよびエラーメッセージ表示
document.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById('mG61Hd');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        let formData = new FormData(form);
        let xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSdxuZgL8P2hEThORq81klqd4m4D8TUWG6GVKEYQ5d20Cq9AmA/formResponse', true);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {  // リクエストが完了した
                let inputs = document.querySelectorAll('input');
                let textarea = document.querySelector('textarea');

                if (xhr.status === 0) {  // ステータスコードが0を返した
                    button.classList.add('sent');  // 成功時にクラスを付与
                    // form内のinputにdisabled属性を付与し入力をできなくする
                    inputs.forEach(input => input.setAttribute('disabled', ''));
                    textarea.setAttribute('disabled', '');
                } else {
                    button.classList.add('not-sent');  // 失敗時にエラーメッセージのクラスを付与
                }
            }
        };

        xhr.send(formData);
        form.reset();  // フォームをリセット
    });
});


// // お問い合わせフォームのバリテーション。必須項目を埋めるとボタンが送信可能になる
const button = document.querySelector('.form-button');
const form = document.getElementById('mG61Hd');
const email = document.querySelector('#mail'); // メールアドレス入力フィールドのIDを適切に設定してください

form.addEventListener("input", update)
form.addEventListener("change", update)

function update() {
    const isRequired = form.checkValidity()
    const isValidEmail = validateEmail(email.value)

    if (isRequired && isValidEmail) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


// Xのアイコンをホバーで発火、CSSアニメ用のクラス付与
const icon = document.querySelector('.icon-img');
icon.addEventListener('mouseenter', e => {
    e.target.classList.add('poyo');
});
icon.addEventListener('mouseup', e => {
    e.target.classList.add('poyo');
});
icon.addEventListener('animationend', e => {
    e.target.classList.remove('poyo');
});


// ハンガーバーメニュー
function toggleMenu() {
    if (window.innerWidth <= 768) {
        document.querySelector('.hamburger').classList.toggle('open');
        body.classList.toggle('open');
        body.style.animation = 'none';
    }
}

document.querySelector('.hamburger').addEventListener('click', toggleMenu);
document.querySelector('.menu').addEventListener('click', toggleMenu);


// ＳＰメニューを開きっぱなしの時に画面をリサイズし、768pxだったらメニューを閉じる
let resizeTimer;
window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
        if (window.innerWidth >= 769) {
            document.querySelector('body').classList.remove('open');
            document.querySelector('.hamburger').classList.remove('open');
        }
    }, 200);
});


// // 画面アクセス・リロード・リサイズ時、画面高さに応じＭＶのサークルの数を増減させる
let circleCountAnimation = 0; // 初期値を0に設定
let lastWindowWidth = window.innerWidth; // 最後に確認したウィンドウの幅を保存

function checkHeightAnimation() {
    let newHeight = window.innerHeight;
    let newWidth = window.innerWidth;
    baseHeightAnimation = newWidth > 768 ? 900 : 700; // 画面の幅が768px以上の場合は基準値を900に設定、それ以外の場合は700に設定
    if (Math.floor(lastWindowWidth / 768) !== Math.floor(newWidth / 768)) {
        // 768pxの閾値を超えてウィンドウの幅が変わった場合、すべての要素に対してスタイルを再適用
        for (let i = 1; i <= 10; i++) {
            let element = document.querySelector(".mv-circle" + i);
            if (element) {
                setWidthAndAnimationForElement(element, i);
            }
        }
    }
    lastWindowWidth = newWidth;
    while (newHeight >= baseHeightAnimation * Math.pow(1.1, circleCountAnimation - 2) && circleCountAnimation < 12) {
        let newDiv;
        if (circleCountAnimation < 3) {
            newDiv = document.querySelector(".mv-circle" + (circleCountAnimation + 1));
        } else {
            newDiv = document.createElement("div");
            newDiv.className = "mv-circle" + (circleCountAnimation + 1);
            document.querySelector(".mv-circle-box").appendChild(newDiv);
        }
        setWidthAndAnimationForElement(newDiv, circleCountAnimation + 1);
        circleCountAnimation++;
    }

    while (newHeight < baseHeightAnimation * Math.pow(1.1, circleCountAnimation - 3) && circleCountAnimation > 3) {
        circleCountAnimation--;
        let oldDiv = document.querySelector(".mv-circle" + (circleCountAnimation + 1));
        oldDiv.style.opacity = 0; // オパシティを0に設定
        setTimeout(function () {
            document.querySelector(".mv-circle-box").removeChild(oldDiv);
        }, 500); // 0.5秒後に要素を削除
    }
}

function setWidthAndAnimationForElement(element, index) {
    // 初期の幅とアニメーション速度を設定
    let width = window.innerWidth > 768 ? 580 : 400; // 画面の幅が768px以下の場合は基準値を500pxに設定、それ以外の場合は600pxに設定
    let duration = 30; // 1番目の要素のアニメーション速度を30sに設定

    // 幅とアニメーション速度を設定
    if (index > 1) {
        width *= Math.pow(1.13, index - 1); // 2番目以降の要素の幅は前の要素の幅の1.13倍
        duration += 5 * (index - 1); // 2番目以降の要素のアニメーション速度は前の要素の速度に5sを加える
    }
    width = Math.round(width); // 幅を整数のピクセル値に四捨五入
    element.style.width = width + 'px'; // 幅をピクセルで設定
    element.style.animationDuration = duration + 's';

    // requestAnimationFrameを使用して、オパシティの変更を次の描画サイクルまで遅らせる
    window.requestAnimationFrame(function () {
        window.requestAnimationFrame(function () {
            element.style.opacity = 1; // オパシティを1に設定
        });
    });
}
// デバウンス関数
function debounce(func, wait) {
    let timeout;
    return function () {
        clearTimeout(timeout);
        timeout = setTimeout(func, wait);
    }
}
// リサイズとリロード時にcheckHeightAnimationを呼び出す
let debouncedCheckHeightAnimation = debounce(checkHeightAnimation, 100);
window.addEventListener('resize', debouncedCheckHeightAnimation);
window.addEventListener('DOMContentLoaded', debouncedCheckHeightAnimation);
// ページの読み込み時にすべての要素に対してスタイルを適用
window.addEventListener('DOMContentLoaded', function () {
    for (let i = 1; i <= 10; i++) {
        let element = document.querySelector(".mv-circle" + i);
        if (element) {
            setWidthAndAnimationForElement(element, i);
        }
    }
});


// 画面リロード時、トップ位置に移動
history.scrollRestoration = 'manual';
window.onload = function () {
    window.scrollTo(0, 0);
};


