import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Provinces {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  slug: string;
}
