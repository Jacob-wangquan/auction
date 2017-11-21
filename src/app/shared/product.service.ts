import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  private products:Product[] = [
  new Product(1,"第一个商品",1.99,3.5,"这是测试商品1，测试angular哈哈哈",["电子商品","硬件设备"]),
  new Product(2,"第二个商品",2.99,2.5,"这是测试商品2，测试angular哈哈哈",["电子商品"]),
  new Product(3,"第三个商品",3.99,1.5,"这是测试商品3，测试angular哈哈哈",["电子商品","硬件设备"]),
  new Product(4,"第四个商品",1.99,2.5,"这是测试商品4，测试angular哈哈哈",["电子商品"]),
  new Product(5,"第五个商品",9.99,4.5,"这是测试商品5，测试angular哈哈哈",["图书"]),
  new Product(6,"第六个商品",8.99,3.5,"这是测试商品6，测试angular哈哈哈",["电子商品","硬件设备"])
];
  private comments:Comment[] = [
    new Comment(1,1,"2017-02-02 22：22:22","张三",3,"东西哈哈"),
    new Comment(2,1,"2017-02-03 23：22:22","李四",2,"东西哈哈哈哈"),
    new Comment(3,1,"2017-02-04 21：22:22","王五",4,"东西哈"),
    new Comment(4,2,"2017-02-05 20：22:22","赵六",5,"东西哈哈哈哈哈")
  ];
  constructor() { }
  getAllCategories(): string[]{
    return ['电子商品','硬件设备','图书'];
  }

  getProducts() {
    return this.products;
  }

  getProduct(id:number) {
    return this.products.find((product)=> product.id == id);
  }

  getCommentsForProductId(id:number):Comment[]{
    return this.comments.filter((comment:Comment)=> comment.productId == id);
  }
}

export class Product{
  constructor(
    public id:number,
    public title:string,
    public price:number,
    public rating:number,
    public desc:string,
    public categories:Array<string>
  ){}
}

export class Comment {
  constructor(public id:number,
              public productId:number,
              public timestamp:string,
              public user:string,
              public rating:number,
              public content:string
  ){}
}
