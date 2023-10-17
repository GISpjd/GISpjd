// const x = document.getElementById("demo");

function getLocation() {
    const x = document.getElementById("demo");
    try {
        window.navigator.geolocation.getCurrentPosition(showPosition);
    } catch (err) {
        x.innerHTML = err;
    }
}

function showPosition(position) {
    const x = document.getElementById("demo");
    x.innerHTML =
        "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
}

// const links = document.querySelectorAll('.link');
// // 获取内容元素
// const content = document.querySelector('#content');

// // 添加点击事件处理程序
// links.forEach(link => {
//     link.addEventListener('click', (event) => {
//         // 阻止默认行为
//         event.preventDefault();

//         // 发送 AJAX 请求获取页面内容
//         const url = link.getAttribute('href');
//         const xhr = new XMLHttpRequest();
//         xhr.open('GET', url, true);
//         xhr.onreadystatechange = function () {
//             if (xhr.readyState === 4 && xhr.status === 200) {
//                 // 更新内容
//                 content.innerHTML = xhr.responseText;
//             }
//         }
//         xhr.send();
//     });
// });