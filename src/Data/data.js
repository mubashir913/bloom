class Product {
    static id = 1;
    constructor(name, price, discount, img) {
        this.id = Product.id;
        this.name = name;
        this.price = price;
        this.discount = discount;
        this.img = img;
        Product.id++;
    }
}

export const prods = [
    new Product("Mauris suscipit", 50, null, "https://pngimg.com/uploads/bouquet/bouquet_PNG25.png"),
    new Product("vel mollis augue", 20, null, "https://pngimg.com/uploads/bouquet/bouquet_PNG31.png"),
    new Product("Morbi nibh", 70, null, "https://pngimg.com/uploads/bouquet/bouquet_PNG63.png"),
    new Product("pellentesque", 35, 30, "https://pngimg.com/uploads/bouquet/bouquet_PNG54.png"),
    new Product("Nullam arcu", 75, null, "https://pngimg.com/uploads/bouquet/bouquet_PNG39.png"),
    new Product("luctus vitae", 30, null, "https://pngimg.com/uploads/bouquet/bouquet_PNG37.png"),
    new Product("lobortis nulla", 50, 20, "https://pngimg.com/uploads/bouquet/bouquet_PNG29.png"),
    new Product("Aenean nec", 45, null, "https://pngimg.com/uploads/bouquet/bouquet_PNG27.png"),
    new Product("volutpat vehicula", 75, 10, "https://pngimg.com/uploads/bouquet/bouquet_PNG13.png"),
    new Product("Donec suscipit", 60, null, "https://pngimg.com/uploads/bouquet/bouquet_PNG11.png"),
];