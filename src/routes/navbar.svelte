<script>
import { page } from "$app/stores";
  let navHeaders = [
    // Formatting: 
    // {id:IDENTIFIER NUMBER, name: ['PAGE NAME DISPLAYED ON WEBSITE','FILE NAME WITH NO EXTENSION'], subpages: []}, LEAVE SUBPAGES ARRAY LIKE THIS IF THERE ARE NO SUBPAGES
    // {name: [...], subpages: [['SUBPAGE NAME DISPLAYED ON SITE','FILE NAME WITH NO EXTENSION']]}, 
    // All files need to have extension '.svelte'.
    {id:1, name: ['Home','index'], subpages: []},
    {id:2, name: ['Work Experience','workExp'], subpages: [['All','allExp'],['Professional','profExp'],['Volunteer','volExp'], ['Personal','personalExp']]},
    {id:3, name: ['Articles & Awards', 'articles'], subpages: []},
    {id:4, name: ['Resume', 'resume'], subpages: []},
  ];
  
  let lhsTitle = 'Nathan Eads'; // Header on Left Hand Side of Nav-Bar

function matchWidth() {
  for (let i = 0; i < navHeaders.length; i++) {
    let eleID = String("dropdown-" + (i+1));
    const ele = document.getElementById(eleID);
    const y = window.getComputedStyle(ele, null);

    let newWidth = y.getPropertyValue("width")
    let setID = document.getElementById('dropdown-content-' + (i+1));
    setID.style.width = newWidth;
  };
}

function showMenu() {
  const rhs = document.getElementById('rhs');
  const lhs = document.getElementById('lhs');

  // function showContent(j) {
  //   console.log('Ran');
  //   let subpageTemp = document.getElementById('dropdown-content-' + j);
  //   subpageTemp.style.display = 'block';
  // };

  rhs.style.height = String(window.innerHeight + 'px');
  rhs.style.width = String(window.innerWidth + 'px');
  rhs.style.display = 'block';
  lhs.style.display = 'none';
  
  for (let i = 0; i < navHeaders.length; i++) {
    let dropdownTemp = document.getElementById('dropdown-' + (i+1));
    dropdownTemp.style.display = 'block';
    
    let dropContentTemp = document.getElementById('dropdown-content-' + (i+1));
    dropContentTemp.style.position = 'static';

    let subpagesTemp = document.getElementById('dropdown-content-' + (i+1));
    let subpagesA = document.getElementById('dropdownA-' + (i+1));
    let hrefString = "showContent(" + (i+1) + ")";
    console.log(hrefString)
    subpagesA.removeAttribute("href");
    subpagesTemp.style.marginLeft = '1.35em';
  }

};
</script>

<body class="navbar-block" id="navbar-block">
<div class="navbar-wrapper">
    <div class="lhs" id="lhs">
      <button class="hamburger-menu" on:click="{showMenu}">
        <svg class="menu-bars-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"/></svg>
      </button>
      <a class="lhs-a" href="index.svelte">
      <img class="navbar-logo" src="/src/images/logos/icon.png" alt="Logo">
      <p>{lhsTitle}</p>
      </a>
    </div>
  <div class="rhs" id="rhs">
    {#each navHeaders as page}
    <div class="dropdown" id="dropdown-{page.id}" on:mouseenter="{matchWidth}">
      <li class="page"><a href="{page.name[1]}.svelte" id="dropdownA-{page.id}">{page.name[0]}</a></li>
      <div class="dropdown-content" id="dropdown-content-{page.id}">
      {#each page.subpages as subpage}
        <li class="subpage"><a href="{subpage[1]}.svelte" id="subpage-{page.id}">{subpage[0]}</a></li>
      {/each}
      </div>
    </div>
    {/each}
  </div>
</div>
</body>

<style>
  :root {
    --image-height: 2.5em;
    --image-padding: 11px;
  }
  p {
    margin: 0px;
  }
  .navbar-block {
    padding: 0px 10%;
    margin: auto;
    background-color: #232323;
  }
  .hamburger-menu{
    display: none;
    background-color: #232323;
    border: none;
    border-radius: 4px;
  }
  .hamburger-menu:hover{
    color: #232323;
    background-color: white;
  }
  .navbar-wrapper {
    margin: 0px;
    background-color: #232323;
    color: white;
    font-family: sans-serif;
    font-weight: 400;
    font-size: 1.35em;
    display: flex;
    justify-content: space-between;
    height: max-content;
  }
  .menu-bars-svg {
    display: none;
    fill: white;
    height: var(--image-height);
    padding: var(--image-padding) calc(2*var(--image-padding));
  }
  .hamburger-menu:hover .menu-bars-svg {
    fill: #232323;
  }
  .lhs {
    width: 30%;
    line-height: calc(var(--image-height) + 2*var(--image-padding));
    vertical-align: middle;
    display: flex;
  }
  .lhs-a {
    display: flex;
  }
  .navbar-logo {
    height: var(--image-height);
    padding: var(--image-padding) calc(2*var(--image-padding));
  }
  .rhs {
    display: flex;
    justify-content: flex-end;
    width: 70%;
    flex-wrap: wrap;
    line-height: calc(var(--image-height) + 2*var(--image-padding));
    vertical-align: middle;
  }
  a, li {
    text-decoration: none;
    list-style-type: none;
    color: inherit;
    margin: 0px;
    padding: 0px;
  }
  .page {
    padding: 0 1.05em;
    position: relative;
  }
  .dropdown {
    position: relative;
    display: inline-block;
    min-width: max-content;
  }
  .dropdown-content {
  display: none;
  position: absolute;
  background-color: white;
  width: auto;
  }
  .dropdown-content a {
    color: white;
    background-color: #232323;
    padding: var(--image-padding) calc(2*var(--image-padding));
    text-decoration: none;
    display: block;
  }
  .dropdown-content a:hover {
    background-color: white;
    color: #232323;
  }
  /* .dropdown:hover .dropdown-content {display: block;} */
  .page:hover{
    background-color: white;
    color: #232323;
  }
  
  @media (max-width: 1200px) {
    .navbar-wrapper {
      font-size: 1.1em;
    }
  }

  @media (max-width: 950px) {
    .navbar-wrapper {
      display: block;
      padding-top: 15px;
      font-size: 1.2em;
    }
    .lhs, .rhs {
      width: max-content;
      margin: auto;
      
    }
  }

@media (max-width:750px) {
  .navbar-wrapper {
    padding-bottom: 15px;
    display: flex;
    font-size: 1.5em;
  }
  .lhs {
    margin: 0%;
  }
  .rhs {
    display: none;
  }
  .menu-bars-svg {
    display: block;
  }
  .hamburger-menu {
    display: block;
    
  }

}
@media (max-width:400px) {
  .lhs-a p {
    display: none;
  }
}
</style>