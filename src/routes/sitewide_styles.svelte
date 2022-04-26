<style>
    :root {
  --crimson: #900f09;
  --d-grey: #232323;
  --footer-color: var(--d-grey);
}

body {
  margin: 0px;
  font-family: sans-serif;
  font-family: "Poppins", sans-serif;
}

p, div, ul {
  margin: 0px;
}

/* Begin Hamburger Menu CSS */
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
/* End Hamburger Menu CSS */

/* Begin H1 CSS */
h1 {
  display: block;
  position: relative;
  width: max-content;
  padding: 8px 32px;
  text-transform: uppercase;
  color: var(--d-grey);
  font-family: sans-serif;

  -webkit-user-select: none; /* Make text non-selectable Safari */
  -moz-user-select: none; /* Make text non-selectable Firefox */
  -ms-user-select: none; /* Make text non-selectable IE10+/Edge */
  user-select: none; /* Make text non-selectable Standard */
}

h1::before {
  position: absolute;
    top: 0;
    left: 0;
    height: 30px;
    width: 30px;

    content: "";
    background-image: url(../src/brackets.png);
    background-size: cover;
}

h1::after {
  position: absolute;
      bottom: 0;
      right: 0;
      height: 30px;
      width: 30px;

      content: "";
      background-image: url(../src/brackets.png);
      background-size: cover;
      transform: rotate(180deg);
      -webkit-transform: rotate(180deg);
      -moz-transform: rotate(180deg);
      -ms-transform: rotate(180deg);
      -o-transform: rotate(180deg);
}
</style>