var $ = function (id) { return document.getElementById(id); }

var Validator = function () {
    this.fields = [];
    this.fields["trans_date"] = {};
    this.fields["trans_amount"] = {};

    // Default field messages
    this.fields["trans_date"].message = "Use mm/dd/yyyy format.";
    this.fields["trans_amount"].message = "Must be a valid number.";

    // Field error messages
    this.fields["trans_date"].required = "Transaction date is required.";
    this.fields["trans_date"].isDate = "Transaction date is not a valid date.";

    this.fields["trans_amount"].required = "Transaction amount is required.";
    this.fields["trans_amount"].isNumber = "Transaction amount is not a valid number.";
}

Validator.prototype.tooShort = function (text, length) {
    return (text.length < length);
}

Validator.prototype.isDate = function (text) {
    if ( ! /^[01]?\d\/[01]?\d\/\d{4}$/.test(text) ) return false;
    var dateParts = text.split("/");
    var month = parseInt(dateParts[0]);
    var day = parseInt(dateParts[1]);
    var year = parseInt(dateParts[2]);
    if ( month < 1 || month > 12 ) return false;
    if ( day < 1 || day > 31 ) return false;
    if ( year < 1000 || year > 3000 ) return false;
    return true;
}

Validator.prototype.isNumber = function (text) {
    if ( isNaN(text) ) return false;    
    return true;
}

Validator.prototype.validateField = function (fieldName, text) {
    var field = this.fields[fieldName];
    if (field.required) {
        if ( this.tooShort(text, 1) ) {
            throw new Error(field.required);
        }
    }
    if (field.isDate) {
        if ( ! this.isDate(text) ) {
            throw new Error(field.isDate);
        }
    }
    if (field.isNumber) {
        if ( ! this.isNumber(text) ) {
            throw new Error(field.isNumber);
        }
    }
}

Validator.prototype.clearError = function ( fieldName ) {
    $(fieldName + "_error").className = "";
    $(fieldName + "_error").firstChild.nodeValue = "";
}

// Method to validate form
Validator.prototype.validateForm = function () {
    var hasErrors = false;
    for ( var fieldName in this.fields ) {
        this.clearError(fieldName);
        try {
            this.validateField(fieldName, $(fieldName).value );
        } catch (error) {
            hasErrors = true;
            $(fieldName + "_error").className = "error";
            $(fieldName + "_error").firstChild.nodeValue = error.message;           
        }
    }
    return hasErrors;
}