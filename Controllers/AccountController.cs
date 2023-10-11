using Microsoft.AspNetCore.Mvc;
using login.Models;
namespace login.Controllers;

public class AccountController : Controller
{
    public IActionResult Login()
    {
        ViewBag.Error = ViewData["error"];
        return View();
    }


    [HttpPost] public IActionResult Check(Usuario user){
    List<Usuario> uss = BD.ObtenerUsuarios();
    
    ViewData["error"] = "Error. Tanto el usuario como el email deben ser únicos";
        if(uss.Any(x => x.Username == user.Username) || uss.Any(x => x.Email == user.Email))
           { return RedirectToAction("Login"); Console.WriteLine("SSSSSSSSSSSS");}
        
        BD.InsertarUsuario(user);
        return View("Bienvenido");

    }


}
