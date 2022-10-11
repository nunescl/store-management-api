import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TransactionLocationEnum } from './transaction-location.enum';

@Entity()
export class ProductTransactionEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  transaction_date: Date;

  @Column()
  old_location: TransactionLocationEnum;

  @Column()
  current_location: TransactionLocationEnum;

  @Column()
  store_id?: string;
}
