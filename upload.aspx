<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="upload.aspx.cs" Inherits="YourNamespace.upload" %>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>File Upload</title>
</head>
<body>
    <form id="form1" runat="server" enctype="multipart/form-data">
        <div>
            <input type="file" id="fileUpload" runat="server" />
            <asp:Button id="uploadButton" runat="server" Text="Upload" OnClick="UploadFile" />
        </div>
    </form>
</body>
</html>
