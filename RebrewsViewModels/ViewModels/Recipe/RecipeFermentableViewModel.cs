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
        public int? BaseFermentable_Id { get; set; }

        [DataMember]
        public BaseFermentableViewModel BaseFermentable { get; set; }

        [DataMember]
        public bool ContributesSugars { get; set; }

    }
}