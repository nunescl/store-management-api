import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductPriceEntity } from './product-price.entity';
import { ProductVariationEntity } from './product-variation.entity';

@Entity()
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @OneToMany(
    () => ProductVariationEntity,
    (variation) => variation.product.id,
    {},
  )
  variations: ProductVariationEntity[];

  @OneToOne(() => ProductPriceEntity, (price) => price.product.id)
  prices: ProductPriceEntity[];
}
