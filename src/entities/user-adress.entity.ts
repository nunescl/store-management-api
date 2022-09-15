import { Column, Entity, ManyToOne } from 'typeorm';
import { UserEntity } from './user.entity';

@Entity()
export class UserAdressEntity {
  @Column()
  email: string;

  @Column()
  phone_number: string;

  @Column()
  isMain: boolean;

  @ManyToOne(() => UserEntity, (user) => user.id)
  user_id: string;
}
