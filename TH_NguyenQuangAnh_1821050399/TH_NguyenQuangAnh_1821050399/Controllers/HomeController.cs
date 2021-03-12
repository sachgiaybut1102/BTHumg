using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace TH_NguyenQuangAnh_1821050399.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult Bai1()
        {
            return View();
        }

        [HttpGet]
        public JsonResult Total(int? n)
        {
            n = n > 0 ? n : 0;
            double sum = 0;

            for (int i = 1; i <= n; i++)
            {
                sum += 1 / (i * 1.0);
            }

            return Json(new { data = sum }, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult GetListSNT(int? n)
        {
            List<int> numes = new List<int>();
           
            for(int i = 2; i < n; i++)
            {
                bool flag = true;
                for(int j = 2; j < Math.Sqrt(i); j++)
                {
                    if(i % j == 0)
                    {
                        flag = false;
                        break;
                    }
                }

                if(flag)
                {
                    numes.Add(i);
                }
            }

            return Json(new { data = numes }, JsonRequestBehavior.AllowGet);
        }
    }
}