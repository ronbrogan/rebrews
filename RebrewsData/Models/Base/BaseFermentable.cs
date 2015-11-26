using RebrewsData.Enums;

namespace RebrewsData.Models.Base
{
    public class BaseFermentable : BaseIngredient
    {
        public int PPG { get; set; }

        public decimal DegreesLovibond { get; set; }

        public FermentablePhType phType { get; set; }

        public decimal Attenuation { get; set; }

        public int DiastaticPower { get; set; }

        public bool RequiresMashing { get; set; }
    }
}