﻿using LiteDB;

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
                Tbl.Category = cortege.Category;
                Tbl.Name = cortege.Name;
                Tbl.Price = cortege.Price;
                Tbl.ID = i;
                string newCategory = "";
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
                col.Insert(Tbl);
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
    }
}
