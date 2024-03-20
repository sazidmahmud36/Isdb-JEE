import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }


  product: any=[
    {
      id: 101,
      name: 'mouse',
      price: 200,
      stock: 12,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/3-Tasten-Maus_Microsoft.jpg/640px-3-Tasten-Maus_Microsoft.jpg'
    },
    {
      id: 102,
      name: 'keyboard',
      price: 300,
      stock: 12,
      image: 'https://vibegaming.com.bd/wp-content/uploads/2022/02/item_Tecware-Phantom-Mechanical-RGB-Keyboard-87-Key-BlueBrownRed-Switch-pirce-in-bd-__1627366697.jpeg'
    },
    {
      id: 103,
      name: 'speaker',
      price: 400,
      stock: 12,
      image: 'https://www.ryans.com/storage/products/main/havit-sf156-multi-function-usb-black-11675163450.webp'
    },
    {
      id: 104,
      name: 'monitor',
      price: 250,
      stock: 12,
      image: 'https://vibegaming.com.bd/wp-content/uploads/2021/10/redmi-01-500x500-1.jpg'
    },
    {
      id: 105,
      name: 'earphone',
      price: 340,
      stock: 32,
      image: 'https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/Geeoo_X12_Super_Bass_Earphone-Geeoo-bfd44-307261.jpg'
    },
    {
      id: 106,
      name: 'headset',
      price: 200,
      stock: 12,
      image: 'https://static-01.daraz.pk/p/f2fe5f223bd2f545d4138aeebc4abef5.jpg'
    },
    {
      id: 107,
      name: 'joystick',
      price: 500,
      stock: 12,
      image: 'https://m.media-amazon.com/images/I/51VOEdfTElL._AC_SL1000_.jpg'
    },
    {
      id: 108,
      name: 'Flight',
      price: 290,
      stock: 44,
      image: 'https://m.media-amazon.com/images/I/61lXf75z8KL._SL1500_.jpg'
    },
    {
      id: 109,
      name: 'ram',
      price: 350,
      stock: 82,
      image: 'https://i.ebayimg.com/images/g/qm8AAOSwX1Vggpg1/s-l1200.webp'
    },

    {
      id: 110,
      name: 'processor',
      price: 900,
      stock: 22,
      image: 'https://5.imimg.com/data5/OG/XW/MY-3306533/intel-i7-processor.jpg'
    },

    {
      id: 111,
      name: 'graphics card',
      price: 1200,
      stock: 12,
      image: 'https://www.asus.com/media/Odin/Websites/global/ProductLine/20201028111930.png'
    },

    {
      id: 112,
      name: 'Console',
      price: 1000,
      stock: 15,
      image: 'https://www.startech.com.bd/image/cache/catalog/gaming-console/playstation/playstation-5-analog-console-slim-edition/playstation-5-analog-console-slim-edition-01-228x228.webp'
    },
  ]

  getdata(){
    return this.product;
  }
}
