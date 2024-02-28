document.addEventListener('DOMContentLoaded', function() {
    const itemImages = document.querySelectorAll('.item img');
  
    itemImages.forEach(function(itemImage) {
      itemImage.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.1)';
        this.style.transition = 'transform 0.3s';
      });
  
      itemImage.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
        this.style.transition = 'transform 0.3s';
      });
    });
  });