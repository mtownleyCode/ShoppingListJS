var idsArr = [];
var displayField = $('input[name=selectedCB]');
var checkboxes = Array.from($(".tycheck input[type=checkbox]"));
let sum = 0.0;

function Checkout(){
    checkboxes.forEach(element => {
        element.checked = false;
    });

    alert("You have checked out. Your total was $" + sum);
    sum = 0;
    displayField.val('');

}

function printChecked() {
    sum = 0.00;
    var values = checkboxes.filter(x => x.checked).map(x => x.value);

    for (let i = 0; i < values.length; i++) {
        sum += parseFloat(values[i]);
      }
  
    displayField.val(sum);
}

$.each(checkboxes, function () {
    $(this).change(printChecked);
})