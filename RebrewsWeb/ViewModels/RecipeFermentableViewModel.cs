using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace RebrewsWeb.ViewModels
{
    [DataContract]
    public class RecipeFermentableViewModel
    {
        [DataMember]
        public int Id { get; set; }

        [DataMember]
        public decimal Amount { get; set; }

        [DataMember]
        public int? BaseFermentable_Id { get; set; }

        [DataMember]
        public BaseFermentableViewModel BaseFermentable { get; set; }

        [DataMember]
        public bool ContributesSugars { get; set; }

    }
}