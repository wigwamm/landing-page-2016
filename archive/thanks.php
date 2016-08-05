<!DOCTYPE html>
<html manifest="local.manifest" lang="en">
<head>

 <!-- Basic Page Needs
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <meta charset="utf-8">
  <title>unmortgage</title>
  <meta name="description" content="Get more home for your money with an unmortgage">
  <meta name="author" content="">

  <!-- Mobile Specific Metas
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

  <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" >

  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
  <link rel="apple-touch-startup-image" href="images/splash.png" media="screen and (max-device-width: 320px)">
  <link rel="apple-touch-startup-image" media="(max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2)" href="images/splash@2x.png">

  <meta name="format-detection" content="telephone=no">


  <!-- Libraries
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <script type="text/javascript" src="js/lib/jquery.min.js"></script>

  <!-- CSS
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/fonts.css">

  <!-- Favicon
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <link rel="icon" type="image/png" href="images/favicon-sm.png">

</head>

  <!-- iOS Fixes
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->

<body>

  <div id="nav" class="flex center outside horizontal">
    <a href="/"><img class="home" src="images/home_logo.png"></img></a>
    <!--<a href="/about">about us</a>
    <a href="/faq">how it works</a>
    <a href="/contact">contact us</a>-->
  </div>

  <div id="bg"></div>
  <div id="home" class="flex vertical middle">
      <h1>With an unmortgage you could live here</h1>
      <div class="box flex horizontal middle">
        <div>
          <!--<img src="images/home.png"></img>-->
          <span class="property">Leatherdale Street, Stepney E1</span>
        </br>
          <span class="property-details"><em><?php echo $_POST['type'] ?></em> near <em><?php echo $_POST['location']?></em></span>
        </div>
        <div>
          <span class="numbers">£<?php echo $_POST['income'] ?></span>
        </br>
          <span class="numbers-details">minimum deposit</span>
        </div>

      </div>

  <div>

</body>
</html>
