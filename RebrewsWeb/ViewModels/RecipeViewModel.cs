﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;
using RebrewsData.Models;

namespace RebrewsWeb.ViewModels
{
    [DataContract]
    public class RecipeViewModel
    {
        [DataMember]
        public int Id { get; set; }

        [DataMember]
        public string Name { get; set; }



        [DataMember]
        public ICollection<RecipeFermentableViewModel> Fermentables { get; set; }

        [DataMember]
        public ICollection<RecipeHopViewModel> Hops { get; set; }

        [DataMember]
        public ICollection<RecipeYeastViewModel> Yeasts { get; set; }


    }
}