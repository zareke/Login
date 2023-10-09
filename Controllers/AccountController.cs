using Microsoft.AspNetCore.Mvc;
using login.Models;
namespace login.Controllers;

public class AccountController : Controller
{
    /*[HttpPost] */public IActionResult Login(/*List<Usuario> user*/)
    {
        
        ViewBag.Usuarios = BD.ObtenerUsuarios();

        //Console.WriteLine(user[0].Username);

        return View();
    }


}
