<template>
    <div id="container">
        <header id="header">
            <div class="logo"><img src="@/assets/images/logo.jpg" alt=""></div>
            <div class="navbar-container">
                <ul class="nav">
                    <li><a href="#">Browse</a></li>
                    <li><a href="#">Hosting</a></li>
                    <li><a href="#">Inbox</a></li>
                    <li><a href="#">Help</a>
                        <ul class="sub-menu">
                            <li><a href="">noi dung dai</a></li>
                            <li><a href="">noi dung dai</a></li>
                            <li><a href="">noi dung dai</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="user-container">
                <img src="@/assets/images/hinh.jpg" alt="">
                <ul class="user">
                    <li><a href="#">Hi,NhuQuynh</a>
                        <ul class="down">
                            
                        </ul>
                    </li>
                </ul>
            </div>
        </header>
        <section id="row">
            <div class="left">
                <div class="top"><img src="@/assets/images/4.jpg" alt=""></div>
                <div class="bottom">
                    <div class="anh_1">
                        <img src="@/assets/images/0001.jpg" alt="">
                    </div>
                    <div class="anh_2">
                        <img src="@/assets/images/0002.jpg" alt="">
                    </div>
                </div>
            </div>
            <div class="right">
                <p>Hosted by</p>
                <h4>{{person.name}}</h4>
                <div class="icons">
                    <a href=""><Icon icon="line-md:phone"></Icon>{{ person.phone }}</a>
                    <a href=""><Icon icon="line-md:email-twotone-alt"></Icon>{{ person.email }}</a>
                    <a href=""><Icon icon="line-md:my-location"></Icon>{{ person.location }}</a>
                    <a href=""><Icon icon="line-md:facebook"></Icon>{{ person.facebook }}</a>
                </div>
                <div class="intro-container">
                    <div class="intro_1">
                        <div class="picture">
                            <img src="@/assets/images/001.jpg" alt="">
                        </div>
                        <div class="content">
                            <h6>My introduction video</h6>
                            <div class="nd">10 min 20 sec</div>
                        </div>
                    </div>
                    <div class="intro_2">
                        <div class="picture">
                            <img src="@/assets/images/hinh_project.jpg" alt="">
                        </div>
                        <div class="content">
                            <h6>Project image</h6>
                            <div class="nd">10 min 20 sec</div>
                        </div>
                    </div>
                    
                </div>
                <div class="about">
                    <h5>About me</h5>
                    <div class="about_content">Below is information about me</div>
                    <div class="box-container">
                        <div class="box">
                            <img src="@/assets/images/icon_1.png" alt="">
                            <div class="box-content">Cook</div>
                        </div>
                        <div class="box">
                            <img src="@/assets/images/icon_2.png" alt="">
                            <div class="box-content">Do sports</div>
                        </div>
                        <div class="box">
                            <img src="@/assets/images/icon_3.png" alt="">
                            <div class="box-content">Listen to music</div>
                        </div>
                        <div class="box">
                            <img src="@/assets/images/icon_4.png" alt="">
                            <div class="box-content">Take photo</div>
                        </div>
                        <div class="box">
                            <img src="@/assets/images/icon_5.png" alt="">
                            <div class="box-content">Travel</div>
                        </div>
                        <div class="box">
                            <img src="@/assets/images/icon_6.png" alt="">
                            <div class="box-content">Go camping</div>
                        </div>
                        <div class="box">
                            <img src="@/assets/images/icon_7.png" alt="">
                            <div class="box-content">Designer</div>
                        </div>
                        <div class="box">
                            <img src="@/assets/images/icon_8.png" alt="">
                            <div class="box-content">Gardening</div>
                        </div>
                        <div class="box">
                            <img src="@/assets/images/icon_7.png" alt="">
                            <div class="box-content">Designer</div>
                        </div>
                        <div class="box">
                            <img src="@/assets/images/icon_8.png" alt="">
                            <div class="box-content">Gardening</div>
                        </div>
                       
                    </div>
                </div>
                
            </div> 
        </section>
    </div>
</template>
<script setup>
import {ref} from "vue"
const person=ref({
    name:"Nguyễn Ngọc Như Quỳnh",
    phone:"+8439900****",
    email:"nnnhuquynh03@gmail.com",
    location:"Tam Kỳ- Quảng Nam",
    facebook:"https://www.facebook-0123.com/"
})






</script>

<style scopes>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
.sedan-regular {
    font-family: "Sedan", serif;
    font-weight: 400;
    font-style: normal;
}

.sedan-regular-italic {
    font-family: "Sedan", serif;
    font-weight: 400;
    font-style: italic;
}


* {
    margin: 0;
    padding: 0;
    box-sizing: content-box;
    transition: .2s linear;
    border: none;
    text-decoration: none;
    outline: none;
}

html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    scroll-padding-top: 6rem;
}

body {
    background: rgba(0, 0, 0, .1);
    background-size: cover;
    background-position-y: -100;
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    font-style: normal;
}

:root {
    --white: #fff;

}

#container {
    width: 100%;
    height: auto;
    background: #faf9f9;
}

#header {
    height: 9%;
    background: #fff;
    display: flex;
    align-items: center;
    text-align: center;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
}

#header .logo {
    margin-right: 20rem;

}

#header .logo img {
    width: 15rem;
    height: 5rem;
    margin-left: 3rem;
    margin-top: .5rem;
}

.navbar-container {
    padding-left: 2rem;
}

.navbar-container .nav {
    display: flex;
    padding: 2rem;
    list-style: none;
    justify-content: space-between;
    justify-items: center;
}

.navbar-container .nav li {
    position: relative;
    list-style-type: none;
}

.navbar-container .nav li a {
    text-transform: capitalize;
    text-decoration: none;
    color: rgb(46, 40, 40);
    padding: 4rem;
    font-size: 2rem;
}

.navbar-container .nav ul.sub-menu {
    position: absolute;
    top: 3rem;
    background: #f5f3f3;
    list-style: none;
    width: 12rem;
    height: 5rem;
    display: none;
    padding: 1rem;
    margin-left: 4rem;
}

.navbar-container .nav li:hover>ul.sub-menu {
    display: block;
}

.navbar-container .nav ul.sub-menu a {
    padding: 0 1rem;
    color: #666767;
    font-size: 1.5rem;
    border-bottom: .1rem solid rgba(173, 170, 170, 0.215);
}

.navbar-container .nav ul.sub-menu a:hover {
    color: rgb(46, 40, 40);
}

/* mui ten so xuong */
.nav>li.has-child::after {
    content: "";
    position: absolute;
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    content: "\f107";
    top: 0;
    left: 6rem;
    right: 0;
    padding: .6rem 1rem;
}






.user-container {
    padding-left: 20rem;
    margin-right: 2rem;
    display: flex;
}

.user-container img {
    max-width: 4rem;
    height: 3.2rem;
    border-radius: 50%;
    margin-top: 1.2rem;
    margin-left: 10rem;
}

.user-container .user li {
    position: relative;
    padding: 2rem 1rem;
    list-style-type: none;
    font-size: 1.2rem;
}

.user-container .user li a {
    color: #666767;
}

.user>li.have-child::after {
    position: absolute;
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    content: "\f107";
    top: 2rem;
    left: 9rem;
    right: 0;
    color: #666767;
}

section {
    width: 100%;
    height: auto;
}

#row {
    display: flex;
}

#row .left {
    width: 30%;
    object-fit: cover;
    margin-left: 18rem;
}

#row .left .top {
    width: 100%;
}

#row .left .top img {
    width: 30rem;
    height: 40rem;
    padding-top: 11rem;
}

#row .left .bottom {
    margin-top: .3rem;
    display: flex;
}

#row .left .bottom img {
    width: 14.7rem;
    height: 17rem;
}

#row .left .bottom .anh_1 {
    margin-right: .7rem;
}

#row .right {
    width: 70%;
    padding-top: 5rem;
    object-fit: cover;

}

#row .right p {
    font-size: 1.5rem;
    padding-top: 4rem;
    color: #575a5d;
    font-style: italic;
}

#row .right h4 {
    font-size: 3rem;
    padding-top: 1rem;
}

#row .right .icons a {
    display: block;
    margin: 1.5rem 0;
    display: flex;
    color: #575a5d;
    font-size: 1.3rem;
}

#row .right .icons a Icon {
    padding-right: .5rem;
}

.intro-container {
    width: 100%;
    height: 5.2rem;
    display: flex;
    gap: 4rem;
}

.intro-container .intro_1 {
    width: 21rem;
    height: 5rem;
    display: flex;
    background: #f5f3f3;
    border-radius: 5rem;
}

.intro-container .intro_1 .picture {
    width: 30%;
}

.intro-container .intro_1 .picture img {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    border: .1rem solid #555454;
}

.intro-container .intro_1 .content {
    width: 70%;
}

.intro-container .intro_1 .content h6 {
    font-size: 1.2rem;
    padding: .5rem;
    color: #828487;
}

.intro-container .intro_1 .content .nd {
    font-size: 1.2rem;
    padding-left: .3rem;
    color: #afb0b3;
}

.intro-container .intro_2 {
    width: 21rem;
    height: 5rem;
    display: flex;
    background: #f5f3f3;
    border-radius: 5rem;
}

.intro-container .intro_2 .picture {
    width: 30%;
}

.intro-container .intro_2 .picture img {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    border: .1rem solid #555454;
}

.intro-container .intro_2 .content {
    width: 70%;
}

.intro-container .intro_2 .content h6 {
    font-size: 1.2rem;
    padding: .5rem;
    color: #828487;
}

.intro-container .intro_2 .content .nd {
    font-size: 1.2rem;
    padding-left: .3rem;
    color: #afb0b3;
}

.about h5 {
    font-size: 1.8rem;
    padding-top: 3rem;
    color: #585858;
}

.about .about_content {
    font-size: 1.5rem;
    padding: 2rem 0;
    color: #4c4f51;
    
}

.box-container {
    width: 100%;
    height: 10rem;
    display: flex;
    flex-wrap: wrap;

}

.box-container .box {
    width: 11rem;
    height: 3rem;
    border-radius: 5rem;
    display: flex;
    border: .1rem solid #585858;
    margin: .1rem;
}

.box-container .box img {
    width: 1.5rem;
    height: 2rem;
    padding: .5rem 1rem;
}

.box-container .box .box-content {
    font-size: 1rem;
    padding: 1.2rem 0;
}

</style>