import { UserRoleEnum } from 'src/user/entities/user-role.enum';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserAddressEntity } from './user-address.entity';
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

  @Column({ nullable: true })
  store_id?: string;

  @OneToMany(() => UserContactEntity, (contact) => contact.user.id, {})
  contacts: UserContactEntity[];

  @OneToMany(() => UserAddressEntity, (address) => address.user.id, {})
  address: UserAddressEntity[];
}
