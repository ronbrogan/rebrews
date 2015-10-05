using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RebrewsData.Enums
{
    [Flags]
    public enum FermentablePhType
    {
        None = 0,
        Base = 1,
        Wheat = 2,
        Crystal = 4,
        Roasted = 8
    }
}