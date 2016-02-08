using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RebrewsData.Enums
{
    [Flags]
    public enum UserRole
    {
        User=1,
        Admin=2
    }
}