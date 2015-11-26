namespace RebrewsData.Models.Base
{
    public class BaseYeast : BaseIngredient
    {
        public decimal Attenuation { get; set; }

        public string Type { get; set; }
    }
}