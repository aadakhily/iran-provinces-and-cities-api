import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cities {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  slug: string;

  @Column()
  province_id: number;
}
