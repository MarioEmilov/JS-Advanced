class OnlineShop {
    constructor(warehouseSpace) {
        this.warehouseSpace = warehouseSpace;
        this.products = [];
        this.sales = [];
    }

    loadingStore(product, quantity, spaceRequired) {
        if (this.warehouseSpace < spaceRequired) {
            throw new Error("Not enough space in the warehouse.");
        }
        this.warehouseSpace -= spaceRequired;
        this.products.push({ 
            product, 
            quantity 
        });

        return `The ${product} has been successfully delivered in the warehouse.`
    }

    quantityCheck(product, minimalQuantity) {
        let obj = this.products.find(p => p.product == product);
        if (obj == undefined) {
            throw new Error(`There is no ${product} in the warehouse.`)
        }
        if (minimalQuantity <= 0) {
            throw new Error(`The quantity cannot be zero or negative.`)
        }
        if (minimalQuantity <= obj.quantity) {
            return `You have enough from product ${product}.`
        }
        let difference = minimalQuantity - obj.quantity;
        obj[`quantity`] = minimalQuantity;

        return `You added ${difference} more from the ${product} products.`
    }

    sellProduct(product) {
        let obj = this.products.find(p => p.product == product);
        if (obj == undefined) {
            throw new Error(`There is no ${product} in the warehouse.`)
        }
        obj.quantity--;
        this.sales.push({ 
            product, 
            quantity: 1 
        });
        return `The ${product} has been successfully sold.`
    }
    
    revision() {
        if (this.sales.length == 0) {
            throw new Error("There are no sales today!")
        }
        let text = `You sold ${this.sales.length} products today!\n`
        text += "Products in the warehouse:\n"
        this.products.forEach((p) => {
            text += `${p.product}-${p.quantity} more left\n`
        })
        return text.trimEnd(`\n`)
    }
}