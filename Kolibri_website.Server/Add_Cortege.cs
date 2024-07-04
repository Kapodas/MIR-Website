using LiteDB;
using System.Drawing;
using System.IO;

namespace Kolibri_website.Server
{
    public class Add_Cortege
    {
        public static void NewCortege(Cortege cortege)
        {
            using (var db = new LiteDatabase(@"Prod.db"))
            {

                var col = db.GetCollection<Product_Table>("Products");
                Product_Table Tbl = new Product_Table();
                // var res = col.FindOne(Query.All());
                int i = 1;
                Tbl.Name = cortege.Name;
                Tbl.ID = i;
                var res = col.FindAll();

                foreach (Product_Table c in res)
                {
                    if (Tbl.ID != c.ID)
                    {
                        break;
                    }
                    i++;

                    Tbl.ID = i;
                }
                for (i = 0; i < cortege.Images.Count; i++)
                {
                    MemoryStream memoryStream = new MemoryStream(cortege.Images[i]);

                    // Создаем новый Bitmap из MemoryStream
                    Bitmap bitmap = new Bitmap(memoryStream);

                    // Не забываем закрыть MemoryStream
                    memoryStream.Close();
                    string imgPath = @$"image\{Tbl.Name}";
                    string newDirectoryPath = Path.Combine(Directory.GetCurrentDirectory(), imgPath);
                    if (!Directory.Exists(newDirectoryPath))
                    {
                        // Создаем новую папку
                        Directory.CreateDirectory(newDirectoryPath);
                        //Console.WriteLine($"Папка создана: {newDirectoryPath}");
                    }
                    imgPath = Path.Combine(newDirectoryPath, $"img{i}.png");
                    bitmap.Save(imgPath);
                    //Tbl.ID = i;
                }

                col.Insert(Tbl);
            }
        }
        public static void UpdCortege(Cortege cortege)
        {
            string imgPath = @$"image\{cortege.Name}";
            string newDirectoryPath = Path.Combine(Directory.GetCurrentDirectory(), imgPath);
            int fileCount = Directory.GetFiles(newDirectoryPath).Length;
            for (int i = 0; i < cortege.Images.Count; i++)
            {
                MemoryStream memoryStream = new MemoryStream(cortege.Images[i]);

                // Создаем новый Bitmap из MemoryStream
                Bitmap bitmap = new Bitmap(memoryStream);

                // Не забываем закрыть MemoryStream
                memoryStream.Close();
                if (!Directory.Exists(newDirectoryPath))
                {
                    // Создаем новую папку
                    Directory.CreateDirectory(newDirectoryPath);
                    //Console.WriteLine($"Папка создана: {newDirectoryPath}");
                }
                imgPath = Path.Combine(newDirectoryPath, $"img{i +fileCount}.png");
                bitmap.Save(imgPath);
                //Tbl.ID = i;
            }
        }
        public static void NewMaterials(Cortege cortege)
        {
            using (var db = new LiteDatabase(@"Mat.db"))
            {

                var col = db.GetCollection<Materials_Table>("Materials");
                Materials_Table Tbl = new Materials_Table();
                // var res = col.FindOne(Query.All());
                int i = 1;
                Tbl.Name = cortege.Name;
                Tbl.ID = i;
                var res = col.FindAll();

                foreach (Materials_Table c in res)
                {
                    if (Tbl.ID != c.ID)
                    {
                        break;
                    }
                    i++;

                    Tbl.ID = i;
                }
                for (i = 0; i < cortege.Images.Count; i++)
                {
                    MemoryStream memoryStream = new MemoryStream(cortege.Images[i]);

                    // Создаем новый Bitmap из MemoryStream
                    Bitmap bitmap = new Bitmap(memoryStream);

                    // Не забываем закрыть MemoryStream
                    memoryStream.Close();
                    string imgPath = @$"image\{Tbl.Name}";
                    string newDirectoryPath = Path.Combine(Directory.GetCurrentDirectory(), imgPath);
                    if (!Directory.Exists(newDirectoryPath))
                    {
                        // Создаем новую папку
                        Directory.CreateDirectory(newDirectoryPath);
                        //Console.WriteLine($"Папка создана: {newDirectoryPath}");
                    }
                    imgPath = Path.Combine(newDirectoryPath, $"img{i}.png");
                    bitmap.Save(imgPath);
                    //Tbl.ID = i;
                }

                col.Insert(Tbl);
            }
        }
        public static void UpdMaterials(Cortege cortege)
        {
            string imgPath = @$"image\{cortege.Name}";
            string newDirectoryPath = Path.Combine(Directory.GetCurrentDirectory(), imgPath);
            int fileCount = Directory.GetFiles(newDirectoryPath).Length;
            for (int i = 0; i < cortege.Images.Count; i++)
            {
                MemoryStream memoryStream = new MemoryStream(cortege.Images[i]);

                // Создаем новый Bitmap из MemoryStream
                Bitmap bitmap = new Bitmap(memoryStream);

                // Не забываем закрыть MemoryStream
                memoryStream.Close();
                if (!Directory.Exists(newDirectoryPath))
                {
                    // Создаем новую папку
                    Directory.CreateDirectory(newDirectoryPath);
                    //Console.WriteLine($"Папка создана: {newDirectoryPath}");
                }
                imgPath = Path.Combine(newDirectoryPath, $"img{i + fileCount}.png");
                bitmap.Save(imgPath);
                //Tbl.ID = i;
            }
        }

        public static void NewAutProj(Cortege cortege)
        {
            using (var db = new LiteDatabase(@"Autors.db"))
            {

                var col = db.GetCollection<Materials_Table>("AutorsProject");
                Materials_Table Tbl = new Materials_Table();
                // var res = col.FindOne(Query.All());
                int i = 1;
                Tbl.Name = cortege.Name;
                Tbl.ID = i;
                var res = col.FindAll();

                foreach (Materials_Table c in res)
                {
                    if (Tbl.ID != c.ID)
                    {
                        break;
                    }
                    i++;

                    Tbl.ID = i;
                }
                for (i = 0; i < cortege.Images.Count; i++)
                {
                    MemoryStream memoryStream = new MemoryStream(cortege.Images[i]);

                    // Создаем новый Bitmap из MemoryStream
                    Bitmap bitmap = new Bitmap(memoryStream);

                    // Не забываем закрыть MemoryStream
                    memoryStream.Close();
                    string imgPath = @$"image\{Tbl.Name}";
                    string newDirectoryPath = Path.Combine(Directory.GetCurrentDirectory(), imgPath);
                    if (!Directory.Exists(newDirectoryPath))
                    {
                        // Создаем новую папку
                        Directory.CreateDirectory(newDirectoryPath);
                        //Console.WriteLine($"Папка создана: {newDirectoryPath}");
                    }
                    imgPath = Path.Combine(newDirectoryPath, $"img{i}.png");
                    bitmap.Save(imgPath);
                    //Tbl.ID = i;
                }

                col.Insert(Tbl);
            }
        }
        public static void UpdAutProj(Cortege cortege)
        {
            string imgPath = @$"image\{cortege.Name}";
            string newDirectoryPath = Path.Combine(Directory.GetCurrentDirectory(), imgPath);
            int fileCount = Directory.GetFiles(newDirectoryPath).Length;
            for (int i = 0; i < cortege.Images.Count; i++)
            {
                MemoryStream memoryStream = new MemoryStream(cortege.Images[i]);

                // Создаем новый Bitmap из MemoryStream
                Bitmap bitmap = new Bitmap(memoryStream);

                // Не забываем закрыть MemoryStream
                memoryStream.Close();
                if (!Directory.Exists(newDirectoryPath))
                {
                    // Создаем новую папку
                    Directory.CreateDirectory(newDirectoryPath);
                    //Console.WriteLine($"Папка создана: {newDirectoryPath}");
                }
                imgPath = Path.Combine(newDirectoryPath, $"img{i + fileCount}.png");
                bitmap.Save(imgPath);
                //Tbl.ID = i;
            }
        }


        public static void NewQuestion(QuestionCortege question)
        {
            using (var db = new LiteDatabase(@"Question.db"))
            {

                var col = db.GetCollection<QuestionCortege>("Questions");
                QuestionCortege Tbl = new QuestionCortege();
                // var res = col.FindOne(Query.All());
                int i = 1;
                Tbl.Question=question.Question;
                Tbl.Phonumber = question.Phonumber;
                Tbl.Name = question.Name;
                Tbl.ID = i;
                var res = col.FindAll();

                foreach (QuestionCortege c in res)
                {
                    if (Tbl.ID != c.ID)
                    {
                        break;
                    }
                    i++;

                    Tbl.ID = i;
                }

                Tbl.ID = i;
                col.Insert(Tbl);
            }
        }
        public static void NewCustomer(CustomerCortege customer)
        {
            using (var db = new LiteDatabase(@"Customer.db"))
            {

                var col = db.GetCollection<CustomerCortege>("Customers");
                CustomerCortege Tbl = new CustomerCortege();
                // var res = col.FindOne(Query.All());
                int i = 1;
                Tbl.Name = customer.Name;
                Tbl.Phonumber = customer.Phonumber;
                Tbl.ID = i;
                var res = col.FindAll();

                foreach (CustomerCortege c in res)
                {
                    if (Tbl.ID != c.ID)
                    {
                        break;
                    }
                    i++;

                    Tbl.ID = i;
                }
                Tbl.ID = i;
                col.Insert(Tbl);
            }
        }
        public static void NewFeedBack(FeedbackCortege feedback)
        {
            using (var db = new LiteDatabase(@"FeedBack.db"))
            {

                var col = db.GetCollection<FeedbackCortege>("FeedBack");
                FeedbackCortege Tbl = new FeedbackCortege();
                // var res = col.FindOne(Query.All());
                int i = 1;
                Tbl.Name = feedback.Name;
                Tbl.Phonumber = feedback.Phonumber;
                Tbl.feedback = feedback.feedback;
                DateTime thisDay = DateTime.Today;
                Tbl.Date = thisDay.ToString("d");
                Tbl.ID = i;
                var res = col.FindAll();

                foreach (FeedbackCortege c in res)
                {
                    if (Tbl.ID != c.ID)
                    {
                        break;
                    }
                    i++;

                    Tbl.ID = i;
                }
                Tbl.ID = i;
                col.Insert(Tbl);
            }
        }
        public static void UpdateFB(List<FeedbackCortege> FB)
        {

            string FbPath = "Feedback.db";
            string newDirectoryPath = Path.Combine(Directory.GetCurrentDirectory(), FbPath);
            try
            {
                File.Delete(newDirectoryPath);
            }
            catch (Exception ex)
            {
            }
            using (var db = new LiteDatabase(@"FeedBack.db"))
            {
                foreach (FeedbackCortege feedback in FB)
                {
                    var col = db.GetCollection<FeedbackCortege>("FeedBack");
                    
                    FeedbackCortege Tbl = new FeedbackCortege();
                    // var res = col.FindOne(Query.All());
                    int i = 1;
                    Tbl.Name = feedback.Name;
                    Tbl.Phonumber = feedback.Phonumber;
                    Tbl.feedback = feedback.feedback;
                    Tbl.Date = feedback.Date;
                    Tbl.ID = i;
                    Tbl.Show = feedback.Show;
                    var res = col.FindAll();

                    foreach (FeedbackCortege c in res)
                    {
                        if (Tbl.ID != c.ID)
                        {
                            break;
                        }
                        i++;

                        Tbl.ID = i;
                    }
                    Tbl.ID = i;
                    col.Insert(Tbl);
                }
            }
        }
    }
}
