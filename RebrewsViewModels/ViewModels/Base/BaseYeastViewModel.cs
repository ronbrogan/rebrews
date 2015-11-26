using System.Runtime.Serialization;

namespace RebrewsViewModels.ViewModels.Base
{
    [DataContract]
    public class BaseYeastViewModel
    {
        [DataMember]
        public int Id { get; set; }

        [DataMember]
        public string Name { get; set; }

        [DataMember]
        public decimal Attenuation { get; set; }

        [DataMember]
        public string Type { get; set; }
    }
}