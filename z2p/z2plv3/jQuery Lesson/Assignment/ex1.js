$(function () {
    // boc default hide for single
    $('#spouse').hide();

    // radio input change event
    $('input[type=radio][name=relation]').change(function () {
        if ($(this).val() == 2) {
            $('#spouse').show();

        } else {
            $('#spouse').hide();
        }
    });

    // submit form event
    $('#form1').on('submit', function (e) {
        e.preventDefault();


        // getting input value
        var name = $('#name').val();
        var age = $('#age').val();
        var spouse = $('#spouse').val();
        var relation_value = $('input[name=relation]:checked').val();

        // console.log(name);
        // console.log(age);
        // console.log(relation_value);

        var data = '';
        if (relation_value == 1) {
            data += `Name is ${name} and age is ${age}. Single!`;
        } else {
            data += `Name is ${name} and age is ${age}. Married!. Spouse name is ${spouse}`;
        }
        alert(data);

    });

});
