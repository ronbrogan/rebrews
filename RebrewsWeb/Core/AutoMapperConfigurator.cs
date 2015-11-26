using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using AutoMapper;
using RebrewsData.Models.Base;
using RebrewsData.Models.Recipe;
using RebrewsViewModels.ViewModels.Base;
using RebrewsViewModels.ViewModels.Recipe;

namespace RebrewsWeb.Core
{
    public static class AutoMapperConfigurator
    {
        public static void Configure()
        {
            Mapper.CreateMap<BaseFermentable, BaseFermentableViewModel>().ReverseMap();
            Mapper.CreateMap<BaseHop, BaseHopViewModel>().ReverseMap();
            Mapper.CreateMap<BaseYeast, BaseYeastViewModel>().ReverseMap();




            Mapper.CreateMap<RecipeFermentable, RecipeFermentableViewModel>().ReverseMap();
            Mapper.CreateMap<RecipeHop, RecipeHopViewModel>().ReverseMap();
            Mapper.CreateMap<RecipeYeast, RecipeYeastViewModel>().ReverseMap();

            Mapper.CreateMap<Recipe, RecipeViewModel>().ReverseMap();
        }




    }
}