function border()
{
var name = document.getElementById("name")
var number = document.getElementById("number")
var email = document.getElementById("email")
var message = document.getElementById("message_box")
name.style.outline="None"
number.style.outline="None"
email.style.outline="None"
message.style.outline="None"

}

function validate()
{

var name = document.getElementById("name")
var nameInfo = document.getElementById("nameInfo")
var number = document.getElementById("number")
var numberInfo = document.getElementById("numberInfo")
var email = document.getElementById("email")
var emailInfo = document.getElementById("emailInfo")
var message = document.getElementById("message_box")

var nameRegx = /([A-za-z])/
var numberRegx = /([0-9]{10})/
var mailRegx = /([a-zA-Z0-9]{3,10}@[a-zA-Z]{3,10}\.[a-zA-Z]{2,10})/

if(nameRegx.test(name.value))
{
nameInfo.innerHTML = ""
nameInfo.style.color = "green"
name.style.border = "2px solid green" 
}
else{
nameInfo.innerHTML = "Please enter a name"
nameInfo.style.color = "red"
nameInfo.style.marginLeft = "15px"
name.style.border = "2px solid red"
}

if(numberRegx.test(number.value))
{
numberInfo.innerHTML = ""
numberInfo.style.color = "green"
number.style.border = "2px solid green" 
}
else{
numberInfo.innerHTML = "please give 10-digit mobile Number"
numberInfo.style.color = "red"
numberInfo.style.marginLeft = "15px"
number.style.border = "2px solid red"
}

if(mailRegx.test(email.value))
{
emailInfo.innerHTML = ""
emailInfo.style.color = "green"
email.style.border = "2px solid green"
}
else
{
emailInfo.innerHTML = "please give a vaild email"
emailInfo.style.color = "red"
emailInfo.style.marginLeft = "15px"
email.style.border = "2px solid red"
}

}

function mailvalidate()
{
var mail = document.getElementById("mail")
var mailInfo = document.getElementById("mailInfo")
var mailRegx = /([a-zA-Z0-9]{3,10}@[a-zA-Z]{3,10}\.[a-zA-Z]{2,10})/

if(mailRegx.test(mail.value))
{
mailInfo.innerHTML = ""
mailInfo.style.color = "green"
mail.style.border = "2px solid green"
}
else
{
mailInfo.innerHTML = "please give a vaild email"
mailInfo.style.color = "red"
mailInfo.style.marginLeft = "15px"
mail.style.border = "2px solid red"
}
}