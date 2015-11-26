﻿using System.Runtime.Serialization;
using RebrewsViewModels.ViewModels.Base;

namespace RebrewsViewModels.ViewModels.Recipe
{
    [DataContract]
    public class RecipeYeastViewModel
    {

        [DataMember]
        public int Id { get; set; }

        [DataMember]
        public decimal Amount { get; set; }

        [DataMember]
        public int? BaseYeast_Id { get; set; }

        [DataMember]
        public BaseYeastViewModel BaseYeast { get; set; }
    }
}