using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RebrewsWeb.Core
{
    public static class ExtensionMethods
    {
        public static string Capitalize(this string input)
        {
            if (string.IsNullOrWhiteSpace(input))
                return input;

            return input.First().ToString().ToUpper() + input.Substring(1);
        }

    }
}