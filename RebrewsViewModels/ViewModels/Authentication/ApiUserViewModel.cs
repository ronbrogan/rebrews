using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;
using RebrewsData.Enums;


namespace RebrewsViewModels.ViewModels.Authentication
{
    [DataContract]
    public class ApiUserViewModel
    {
        [DataMember]
        [Required]
        [MaxLength(128)]
        public string Id { get; set; }

        [DataMember]
        [Required]
        [MaxLength(256)]
        public string Email { get; set; }

        [DataMember]
        public string PhoneNumber { get; set; }

        [DataMember]
        [Required]
        [MaxLength(128)]
        public string Discriminator { get; set; }

        [DataMember]
        [Required]
        [MaxLength(256)]
        public string UserName { get; set; }


        [DataMember]
        [MaxLength(100)]
        public string FirstName { get; set; }

        [DataMember]
        [MaxLength(100)]
        public string LastName { get; set; }

        [DataMember]
        public UserRole Role { get; set; }
    }
}