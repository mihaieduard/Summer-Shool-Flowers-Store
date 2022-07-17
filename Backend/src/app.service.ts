import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Flower } from './flower.entity';
import { User } from './user.entity';

@Injectable()
export class AppService {

  constructor (
    @InjectRepository(Flower) private flowerRepo:Repository<Flower>,
    @InjectRepository(User) private UserRepo:Repository<User>
  ){}

  postHello() {
    return this.flowerRepo.save([
      {

        name: 'Coral roses',
        delivery_time: '30min',
        flower_type: 'roses',
        imageURL: 'assets/bouquet1.jpg',
        tags: 'roses',
        price: 50
    } as Flower,
    
    {

        name: 'White roses',
        delivery_time: '45min',
        flower_type: 'roses',
        imageURL: 'assets/bouquet2.jpeg',
        tags: 'roses',
        price: 35
    } as Flower,
    
    {

        name: 'Pink roses',
        delivery_time: '35min',
        flower_type: 'roses',
        imageURL: 'assets/bouquet3.jpg',
        tags: 'roses',
        price: 70
    } as Flower,
    
    {

        name: 'Pink tulips',
        delivery_time: '50min',
        flower_type: 'tulips',
        imageURL: 'assets/bouquet4.png',
        tags: 'tulips',
        price: 30
    } as Flower,
    
    {

        name: 'White and purple tulips',
        delivery_time: '55min',
        flower_type: 'tulips',
        imageURL: 'assets/bouquet5.jpg',
        tags: 'tulips',
        price: 75
    } as Flower,
    
    {

        name: 'Pale pink tulips',
        delivery_time: '30min',
        flower_type: 'tulips',
        imageURL: 'assets/bouquet6.jpeg',
        tags: 'tulips',
        price: 50
    } as Flower,
    
    {

        name: 'White lilies',
        delivery_time: '45min',
        flower_type: 'lilies',
        imageURL: 'assets/bouquet7.jpg',
        tags: 'lilies',
        price: 55
    } as Flower,
    
    {

        name: 'Pink lilies',
        delivery_time: '45min',
        flower_type: 'lilies',
        imageURL: 'assets/bouquet8.jpg',
        tags: 'lilies',
        price: 70
    } as Flower,
    
    {

        name: 'White orchid',
        delivery_time: '55min',
        flower_type: 'orchid',
        imageURL: 'assets/bouquet9.png',
        tags: 'orchid',
        price: 100
    } as Flower,
    
    
    {

    name: 'Pink orchid',
    delivery_time: '40min',
    flower_type: 'orchid',
    imageURL: 'assets/bouquet10.jpeg',
    tags: 'orchid',
    price: 90
    } as Flower,
    
    {

    name: 'Lavender',
    delivery_time: '55min',
    flower_type: 'lavender',
    imageURL: 'assets/bouquet11.jpeg',
    tags: 'lavender',
    price: 20
    } as Flower,
    
    {

    name: 'Peonies',
    delivery_time: '30min',
    flower_type: 'peonies',
    imageURL: 'assets/bouquet12.jpeg',
    tags: 'peonies',
    price: 80
    } as Flower 
    ]);
  }

  getHello()
  {
    return this.flowerRepo.find();
  }

  getFlowerById(id:number) {
   return this.flowerRepo.findOne({where: {id: id}})
  }

  // auth(user): string {
  //   return ''
  // }

  auth(userInfo) {
    console.log(userInfo);
    return this.UserRepo.find();
  }
  createUser({email, password}) {

  }


}
