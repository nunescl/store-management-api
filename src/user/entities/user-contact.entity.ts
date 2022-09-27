import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserContactEnum } from './user-contact.enum';
import { UserEntity } from './user.entity';

@Entity()
export class UserContactEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  contact_type: UserContactEnum;

  @Column()
  contact_field: string;

  @Column()
  is_main: boolean;

  @ManyToOne(() => UserEntity, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;
}
