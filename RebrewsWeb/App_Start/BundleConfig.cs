using System.Web;
using System.Web.Optimization;

namespace RebrewsWeb
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap/bootstrap.css",
                      "~/Content/Site.css",
                      "~/Content/homebrews-icons.css",
                      "~/Content/angular-toastr.css"));

            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                     "~/Scripts/angular.js",
                     "~/Scripts/angular-animate.min.js",
                     "~/Scripts/angular-aria.min.js",
                     "~/Scripts/d3.js",
                     "~/Scripts/angular-ui-router.js",
                     "~/Scripts/ct-ui-router-extras.js",
                     "~/Scripts/angular-toastr.min.js",
                     "~/Scripts/angular-toastr.tpls.min.js",
                     "~/app/app.js",
                     "~/Scripts/lodash.min.js",
                     "~/app/_services/ingredientService.js"));

            bundles.Add(new ScriptBundle("~/bundles/recipe").Include(
                    "~/app/recipe/recipeController.js",
                    "~/app/_directives/ingredient-table/ingredient-table.js",
                    "~/app/recipe/recipe.color.display/recipe.color.display.js"
                    ));

            bundles.Add(new ScriptBundle("~/bundles/directives").Include(
                    "~/app/_directives/material-table/material-table.js",
                    "~/app/_directives/cell-editor/cell-editor.js",
                    "~/app/_directives/realtime-chart/realtime-chart.js",
                    "~/app/_services/rttService.js",
                    "~/app/_filters/descender-filter.js",
                    "~/app/_directives/loading-bar/loading-bar.js",
                    "~/app/_directives/loading-bar/loading.bar.scoped.js"
                    ));
        }
    }
}
