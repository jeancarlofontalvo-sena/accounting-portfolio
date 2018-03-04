// Accounting Generator - It's been coded with ♥ by Jeancarlo Fontalvo

var app          = SpreadsheetApp.getActiveSpreadsheet();
var _            = getLodash();
var _sheetConsts = sheetConsts();


function getDebits(code) {}


function getRecords(number) {
  // - - - - Obtengo la hoja de las transacciones - - - - //
  var info      = app.getSheetByName( _sheetConsts.RECORDS );
  var range     = info.getRange( _sheetConsts.RANGES.RECORDS );
  
  // - - - - Obtengo los valores - -  - - - - - - - - - - //
  var rawValues     = range.getValues();
  var validRecords  = [];
  var accounts      = [];
  
  // - - - - Recorro los valores y los agrupo - - - - //
  for(var i = 0; i < rawValues.length; i++) {
    var row = rawValues[ i ];
    
    if( typeof row[ _sheetConsts.INDEXES.NUMBER ] === "number" ) {
      
      var record = {
        number : row[ _sheetConsts.INDEXES.NUMBER ],
        counts : []
      }
            
      do {        
        record.counts.push( rawValues[ i ] );
        i++;
      }
      while( rawValues[ i ][ _sheetConsts.INDEXES.NAME ].toLowerCase() != "sumas iguales" )
      
      validRecords.push( record );
      
    }
  }
  
  //getPartials()
  
  Logger.log( JSON.stringify( validRecords.slice(0, 5) ) );
  
  
  // - - - - - - - - - - - - - - - - - - - - //
  
  /*
  // - - - Sorting - - - //
  values.sort();
  
  values = _.uniq(values);
  
  _.each(values, function(value){ Logger.log( value ); });
  */
  
  return validRecords[ (number || 1) - 1].counts;
}




