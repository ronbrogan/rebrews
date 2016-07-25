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
using Newtonsoft.Json;

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

        public static CookieViewModel  DeserializeCookie(string data)
        {
            return JsonConvert.DeserializeObject<CookieViewModel>(data);
        }

        public string GetSerialized()
        {
            return JsonConvert.SerializeObject(this);
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

        [DataMember]
        public int CookieVersion { get; set; }
        //private int CalcField { get; set;}


    }
}