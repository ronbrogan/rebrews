declare module Rebrews.ViewModels {
    export class ApiUserViewModel {
        id: string;
        email: string;
        phoneNumber: string;
        discriminator: string;
        userName: string;
        firstName: string;
        lastName: string;
        role: Enums.UserRole;
    }
}