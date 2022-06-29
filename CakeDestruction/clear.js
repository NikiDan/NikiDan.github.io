$(document).ready(function () {

    $(".hide-content").click(function () {
        $(this).closest(".cap").siblings(".content").slideToggle();
    });

    $(".close").click(function (){

        $(this).closest(".cap").parent().css('display','none');

    });

    $("#crops").click(function () {

        $("#select-file").click();

    });

    $(".data-file").sortable({
        
        revert: 100,

    });
});

function cleanRectangle() {
    document.getElementById('input-form-down-rectangle').value = '';
}

var arr = [
    "",
    "Моноблок",
    "Благоприятный, трансцендентальный"
];

function transfer() {
   document.getElementById('filling-field-square').innerHTML = document.getElementById('input-form-up-rectangle').value;
   document.getElementById('formFactor-field-square').innerHTML = document.getElementById('formFactor-rectangle').value;
   document.getElementById('exodus-field-square').innerHTML = document.getElementById('input-form-down-rectangle').value;
}

function cleanSquare() {
    document.getElementById('exodus-field-square').innerHTML = arr[0];
    document.getElementById('formFactor-field-square').innerHTML = arr[0];
    document.getElementById('filling-field-square').innerHTML = arr[0];
}

function openModal () {
    document.getElementById('confirm').style.display = "block";
}

function resetRectangle() {

    var fillingInput = document.getElementById('input-form-up-rectangle');
    var formFactor = document.getElementById('formFactor-rectangle');
    var exodusField = document.getElementById('input-form-down-rectangle');

    if (document.getElementById('yes')) {
        fillingInput.value = arr[0];
        formFactor.value= arr[1];
        exodusField.value = arr[2];
        document.getElementById('confirm').style.display="none";
    }
}

function closeModal() {

    document.getElementById('confirm').style.display="none";

}
function transferData() {
    var data = document.getElementById('select-file');
    var text = "";
    if ('files' in data){
        if (data.files.length == 0){
            text = "Вам необходимо выбрать хотя бы один файл !";
        }   else{
                for (var i=0; i<data.files.length; i++){
                text +="<div class='data-file-string'><br><strong>" + (i+1) + " .file</strong>";
                var file = data.files[i];
                if('name' in file){
                    text += "<br>"+"name: " + file.name ;
                }
                if('size' in file){
                    text += "<br>" + "size:" +file.size + "bytes</div>";
                }
            }
        }
    }
    document.getElementById('data-file').innerHTML = text;
}
function cleanOverlay() {
    document.getElementById('data-file').remove();
}

