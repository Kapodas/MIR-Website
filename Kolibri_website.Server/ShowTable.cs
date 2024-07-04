using LiteDB;
using System.Data;
using System.IO;
using System.Drawing.Imaging;
using System.Drawing;
namespace Kolibri_website.Server
{
    public class ShowTable
    {
        static byte[] ImgToByte(Image img)
        {
            using (MemoryStream ms = new MemoryStream())
            {
                img.Save(ms, ImageFormat.Png);
                return ms.ToArray();
            }
        }

        public static Product_Table[] CallTable()
        {
            using (var db = new LiteDatabase(@"Prod.db"))
            {
                var col = db.GetCollection<Product_Table>("Products");
                
                var res = col.FindAll();
                int i = 0;
                foreach (Product_Table c in res)
                {
                    i++;
                }
                Product_Table[] Tbl = new Product_Table[i];
                i = 0;
                foreach (Product_Table c in res)
                {
                    Tbl[i] = c;
                    string Paths = @$"image\{Tbl[i].Name}";
                    string[] pngFiles = Directory.GetFiles(Paths, "*.png");
                    int FCount = pngFiles.Length;
                    for(int j = 0; j < FCount; j++)
                    {
                        string imgPath = @$"{Paths}\img{j}.png";
                        
                        imgPath = Path.Combine(Directory.GetCurrentDirectory(), imgPath);
                        using (Bitmap bitmap = new Bitmap(imgPath))
                        {
                            Tbl[i].Images.Add(ImgToByte(bitmap));
                        }
                    }
                    
                        i++;
                }

                return Tbl;
            }
        }

        public static Product_Table[] CallAutProj()
        {
            using (var db = new LiteDatabase(@"Autors.db"))
            {
                var col = db.GetCollection<Product_Table>("AutorsProject");

                var res = col.FindAll();
                int i = 0;
                foreach (Product_Table c in res)
                {
                    i++;
                }
                Product_Table[] Tbl = new Product_Table[i];
                i = 0;
                foreach (Product_Table c in res)
                {
                    Tbl[i] = c;
                    string Paths = @$"image\{Tbl[i].Name}";
                    string[] pngFiles = Directory.GetFiles(Paths, "*.png");
                    int FCount = pngFiles.Length;
                    for (int j = 0; j < FCount; j++)
                    {
                        string imgPath = @$"{Paths}\img{j}.png";

                        imgPath = Path.Combine(Directory.GetCurrentDirectory(), imgPath);
                        using (Bitmap bitmap = new Bitmap(imgPath))
                        {
                            Tbl[i].Images.Add(ImgToByte(bitmap));
                        }
                    }

                    i++;
                }

                return Tbl;
            }
        }

        public static Materials_Table[] CallMaterials()
        {
            using (var db = new LiteDatabase(@"Mat.db"))
            {
                var col = db.GetCollection<Materials_Table>("Materials");

                var res = col.FindAll();
                int i = 0;
                foreach (Materials_Table c in res)
                {
                    i++;
                }
                Materials_Table[] Tbl = new Materials_Table[i];
                i = 0;
                foreach (Materials_Table c in res)
                {
                    Tbl[i] = c;
                    string Paths = @$"image\{Tbl[i].Name}";
                    string[] pngFiles = Directory.GetFiles(Paths, "*.png");
                    int FCount = pngFiles.Length;
                    for (int j = 0; j < FCount; j++)
                    {
                        string imgPath = @$"{Paths}\img{j}.png";

                        imgPath = Path.Combine(Directory.GetCurrentDirectory(), imgPath);
                        using (Bitmap bitmap = new Bitmap(imgPath))
                        {
                            Tbl[i].Images.Add(ImgToByte(bitmap));
                        }
                    }

                    i++;
                }
                return Tbl;
            }

        }
        public static FeedbackCortege[] CallFB()
        {
            using (var db = new LiteDatabase(@"FeedBack.db"))
            {
                var col = db.GetCollection<FeedbackCortege>("FeedBack");
                var res = col.FindAll();
                int i = 0;
                foreach (FeedbackCortege c in res)
                {
                    i++;
                }
                FeedbackCortege[] Tbl = new FeedbackCortege[i];
                i = 0;
                foreach (FeedbackCortege c in res)
                {
                    Tbl[i] = c;
                    i++;
                }
                return Tbl;
            }
        }
    }
}
