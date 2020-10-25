var misUsers = [];
var id;

function createUser(id, name, email, password, phone, type, workshop, description, status){
    var user = {
    id : id,
    name : name,
    email : email,
    password : password,
    phone : phone,
    type : type,
    workshop : workshop,
    description : description,
    status : status,
  };
        misUsers.push(user);
        localStoregeUserList(misUsers);
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

  function localStoregeUserList(list){
          localStorage.setItem('localUserList', JSON.stringify(list));
  }

  function getId(){
    var storeList = localStorage.getItem('localUserList');
    if(storeList == null){
      id = 1;
      }else{
      misUsers = JSON.parse(storeList);
      id = misUsers.length +1;
      }
    return id;
  }
