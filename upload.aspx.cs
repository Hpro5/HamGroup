using System;
using System.IO;
using System.Web.UI;

namespace YourNamespace
{
    public partial class upload : Page
    {
        protected void UploadFile(object sender, EventArgs e)
        {
            if (fileUpload.HasFile)
            {
                string filePath = Path.Combine(Server.MapPath("D:\Uploads"), fileUpload.FileName);
                fileUpload.SaveAs(filePath);
                Response.Write("File uploaded successfully!");
            }
            else
            {
                Response.Write("No file selected!");
            }
        }
    }
}
