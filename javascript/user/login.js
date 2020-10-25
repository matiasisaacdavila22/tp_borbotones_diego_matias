var misUsers = [];

function searchUserLocalStore(email, password){
  misUsers = getUsers();
  for(let i = 0; i < misUsers.length; i++){
    if(misUsers[i].email == email && misUsers[i].password == password){
          return true;
         }
      }
     return false;
  }

function getUsers(){
  var storeList = localStorage.getItem('localUserList');
  if(storeList == null){
    misUsers = [];
    }else{
    misUsers = JSON.parse(storeList);
  }
  return misUsers;
}
