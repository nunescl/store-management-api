import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductEntity } from './product.entity';

@Entity()
export class ProductVariationEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  description: string;

  @Column()
  size: string;

  @Column()
  quantity: number;

  @ManyToOne(() => ProductEntity, (product) => product.id)
  @JoinColumn()
  product: ProductEntity;
}
