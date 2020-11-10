
function makeHttpObject() {
  try { return new XMLHttpRequest(); }
  catch (error) { }
  try { return new ActiveXObject("Msxml2.XMLHTTP"); }
  catch (error) { }
  try { return new ActiveXObject("Microsoft.XMLHTTP"); }
  catch (error) { }

  throw new Error("Could not create HTTP request object.");
}

// Consulta la url y crea una promesa
// Cuando se completa la promesa hace el promesa.then() donde lo usas (ListaTalleres.js)
function getJsonFrom(url) {
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.timeout = 2000;
    xhr.onreadystatechange = function (e) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(xhr.response)
        } else {
          reject(xhr.status)
        }
      }
    }
    xhr.ontimeout = function () {
      reject('timeout')
    }
    xhr.open('get', url, true)
    xhr.send();
  });
}
