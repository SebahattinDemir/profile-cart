let likesEl = Number(localStorage.getItem("likes")) || 0;
let followerEl = Number(localStorage.getItem("follower")) || 0;

document.querySelector(".likes").innerText = likesEl;
document.querySelector(".follow").innerText = followerEl;

function like() {
    likesEl++;
    localStorage.setItem("likes", likesEl);
    document.querySelector(".likes").innerText = likesEl;
}

function follow() {
    followerEl++;
    localStorage.setItem("follower", followerEl);
    document.querySelector(".follow").innerText = followerEl;
}

