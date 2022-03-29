import { BadRequestException, Injectable } from '@nestjs/common';

import { Role } from './role.entity';
import { RoleRepository } from './role.repository';

@Injectable()
export class RoleService {
  constructor(private roleRepository: RoleRepository) {}

  async create(role: Role): Promise<Role> {
    try {
      const newRole = new Role();
      newRole.name = role.name;

      const roleCreated = await this.roleRepository.save(newRole);
      return roleCreated;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async findOne(roleId: number): Promise<Role> {
    const roleDb = await this.roleRepository.findOne(roleId, {
      where: { active: true },
    });
    return roleDb;
  }
}
