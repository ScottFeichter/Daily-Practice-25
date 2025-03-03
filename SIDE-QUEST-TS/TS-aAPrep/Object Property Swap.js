function swap(obj) {
  let ret = {};
  for(let key in obj){
    ret[obj[key]] = key;
  }
  console.log(ret);
  return ret;
}
