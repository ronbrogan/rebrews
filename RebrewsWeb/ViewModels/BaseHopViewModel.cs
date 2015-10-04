using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace RebrewsWeb.ViewModels
{
    [DataContract]
    public class BaseHopViewModel
    {
        [DataMember]
        public decimal AlphaAcid { get; set; }
    }
}