<script src="https://code.jquery.com/jquery-2.1.4.js"></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/ractive/0.7.3/ractive.js'></script>
<script src='https://openexchangerates.github.io/accounting.js/accounting.min.js'></script>

<script type="text/javascript" src="dist/js/app.min.js"></script>


<!-- Hey, I don't want to install a whole build system, so I'll put everything here -->



<script type='text/html' id='calc-template'> <!-- Bit messy but it does the job -->
<div class="uk-container">

          <div class="uk-grid uk-form">
              <div class="uk-width-medium-4-10 uk-width-large-3-10 form-icon-container form-icon-right form-icon-left">
                <legend>What is your annual income?</legend>
                <div class="input-icon">£</div>
                <div class="input-icon input-icon-right buyer_salary_val form-val" style="font-size:14px;padding-top:23px;">Minimum £18,000</div>
                <input type="text" id="buyer_salary" pattern="[0-9]*" minlength="2" placeholder="Salary" name="salary" class="uk-form-large" value='{{salary}}' lazy='true' required>
                <div id="buyer-salary-input-val" class="input-icon input-icon-right form-val"><img src="dist/img/icon-check.svg" width="26"></div>
              </div>
              <div class="uk-width-medium-5-10 uk-width-large-6-10 uk-push-1-10">
                <legend>Where would you like to buy?</legend>

                <div class="typeahead-container uk-form">
                    <div class="typeahead-field">
                        <span class="typeahead-query form-icon-container form-icon-right">
                            <div id="buyer-area-input-val" class="input-icon input-icon-right form-val"><img src="dist/img/icon-check.svg" width="26"></div>
                            <input id="area_search" class="uk-form-large" name="area" type="search" placeholder="Choose your area" autocomplete="off" value='{{outcode}}' lazy='true'>
                        </span>
                    </div>
                </div>
              </div>
          </div>

{{#if budget}}
          <div id="wig-calculator-results" class="uk-grid">
              <div class="uk-width-medium-6-10">
                <p class="uk-text-large"><!--We calculate you can afford {{formatMoney(rentalYield * 100)}} rent this year. -->Properties in <span class="show_area_name"></span> sell for a rental yield of {{Math.round(rentalYield * 100) / 100}}%.</p>
                <p class="uk-text-large">The budget we’ll buy with you for is <span style="border-bottom:1px solid white;">{{formatMoney(budget)}}</span></p>
              </div>

              <div class="uk-width-medium-6-10 uk-margin-top">
                <div class="mobile-box">
                  <p>In {{outcode.toUpperCase()}}, an Unmortgage buys you a {{houseSize(areaDetail, budget)}} bed house.</p>
                  <p>For comparison, a bank would lend you {{formatMoney(bankBudget)}} (which is 4 times your annual salary).</p>
                </div>
              </div>

              <div class="uk-width-medium-6-10 uk-margin-large-top">
                <a class="uk-button" href="https://unmortgage.typeform.com/to/klNMSA">Register for Unmortgage</a>
                <!--<div class="uk-button" data-uk-switcher-item="next">Register for Unmortgage</div>-->
                <div style="display:none;padding:0 17px;">or</div>
                <div style="display:none;border-bottom:1px solid white;"><a href="">Send to a friend</a></div>
              </div>
          </div>
          {{/if}}

          <!--Returned From Data-->
          <input type="hidden" value="3" id="area_rental_yield"><br>
          <input type="hidden" value="2500" id="area_average_price"><br>


      </div>
</script>

<script>
$(function(){
var ractive = Ractive({
    el: '#wig-calc-page',
    template: '#calc-template',
    data: {
        outcode: undefined,
        salary: undefined,
        areaData: {},
        formatMoney: function(value){
            return accounting.formatMoney(value, '£');
        },
        houseSize: function(areaDetail, budget) {
            var self = this;

            var keys = ["min_price_1_bedroom",
                "min_price_2_bedroom",
                "min_price_3_bedroom",
                "min_price_4_bedroom",
                "min_price_5_plus_bedroom"];

            var rooms = keys.reduce(function(acc, key, index) {
                if (Number(areaDetail[key]) <= budget)
                    return index + 1;
                return acc;
            }, 0);
            
            if(rooms == 5)
                rooms = rooms + '+';
                
            return rooms;
        }
    },
    oninit: function oninit() {
        var self = this;
        $.getJSON('/dist/js/data.json').then(function(data) {
            return self.set('areaData', data);
        });
    },
    computed: {
        areaDetail: function() {
            var self = this;
            var areaData = self.get('areaData');
            var outcode = self.get('outcode');
            var areaDetail = areaData[outcode.toUpperCase()];

            if (!areaDetail || !areaDetail.HouseYield) {
                self.set('error', 'Could not find data for selected area!');
                return {};
            } else {
                self.set('error');
            }

            return areaDetail;
        },

        rentalYield: function() {
            var self = this;
            var areaDetail = self.get('areaDetail');

            return areaDetail.HouseYield;
        },
        budget: function() {
            var self = this;
            var salary = self.get('salary');
            var rentalYield = self.get('rentalYield');

            var budget = salary * 0.3 / rentalYield;

            return budget;
        },
        bankBudget: function() {
            var self = this;
            return self.get('salary') * 4;
        }
    },
    oncomplete:function (){
        $.typeahead({
            input: "#area_search",
            minLength: 1,
            maxItem: 8,
            maxItemPerGroup: 6,
            order: "asc",
            hint: !0,
            cache: !1,
            compression: !1,
            display: ["name_friendly", "postcode_area"],
            template: '<span><span class="name">{{name_friendly}}</span><span class="division">, {{postcode_area}}</span></span>',
            source: {
                teams: {
                    url: "data/search_data3.json"
                }
            },
            callback: {
                onClickAfter: function(a, b, c, d) {
                    $(a).blur();
                }
            }
        });
    }
});
});
</script>

</body>
</html>
