import React from 'react'

export default () => (
<nav className="navbar navbar-default navbar-fixed-top" role="navigation">
<div className="container">
  <div className="navbar-header">
    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
      <span class="sr-only">Toggle navigation</span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </button>
    <a class="navbar-brand scroll" href="#home">SHANE ELLIS</a>
  </div>
  <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
    <ul class="nav navbar-nav">
      <li><a href="#home" class="scroll">HOME</a></li>
      <li><a href="#about" class="scroll">ABOUT</a></li>
      <li><a href="#portfolio" class="scroll">PORTFOLIO</a></li>
      <li><a href="#contact" class="scroll">CONTACT</a></li>
    </ul>
  </div>
</div>
</nav>
)