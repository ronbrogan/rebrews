using System.Runtime.Serialization;

namespace RebrewsViewModels.ViewModels.Base
{
    [DataContract]
    public class BaseFermentableViewModel
    {
        [DataMember]
        public int Id { get; set; }

        [DataMember]
        public string Name { get; set; }

        [DataMember]
        public int PPG { get; set; }

        [DataMember]
        public decimal DegreesLovibond { get; set; }
    }
}