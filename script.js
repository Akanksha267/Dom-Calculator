var div = document.createElement('div');
div.className="container";
document.body.append(div);

var form=document.createElement('form');
form.name="form_cont";
document.body.append(form)

var input = document.createElement('input');
input.type="text";
input.id="calc";
input.name="answer";`${`<br>`}`
form.append(input);
div.append(form);
document.body.append(div);`${`<br>`}`


var input1 = document.createElement('input');
input1.type="button";
input1.value="1";
input1.onclick = function() { 
        `${form_cont.answer.value += `${'1'}`}`
 };
form.append(input1);
div.append(form);
document.body.append(div);

var input2 = document.createElement('input');
input2.type="button";
input2.value="2";
input2.onclick = function() { 
        `${form_cont.answer.value += `${'2'}`}`
 };
form.append(input2);
div.append(form);
document.body.append(div);

var input3 = document.createElement('input');
input3.type="button";
input3.value="3";
input3.onclick = function() { 
        `${form_cont.answer.value += `${'3'}`}`
 };
form.append(input3);
div.append(form);
document.body.append(div);

var inputPlus = document.createElement('input');
inputPlus.type="button";
inputPlus.value="+";
inputPlus.onclick = function() { 
        `${form_cont.answer.value += `${'+'}`}`
 };
form.append(inputPlus);
div.append(form);
document.body.append(div);

var input4 = document.createElement('input');
input4.type="button";
input4.value="4";
input4.onclick = function() { 
        `${form_cont.answer.value += `${'4'}`}`
 };
form.append(input4);
div.append(form);
document.body.append(div);

var input5 = document.createElement('input');
input5.type="button";
input5.value="5";
input5.onclick = function() { 
        `${form_cont.answer.value += `${'5'}`}`
 };
form.append(input5);
div.append(form);
document.body.append(div);

var input6 = document.createElement('input');
input6.type="button";
input6.value="6";
input6.onclick = function() { 
        `${form_cont.answer.value += `${'6'}`}`
 };
form.append(input6);
div.append(form);
document.body.append(div);

var inputMinus = document.createElement('input');
inputMinus.type="button";
inputMinus.value="-";
inputMinus.onclick = function() { 
        `${form_cont.answer.value += `${'-'}`}`
 };
form.append(inputMinus);
div.append(form);
document.body.append(div);

var input7 = document.createElement('input');
input7.type="button";
input7.value="7";
input7.onclick = function() { 
        `${form_cont.answer.value += `${'7'}`}`
 };
form.append(input7);
div.append(form);
document.body.append(div);

var input8 = document.createElement('input');
input8.type="button";
input8.value="8";
input8.onclick = function() { 
        `${form_cont.answer.value += `${'8'}`}`
 };
form.append(input8);
div.append(form);
document.body.append(div);

var input9 = document.createElement('input');
input9.type="button";
input9.value="9";
input9.onclick = function() { 
        `${form_cont.answer.value += `${'9'}`}`
 };
form.append(input9);
div.append(form);
document.body.append(div);

var inputMul = document.createElement('input');
inputMul.type="button";
inputMul.value="*";
inputMul.onclick = function() { 
        `${form_cont.answer.value += `${'*'}`}`
 };
form.append(inputMul);
div.append(form);
document.body.append(div);

var inputDiv = document.createElement('input');
inputDiv.type="button";
inputDiv.value="/";
inputDiv.onclick = function() { 
        `${form_cont.answer.value += `${'/'}`}`
 };
form.append(inputDiv);
div.append(form);
document.body.append(div);

var input0 = document.createElement('input');
input0.type="button";
input0.value="0";
input0.onclick = function() { 
        `${form_cont.answer.value += `${'0'}`}`
 };
form.append(input0);
div.append(form);
document.body.append(div);
var inputMod = document.createElement('input');
inputMod.type="button";
inputMod.value="%";
inputMod.onclick = function() { 
        `${form_cont.answer.value += `${'%'}`}`
 };
form.append(inputMod);
div.append(form);
document.body.append(div);

var inputEqual = document.createElement('input');
inputEqual.type="button";
inputEqual.value="=";
inputEqual.onclick = function() { 
        `${form_cont.answer.value = eval(form_cont.answer.value)}`
 };
form.append(inputEqual);
div.append(form);
document.body.append(div);

var inputClear = document.createElement('input');
inputClear.type="button";
inputClear.value="Clear";
inputClear.id="clear";
inputClear.onclick = function() { 
        `${form_cont.answer.value = ''}`
 };

form.append(inputClear);
div.append(form);
document.body.append(div);



