var xhr = new XMLHttpRequest();
console.log(xhr);
xhr.onreadystatechange = function(){
  console.log(xhr.readyState);
  if(xhr.readyState == 4){
    if(xhr.status >= 200){
      console.log(xhr.responseText);
    }
  }
}
let newUser = {
  name: "lu",
  passwd: "123",
  phonenum: "1234",
  created: new Date(),
  picture: "234325"
};

xhr.open('post','/v1/user/createUser',true);
xhr.setRequestHeader("Content-type", "application/json; charsetrset=utf-8");
xhr.setRequestHeader("dataType", "json");
xhr.send(JSON.stringify(newUser));
console.log("sssslllls");
