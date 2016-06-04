using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace RebrewsViewModels.ViewModels.Recipe
{
    [DataContract]
    public class RecipeStyleViewModel
    {
        [DataMember]
        public int Id { get; set; }

        [DataMember]
        public string StyleName { get; set; }

        [DataMember]
        public double LowOG { get; set; }

        [DataMember]
        public double HiOG { get; set; }

        [DataMember]
        public double LowFG { get; set; }

        [DataMember]
        public double HiFG { get; set; }

        [DataMember]
        public double LowABV { get; set; }

        [DataMember]
        public double HiABV { get; set; }

        [DataMember]
        public double LowIBU { get; set; }

        [DataMember]
        public double HiIBU { get; set; }

        [DataMember]
        public double LowSRM { get; set; }

        [DataMember]
        public double HiSRM { get; set; }

        [DataMember]
        public double VolumesCO2 { get; set; }
    }
}