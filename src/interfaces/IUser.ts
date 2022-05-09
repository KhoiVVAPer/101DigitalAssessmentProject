interface IMemberShip {
  membershipId: string;
  organisationId: string;
  roleName: string;
  token: string;
}

export interface IUser {
  userId: string;
  userName: string;
  firstName: string;
  lastName: string;
  memberships: IMemberShip[];
}
