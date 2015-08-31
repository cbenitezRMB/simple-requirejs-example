define(['credits', 'products'], function(){
	return {
		purchaseProduct: function(){
			var credits = getCredits();
			if (credits > 0) {
				reserveProduct();
			}else{
				return false;
			}
		}
	}
});