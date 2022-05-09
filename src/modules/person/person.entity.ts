import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Commentary } from '../commentary/commentary.entity';
import { PersonProject } from '../person-project/person-project.entity';
import { PersonRole } from '../person-role/person-role.entity';
import { User } from '../user/user.entity';

@Entity()
export class Person {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  fullname: string;

  @Column({ nullable: false })
  code: string;

  @Column({ nullable: true })
  phone: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  @OneToMany(() => PersonProject, (personProject) => personProject.person)
  personProjects: PersonProject[];

  @OneToMany(() => Commentary, (commentary) => commentary.person)
  commentaries: Commentary[];

  @OneToMany(() => PersonRole, (personRole) => personRole.person)
  personRoles: PersonRole[];
}
