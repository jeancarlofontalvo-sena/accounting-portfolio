/**
@author: Jeancarlo Fontalvo
@description: Account helpers and classes for data reporting for this accounting app ♥
*/
var accountModule = {};

(function(_){
    
  accountModule.Nature = {
    Debit: 1,
    Credit: -1
  }
  
  /**
  @class Account
  */
  accountModule.Account = function(code, name, nature){
    var self  = this;
    
    if( typeof code === "undefined" || typeof name === "undefined" ) 
      throw "Must specify the code and name for the account";
    
    self.code    = code;
    self.name    = name;
    self.nature  = nature || accountModule.Nature.Debit;
    
    var debits  = [];
    var credits = []; 
    
    self.addDebit = function(reference, value) {
      debits.push( { reference : value  } );
    }
    
    self.addCredit = function(reference, value) {
      credits.push( { reference : value  } );
    }
    
    self.getDebit = function(reference) {
      return _.find(debits, { "reference": reference });
    }
    
    self.getCredit = function(reference) {
      return _.find(credits, { "reference": reference });
    }
    
    self.getResidue = function() {
      var residue = _.sumBy( self.debits, "reference" ) - _.sumBy( self.credits, "reference" );
      
      return residue * Nature.Debit;
    }
  }
  
})(getLodash())
