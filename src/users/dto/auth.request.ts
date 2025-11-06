import { Role } from '../enums/role.enum';

export interface AuthRequest {
  sub: string;
  name: string;
  roles: Role[];
}
