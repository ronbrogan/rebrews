using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace RebrewsWeb.ViewModels
{
    [DataContract]
    public class RecipeHopViewModel
    {
        [DataMember]
        public int? BaseHop_Id { get; set; }

        [DataMember]
        public BaseHopViewModel BaseHop { get; set; }

        [DataMember]
        public int BoilTime { get; set; }

        [DataMember]
        public bool DryHop { get; set; }

        [DataMember]
        public bool IsLeaf { get; set; }


    }
}