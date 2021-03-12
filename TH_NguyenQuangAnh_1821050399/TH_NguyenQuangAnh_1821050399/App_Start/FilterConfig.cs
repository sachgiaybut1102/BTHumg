using System.Web;
using System.Web.Mvc;

namespace TH_NguyenQuangAnh_1821050399
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
