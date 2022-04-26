<script>
import { page } from "$app/stores";
  let navHeaders = [
    // Formatting: 
    // {name: ['PAGE NAME DISPLAYED ON WEBSITE','FILE NAME WITH NO EXTENSION'], subpages: []}, LEAVE SUBPAGES ARRAY LIKE THIS IF THERE ARE NO SUBPAGES
    // {name: [...], subpages: [['SUBPAGE NAME DISPLAYED ON SITE','FILE NAME WITH NO EXTENSION']]}, 
    // All files need to have extension '.svelte'.
    {name: ['Home','index'], subpages: []},
    {name: ['Work Experience','workExp'], subpages: [['All Experience','allExp'],['Professional Work','profExp'],['Volunteer Work','volExp'], ['Personal Projects','personalExp']]},
    {name: ['Articles & Awards', 'articles'], subpages: []},
    {name: ['Resume', 'resume'], subpages: []},
  ];
  
  let lhsTitle = 'Nathan Eads' // Header on Left Hand Side of Nav-Bar
</script>

<body class="navbar-block">
<div class="navbar-wrapper">
    <div class="lhs">
      <a class="lhs-a" href="index.svelte">

      <svg class="menu-bars-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"/></svg>
      <img class="navbar-logo" src="/src/images/logos/icon.png" alt="Logo">
      <p>{lhsTitle}</p>
      </a>
    </div>
  <div class="rhs">
    {#each navHeaders as page}
      <li class="page"><a href="{page.name[1]}.svelte">{page.name[0]}</a></li>
      <div class="dropdown-content--{page}">
      {#each page.subpages as subpage}
        <li class="subpage"><a href="{subpage[1]}.svelte">{subpage[0]}</a></li>
      {/each}
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
    padding: var(--image-padding);
  }
  .lhs {
    width: 30%;
    line-height: calc(var(--image-height) + 2*var(--image-padding));
    vertical-align: middle;
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
  .page:hover{
    background-color: white;
    color: #232323;
  }

/* https://www.w3schools.com/howto/howto_css_dropdown.asp */
  
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

}

</style>