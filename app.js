
var form = document.getElementById('form');
form.addEventListener('submit', function(event) {
 event.preventDefault();

 var b = new Date();
 var l = b.getFullYear();


 var x = document.getElementById("idForm").value;
 if (x =='') {
     alert("Please, write numbers in the field");
     return false;

 };

  if(document.getElementById("idForm").value>=l-18) {
      alert("Du måste vara 18 att besök");
  } else {
      alert("Grattis !");
      window.location ="https://www.svea.com/se/sv/start/"
  }
});



