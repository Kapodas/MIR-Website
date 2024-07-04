namespace Kolibri_website.Server
{
    public class Product_Table
    {
        public int ID { get; set; }

        public string Name { get; set; }

        public List<byte[]> Images { get; set; }

        public Product_Table()
        {
            Images = new List<byte[]>();
        }

    }
}
