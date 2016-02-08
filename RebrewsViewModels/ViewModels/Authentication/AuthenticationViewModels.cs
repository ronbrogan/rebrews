using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace RebrewsViewModels.ViewModels.Authentication
{
    [DataContract]
    public class AddExternalLoginViewModel
    {
        [DataMember]
        [Required]
        [Display(Name = "External access token")]
        public string ExternalAccessToken { get; set; }
    }

    [DataContract]
    public class ChangePasswordViewModel
    {
        [DataMember]
        [Required]
        [DataType(DataType.Password)]
        [Display(Name = "Current password")]
        public string OldPassword { get; set; }

        [DataMember]
        [Required]
        [StringLength(100, ErrorMessage = "The {0} must be at least {2} characters long.", MinimumLength = 6)]
        [DataType(DataType.Password)]
        [Display(Name = "New password")]
        public string NewPassword { get; set; }

        [DataMember]
        [DataType(DataType.Password)]
        [Display(Name = "Confirm new password")]
        [Compare("NewPassword", ErrorMessage = "The new password and confirmation password do not match.")]
        public string ConfirmPassword { get; set; }
    }

    [DataContract]
    public class RegisterViewModel
    {
        [DataMember]
        [Required]
        [Display(Name = "Email")]
        public string Email { get; set; }

        [DataMember]
        [Required]
        [StringLength(100, ErrorMessage = "The {0} must be at least {2} characters long.", MinimumLength = 6)]
        [DataType(DataType.Password)]
        [Display(Name = "Password")]
        public string Password { get; set; }

        [DataMember]
        [DataType(DataType.Password)]
        [Display(Name = "Confirm password")]
        [Compare("Password", ErrorMessage = "The password and confirmation password do not match.")]
        public string ConfirmPassword { get; set; }
    }

    [DataContract]
    public class LoginViewModel
    {
        [DataMember]
        [Required]
        [Display(Name = "Email")]
        public string Email { get; set; }

        [DataMember]
        [Required]
        [StringLength(100, ErrorMessage = "The {0} must be at least {2} characters long.", MinimumLength = 6)]
        [DataType(DataType.Password)]
        [Display(Name = "Password")]
        public string Password { get; set; }
    }

    [DataContract]
    public class RegisterExternalViewModel
    {
        [DataMember]
        [Required]
        [Display(Name = "Email")]
        public string Email { get; set; }
    }

    [DataContract]
    public class RemoveLoginViewModel
    {
        [DataMember]
        [Required]
        [Display(Name = "Login provider")]
        public string LoginProvider { get; set; }

        [DataMember]
        [Required]
        [Display(Name = "Provider key")]
        public string ProviderKey { get; set; }
    }

    [DataContract]
    public class SetPasswordViewModel
    {
        [DataMember]
        [Required]
        [StringLength(100, ErrorMessage = "The {0} must be at least {2} characters long.", MinimumLength = 6)]
        [DataType(DataType.Password)]
        [Display(Name = "New password")]
        public string NewPassword { get; set; }

        [DataMember]
        [DataType(DataType.Password)]
        [Display(Name = "Confirm new password")]
        [Compare("NewPassword", ErrorMessage = "The new password and confirmation password do not match.")]
        public string ConfirmPassword { get; set; }
    }





    [DataContract]
    public class ExternalLoginViewModel
    {
        [DataMember]
        public string Name { get; set; }

        [DataMember]
        public string Url { get; set; }

        [DataMember]
        public string State { get; set; }
    }

    [DataContract]
    public class ManageInfoViewModel
    {
        [DataMember]
        public string LocalLoginProvider { get; set; }

        [DataMember]
        public string Email { get; set; }

        [DataMember]
        public IEnumerable<UserLoginInfoViewModel> Logins { get; set; }

        [DataMember]
        public IEnumerable<ExternalLoginViewModel> ExternalLoginProviders { get; set; }
    }

    [DataContract]
    public class UserInfoViewModel
    {
        [DataMember]
        public string Email { get; set; }

        [DataMember]
        public bool HasRegistered { get; set; }

        [DataMember]
        public string LoginProvider { get; set; }
    }

    [DataContract]
    public class UserLoginInfoViewModel
    {
        [DataMember]
        public string LoginProvider { get; set; }

        [DataMember]
        public string ProviderKey { get; set; }
    }
}