using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(ResourceSmart.Startup))]
namespace ResourceSmart
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
