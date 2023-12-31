USE [master]
GO
/****** Object:  Database [Login]    Script Date: 15/10/2023 23:03:34 ******/
CREATE DATABASE [Login]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Login', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.SQLEXPRESS\MSSQL\DATA\Login.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'Login_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.SQLEXPRESS\MSSQL\DATA\Login_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [Login] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Login].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [Login] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [Login] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [Login] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [Login] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [Login] SET ARITHABORT OFF 
GO
ALTER DATABASE [Login] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [Login] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Login] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Login] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Login] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [Login] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [Login] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Login] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [Login] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Login] SET  DISABLE_BROKER 
GO
ALTER DATABASE [Login] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Login] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [Login] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [Login] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [Login] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Login] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [Login] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [Login] SET RECOVERY FULL 
GO
ALTER DATABASE [Login] SET  MULTI_USER 
GO
ALTER DATABASE [Login] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [Login] SET DB_CHAINING OFF 
GO
ALTER DATABASE [Login] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [Login] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [Login] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [Login] SET QUERY_STORE = OFF
GO
USE [Login]
GO
/****** Object:  Table [dbo].[Usuario]    Script Date: 15/10/2023 23:03:34 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Usuario](
	[username] [varchar](100) NOT NULL,
	[contraseña] [varchar](100) NOT NULL,
	[email] [varchar](400) NOT NULL,
	[fecha_nacimiento] [varchar](400) NOT NULL,
	[numero_telefono] [varchar](10) NOT NULL,
	[respuesta] [varchar](400) NOT NULL,
	[pregunta] [varchar](400) NOT NULL,
 CONSTRAINT [PK_Usuario_1] PRIMARY KEY CLUSTERED 
(
	[username] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[Usuario] ([username], [contraseña], [email], [fecha_nacimiento], [numero_telefono], [respuesta], [pregunta]) VALUES (N'caca', N'Ss1LDJbcEovcxF0Zikf4OkBEZUH3XChAL4g7/CFEBAB8DHmJvbRFBMJ6mGcuDFHR', N'k@gmail.com', N'1970-10-07', N'4545646514', N'ca', N'0')
INSERT [dbo].[Usuario] ([username], [contraseña], [email], [fecha_nacimiento], [numero_telefono], [respuesta], [pregunta]) VALUES (N'z', N'2dYhwq5O2Zw0Ql6NPdxthI0TXbZpdKljGu1tMo9JlK0=', N'z@g', N'1993-10-15', N'1544454545', N'ca', N'0')
INSERT [dbo].[Usuario] ([username], [contraseña], [email], [fecha_nacimiento], [numero_telefono], [respuesta], [pregunta]) VALUES (N'zzzzzzzz', N'2dYhwq5O2Zw0Ql6NPdxthI0TXbZpdKljGu1tMo9JlK0=', N'zzzzzzzz@g', N'1998-10-04', N'1545515115', N'F', N'0')
GO
/****** Object:  StoredProcedure [dbo].[InsertarUsuario]    Script Date: 15/10/2023 23:03:34 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE procedure [dbo].[InsertarUsuario]
@user varchar(100),
@pass varchar(100),
@email varchar(400),
@fecha varchar(400),
@tel varchar(10),
@pregunta varchar(400),
@respuesta varchar(400)
as
begin
insert into Usuario(username,contraseña,email,fecha_nacimiento,numero_telefono,pregunta,respuesta) values (@user,@pass,@email,@fecha,@tel,@pregunta,@respuesta)
end
GO
/****** Object:  StoredProcedure [dbo].[ObtenerUsuarios]    Script Date: 15/10/2023 23:03:34 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [dbo].[ObtenerUsuarios]
as
begin
select * from Usuario
end
GO
USE [master]
GO
ALTER DATABASE [Login] SET  READ_WRITE 
GO
