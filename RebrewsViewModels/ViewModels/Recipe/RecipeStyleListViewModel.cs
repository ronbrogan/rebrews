﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace RebrewsViewModels.ViewModels.Recipe
{
    [DataContract]
    public class RecipeStyleListViewModel
    {
        [DataMember]
        public string Name { get; set; }

        [DataMember]
        public int Id { get; set; }
    }
}