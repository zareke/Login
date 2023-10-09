using System.Data.SqlClient;
using Dapper;
namespace login.Models;


public class BD
{
    private static string _connectionString = @"Server=localhost;DataBase=Login;Trusted_Connection=True;";

    public static List<Usuario> ObtenerUsuarios()
    {
        List<Usuario> uss;
        using (SqlConnection db = new SqlConnection(_connectionString))
        {

            string sql = "exec ObtenerUsuarios";
            uss = db.Query<Usuario>(sql).ToList();
        }
        return uss;
    }

}


