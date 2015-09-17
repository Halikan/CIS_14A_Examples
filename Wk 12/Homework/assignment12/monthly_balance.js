var trans_list = [];

var $ = function(id) { return document.getElementById(id); }

var validator;

var update_display = function () {
    // update main text area
    $("trans_list").value = get_trans_list_string(trans_list);
    
    // update summary text boxes
    $("starting_balance").value = get_starting_balance().toFixed(2);
    $("total_deposits").value = get_total_deposits(trans_list).toFixed(2);
    $("total_withdrawals").value = get_total_withdrawals(trans_list).toFixed(2);
    $("ending_balance").value = get_ending_balance(trans_list).toFixed(2);

    // set default values for date and amount
    $("trans_date").value = "12/01/2009";
    $("trans_amount").value = "100";
    
    $("trans_date").focus();
}    

var add_trans_click = function() {
    if ( validator.validateForm() ) {
        alert("Please correct the errors on the page.");
    }    
    else {
        // create the transaction array
        var trans = [];
        trans["date"] = $("trans_date").value;
        trans["type"] = $("trans_type").value;
        trans["amount"] = parseFloat( $("trans_amount").value );

        // add the transaction to the list
        trans_list.push(trans);

        update_display();    
    }
}

window.onload = function () {
    $("add_trans").onclick = add_trans_click;

    validator = new Validator();

    update_display();
}