using System.Runtime.Serialization;
using RebrewsViewModels.ViewModels.Base;

namespace RebrewsViewModels.ViewModels.Recipe
{
    [DataContract]
    public class RecipeFermentableViewModel
    {
        [DataMember]
        public int Id { get; set; }

        [DataMember]
        public decimal Amount { get; set; }

        [DataMember]
        public int? Base_Id { get; set; }

        [DataMember]
        public BaseFermentableViewModel Base { get; set; }

        [DataMember]
        public bool SteepOnly { get; set; }

    }
}