function getLodash() {
  if( typeof LodashGS !== "undefined" ) 
    return LodashGS.load();
  
  throw "No se ha cargado LodashGS";
}
