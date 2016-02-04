using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace RebrewsViewModels.ViewModels.Recipe
{
    [DataContract]
    public class RecipeProfileViewModel
    {
        [DataMember]
        public double OriginalGravity { get; set; }

        [DataMember]
        public double FinalGravity { get; set; }

        [DataMember]
        public double AlcoholByVolume { get; set; }

        [DataMember]
        public double InternationalBitteringUnits { get; set; }

        [DataMember]
        public double ColorSRM { get; set; }

        [DataMember]
        public double ColorEBC { get; set; }

        [DataMember]
        public Color ColorRGB { get; set; }
    }
}