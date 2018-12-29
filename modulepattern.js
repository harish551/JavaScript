var basketModule = (function () {

    // privates
  
    var basket = []; 
  
    function getItemList() {
        let itemList = [];
        for(let value of basket){
            itemList.push(value.item);
        }
        return itemList
    }
  
    function doSomethingElsePrivate() {
      //...
    }
  
    // Return an object exposed to the public
    return { basket,
  
      // Add items to our basket
      addItem: function( values ) {
        basket.push(values);
      },
  
      // Get the count of items in the basket
      getItemCount: function () {
        return basket.length;
      },
  
      // Public alias to a  private function
      getItems: getItemList,
  
      // Get the total value of items in the basket
      getTotal: function () {
  
        var itemCount = this.getItemCount(),
            total = 0;
  
        while (itemCount--) {
          total += basket[itemCount].price;
        }
  
        return total;
      }
    };
  }());

console.log(basketModule.getItemCount());
basketModule.addItem({ item:"Apple", price:12.0 });
basketModule.addItem({item:"Mango", price:10.0 });
console.log(basketModule.getItemCount());
console.log(basketModule.getTotal());
console.log(basketModule.getItems());
