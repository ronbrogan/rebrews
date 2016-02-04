using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using RebrewsData.Models.Recipe;
using WebGrease.Css.Extensions;

namespace RebrewsWeb.Core
{
    public static class RecipeCalculationService
    {
        public static RecipeProfile CalculateRecipeProfile(Recipe recipe)
        {
            var profile = new RecipeProfile();

            var sugars = CalculateExtractedSugarPoints(recipe.Fermentables, 5, .75);

            profile.OriginalGravity = 1d + (sugars/1000);
            profile.FinalGravity = 1d + (sugars * (1 - .75)) / 1000;

            profile.AlcoholByVolume = CalculateAlcoholByVolume(profile.OriginalGravity, profile.FinalGravity);

            profile.InternationalBitteringUnits = CalculateBitteringUnits(recipe.Hops, 5, profile.OriginalGravity);
            profile.ColorSRM = CalculateSRM(recipe.Fermentables, 5);
            profile.ColorRGB = ColorLookup.GetFromSRM(profile.ColorSRM);

            return profile;
        }


        public static double CalculateExtractedSugarPoints(IEnumerable<RecipeFermentable> fermentables, double batchSize, double extractionEfficiency)
        {
            var totalPoints = 0d;


            fermentables.ForEach(f => totalPoints += (double)(f.Amount*f.Base.PPG));

            return (totalPoints/batchSize)*(extractionEfficiency);
        }

        public static double CalculateSRM(IEnumerable<RecipeFermentable> fermentables, double batchSize)
        {
            //Morey SRM approximation
            var maltColorUnits = fermentables.Sum(f => (double)(f.Base.DegreesLovibond*f.Amount)) / batchSize;

            return 1.4922 * Math.Pow(maltColorUnits, 0.6859);
        }

        public static double CalculateBitteringUnits(IEnumerable<RecipeHop> hops, double batchSize, double originalGravity)
        {
            //Setting broad parameters for IBU estimation (using Tinseth)

            var ibus = 0d;

            var bignessFactor = 1.65 * Math.Pow(0.000125, (originalGravity - 1));

            foreach (var hop in hops)
            {
                var boiltimeFactor = (1 - Math.Exp(-0.04 * hop.BoilTime)) / 4.15;
                var utilization = bignessFactor * boiltimeFactor;

                ibus += (double)(hop.Amount * hop.Base.AlphaAcid) * 75 * utilization / batchSize;
            }

            return ibus;
        }

        public static double CalculateAlcoholByVolume(double OriginalGravity, double FinalGravity)
        {
            const double abvConstant = 131.25;

            return (OriginalGravity - FinalGravity) * abvConstant;
        }
    }
}