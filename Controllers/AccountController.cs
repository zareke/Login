//SOLO QUEDAN DOS COSAS FUNCIONALES QUE NO ALTERAN EL ESTILO: NUMEROS CUENTAN COMO MAYUSCULA Y LA OTRA ES QUE DICE QUE EL USUARIO YA EXISTE Y EL EMAIL TAMBIEN AL MISMO TIEMPO. PERO NO ALTERA EMI EL ESTILO PODES EMPEZAR

using Microsoft.AspNetCore.Mvc;
using login.Models;
namespace login.Controllers;
public class AccountController : Controller
{
    public IActionResult Login()
    {
        return View();
    }
    public IActionResult Register()
    {
        return View();
    }
    public IActionResult Olvidado()
    {
        return View();
    }


    [HttpPost]
    public IActionResult Check(Usuario user)
    {
        user.Contraseña = EncryptionHelper.Encrypt(user.Contraseña);
        List<Usuario> uss = BD.ObtenerUsuarios();
        if (uss.Any(x => x.Username == user.Username) || uss.Any(x => x.Email == user.Email))
        { if(uss.Any(x => x.Username == user.Username)) TempData["userRepetido"] = "Ese usuario ya existe"; else TempData["userRepetido"] =""; if(uss.Any(x => x.Email == user.Email)) TempData["emailRepetido"] = "Ese email ya existe"; else TempData["emailRepetido"] =""; return RedirectToAction("Register"); }

        BD.InsertarUsuario(user);
        return Redirect(Url.Action("Bienvenido", "Account", user));

    }


    public IActionResult CheckLogin(string user, string pass)
    {
        List<Usuario> uss = BD.ObtenerUsuarios();

        if (user == null || pass == null)
        {
            TempData["login"] = "Error: La contraseña o el usuario/email son incorrectos";
            return RedirectToAction("Login");
        }

        Usuario usu;

        if (uss.Any(x => x.Username == user) && EncryptionHelper.Decrypt(uss.Find(x => x.Username == user).Contraseña) == pass)
        {
            usu = uss.Find(x => x.Username == user && EncryptionHelper.Decrypt(x.Contraseña) == pass);
            TempData["login"] = "";
            Console.WriteLine(uss[0].FechaNacimiento);
            return Redirect(Url.Action("Bienvenido", "Account", usu));
        }
        else if (uss.Any(x => x.Email == user) && EncryptionHelper.Decrypt(uss.Find(x => x.Email == user).Contraseña) == pass)
        {
            usu = uss.Find(x => x.Email == user && EncryptionHelper.Decrypt(x.Contraseña) == pass);
            TempData["login"] = "";
            return Redirect(Url.Action("Bienvenido", "Account", usu));
        }
        TempData["login"] = "Error: La contraseña o el usuario/email son incorrectos";
        return RedirectToAction("Login");

    }
    public IActionResult CheckOlvidado(string email, string preg, string resp)
    {
        List<Usuario> uss = BD.ObtenerUsuarios();


        TempData["olvidado"] = "Error: La respuesta o el email son incorrectos";
        TempData["contraseña"] = "";
        if (uss.Any(x => x.Email == email))
        {
            Usuario user = uss.Find(x => x.Email == email);
            if (user.Pregunta == preg && user.Respuesta == resp)
            {

                TempData["olvidado"] = "";
                TempData["contraseña"] = "Contraseña: " + EncryptionHelper.Decrypt(user.Contraseña);

            }
        }
        return RedirectToAction("Olvidado");

    }

    [HttpGet]
    public IActionResult Bienvenido(Usuario user)
    {
        ViewBag.Usuario = user;
        
        return View();
    }
}

