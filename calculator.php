<div id="wig-calc-page" class="uk-container uk-container-center">

      <div class="uk-container">

          <div class="uk-grid uk-form">
              <div class="uk-width-medium-4-10 uk-width-large-3-10 form-icon-container form-icon-right form-icon-left">
                <legend>What is your annual income?</legend>
                <div class="input-icon">£</div>
                <div class="input-icon input-icon-right buyer_salary_val form-val" style="font-size:14px;padding-top:23px;">Minimum £18,000</div>
                <input type="text" id="buyer_salary" pattern="[0-9]*" minlength="2" placeholder="Salary" name="salary" class="uk-form-large" required>
                <div id="buyer-salary-input-val" class="input-icon input-icon-right form-val"><img src="dist/img/icon-check.svg" width="26"></div>
              </div>
              <div class="uk-width-medium-5-10 uk-width-large-6-10 uk-push-1-10">
                <legend>Where would you like to buy?</legend>

                <div class="typeahead-container uk-form">
                    <div class="typeahead-field">
                        <span class="typeahead-query form-icon-container form-icon-right">
                            <div id="buyer-area-input-val" class="input-icon input-icon-right form-val"><img src="dist/img/icon-check.svg" width="26"></div>
                            <input id="area_search" class="uk-form-large" name="area" type="search" placeholder="Choose your area" autocomplete="off">
                        </span>
                    </div>
                </div>
              </div>
          </div>


          <div id="wig-calculator-results" class="uk-grid">
              <div class="uk-width-medium-6-10">
                <p class="uk-text-large">We calculate you can afford £<span class="show_annual_rent"></span> rent this year. Properties in <span class="show_area_name"></span> sell for a rental yield of 3%.</p>
                <p class="uk-text-large">The budget we’ll buy with you for is <span style="border-bottom:1px solid white;">£<span class="show_wig_budget"></span></span></p>
              </div>

              <div class="uk-width-medium-6-10 uk-margin-top">
                <div class="mobile-box">
                  <p>In <span class="show_area_name"></span>, an Unmortgage buys you a 3 bed terrace house.</p>
                  <p>For comparison, a bank would lend you £<span class="show_bank_budget"></span> (which is 4 times your annual salary). That would buy you two car parking spaces.</p>
                </div>
              </div>

              <div class="uk-width-medium-6-10 uk-margin-large-top">
                <a class="uk-button" href="https://unmortgage.typeform.com/to/klNMSA">Register for Unmortgage</a>
                <!--<div class="uk-button" data-uk-switcher-item="next">Register for Unmortgage</div>-->
                <div style="display:none;padding:0 17px;">or</div>
                <div style="display:none;border-bottom:1px solid white;"><a href="">Send to a friend</a></div>
              </div>
          </div>

          <!--Returned From Data-->
          <input type="hidden" value="3" id="area_rental_yield"><br>
          <input type="hidden" value="2500" id="area_average_price"><br>


      </div>


</div><!--/#wig-calc-page-->
