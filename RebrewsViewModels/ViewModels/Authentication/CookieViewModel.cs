using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.IO;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;
using RebrewsData.Enums;
using System.Reflection;
using System.Runtime.Serialization.Formatters.Binary;
using System.Security.Cryptography;
using System.Text;
using System.IO.Compression;

namespace RebrewsViewModels.ViewModels.Authentication
{
    [Serializable]
    [DataContract]
    public class CookieViewModel
    {
        public CookieViewModel()
        {
            var output = GetType().GetProperties().Aggregate(0, (current, prop) => current + prop.GetHashCode());

            CookieVersion = output;
        }

        public static CookieViewModel  DecompressCookieViewModel(string Base64Data)
        {
            var bytes = Convert.FromBase64String(Base64Data);
            return (CookieViewModel) new BinaryFormatter().Deserialize(new MemoryStream(bytes));
        }

        public string GetSerialized()
        {
            using (var input = new MemoryStream())
            {
                new BinaryFormatter().Serialize(input, this);
                return Convert.ToBase64String(input.ToArray());
            }
        }

        [DataMember]
        [Required]
        [MaxLength(128)]
        public string Id { get; set; }

        [DataMember]
        [Required]
        [MaxLength(256)]
        public string Email { get; set; }

        [DataMember]
        [Required]
        [MaxLength(256)]
        public string UserName { get; set; }

        [DataMember]
        [MaxLength(100)]
        public string FirstName { get; set; }

        [DataMember]
        public UserRole Role { get; set; }

        public int CookieVersion { get; set; }

    }
}