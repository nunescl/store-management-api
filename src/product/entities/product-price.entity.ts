import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductEntity } from './product.entity';

@Entity()
export class ProductPriceEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  wholesale?: number;

  @Column()
  retail?: number;

  @OneToOne(() => ProductEntity)
  @JoinColumn({ name: 'productId' })
  product: ProductEntity;
}
