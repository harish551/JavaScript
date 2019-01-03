let bank = (function(){

	return {
		balance : 0,
		showBalance : function(){
			console.log("Balance: "+ this.balance);
		},
		deposit: function(money){
			this.balance+=money;
			console.log(money + " deposited");
			console.log("Available balace: "+ this.balance);
	},
		withdraw : function(money){
			this.balance -= money;
			console.log(money + " withdrawed");
			console.log("Available balance: " + this.balance);
	}
};

})();

bank.showBalance();
bank.deposit(10000);
bank.withdraw(100);

bank.showBalance();


