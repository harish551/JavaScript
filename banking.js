let Bank = function (name) {
  return {
  	name : name,
    balance: 0,
    showBalance: function () {
      console.log('Balance: ' + this.balance)
    },
    deposit: function (money) {
      this.balance += money
      console.log(money + ' deposited')
      console.log('Available balace: ' + this.balance)
    },
    withdraw: function (money) {
      this.balance -= money
      console.log(money + ' withdrawed')
      console.log('Available balance: ' + this.balance)
    }
  }
}

let harishAc = new Bank("harish");

harishAc.showBalance()
harishAc.deposit(10000)
harishAc.withdraw(100)

console.log(harishAc)

let othersAc = new Bank("other person");
harishAc.deposit(10000)
harishAc.withdraw(100)
console.log(othersAc);

