import { Column, Entity, ManyToOne } from 'typeorm';
import { UserEntity } from './user.entity';

@Entity()
export class UserContactEntity {
  @Column()
  province: string;

  @Column()
  city: string;

  @Column()
  neighborhood: string;

  @Column()
  street: string;

  @Column()
  build_number: string;

  @Column()
  isMain: boolean;

  @ManyToOne(() => UserEntity, (user) => user.id)
  user_id: string;
}
