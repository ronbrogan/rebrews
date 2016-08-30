using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using RebrewsData;
using RebrewsData.Models.Recipe;
using RebrewsViewModels.ViewModels.Recipe;

namespace RebrewsWeb.Controllers
{
    public class StylesController : ApiController
    {
        private RebrewsDataContext db = new RebrewsDataContext();


        public ICollection<RecipeStyleListViewModel> GetList()
        {
            var styles = db.RecipeStyles.Select(s => new RecipeStyleListViewModel { Name = s.StyleName, Id = s.Id }).ToList();

            return styles;
        }
    }
}