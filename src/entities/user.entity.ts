import { UserRoleEnum } from 'src/shared/user-role.enum';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserAdressEntity } from './user-adress.entity';
import { UserContactEntity } from './user-contact.entity';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  role: UserRoleEnum;

  @Column()
  store_id?: string;

  @OneToMany(() => UserContactEntity, (contact) => contact.user_id)
  contacts: UserContactEntity[];

  @OneToMany(() => UserAdressEntity, (adress) => adress.user_id)
  adress: UserAdressEntity[];
}
