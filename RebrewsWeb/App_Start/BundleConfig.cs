using System.Web;
using System.Web.Optimization;

namespace RebrewsWeb
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            var libBundle = new ScriptBundle("~/bundles/lib");
            libBundle.Include(
                "~/Scripts/libs/jquery/jquery-1.10.2.js",
                "~/Scripts/libs/angular/angular.js",
                "~/Scripts/libs/angular/angular-ui-router.js",
                "~/Scripts/libs/angular/angular-toastr.js",
                "~/Scripts/libs/angular/angular-toastr.tpls.min.js",
                "~/Scripts/libs/angular/angular-animate.min.js",
                "~/Scripts/libs/angular/angular-aria.js",
                "~/Scripts/libs/lodash.js",
                "~/Scripts/libs/d3.js"
            );

            var cssBundle = new StyleBundle("~/Content/css");
            cssBundle.Include(
                "~/Content/bootstrap/bootstrap.css",
                "~/Content/Site.css",
                "~/Content/homebrews-icons.css",
                "~/Content/angular-toastr.css",
                "~/Content/targetted-slider.css"
            );

            var appBundle = new ScriptBundle("~/bundles/app");
            appBundle.Include(
                "~/Scripts/compiled/app/rebrews.js"
            );

            appBundle.IncludeDirectory("~/app/_services", "*.js", true);
            appBundle.IncludeDirectory("~/Scripts/compiled/app/_services", "*.js", true);
            appBundle.IncludeDirectory("~/app/_filters", "*.js", true);
            appBundle.IncludeDirectory("~/Scripts/compiled/app/_filters", "*.js", true);
            appBundle.IncludeDirectory("~/app/_directives", "*.js", true);
            appBundle.IncludeDirectory("~/Scripts/compiled/app/_directives", "*.js", true);
            appBundle.IncludeDirectory("~/app/_components", "*.js", true);
            appBundle.IncludeDirectory("~/Scripts/compiled/app/_components", "*.js", true);
            appBundle.IncludeDirectory("~/app/recipe", "*.js", true);
            appBundle.IncludeDirectory("~/Scripts/compiled/app/recipe", "*.js", true);
            appBundle.IncludeDirectory("~/app/account", "*.js", true);
            appBundle.IncludeDirectory("~/Scripts/compiled/app/account", "*.js", true);
            appBundle.IncludeDirectory("~/app/discover", "*.js", true);
            appBundle.IncludeDirectory("~/Scripts/compiled/app/discover", "*.js", true);

            bundles.Add(libBundle);
            bundles.Add(cssBundle);
            bundles.Add(appBundle);
        }
    }
}
