fetch('final/js/business.json')
   .then(response => {
      return response.json();
   }).then(json => {
      console.log(json);
   })