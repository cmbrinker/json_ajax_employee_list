var xhr = new XMLHttpRequest();
var xhrNew = new XMLHttpRequest();

xhrNew.onreadystatechange = function() {
  if(xhrNew.readyState === 4 && xhrNew.status === 200){
    var roomList = '<ul class="rooms">';
    var roomStatus = JSON.parse(xhrNew.responseText);
    for(var i=0; i<roomStatus.length; i ++) {
      if(roomStatus[i].available === true) {
        roomList += '<li class="full">';
      } else {
        roomList += '<li class="empty">';
      }
      roomList += roomStatus[i].room;
      roomList += '</li>';
    }
    roomList += '</ul>';
    document.getElementById('roomList').innerHTML = roomList;
  }
};
xhrNew.open('GET', '../data/rooms.json');
xhrNew.send();

xhr.onreadystatechange = function() {
  if(xhr.readyState === 4) {
    var employees = JSON.parse(xhr.responseText);
    var statusHTML = '<ul class="bulleted">';
    for (var i=0; i<employees.length; i++) {
      if(employees[i].inoffice === true) {
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += employees[i].name;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('employeeList').innerHTML = statusHTML;
  }
};
xhr.open('GET', 'data/employees.json');
xhr.send();
