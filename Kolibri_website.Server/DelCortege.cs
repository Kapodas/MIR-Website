using LiteDB;
using System.Xml.Linq;

namespace Kolibri_website.Server
{
    public class DelCortege
    {
        public static void Delete(string Name)
        {
            using (var db = new LiteDatabase(@"Prod.db"))
            {
                var col = db.GetCollection<Product_Table>("Products");
                var id = col.FindOne(Query.EQ("Name", Name));
                col.Delete(id.ID);
            }
            string imgPath = @$"image\{Name}";
            string DirPath = Path.Combine(Directory.GetCurrentDirectory(), imgPath);
            Directory.Delete(DirPath, true);
        }
        public static void DeleteMaters(string Name)
        {
            using (var db = new LiteDatabase(@"Mat.db"))
            {
                var col = db.GetCollection<Product_Table>("Materials");
                //var id = col.FindOne(Query.EQ("Name", Name));
                col.Delete(10);
            }
            string imgPath = @$"image\{Name}";
            string DirPath = Path.Combine(Directory.GetCurrentDirectory(), imgPath);
            Directory.Delete(DirPath, true);
        }
        public static void DeleteAutors(string Name)
        {
            using (var db = new LiteDatabase(@"Autors.db"))
            {
                var col = db.GetCollection<Product_Table>("AutorsProject");
                var id = col.FindOne(Query.EQ("Name", Name));
                col.Delete(id.ID);
            }
            string imgPath = @$"image\{Name}";
            string DirPath = Path.Combine(Directory.GetCurrentDirectory(), imgPath);
            Directory.Delete(DirPath, true);
        }
    }
}
