module Rebrews { 
    export interface ApiUserViewModel { 
        id: string;
        email: string;
        phoneNumber: string;
        discriminator: string;
        userName: string;
        firstName: string;
        lastName: string;
        role: UserRole;
    }
}