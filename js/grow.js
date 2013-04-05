ntowner.onclick = (function() {
  while(this.hasChildNodes()) {
    this.removeChild(this.lastChild);
  }
});
