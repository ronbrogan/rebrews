using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Web;

namespace RebrewsData.Models.Recipe
{
    public class RecipeProfile
    {
        public double OriginalGravity { get; set; }

        public double FinalGravity { get; set; }

        public double AlcoholByVolume { get; set; }

        public double InternationalBitteringUnits { get; set; }

        public double ColorSRM { get; set; }

        public double ColorEBC
        {
            get { return 1.97*ColorSRM; }
        }

        public Color ColorRGB { get; set; }
    }
}