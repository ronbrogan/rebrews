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
                      "~/Content/Site.css"));

            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                     "~/Scripts/angular.js",
                     "~/Scripts/angular-ui-router.js",
                     "~/Scripts/ct-ui-router-extras.js",
                     "~/app/app.js"));

            bundles.Add(new ScriptBundle("~/bundles/directives").Include(
                    "~/app/_directives/material-table/material-table.js",
                    "~/app/_directives/dbl-edit/dbl-edit.js"
                    ));
        }
    }
}
