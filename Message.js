module.exports = function (coursename, desc){
  this.coursename = coursename
  this.desc = desc;
  this.detial = function(){
    return this.coursename + " " + this.desc;
  };
};
