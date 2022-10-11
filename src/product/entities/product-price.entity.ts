import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductEntity } from './product.entity';

@Entity()
export class ProductPriceEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  wholesale: number;

  @Column()
  retail: number;

  @OneToOne(() => ProductEntity, (product) => product.id)
  product: ProductEntity;
}
