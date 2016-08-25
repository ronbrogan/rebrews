module Rebrews { 
    export interface AddExternalLoginViewModel { 
        externalAccessToken: string;
    }
    export interface ChangePasswordViewModel { 
        oldPassword: string;
        newPassword: string;
        confirmPassword: string;
    }
    export interface RegisterViewModel { 
        email: string;
        password: string;
        confirmPassword: string;
    }
    export interface LoginViewModel { 
        email: string;
        password: string;
    }
    export interface RegisterExternalViewModel { 
        email: string;
    }
    export interface RemoveLoginViewModel { 
        loginProvider: string;
        providerKey: string;
    }
    export interface SetPasswordViewModel { 
        newPassword: string;
        confirmPassword: string;
    }
    export interface ExternalLoginViewModel { 
        name: string;
        url: string;
        state: string;
    }
    export interface ManageInfoViewModel { 
        localLoginProvider: string;
        email: string;
        logins: UserLoginInfoViewModel[];
        externalLoginProviders: ExternalLoginViewModel[];
    }
    export interface UserInfoViewModel { 
        email: string;
        hasRegistered: boolean;
        loginProvider: string;
    }
    export interface UserLoginInfoViewModel { 
        loginProvider: string;
        providerKey: string;
    }
}