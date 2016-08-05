
<?php include("includes/header.php"); ?>

<!-- This is the container of the toggling elements -->
<ul data-uk-switcher="{connect:'#wig-calculator',animation: 'fade'}" style="display:none;">
    <li><a href="">1</a></li>
    <li><a href="">2</a></li>
    <li><a href="">3</a></li>
</ul>


  <!--form id="wig-calculator"-->

        <ul id="wig-calculator" class="uk-switcher uk-grid-width-medium-1-1">
          <li>
            <a id="autoplayer" data-uk-switcher-item="next"></a>
            <?php include("includes/brand.php"); ?>
            <?php include("calculator.php"); ?>
          </li>
          <li>
            <?php include("includes/brand.php"); ?>
            <?php include("form.php"); ?>
          </li>
          <li>
            <?php include("includes/brand.php"); ?>
            <?php include("thanks.php"); ?>
          </li>
        </ul>

  <!--/form-->


<?php include("includes/footer.php"); ?>
