document.addEventListener('DOMContentLoaded', function(){

  // registration form download
  var reg = document.getElementById('reg-form');
  if(reg){
    reg.addEventListener('submit', function(e){
      e.preventDefault();
      var data = {};
      new FormData(reg).forEach(function(v,k){ data[k] = v });
      data._ts = new Date().toISOString();
      var blob = new Blob([JSON.stringify(data, null, 2)], {type:'application/json'});
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'registration-' + (new Date()).toISOString().replace(/[:.]/g,'-') + '.json';
      document.body.appendChild(a);
      a.click();
      a.remove();
    });
  }

  // contact form download
  var contact = document.getElementById('contact-form');
  if(contact){
    contact.addEventListener('submit', function(e){
      e.preventDefault();
      var data = {};
      new FormData(contact).forEach(function(v,k){ data[k] = v });
      data._ts = new Date().toISOString();
      var blob = new Blob([JSON.stringify(data, null, 2)], {type:'application/json'});
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'contact-' + (new Date()).toISOString().replace(/[:.]/g,'-') + '.json';
      document.body.appendChild(a);
      a.click();
      a.remove();
    });
  }

});