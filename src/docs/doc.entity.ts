import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Doc {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  title: string;
  
  @Column()
  content: string;
  
  @Column()
  creator: string;
  
  @Column()
  createTime: string;
  
}
