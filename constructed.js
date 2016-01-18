function Building () {
  this.burned = false;
}

Building.prototype.burn = function () {
  console.log('🔥');
  this.burned = true;
};

module.exports = new Building();
