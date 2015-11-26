using System.Runtime.Serialization;

namespace RebrewsViewModels.ViewModels.Base
{
    [DataContract]
    public class BaseHopViewModel
    {
        [DataMember]
        public int Id { get; set; }

        [DataMember]
        public string Name { get; set; }

        [DataMember]
        public decimal AlphaAcid { get; set; }
    }
}