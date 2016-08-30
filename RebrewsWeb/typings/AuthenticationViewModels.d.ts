declare module Rebrews.ViewModels {
    export class AddExternalLoginViewModel {
        externalAccessToken: string;
    }

    export class ChangePasswordViewModel {
        oldPassword: string;
        newPassword: string;
        confirmPassword: string;
    }

    export class RegisterViewModel {
        email: string;
        password: string;
        confirmPassword: string;
    }

    export class LoginViewModel {
        email: string;
        password: string;
    }

    export class RegisterExternalViewModel {
        email: string;
    }

    export class RemoveLoginViewModel {
        loginProvider: string;
        providerKey: string;
    }

    export class SetPasswordViewModel {
        newPassword: string;
        confirmPassword: string;
    }

    export class ExternalLoginViewModel {
        name: string;
        url: string;
        state: string;
    }

    export class ManageInfoViewModel {
        localLoginProvider: string;
        email: string;
        logins: UserLoginInfoViewModel[];
        externalLoginProviders: ExternalLoginViewModel[];
    }

    export class UserInfoViewModel {
        email: string;
        hasRegistered: boolean;
        loginProvider: string;
    }

    export class UserLoginInfoViewModel {
        loginProvider: string;
        providerKey: string;
    }
}