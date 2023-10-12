using System.Data.SqlClient;
using Dapper;
namespace login.Models;


public class BD
{
    private static string _connectionString = @"Server=localhost;DataBase=Login;Trusted_Connection=True;";

    public static List<Usuario> ObtenerUsuarios()//select * from Usuario
    {
        List<Usuario> uss;
        using (SqlConnection db = new SqlConnection(_connectionString))
        {

            string sql = "exec ObtenerUsuarios";
            uss = db.Query<Usuario>(sql).ToList();
        }
        return uss;
    }

    public static void InsertarUsuario(Usuario user)//Usuario(username,contraseña,email,fecha_nacimiento,numero_telefono) values (@user,@pass,@email,@fecha,@tel)
    {
        string sql = "exec InsertarUsuario @u,@p,@m,@f,@t";
        using(SqlConnection db = new SqlConnection(_connectionString)){
            db.Execute(sql, new {u = user.Username, p = user.Contraseña, m = user.Email, f = user.FechaNacimiento.ToString("yyyy-MM-ddTHH:mm:ss.fff"), t = user.NumeroTelefono});
            //yyyy-MM-ddTHH:mm:ss.fff --> convertis la fecha a año-mes-dia-hora-etc
        }
    }

}


