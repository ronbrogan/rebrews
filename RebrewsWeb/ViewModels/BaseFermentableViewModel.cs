using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace RebrewsWeb.ViewModels
{
    [DataContract]
    public class BaseFermentableViewModel : BaseIngredientViewModel
    {
        [DataMember]
        public int PPG { get; set; }

        [DataMember]
        public decimal DegreesLovibond { get; set; }
    }
}