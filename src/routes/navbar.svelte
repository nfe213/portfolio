<div class="header">
    <div class="nav-bar-opposition-wrapper">
      <img src="src/icon.png" alt="Nathan Eads Logo" class="logo">
      <p class="opposition-text header-text">Nathan Eads</p>
    </div>
    <ul class="nav-bar-links-wrapper">
      <a href="index.html"><li class="nav-bar-item header-text">Home</li></a>
      <a href="#"><li class="nav-bar-item header-text">Page 1</li></a>
      <a href="#"><li class="nav-bar-item header-text">Page 2</li></a>
      <a href="#"><li class="nav-bar-item header-text">Page 3</li></a>
    </ul>
  </div>

  <style>
      .header {
  width: 80%;
  padding: 0px 10%;
  background-color: #232323;
  display: inline-flex;

  -webkit-user-select: none; /* Make text non-selectable Safari */
  -moz-user-select: none; /* Make text non-selectable Firefox */
  -ms-user-select: none; /* Make text non-selectable IE10+/Edge */
  user-select: none; /* Make text non-selectable Standard */
}

.header-text {
  font-size: 21px;
  color: white;
  padding: 18px 21px;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  position: relative;
}

.nav-bar-item::before {
  position: absolute;
    left: -29px;
    top: 0px;
    height: 68px;
    width: 30px;
    content: "";
    background-image: url(../src/left.svg);
    background-size: cover;
    /* transition: .3s; */
}

.nav-bar-item::after {
  position: absolute;
    right: -30px;
    top: 0px;
    height: 68px;
    width: 30px;
    content: "";
    background-image: url(../src/left.svg);
    transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    background-size: cover;
    /* transition: .3s; */
}

.nav-bar-item:hover:before {
  background-image: url(../src/left-white.svg);
  /* transition: .5s; */
}

.nav-bar-item:hover:after {
  background-image: url(../src/left-white.svg);
  transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  /* transition: .5s; */
}

.nav-bar-links-wrapper {
  width: 70%;
  display: inline-flex;
  justify-content: flex-end;
  padding-left: 0px;
  float: right;
}

.nav-bar-opposition-wrapper {
  width: 30%;
}

.hamburger {
  font-family: Material Icons;
  background-color: transparent;
  color: white;
  border: none;
  font-size: 30px;
  padding: 9px;
  vertical-align: middle;
  display: none;
}

.hamburger:focus {
  outline: none;
}

.logo {
  height: 30px;
  padding-bottom: 3px;
  vertical-align: middle;
}

.opposition-text {
  display: inline-flex;
}

.nav-bar-item {
  list-style-type: none;
  justify-content: space-around;
  flex-shrink: 1;
  cursor: pointer;
  width: max-content;
  margin-right: 30px;
  background-color: var(--crimson);
}

.nav-bar-item:hover {
  background-color: white;
  color: black;
}

@media (max-width: 1450px) {
  .header-text {
    font-size: 21px;
    padding: 18px 18px
  }
}

@media (max-width: 1130px) {

}

@media (max-width: 1285px) {
  .header-text {
    padding: 18px 9px;
  }
  .nav-bar-opposition-wrapper {
    width: 30%;
  }
  .logo {
    height: 20px;
  }
}

@media (max-width: 1130px) {
  .header-text {
    font-size: 21px;
  }
}

@media (max-width: 910px) {
  .nav-bar-opposition-wrapper {
    display: none;
    width: 0%;
  }
  .nav-bar-links-wrapper {
    width: 100%;
    justify-content: center;
  }
  .header-text {
    padding: 18px 9px;
    font-size: 21px;
  }
}

@media (max-width: 745px) {
  .nav-bar-links-wrapper {
    display: none;
  }
  .nav-bar-opposition-wrapper {
    display: inline-block;
    width: 100%;
  }
  .hamburger {
    display: inline-block
  }
  .header-text {
    /* font-size: 20px; */
    position: relative;
    top: 4px
  }
}
  </style>