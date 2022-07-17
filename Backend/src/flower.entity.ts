import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Flower {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  delivery_time: string;

  @Column()
  flower_type: string;

  @Column()
  imageURL: string;

  @Column()
  tags: string;

  @Column()
  price: number;
}
