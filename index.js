$(".reset").click(function() {
  $("h1").text("$0.00");
  $(".bill-box").val("");
  $(".select-input").val("");
  $(".people-input").val("");
  $(".btn").removeClass("clicked");
  money = "";
  people = "";
  percentage = "";
  setMoney = false;
  setPeople = false;
  setTip = false;
});

var setTip = false;
var setMoney = false;
var setPeople = false;
var clicked = false;

var money = 0;
var people = 0;
var percentage = 0;

$(".select-input").on("input", setTipValue);

$(".bill-box").on("input", setMoneyValue);

$(".people-input").on("input", setPeopleValue);

$(".btn").click(function() {
  if (!clicked) {
    $("#" + this.id).addClass("clicked");
    clicked = true;
  } else {
    $(".btn").removeClass("clicked");
    $("#" + this.id).addClass("clicked");

    clicked = true;
  }
  percentage = this.id;
  setTip = true;
  calculate(money, people, percentage);

});



function setTipValue() {
  percentage = parseFloat(this.value)
  setTip = true;
  calculate(money, people, percentage);
}

function setMoneyValue() {
  money = parseFloat(this.value);
  setMoney = true;
  calculate(money, people, percentage);
}

function setPeopleValue() {
  people = parseInt(this.value, 10);
  setPeople = true;
  if (people === 0) {
    $(".alert").removeClass("hide");
    $(".people-input").addClass("orange");
    setPeople = false;
  } else {
    $(".alert").addClass("hide");
    $(".people-input").removeClass("orange");
    $(".people-input").on("input", setPeopleValue);
    setPeople = true;
    calculate(money, people, percentage);
  }

}

function calculate(money, people, percentage) {
  console.log(money + " " + people + " " + percentage);
  if (setMoney === true && setPeople === true && setTip === true) {
    var initialMoney = money / people;
    percentage = 1 + percentage / 100;
    var finalMoney = (money * percentage)
    finalMoney = finalMoney.toFixed(2) / people;
    var tip = (finalMoney - initialMoney);
    tip = tip.toFixed(2);
    var total = finalMoney.toFixed(2);
    $("#tip-amount").text("$" + tip);
    $("#total-amount").text("$" + total);
    setMoney = false;
    setPeople = false;
    setTip = false;
  }
}
