function sheetConsts() {
  var _keys = [
    "NUMBER",
    "CODE",
    "NAME",
    "PARTIAL",
    "DEBIT",
    "CREDIT"
  ]
  
  var _indexes = {};
  
  for(var key in _keys) {
    _indexes[ _keys[ key ] ] = key;
  }
    
  return {
    T_ACCOUNT : "CUENTAS T",
    PUC : "PUC",
    RECORDS : "TALLER 3 - SERVICAR SA",
    RANGES: {
      CODES_ACCOUNT : "B:B",
      RECORDS: "A:F",
      DEBITS: "E:E",
      CREDITS: "F:F",
      PARTIALS: "D:D"
    },
    INDEXES : _indexes,
    DEFAULT_LEVEL : 6
  };
}
