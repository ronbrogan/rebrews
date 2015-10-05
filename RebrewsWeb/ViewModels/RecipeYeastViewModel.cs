using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace RebrewsWeb.ViewModels
{
    [DataContract]
    public class RecipeYeastViewModel
    {

        [DataMember]
        public int Id { get; set; }

        [DataMember]
        public decimal Amount { get; set; }

        [DataMember]
        public int? BaseYeast_Id { get; set; }

        [DataMember]
        public BaseYeastViewModel BaseYeast { get; set; }
    }
}