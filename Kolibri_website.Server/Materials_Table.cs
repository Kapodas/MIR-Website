namespace Kolibri_website.Server
{
    public class Materials_Table
    {
        public int ID { get; set; }

        public string Name { get; set; }

        public List<byte[]> Images { get; set; }

        public Materials_Table()
        {
            Images = new List<byte[]>();
        }
    }
}
