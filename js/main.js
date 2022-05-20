window.addEventListener('load', function() {

  
  

  const shareButton = this.document.querySelector('button');
  const overlay = this.document.querySelector('.overlay');
  const shareModal = this.document.querySelector('.share');


  const title = window.document.title;
  const url = window.document.location.href;

  shareButton.addEventListener('click', () => {
    if (navigator.share) {
      this.navigator.share({
        title: `${title}`,
        url: `${url}`
      }).then( () => {
        console.log('thanks for sharing!');
      })
      .catch(conslole.error);

    } else {
      overlay.classList.add('show-share');
      shareModal.classList.add('show-share');

    }
    overlay.addEventListener('click', () => {
      overlay.classList.remove('show-share');
      shareModal.classList.remove('show-share');
    })

  })

  navigator.serviceWorker.register('./sw.js', {'scope': './sw.js'});
  
});

  
  
  
  
  
  
  
  