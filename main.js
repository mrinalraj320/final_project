function submitForm(){

   let fname = document.getElementById('fname').value;
   let lname = document.getElementById('lname').value;
   let email = document.getElementById('email').value;
   let rfc = document.getElementById('rfc').value;
//    console.log(fname, lname, email, rfc);

if(fname != null)
{
    alert("form submit successfull")

}
else{
    alert("please fill the name")
}
}