using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ResourceSmart.Controllers
{
    public class Who_We_ServeController : Controller
    {
        // GET: Who_We_Serve
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult City_Arvada_Program()
        {
            return View();
        }

        public ActionResult CaseStudies()
        {
            return View();
        }

        public ActionResult Testimonials()
        {
            return View();
        }
    }
}